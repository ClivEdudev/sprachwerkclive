/* Sprachwerk API: Google sign-in and progress sync (same approach as ClivEdu).
   The browser shows Google's own sign-in button (Google Identity Services). Google hands it an
   ID token, which this function checks with Google, then answers with Sprachwerk's own session token.
   Storage: Netlify Blobs store "sprachwerk".
     users/<googleId>     { name, email, picture, t }
     progress/<googleId>  { at, s }   s = the app's whole progress object
     meta/secret          signing key for session tokens (used when AUTH_SECRET is not set)
   Environment: GOOGLE_CLIENT_ID (required for sign-in), AUTH_SECRET (optional). */
import { getStore } from "@netlify/blobs";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const env = k => (globalThis.Netlify && Netlify.env.get(k)) || (globalThis.process && process.env[k]) || "";
const CLIENT_ID = () => env("GOOGLE_CLIENT_ID").trim();
const db = () => globalThis.__SW_DB || getStore({ name: "sprachwerk", consistency: "strong" });
const get = async k => { try { return await db().get(k, { type: "json" }); } catch (e) { return null; } };
const put = (k, v) => db().setJSON(k, v);
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const SESSION_DAYS = 180, MAX_BODY = 4 * 1024 * 1024;

/* ---------- session tokens: <googleId>.<expiry>.<signature> ---------- */
let secretP = null;
function secret() {
  if (env("AUTH_SECRET")) return Promise.resolve(env("AUTH_SECRET"));
  if (!secretP) secretP = (async () => {
    const s = await get("meta/secret");
    if (s && s.k) return s.k;
    const k = randomBytes(32).toString("hex"); await put("meta/secret", { k }); return k;
  })().catch(e => { secretP = null; throw e; });
  return secretP;
}
const sign = async s => createHmac("sha256", await secret()).update(s).digest("base64url");
async function makeToken(uid) { const body = uid + "." + (Date.now() + SESSION_DAYS * 864e5); return body + "." + await sign(body); }
async function readToken(req) {
  const t = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const m = /^([\w-]{1,80})\.(\d{10,16})\.([\w-]{20,})$/.exec(t);
  if (!m || +m[2] < Date.now()) return null;
  const want = Buffer.from(await sign(m[1] + "." + m[2])), got = Buffer.from(m[3]);
  return want.length === got.length && timingSafeEqual(want, got) ? m[1] : null;
}

/* ---------- Google ID token check ---------- */
async function verifyGoogle(credential) {
  if (!credential || credential.length > 4096) return null;
  const r = await (globalThis.__SW_FETCH || fetch)("https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(credential));
  if (!r.ok) return null;
  const p = await r.json().catch(() => null);
  if (!p || p.aud !== CLIENT_ID() || !/^(https:\/\/)?accounts\.google\.com$/.test(p.iss || "")) return null;
  if (!p.sub || +p.exp * 1000 < Date.now()) return null;
  return { id: p.sub, email: p.email_verified === "true" || p.email_verified === true ? p.email || "" : "", name: p.name || p.given_name || "", picture: p.picture || "" };
}

/* ---------- progress merging (the same rules as the app, so no device can wipe another) ---------- */
const obj = o => (o && typeof o === "object" && !Array.isArray(o) ? o : {});
const hasProgress = s => !!(s && (s.xp || ["cards", "units", "games", "missions", "shadow", "skills"].some(k => Object.keys(obj(s[k])).length)));
export function mergeProgress(a, b) {
  if (!b) return a; if (!a) return b;
  if ((a.resetAt || 0) > (b.updated || 0)) return a;
  if ((b.resetAt || 0) > (a.updated || 0)) return b;
  const nw = (a.updated || 0) >= (b.updated || 0) ? a : b;
  const m = JSON.parse(JSON.stringify(nw));
  const pick = (k, f) => { const x = obj(a[k]), y = obj(b[k]), o = {}; new Set([...Object.keys(x), ...Object.keys(y)]).forEach(id => { o[id] = x[id] == null ? y[id] : y[id] == null ? x[id] : f(x[id], y[id], id); }); m[k] = o; };
  pick("cards", (x, y) => ((x.l || 0) >= (y.l || 0) ? x : y));
  pick("days", (x, y) => Math.max(x, y));
  pick("missions", (x, y) => Math.max(x, y));
  pick("shadow", (x, y) => Math.max(x, y));
  pick("games", (x, y, id) => (id === "memory" ? Math.min(x, y) : Math.max(x, y)));
  pick("skills", (x, y) => ((x.t || 0) >= (y.t || 0) ? x : y));
  pick("units", (x, y) => ({ ...x, ...y, steps: { ...obj(x.steps), ...obj(y.steps) }, best: Math.max(x.best || 0, y.best || 0), done: !!(x.done || y.done) }));
  const daySum = Object.values(m.days).reduce((n, v) => n + (+v || 0), 0);
  m.xp = Math.max(a.xp || 0, b.xp || 0, daySum);
  m.created = Math.min(a.created || Date.now(), b.created || Date.now());
  const ra = Math.max(a.resetAt || 0, b.resetAt || 0); if (ra) m.resetAt = ra; else delete m.resetAt;
  m.updated = Math.max(a.updated || 0, b.updated || 0);
  return m;
}

export default async req => {
  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/(\.netlify\/functions\/api|api)/, "") || "/";
  try {
    if (path === "/config" && req.method === "GET") return json({ googleClientId: CLIENT_ID() || null });

    if (path === "/auth/google" && req.method === "POST") {
      if (!CLIENT_ID()) return json({ error: "not-configured" }, 503);
      const b = await req.json().catch(() => ({}));
      const g = await verifyGoogle(b.credential);
      if (!g) return json({ error: "bad-credential" }, 401);
      const user = { name: g.name, email: g.email, picture: g.picture, t: Date.now() };
      await put("users/" + g.id, user);
      return json({ token: await makeToken(g.id), user });
    }

    if (path === "/progress") {
      const uid = await readToken(req);
      if (!uid) return json({ error: "signed-out" }, 401);
      const key = "progress/" + uid;
      if (req.method === "GET") return json((await get(key)) || {});
      if (req.method === "PUT") {
        const raw = await req.text();
        if (raw.length > MAX_BODY) return json({ error: "too-big" }, 413);
        const b = JSON.parse(raw || "{}");
        if (!b || typeof b.s !== "object" || !b.s) return json({ error: "bad-body" }, 400);
        const cur = await get(key);
        /* merge on the server too, so even an old app version or a race between two devices cannot erase progress */
        const s = cur && cur.s && hasProgress(cur.s) ? mergeProgress(b.s, cur.s) : b.s;
        const doc = { at: s.updated || Date.now(), s };
        await put(key, doc);
        return json(doc);
      }
    }
    return json({ error: "not-found" }, 404);
  } catch (e) {
    console.error("api", path, e);
    return json({ error: "server" }, 500);
  }
};

export const config = { path: "/api/*" };
