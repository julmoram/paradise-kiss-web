# Paradise Kiss — Lookbook Site

A small, dependency-free website (plain HTML/CSS/JS, no build step) styled
as a fashion-atelier lookbook, with a filterable, data-driven cast section.

## Folder structure

```
paradise-kiss-website/
├── index.html          → page markup (hero, cast grid, modal)
├── css/
│   └── style.css       → all styling / design tokens
├── js/
│   ├── data.js         → character data — edit THIS to add/change characters
│   └── script.js       → renders cards, handles filters + modal (no edits needed)
├── images/
│   ├── characters/     → put your character images here
│   └── hero/           → optional, for a hero/banner image later
└── README.md
```

## How it works (why it's "dynamic")

The cast grid isn't hand-written HTML — `js/script.js` reads the array in
`js/data.js` and builds a card for every character automatically. That means:

- To add a character: add one object to `CHARACTERS` in `js/data.js`.
- To remove one: delete its object.
- To edit bio/quote/role: edit the object's fields.
- The page never needs touching for content changes.

Each character object also drives the filter buttons (`Atelier`, `Academy`,
`Supporting`) via its `category` field, and the click-to-expand modal.

## Adding your images

1. Drop your character images into `images/characters/`.
2. Name them to match the `image` path already set in `js/data.js`, e.g.:
   - `images/characters/yukari.jpg`
   - `images/characters/george.jpg`
   - `images/characters/arashi.jpg`
   - `images/characters/miwako.jpg`
   - `images/characters/isabella.jpg`
   - `images/characters/hiroyuki.jpg`
3. If a file is missing, that card automatically shows a monogram
   placeholder instead of breaking — so you can add images gradually.

Recommended: portrait-oriented images (roughly 3:4) work best with the
card/modal layout, since photos are cropped with `object-fit: cover`.

## Running it

No build tools or server required:

- **Quickest**: double-click `index.html` to open it in a browser.
- **Recommended** (avoids occasional local-file image quirks in some
  browsers): serve the folder locally, e.g. from inside the project folder:
  ```bash
  python3 -m http.server 8000
  ```
  then open `http://localhost:8000` in your browser.

## Extending it later

- Add more categories by introducing a new `category`/`categoryLabel` pair
  in `data.js` and adding a matching `<button class="filter" data-filter="...">`
  in `index.html`.
- Add a hero image by putting a file in `images/hero/` and referencing it
  from `.masthead` in `css/style.css` (e.g. as a `background-image`).
- If this grows past a single page (e.g. a timeline, a gallery of the
  fashion collection, a per-character page), keep the same pattern: data in
  `data.js`, rendering logic in `script.js`, one `.html` per page.
