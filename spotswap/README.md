# /spotswap deploy target

This directory is the deploy target for **SpotSwap** on `huebbedigital.com/spotswap`,
following the same pattern already used for ClubConnect at `huebbedigital.com/app`
(see `../app/` and `../404.html`).

## How this repo is hosted

`huebbedigital1` (this repo) is served via **GitHub Pages** with a custom domain
(`../CNAME`). There is no Firebase Hosting config and no build step in this repo —
each sub-app is built in its own separate project and the **static build output is
committed directly into a subfolder here**.

## Source code

SpotSwap's actual Next.js/Firebase source code lives in a **separate repo**, not
nested inside this one — same relationship as `../app/` (built output, this repo)
has to `clubconnect/` (source, separate repo/folder).

- Repo: `github.com/Noeffen/SpotSwap.git`
- Local clone: `~/Desktop/SpotSwap`

## Build & deploy steps (once the Next.js app exists)

1. In the SpotSwap repo, configure static export with the app rooted at `/spotswap`,
   the same way `clubconnect/vite.config.ts` sets `base: "/app/"`:
   ```js
   // next.config.js
   module.exports = {
     output: "export",
     basePath: "/spotswap",
     assetPrefix: "/spotswap",
   };
   ```
2. `npm run build` → produces a static `out/` directory.
3. Copy the **contents** of `out/` into this directory (`huebbedigital1/spotswap/`),
   replacing whatever was here before (mirrors how `../app/` is refreshed for
   ClubConnect — no CI job does this automatically).
4. Commit and push to `main`. GitHub Pages picks it up automatically.
5. In `../404.html`, uncomment `"spotswap"` in the `SPA_ROOTS` array so deep links
   under `/spotswap/...` work via client-side routing. **Do this only after step 3**
   — enabling it while this folder has no `index.html` causes a redirect loop
   against the plain 404 page.

## Not done yet (intentionally out of scope for now)

- No placeholder/"coming soon" page here yet.
- No link to `/spotswap` added on the marketing homepage (`../index.html`) yet.

Both can be added once there's a real app to point to.
