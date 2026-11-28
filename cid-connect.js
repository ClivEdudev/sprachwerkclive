/* c-ID connect: "Sign in with c-ID" for any Clive app.
   The app sends you to the c-ID hub on clivesystems, you tap Allow there, and you come back
   signed in. The app gets its own token, which can only read your card and save this app's data.
   Use:  CID.init({ app: 'sprachwerk', name: 'Sprachwerk' }).then(user => …)
         CID.signIn()  CID.signOut()  CID.load()  CID.save(data)  CID.user  CID.bar()           */
(function () {
  'use strict';
  var HUB = 'https://clivesystems.netlify.app';
  var API = 'https://clivedu.me/api';
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) { HUB = 'http://localhost:8765'; API = 'http://localhost:8787/api'; }
  var app = '', appName = '', KEY = '';
  function load(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function keep(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var CID = {
    user: null, token: '', hub: HUB,
    init: function (o) {
      app = o.app; appName = o.name || o.app; KEY = 'cid.' + app;
      var s = load(KEY); if (s && /^[a-f0-9]{48}$/.test(s.token || '')) { CID.token = s.token; CID.user = s.user || null; }
      var m = /[#&]cid_code=([a-f0-9]{32})/.exec(location.hash), p = Promise.resolve(CID.user);
      if (m) {
        history.replaceState(null, '', location.pathname + location.search);       /* the code never stays in the address bar */
        p = fetch(API + '/cid/exchange', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ app: app, code: m[1] }) })
          .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw j; return j; }); })
          .then(function (j) { CID.token = j.token; CID.user = j.user; keep(KEY, { token: j.token, user: j.user }); CID.fresh = true; return CID.user; })
          .catch(function (e) { CID.error = (e && e.error) || 'Sign-in failed. Try again.'; return CID.user; });
      } else if (CID.token) {
        p = CID.req('/cid').then(function (j) { CID.user = j.user; keep(KEY, { token: CID.token, user: j.user }); return CID.user; }, function () { return CID.user; });
      }
      return p.then(function (u) { CID.paintBar(); return u; });
    },
    signIn: function () { location.href = HUB + '/me.html?connect=' + encodeURIComponent(app) + '&redirect=' + encodeURIComponent(location.origin + location.pathname); },
    signOut: function () { if (CID.token) CID.req('/logout', { method: 'POST' }).catch(function () {}); CID.token = ''; CID.user = null; keep(KEY, null); CID.paintBar(); },
    req: function (path, o) {
      o = o || {};
      var h = { authorization: 'Bearer ' + CID.token }; if (o.body) h['content-type'] = 'application/json';
      return fetch(API + path, { method: o.method || 'GET', headers: h, body: o.body, keepalive: !!o.keepalive }).then(function (r) {
        if (r.status === 401) { CID.token = ''; CID.user = null; keep(KEY, null); CID.paintBar(); }
        return r.json().then(function (j) { if (!r.ok) throw Object.assign({ status: r.status }, j); return j; });
      });
    },
    load: function () { return CID.token ? CID.req('/cid/app?app=' + app).then(function (j) { return j; }) : Promise.resolve(null); },
    save: function (data) { if (!CID.token) return Promise.resolve(null); var b = JSON.stringify({ data: data }); if (b.length > 300000) return Promise.reject({ error: 'too large' }); return CID.req('/cid/app?app=' + app, { method: 'POST', body: b, keepalive: b.length < 60000 }); },
    avatar: function (u) { u = u || CID.user; return u && /^[gbn]\d\d$/.test(u.avatar || '') ? HUB + '/assets/img/avatars/' + u.avatar + '.webp?v=2' : ''; },
    number: function (u) { u = u || CID.user; return u && /^\d{12}$/.test(u.cid || '') ? u.cid.replace(/(\d{4})(?=\d)/g, '$1 ') : ''; },
    /* a small pill that leads back to the Clive orbit and shows who is signed in */
    bar: function (opt) {
      opt = opt || {};
      var el = document.getElementById('cid-bar');
      if (!el) {
        el = document.createElement('div'); el.id = 'cid-bar';
        var st = document.createElement('style');
        st.textContent = '#cid-bar{position:fixed;z-index:2147483000;' + (opt.position || 'left:12px;bottom:12px') + ';display:flex;align-items:center;gap:2px;padding:4px;border-radius:999px;background:rgba(10,10,32,.88);border:1px solid rgba(155,123,255,.45);box-shadow:0 8px 28px -10px rgba(80,60,255,.6);font:600 12px/1 system-ui,-apple-system,Segoe UI,sans-serif;color:#fff;backdrop-filter:blur(8px)}' +
          '#cid-bar a,#cid-bar button{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border-radius:999px;color:#fff;text-decoration:none;background:none;border:0;font:inherit;cursor:pointer}' +
          '#cid-bar a:hover,#cid-bar button:hover{background:rgba(255,255,255,.1)}#cid-bar .o{background:linear-gradient(120deg,#6c4ff0,#22cfc6)}#cid-bar img{width:20px;height:20px;border-radius:50%;object-fit:cover}#cid-bar .x{opacity:.6;padding:0 8px}' +
          '#cid-bar svg{width:14px;height:14px}@media print{#cid-bar{display:none}}' + (opt.mobile ? '@media(max-width:900px){#cid-bar{' + opt.mobile + '}}' : '');
        document.head.appendChild(st); document.body.appendChild(el);
        el.addEventListener('click', function (e) { var b = e.target.closest('[data-cid]'); if (!b) return; var a = b.getAttribute('data-cid'); if (a === 'in') CID.signIn(); if (a === 'hide') { el.style.display = 'none'; try { sessionStorage.setItem('cid.bar.hidden', '1'); } catch (x) {} } });
      }
      CID._bar = true; CID.paintBar();
      try { if (sessionStorage.getItem('cid.bar.hidden')) el.style.display = 'none'; } catch (x) {}
      return el;
    },
    paintBar: function () {
      var el = document.getElementById('cid-bar'); if (!el || !CID._bar) return;
      var star = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5l2.6 6.9 7.4.4-5.8 4.6 2 7.1L12 16.4l-6.2 4.1 2-7.1L2 8.8l7.4-.4z" fill="#f5c04a"/></svg>';
      var u = CID.user, av = CID.avatar(u);
      el.innerHTML = '<a href="' + HUB + '/" title="All Clive apps">' + star + 'Clive orbit</a>' +
        (u ? '<a class="o" href="' + HUB + '/me.html" title="Your c-ID card">' + (av ? '<img src="' + esc(av) + '" alt="">' : '') + 'c-ID ' + esc(CID.number(u)) + '</a>'
           : '<button class="o" data-cid="in">Sign in with c-ID</button>') +
        '<button class="x" data-cid="hide" aria-label="Hide">×</button>';
    }
  };
  window.CID = CID;
})();
