#!/usr/bin/env node
// Bir kaynagin butun tariflerini olcusuz "fikir" durumuna dusurur ya da geri alir.
//
//   node scripts/disable-source.cjs yemek.com          -> devre disi birak
//   node scripts/disable-source.cjs --enable yemek.com -> geri al
//   node scripts/disable-source.cjs --list             -> mevcut durumu goster
//
// Katalog verisi silinmez; yalnizca dist/catalog.js icindeki disabledSources
// dizisi degistirilir, uygulama da o kaynagin kayitlarini gizler.
// Degisiklikten sonra: npm test && python3 scripts/build-preview.py, sonra
// onbellek surumunu (sw.js + index.html + manifest) bir artir.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const CATALOG = path.join(__dirname, '..', 'dist', 'catalog.js');
const MARKER = /const disabledSources = \[([^\]]*)\];/;

const args = process.argv.slice(2);
const enable = args.includes('--enable');
const list = args.includes('--list');
const host = args.find(a => !a.startsWith('--'));

let text = fs.readFileSync(CATALOG, 'utf8');
const match = text.match(MARKER);
if (!match) {
  console.error('disabledSources dizisi bulunamadi; dist/catalog.js degismis olabilir.');
  process.exit(1);
}
const current = match[1].split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);

function sourcesInCatalog() {
  const {meals} = vm.runInNewContext(text + ';({meals})');
  const counts = new Map();
  for (const meal of meals) {
    if (!meal.source) continue;
    const name = meal.source.split('/')[2].replace(/^www\./, '');
    counts.set(name, (counts.get(name) || 0) + 1);
  }
  return counts;
}

if (list || !host) {
  console.log('Devre disi kaynaklar:', current.length ? current.join(', ') : '(yok)');
  console.log('\nKatalogdaki aktif kaynaklar:');
  for (const [name, n] of [...sourcesInCatalog()].sort((a, b) => b[1] - a[1])) {
    console.log('  ' + String(n).padStart(3) + '  ' + name);
  }
  if (!host) console.log('\nKullanim: node scripts/disable-source.cjs <alan-adi> [--enable]');
  process.exit(0);
}

const next = enable ? current.filter(h => h !== host) : [...new Set([...current, host])];
if (next.join() === current.join()) {
  console.log(host + ' zaten ' + (enable ? 'aktif' : 'devre disi') + '; degisiklik yok.');
  process.exit(0);
}

text = text.replace(MARKER, 'const disabledSources = [' + next.map(h => JSON.stringify(h)).join(', ') + '];');
fs.writeFileSync(CATALOG, text);

// Sonucu dogrula: kaynak gercekten gizlendi mi?
const {meals} = vm.runInNewContext(text + ';({meals})');
const stillVisible = meals.filter(m => m.source && m.source.includes(host)).length;
const sourced = meals.filter(m => m.status === 'sourced').length;
console.log((enable ? 'Aktiflestirildi: ' : 'Devre disi birakildi: ') + host);
console.log('  devre disi liste :', next.length ? next.join(', ') : '(bos)');
console.log('  gorunur kalan    :', stillVisible, 'kayit bu kaynakla');
console.log('  kaynakli tarif   :', sourced);
if (!enable && stillVisible > 0) {
  console.error('UYARI: kayitlar hala gorunuyor, eslesme calismadi.');
  process.exit(1);
}
console.log('\nSimdi: npm test && python3 scripts/build-preview.py, sonra onbellek surumunu artir.');
