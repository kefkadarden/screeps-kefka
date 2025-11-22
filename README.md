# Screeps Kefka

TypeScript Screeps project scaffold.

## Scripts

- `npm run build` - bundle code to `dist/main.js`
- `npm run watch` - watch & rebuild
- `npm run lint` - run ESLint on source
- `npm run lint:types` - type-check using tsc
- `npm run format` - format sources with Prettier
- `npm run upload` - upload compiled code to main branch
- `npm run upload:ptr` - upload compiled code to PTR branch

## Environment

Copy `.env.example` to `.env` and fill either `SCREEPS_TOKEN` or `SCREEPS_EMAIL` & `SCREEPS_PASSWORD`.

## Neovim Integration

Install plugins: `mason.nvim`, `nvim-lspconfig`, `none-ls.nvim` (or `null-ls`), `conform.nvim`.

Ensure ESLint and Prettier binaries installed locally (run `npm install`). Add format-on-save via `:lua require('conform').setup{}` as in instructions previously provided.

## Notes

- Source maps enabled for improved stack traces.
- Globals declared in ESLint to avoid false positives.
- Dist output ignored by lint and VCS.
