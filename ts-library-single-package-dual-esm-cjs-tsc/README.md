# TypeScript library: browser + Node, ESM + CommonJS

A single-package TypeScript library template compiled with the TypeScript compiler. It supports:

- browser projects through the standard ESM build;
- Node.js `import` through the ESM build;
- Node.js `require` through the CommonJS build;
- TypeScript consumers through generated declaration files.

This template deliberately does not bundle. Application bundlers such as Vite, Rollup, webpack, and esbuild can consume its ESM output like any other npm dependency. Keeping dependencies external also avoids silently shipping duplicate copies of them inside the library.

## Start a package

1. Change `name`, `description`, `author`, `license`, and repository metadata in `package.json`.
2. Replace the example in `src/index.ts` with the package's public API.
3. Run `npm install` and `npm run test:package`.
4. Inspect the publishable package with `npm pack --dry-run`.

Keep public imports explicit and include `.js` in relative import paths:

```ts
export { parse } from './parse.js';
```

TypeScript resolves that path to `parse.ts` while compiling, and the emitted path works in both builds.

## Scripts

- `npm run build` — clean and compile ESM, CommonJS, and declarations
- `npm run dev` — watch the ESM/declaration build during development
- `npm run check` — type-check without emitting files
- `npm run test:package` — build and smoke-test ESM, CommonJS, and browser resolution
- `npm run clean` — remove generated output

## Package layout

```text
dist/
├── cjs/          # selected by require()
├── esm/          # selected by import and browser-aware tooling
└── types/
    ├── cjs/      # declarations matching CommonJS
    └── esm/      # declarations matching ESM
```

The package root is marked as CommonJS so TypeScript can use its modern Node module resolver for that build. Generated package markers identify the ESM JavaScript and declarations precisely. Conditional exports still make ESM the default for `import` and browser tooling.

## Browser compatibility

Only use APIs available in every runtime you support. This template includes browser type libraries and intentionally does not install Node type definitions. If the package needs separate browser and Node implementations, add explicit conditional entry points rather than importing Node built-ins into shared source files.

This is an npm-module template, not a classic global script build. Browser applications should install and import it normally:

```js
import { greet } from 'package-name';
```
