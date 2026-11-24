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
