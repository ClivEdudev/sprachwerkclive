# Sprachwerk — German learning app

Static site, no build step. Version 202611242000.

## Deploy on Netlify
1. Go to https://app.netlify.com/drop
2. Drag this zip (or the unzipped folder) onto the drop zone. If the zip is refused, unzip it and drag the folder that contains index.html.
3. Optional: Site configuration → Domain management → add a subdomain such as `deutsch.yourdomain.com`.

To update later: open the site in Netlify → Deploys → drag the new folder/zip onto the drop area at the bottom.

## Notes
- Works offline after the first visit and can be installed (Settings → Install, or the browser's "Add to Home Screen").
- Pronunciation scoring uses the browser's German speech recognition: Chrome on desktop or Android works best. Allow the microphone when asked.
- Progress is stored in this browser (localStorage). Use Settings → Download backup to keep a copy or move to another device.

## Google sign-in and progress sync

Same setup as ClivEdu: Google's sign-in button on the page, a Netlify function (`netlify/functions/api.mjs`) that checks the sign-in with Google, and Netlify Blobs to store each person's progress. No Firebase.

1. Google Cloud Console → **APIs & Services → Credentials → Create credentials → OAuth client ID**, type **Web application**.
2. Under **Authorized JavaScript origins** add `https://sprachwerkclive.netlify.app`.
3. In Netlify → **Site configuration → Environment variables** add `GOOGLE_CLIENT_ID` with that client ID, then redeploy.
4. Optional: `AUTH_SECRET` (long random text). Without it the site makes its own and stores it.

Progress from different devices is merged (never overwritten), on the device and again on the server.
