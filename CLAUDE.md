# Portfolio (GitHub Pages) — notes for Claude

- Static site, no build step. Repo `wyne4rest-afk/wyne4rest-afk.github.io`, branch `main`, pushed over SSH. Pushing deploys it.
- Layout and common edits are in README.md. Content: `index.html`. Styles: `css/style.css` (sections marked `/* ----- Name ----- */`). JS: `js/main.js`.
- Cache-busting: bump `?v=N` on the CSS/JS links in `index.html` with every CSS/JS change. Give replacement images a new filename.
- Verify after a push: wait about 50s, then `curl` the live URL and grep for the change. There is no browser on this machine for screenshots.
- The background image is CC BY 4.0. Keep the footer credit and the README credit in sync with the image in use.
- Placeholders still to fill: `profile.jpg` is a black square until the user provides a real photo.
- Project content comes from the user's public repos (SEAgregate and VolUX in `sfml-created-applications`, `archlinux-dotfiles-daily`, `HomeStuff`). `portfolio-wyne` is deliberately left out.
- The `gh` CLI is installed at `~/.local/bin/gh` but not logged in. SSH push works.
- Image tools: ImageMagick (`convert`, `identify`, `montage`) is available.
