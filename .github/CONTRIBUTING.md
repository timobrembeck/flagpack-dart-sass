# Contributing to flagpack-dart-sass

Thanks for contributing! This guide covers the project layout and the rules
that keep pull requests easy to review and merge.

## Setup

```
npm ci
pre-commit install
```

`npm ci` installs `sass` (dart-sass). [pre-commit](https://pre-commit.com/)
runs the linting hooks (prettier and friends) on every commit; CI runs the
same hooks on every push, so installing them locally saves you a round trip.

## Project layout

| Path                | Role                                                  |
| ------------------- | ----------------------------------------------------- |
| `src/`              | SCSS sources — the single source of truth for the CSS |
| `flags/4x3/`        | Flag SVGs in 4x3 format (21×15 viewport)              |
| `flags/1x1/`        | Flag SVGs in square format (15×15 viewport)           |
| `dist/flagpack.css` | **Generated** — never edit by hand (see below)        |
| `builder.js`        | Build script that compiles `src/` into `dist/`        |

## `dist/` is generated — never edit it by hand

`dist/flagpack.css` is compiled from `src/` by the builder. After any change
to `src/`, regenerate it with:

```
npm run compile:sass
```

and commit the result. Do not edit `dist/flagpack.css` manually — not even
for a seemingly trivial change like adding one line. Hand edits break the
reproducibility of the file (and have introduced subtle corruption before:
broken search-and-replace, a stripped UTF-8 byte-order mark, changed line
endings). A PR's `dist/flagpack.css` must be byte-identical to what
`npm run compile:sass` produces from the PR's `src/`.

CI enforces this on every push; you can run the same check locally with:

```
npm run check:dist
```

## Adding or updating a flag

1. **Pick the code.** Countries use their ISO 3166-1 alpha-2 code (`nl`,
   `sy`, …). Flags without a country code use an established code instead,
   e.g. an ISO 639 language code (`rom` for Romani, `smi` for Sámi) or a
   widely understood identifier (`eu`, `lgbt`). The code becomes a bare CSS
   class when `$fp-prepend` is off, so keep it short and collision-free.
   The code must also never equal a modifier class suffix (`medium`, `large`,
   `lg`, `square`, `rounded`) — that would clash with the prefixed helper
   classes, as once happened with `fp-md` vs. Moldova (issue #3).
2. **Add both SVG formats:**
   - `flags/4x3/<code>.svg` with `width="21" height="15"`
   - `flags/1x1/<code>.svg` with `width="15" height="15"`

   Keep the files minimal (single line, no editor metadata) and look at
   neighbouring flags for style reference. Verify both render correctly at
   small sizes.

3. **Register the code** in the `$fp-countries` list — in **both** places,
   at the alphabetical position:
   - `src/_variables.scss`
   - the `$fp-countries` code block in `README.md`
4. **Rebuild** `dist/flagpack.css` with `npm run compile:sass` and commit it.

## Sass conventions

The stylesheets use the Sass module system (`@use`), which requires
`sass >= 1.23`. Variables are declared with `!default` in
`src/_variables.scss` and are configured by consumers via
`@use ".../variables" with (...)` — see the SASS section in the README.
Don't reintroduce `@import`; it is deprecated and scheduled for removal from
dart-sass.

## Pull requests

- Keep PRs small and focused: one flag or one concern per PR.
- Don't reformat or restructure unrelated code — reflowing the long
  `$fp-countries` list is unavoidable when inserting a code, but keep lines
  at most 80 characters and don't reorder existing entries.
- Version bumps and releases are handled by the maintainer; leave
  `package.json`'s `version` untouched.
