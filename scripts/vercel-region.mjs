// Runs after `astro build`: pins every Vercel serverless function to Frankfurt (fra1)
// so candidate data (forms, CVs) is processed inside the EU.
// Uses the Build Output API `regions` field of each function's .vc-config.json.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const REGIONS = ['fra1'];
const root = '.vercel/output/functions';

async function* funcs(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true }).catch(() => [])) {
    const path = join(dir, entry.name);
    if (entry.name.endsWith('.func')) yield path;
    else if (entry.isDirectory()) yield* funcs(path);
  }
}

let count = 0;
for await (const fn of funcs(root)) {
  const file = join(fn, '.vc-config.json');
  const config = JSON.parse(await readFile(file, 'utf8'));
  config.regions = REGIONS;
  await writeFile(file, JSON.stringify(config, null, 2));
  count++;
}
console.log(`[vercel-region] ${count} function(s) pinned to ${REGIONS.join(', ')}`);
if (count === 0) process.exitCode = 1;
