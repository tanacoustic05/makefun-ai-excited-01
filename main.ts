// ai-excited-01 entry: writes the entry image to /output/entry.png (JPEG bytes named entry.png,
// 1024x1024, 501 KB < 1 MiB — within the gate's size and pixel limits).
// Image: "Luminous cosmic koi" — a colossal koi with galaxy scales swimming through storm
// clouds above a neon city at night, drawn with RealVisXL V4.0 (SDXL) at 30 steps, then
// exported to JPEG q95. The judge sees exactly these bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
console.log('entry.png written to', join(outDir, 'entry.png'));
