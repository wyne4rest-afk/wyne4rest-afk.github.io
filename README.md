# Fred Jesus G. Heruela | Portfolio

Japan / sakura-themed personal portfolio, hosted on GitHub Pages.

**Live site:** https://wyne4rest-afk.github.io

## Project structure

```
.
├── index.html                  # All page content (single page)
├── css/
│   └── style.css               # All styling, split into labelled sections
├── js/
│   └── main.js                 # Footer year + falling sakura petals
├── assets/
│   └── images/
│       ├── profile/
│       │   └── profile.jpg     # Profile photo (currently a black placeholder)
│       ├── backgrounds/
│       │   └── sakura-bg-hakodate.jpg   # Page background
│       └── projects/
│           └── seagregate.jpg  # Project card thumbnails
├── README.md
└── CLAUDE.md                   # Notes for Claude Code
```

## Page sections (in `index.html`)

| Section | Anchor | Japanese label |
|---|---|---|
| Hero (photo, name, tagline) | `header.hero` | こんにちは |
| About | `#about` | 私について |
| Skills | `#skills` | 技術 |
| Projects | `#projects` | 作品 |
| Contact | `#contact` | 連絡 |
| Footer + image credit | `footer` | ありがとうございます |

## Common edits

| I want to… | Do this |
|---|---|
| Change my photo | Replace `assets/images/profile/profile.jpg` (square image works best) |
| Add a project | Copy an `<article class="card">` block in `#projects`. Use a thumbnail in `assets/images/projects/`, or an emoji `<div class="thumb icon">` |
| Add a skill | Add a `<span>` inside `.chips` in `#skills` |
| Change colours | Edit the variables in `:root` at the top of `css/style.css` |
| Change the background | Put a new image in `assets/images/backgrounds/`, update the `url(...)` in `body` in `css/style.css`, and **update the credit in the footer** |
| Change petal size/count | Edit `size` / `count` in `js/main.js` |

### Browser caching

GitHub Pages lets browsers cache files for about 10 minutes. After changing CSS or JS, bump the version
query in `index.html` (for example `css/style.css?v=5` → `?v=6`, and the same for `js/main.js`). When replacing an
image, give it a **new filename** so visitors get the new version straight away.

## Deploying

Pushing to `main` publishes automatically (GitHub Pages, usually live in under a minute):

```bash
git add -A && git commit -m "Describe the change" && git push
```

## Credits

- Background photo: [Hakodate Goryōkaku Park Sakura May 2016](https://commons.wikimedia.org/wiki/File:Hakodate_Gory%C5%8Dkaku_Park_Sakura_May_2016_5.jpg)
  by Alexander Klink, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via Wikimedia Commons (resized).
  The licence requires this credit, and it is also shown in the site footer.
- SEAgregate screenshot: from my own [sfml-created-applications](https://github.com/wyne4rest-afk/sfml-created-applications) repo.
- Fonts: Noto Serif JP and Zen Kaku Gothic New, via Google Fonts.

© Fred Jesus G. Heruela. All rights reserved.
