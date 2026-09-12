#!/usr/bin/env node
// Bir paket dosyasındaki kayıtları dist/catalog.js içine uygular.
//   node scripts/apply-catalog-package.cjs research/package-10.cjs
// Yalnızca dokunduğu kayıtların metnini değiştirir; dosyanın geri kalanı bayt
// bayt aynı kalır, böylece diff yalnızca gerçekten değişen tarifleri gösterir.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const file = path.join(root, 'dist/catalog.js');

const packagePath = process.argv[2];
if (!packagePath) { console.error('Kullanım: node scripts/apply-catalog-package.cjs <paket.cjs>'); process.exit(1); }
const pkg = require(path.resolve(root, packagePath));
const patches = [...(pkg.applied || []), ...(pkg.fixes || [])];

let src = fs.readFileSync(file, 'utf8');

// Kaydın metin aralığını süslü parantez sayarak bul: JSON içinde kaçış ve
// tırnak durumu izlenir, böylece not metnindeki parantez sayımı bozmaz.
function spanOf(id) {
  const marker = `"id": "${id}"`;
  const at = src.indexOf(marker);
  if (at < 0) throw new Error(`Katalogda kayıt yok: ${id}`);
  const start = src.lastIndexOf('{', at);
  let depth = 0, inString = false, escaped = false;
  for (let k = start; k < src.length; k++) {
    const ch = src[k];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) return [start, k + 1]; }
  }
  throw new Error(`Kayıt kapanmıyor: ${id}`);
}

const indentBy = (text, spaces) => text.split('\n').map((line, index) => index ? ' '.repeat(spaces) + line : line).join('\n');

let changed = 0;
for (const patch of patches) {
  const [start, end] = spanOf(patch.id);
  const current = JSON.parse(src.slice(start, end));
  const next = {...current, ...patch};
  const text = indentBy(JSON.stringify(next, null, 2), 4);
  if (text === src.slice(start, end)) continue;
  src = src.slice(0, start) + text + src.slice(end);
  changed++;
}

fs.writeFileSync(file, src);
console.log(`${changed}/${patches.length} kayıt güncellendi: ${path.relative(root, file)}`);
