import { writeFile } from 'node:fs/promises';

const modulePackage = '{"type":"module"}\n';

await Promise.all([
  writeFile(new URL('../dist/esm/package.json', import.meta.url), modulePackage),
  writeFile(new URL('../dist/types/esm/package.json', import.meta.url), modulePackage)
]);
