/* Sprachwerk voice: serves Google's German voice (the same voice Chrome on a laptop calls "Google Deutsch")
   so phones and computers all hear the identical voice. GET /tts?tl=de&q=Hallo  ->  audio/mpeg */
export default async (req) => {
  const u = new URL(req.url);
  const q = (u.searchParams.get('q') || '').slice(0, 200);
  const tl = /^(de|en)$/.test(u.searchParams.get('tl') || '') ? u.searchParams.get('tl') : 'de';
  if (!q.trim()) return new Response('missing q', { status: 400 });
  const src = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=' + tl + '&q=' + encodeURIComponent(q);
  try {
    const r = await fetch(src, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36', 'Referer': 'https://translate.google.com/' } });
    if (!r.ok) return new Response('upstream ' + r.status, { status: 502 });
    return new Response(await r.arrayBuffer(), { headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=31536000, immutable' } });
  } catch (e) {
    return new Response('upstream error', { status: 502 });
  }
};
export const config = { path: '/tts' };
