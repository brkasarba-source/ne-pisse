const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const catalog = fs.readFileSync(path.join(root,'dist/catalog.js'),'utf8');
const app = fs.readFileSync(path.join(root,'dist/app.js'),'utf8');
const html = fs.readFileSync(path.join(root,'dist/index.html'),'utf8');
const model = vm.runInNewContext(catalog + ';({meals, mealAliases, menuPairings, matchesMeal})');
const {meals, mealAliases, menuPairings, matchesMeal} = model;
const meal = id => meals.find(m => m.id === 'meal-'+id);
const tests = [];
function test(name, run) { tests.push({name,run}); }
test('All 238 legacy rows are accounted for; no duplicate active IDs or names', () => {
  const legacy = meals.filter(m => m.id.startsWith('meal-'));
  assert.equal(legacy.length,233); assert.equal(Object.keys(mealAliases).length,4);
  assert.equal(legacy.length+Object.keys(mealAliases).length+1,238);
  assert.equal(new Set(meals.map(m => m.id)).size,meals.length);
  assert.equal(new Set(meals.map(m => m.name.toLocaleLowerCase('tr-TR'))).size,meals.length);
  assert.equal(meals.filter(m => m.status === 'sourced').length,181);
  assert.equal(meals.filter(m => m.status === 'idea').length,63);
  assert(!meal(190));
  Object.values(mealAliases).forEach(id => assert(meals.some(m => m.id === id)));
});
test('Breakfast additions and desserts preserve portions and cooling exclusions', () => {
  assert.equal(meal(218).yieldPeople,1); assert.equal(meal(218).cal,null);
  assert.equal(meal(220).yieldPeople,2); assert.equal(meal(220).time,8);
  assert.equal(meal(219).status,'sourced'); assert.equal(meal(219).yieldPeople,2); assert.equal(meal(219).time,25); assert.equal(meal(219).cal,null);
  assert.equal(meal(221).status,'sourced'); assert.equal(meal(221).cal,248); assert.equal(meal(221).time,40);
  assert.equal(meal(222).status,'sourced'); assert.equal(meal(222).yieldPeople,2); assert.equal(meal(222).time,25);
  assert.equal(meal(235).status,'sourced'); assert.equal(meal(235).yieldPeople,1); assert.equal(meal(235).cal,287);
  assert(html.includes('data-mode="Tatlı"'));
  const desserts=meals.filter(m=>m.mode==='Tatlı'); assert.equal(desserts.length,2);
  for(const m of desserts) {
    assert.equal(m.time,null); assert(m.extraPrep); assert(m.waitLabel);
    assert(matchesMeal(m,{mode:'Tatlı'}));
    assert(!matchesMeal(m,{mode:'Tatlı',maxTime:240}));
  }
});
test('Unknown data is null, never an inherited category estimate or placeholder', () => {
  for (const m of meals) {
    if (m.status === 'idea') { for(const key of ['time','prep','cook','cal','source']) assert.equal(m[key],null); assert.equal(m.ingredients.length,0); }
    else { assert(m.source.startsWith('https://')); if(Number.isFinite(m.time) && !m.waitLabel) assert.equal(m.time,m.prep+m.cook); assert(m.yieldLabel); assert(m.ingredients.length, `${m.name} has no measured ingredients`); assert(Number.isInteger(m.yieldPeople) && m.yieldPeople > 0, `${m.name} has no people scale`); }
    assert(!m.ingredients.some(x => /ana malzeme|ana sebze|ana protein/.test(typeof x === 'string' ? x : x.name)));
  }
});
test('Recipe regressions: lahmacun, tandir, homemade manti, overnight beans', () => {
  assert.equal(meal(10).time,80); assert.equal(meal(71).time,230); assert.equal(meal(0).time,45);
  assert.equal(meal(54).time,20); assert.equal(meal(9).time,75); assert(meal(9).extraPrep); assert(meal(12).extraPrep);
  for(const id of [9,10,12,71]) assert(!matchesMeal(meal(id),{maxTime:30}));
  assert(!matchesMeal(meal(12),{maxTime:240}));
  assert(matchesMeal(meal(71),{maxTime:240,people:6}));
  assert(!matchesMeal(meal(71),{maxTime:240,people:7}));
});
test('Third package contains 20 sourced meals and excludes hidden waits from finite time filters', () => {
  for(let id=34;id<=53;id++) {
    assert.equal(meal(id).status,'sourced');
    assert(meal(id).source); assert(meal(id).ingredients.length);
  }
  for(const id of [34,37,39,40,42,50,52]) {
    assert.equal(meal(id).time,null); assert(meal(id).extraPrep); assert(meal(id).waitLabel);
    assert(!matchesMeal(meal(id),{maxTime:240}));
  }
  assert.equal(meal(36).time,100); assert(meal(36).extraPrep);
  assert.equal(meal(41).time,95); assert.equal(meal(43).time,30); assert.equal(meal(47).time,30);
  assert.equal(meal(44).yieldPeople,4); assert.equal(meal(44).cal,null);
  assert.equal(meal(47).cal,null); assert.equal(meal(51).cal,null);
});
test('Fourth package contains 20 sourced recipes and does not hide prerequisite waits', () => {
  const ids=[55,56,58,77,60,61,62,63,64,65,66,67,68,69,70,72,73,74,75,76];
  for(const id of ids) {
    assert.equal(meal(id).status,'sourced'); assert(meal(id).source); assert(meal(id).ingredients.length);
  }
  for(const id of [64,65,66,67,75]) {
    assert.equal(meal(id).time,null); assert(meal(id).extraPrep); assert(meal(id).waitLabel);
    assert(!matchesMeal(meal(id),{maxTime:240}));
  }
  assert.equal(meal(61).time,135); assert(meal(61).waitLabel.includes('2 saat'));
  assert.equal(meal(62).variant,'Et haşlama (kuzu; dana alternatifi)');
  assert.equal(meal(63).time,120); assert.equal(meal(69).cook,90);
  assert.equal(meal(70).ingredients.find(x=>x.name==='tuz').unit,'tatlı kaşığı');
  assert.equal(meal(59).status,'idea');
});
test('Fifth package contains 20 sourced recipes with prerequisite work exposed', () => {
  const ids=[78,79,80,81,82,83,84,85,87,88,89,90,91,92,93,94,95,96,97,98];
  for(const id of ids) {
    assert.equal(meal(id).status,'sourced'); assert(meal(id).source); assert(meal(id).ingredients.length);
  }
  for(const id of [78,80,82,85,98]) {
    assert.equal(meal(id).time,null); assert(meal(id).extraPrep); assert(meal(id).waitLabel);
    assert(!matchesMeal(meal(id),{maxTime:240}));
  }
  assert.equal(meal(81).time,110); assert.equal(meal(84).time,60);
  assert.equal(meal(89).time,90); assert(meal(89).waitLabel.includes('10 dakika'));
  assert.equal(meal(94).cal,695); assert.equal(meal(96).cal,350);
  // meal-86 bu pakette fikirdi; 8. pakette doğrulandı, 10. pakette yayına alındı.
});
test('Sixth package contains 20 sourced recipes and quarantines unclear total times', () => {
  for(let id=99;id<=118;id++) {
    assert.equal(meal(id).status,'sourced'); assert(meal(id).source); assert(meal(id).ingredients.length);
  }
  for(const id of [101,104,105,112,117]) {
    assert.equal(meal(id).time,null); assert(meal(id).extraPrep); assert(meal(id).waitLabel);
    assert(!matchesMeal(meal(id),{maxTime:240}));
  }
  assert.equal(meal(99).time,35); assert.equal(meal(102).time,25);
  assert.equal(meal(108).cal,300); assert.equal(meal(116).cook,75);
  assert.equal(meal(118).yieldPeople,8);
});
test('Seventh package contains 20 sourced recipes and rejects weak or duplicate candidates', () => {
  const ids=[119,120,122,123,124,126,127,129,130,131,132,133,134,135,136,137,138,139,140,141];
  for(const id of ids) {
    assert.equal(meal(id).status,'sourced'); assert(meal(id).source); assert(meal(id).ingredients.length);
  }
  for(const id of [126,127,129,130,137]) {
    assert.equal(meal(id).time,null); assert(meal(id).extraPrep); assert(meal(id).waitLabel);
    assert(!matchesMeal(meal(id),{maxTime:240}));
  }
  assert.equal(meal(119).time,70); assert(meal(119).waitLabel.includes('10–15 dakika'));
  assert.equal(meal(123).source,'https://yemek.com/tarif/firinda-kabak-mucveri/');
  assert.equal(meal(124).time,50); assert.equal(meal(138).time,90);
  assert.equal(meal(139).cal,133); assert.equal(meal(141).cal,null);
  // meal-121 de 8. pakette doğrulanıp 10. pakette yayına alındı.
  assert.equal(meal(125).status,'idea');
  assert.equal(meal(128).status,'idea');
});
test('All mode/person/time/calorie/idea combinations respect every bound', () => {
  const modes = ['Tümü',...new Set(meals.map(m => m.mode))];
  for (const mode of modes) for(let people=1;people<=8;people++) for(const maxTime of [15,30,60,90,120,240,Infinity]) for(const calorie of ['any','500','700','900','1200','1500','2000','over2000']) for(const includeIdeas of [false,true]) {
    for(const m of meals) if(matchesMeal(m,{mode,people,maxTime,calorie,includeIdeas})) {
      assert(mode === 'Tümü' || mode === m.mode);
      assert(includeIdeas || m.status === 'sourced');
      if(Number.isFinite(maxTime)) { assert(Number.isFinite(m.time)); assert(m.time<=maxTime); assert(!m.extraPrep); assert(m.yieldPeople>=people); }
      if(calorie !== 'any') { assert(Number.isFinite(m.cal)); assert(calorie === 'over2000' ? m.cal*people>=2000 : m.cal*people<=Number(calorie)); }
      if(m.status === 'idea') assert(includeIdeas && maxTime === Infinity && calorie === 'any');
    }
  }
});
test('At least 2000 includes the boundary and has no upper limit', () => {
  const fake = {...meal(57), cal:1000};
  assert(matchesMeal(fake,{people:2,calorie:'over2000'}));
  assert(matchesMeal(fake,{people:3,calorie:'over2000'}));
  assert(!matchesMeal(fake,{people:3,calorie:'2000'}));
  assert(!html.includes('value="2500"'));
});
// A strict DOM test double: exercises application logic, NOT browser layout or real OS sharing.
function setup(storage = null, storageThrows = false) {
  class Element {
    constructor(tag='div') { this.tagName=tag; this.children=[]; this.attrs={}; this.value=''; this.checked=false; this.disabled=false; this.hidden=false; this.textContent=''; const classes=new Set(); this.classList={add:x=>classes.add(x),remove:x=>classes.delete(x),toggle:(x,on)=>on?classes.add(x):classes.delete(x),contains:x=>classes.has(x)}; }
    append(...nodes) { this.children.push(...nodes); }
    replaceChildren(...nodes) { this.children=nodes; }
    setAttribute(k,v) { this.attrs[k]=v; }
    removeAttribute(k) { delete this.attrs[k]; }
    click() { this.clicked=true; return this.onclick?.(); }
    scrollIntoView(opts) { this.scrolledIntoView=(this.scrolledIntoView||0)+1; this.lastScrollOpts=opts; }
    getBoundingClientRect() { return this.rect || {top:0,bottom:0,left:0,right:0}; }
    remove() { this.removed=true; }
    closest() { return this; }
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]); assert.equal(new Set(ids).size,ids.length);
  const elements = Object.fromEntries(ids.map(id=>[id,new Element()]));
  elements.time.value='Infinity'; elements.calorie.value='any';
  const created=[]; const canvasContext={measureText:text=>({width:text.length*18}),fillRect(){},fillText(){}};
  const document={querySelector:s=>{ assert(s.startsWith('#')); assert(elements[s.slice(1)], 'Missing HTML element '+s); return elements[s.slice(1)]; },querySelectorAll:()=>[],body:new Element('body'),documentElement:{clientHeight:800},createElement:tag=>{const e=new Element(tag); created.push(e); if(tag==='canvas'){e.getContext=()=>canvasContext;e.toBlob=cb=>cb(new Blob(['stub'],{type:'image/png'}));} return e;}};
  const navigator={}; const timers=[];
  const location={assigned:null,assign(url){this.assigned=url;},reload(){this.reloaded=true;}};
  const context=vm.createContext({document,navigator,window:{addEventListener(){},location,matchMedia:query=>({matches:false,media:query}),prompt(label,value){this.prompted={label,value};},innerHeight:800},localStorage:{getItem(){if(storageThrows)throw Error('denied');return storage;},setItem(k,v){if(storageThrows)throw Error('denied');storage=v;}},setTimeout:(fn)=>{timers.push(fn);return timers.length;},clearTimeout(){},Blob,File:class{constructor(parts,name,options){this.name=name;this.type=options.type;}},URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},console});
  vm.runInContext(catalog+'\n'+app,context);
  return {elements,created,navigator,context,eval:code=>vm.runInContext(code,context)};
}
test('Malformed, blocked, and legacy browser storage cannot crash startup', () => {
  for(const value of ['{','null','42','[]','{"favorites":{},"history":{}}']) setup(value);
  setup(null,true);
  const s=setup(JSON.stringify({favorites:['meal-225','meal-178','fake'],history:[null,{id:'meal-10',name:'<img onerror=alert(1)>'}]}));
  assert.equal(s.eval('saved.favorites.length'),1); assert.equal(s.eval('saved.favorites[0]'),'meal-178');
  assert.equal(s.elements.historyList.children[0].textContent,'Lahmacun');
  assert(!app.includes('innerHTML'));
});
test('Rapid shuffle clicks are synchronous, unique, and do not erase history exclusions', () => {
  const s=setup(); const seen=new Set(), count=s.eval('baseEligible().length');
  for(let i=0;i<count;i++){s.elements.again.click(); const id=s.eval('current.id'); assert(!seen.has(id));seen.add(id);}
  const last=s.eval('current.id');s.elements.again.click();assert.equal(s.eval('current.id'),last);
  s.elements.ate.click();s.elements.resetSeen.click();
  assert(!s.eval('eligible().some(m => m.id === saved.history[0].id)'));
});
test('Person buttons clamp 1–8 and preserve ingredient checkmarks and favorites', () => {
  const s=setup(); s.eval('showMeal(byId.get("meal-1"))');
  const checkbox=s.elements.ingredients.children[0].children[0].children[0]; checkbox.checked=true;
  const before=s.elements.ingredients.children[0].children[0].children[1].textContent;
  s.elements.heart.click();s.elements.plus.click();
  assert.equal(s.eval('people'),3); assert.equal(s.elements.ingredients.children[0].children[0].children[0],checkbox);assert(checkbox.checked);
  assert.notEqual(s.elements.ingredients.children[0].children[0].children[1].textContent,before);
  for(let i=0;i<20;i++)s.elements.plus.click();assert.equal(s.eval('people'),8);assert(s.elements.plus.disabled);
  for(let i=0;i<20;i++)s.elements.minus.click();assert.equal(s.eval('people'),1);assert(s.elements.minus.disabled);
});
test('Scaled ingredient amounts use practical kitchen measures instead of raw ratios', () => {
  const s=setup();
  const render=(amount,unit='adet',name='soğan')=>s.eval(`ingredientText(${JSON.stringify({amount,unit,name})},{yieldPeople:1},1)`);
  // No line prints a slash: "3/4 çay kaşığı" is read as "3 or 4" at list size.
  // No line prints "yaklaşık" either; the rounding is stated once under the
  // list, so the rows read like a shopping note instead of a calculation.
  assert.equal(render(0.5),'1 adet soğan · yarısı kadarı');
  assert.equal(render(2/3,'diş','sarımsak'),'1 diş sarımsak · üçte ikisi kadarı');
  assert.equal(render(1/3,'diş','sarımsak'),'1 diş sarımsak · üçte biri kadarı');
  assert.equal(render(1/6,'adet','soğan'),'1 adet soğan · %15 kadarı');
  assert.equal(render(2/3,'yemek kaşığı','sıvı yağ'),'2 çay kaşığı sıvı yağ');
  assert.equal(render(2+2/3,'yemek kaşığı','toz tarhana'),'2 yemek kaşığı + 2 çay kaşığı toz tarhana');
  assert.equal(render(2/3,'çay kaşığı','tuz'),'dörtte üç çay kaşığı tuz');
  assert.equal(render(0.5,'çay kaşığı','tuz'),'yarım çay kaşığı tuz');
  // Under a quarter teaspoon the honest measure is the one a hand makes.
  assert.equal(render(0.15,'çay kaşığı','nane'),'bir tutam nane');
  // ...but a pinch of oil is nonsense, so liquids keep the spoon.
  assert.equal(render(0.15,'çay kaşığı','zeytinyağı'),'çeyrek çay kaşığı zeytinyağı');
  assert.equal(render(0.4,'su bardağı','su'),'80 ml su');
  assert.equal(render(0.375,'su bardağı','su'),'75 ml su');
  assert.equal(render(0.5,'su bardağı','süt'),'yarım su bardağı süt (100 ml)');
  assert.equal(render(0.8,'su bardağı','su'),'160 ml su');
  assert.equal(render(1.5,'yemek kaşığı','salça'),'1,5 yemek kaşığı salça');
  assert.equal(render(1.8,'çay kaşığı','tuz'),'2 çay kaşığı tuz');
  assert.equal(render(0.1875,'demet','maydanoz'),'1 demet maydanoz · %20 kadarı');
  assert.equal(render(0.35,'paket','lazanya yaprağı'),'1 paket lazanya yaprağı · üçte biri kadarı');
  assert.equal(render(1.35,'paket','lazanya yaprağı'),'2 paket lazanya yaprağı · 1 paket ve üçte biri kadarı');
  assert.equal(render(0.5,'kilogram','patates'),'500 gram patates');
  assert.equal(render(166.67,'gram','kıyma'),'165 gram kıyma');
  assert.equal(s.eval('ingredientText({amount:[4,5],unit:"adet",name:"tavuk pirzola"},{yieldPeople:6},2)'),'2 adet tavuk pirzola');
  assert.equal(s.eval('ingredientText({amount:[2,3],unit:"su bardağı",name:"su"},{yieldPeople:4},2)'),'200–300 ml su');
  assert.equal(render(0.25,'litre','tavuk suyu'),'250 mililitre tavuk suyu');
  assert.equal(s.eval('ingredientText({amount:2,unit:"adet",name:"patates"},{yieldPeople:7},8)'),'3 adet patates · 2 adet ve çeyreği kadarı');
  assert.equal(s.eval('ingredientText({amount:1,unit:"kase",name:"bezelye"},{yieldPeople:7},8)'),'1 kase bezelye');
  assert.equal(s.eval('ingredientText({amount:1,unit:"tatlı kaşığı",name:"kekik"},{yieldPeople:7},8)'),'2,5 çay kaşığı kekik');
  assert.equal(s.eval('ingredientText({amount:.25,unit:"çay bardağı",name:"yağ"},{yieldPeople:7},8)'),'30 ml yağ');
  // Every sourced line, at every headcount, stays free of both traps.
  for (const recipe of meals.filter(m => m.status === 'sourced')) for (let count=1; count<=8; count++) for (const item of recipe.ingredients) {
    const text = s.eval(`ingredientText(${JSON.stringify(item)},${JSON.stringify({yieldPeople:recipe.yieldPeople})},${count})`);
    // The malzeme adı itself may quote the source ("kaynakta yaklaşık 2 kg");
    // what must stay clean is the measurement the app prints around it.
    const measure = text.replace(typeof item === 'string' ? item : item.name,'');
    assert(!measure.includes('/'),`${recipe.id}, ${count} kişi: satirda egik cizgi: ${text}`);
    assert(!measure.includes('yaklaşık'),`${recipe.id}, ${count} kişi: satirda yaklasik: ${text}`);
  }
});
test('Every sourced ingredient stays readable for one through eight people', () => {
  const s=setup();
  for (const recipe of meals.filter(m => m.status === 'sourced')) for (let count=1; count<=8; count++) for (const item of recipe.ingredients) {
    const text=s.eval(`ingredientText(${JSON.stringify(item)},${JSON.stringify({yieldPeople:recipe.yieldPeople})},${count})`);
    assert(!/\d+,\d{2,}/.test(text), `${recipe.name}, ${count} kişi: ${text}`);
    assert(!/\b0,\d+\s+(adet|diş|dal|yaprak|dilim|parça|paket|demet|kase|fincan|kutu)\b/.test(text), `${recipe.name}, ${count} kişi: ${text}`);
  }
});
test('Changing filters marks the existing card and favorites honor the filter', () => {
  const s=setup();s.eval('showMeal(byId.get("meal-10"))');s.elements.heart.click();
  s.elements.time.value='30';s.elements.time.onchange();assert.equal(s.elements.filterWarning.hidden,false);
  // The favorite still exists; only the filter hides it, and the message must
  // say so rather than reading like the favorites were wiped.
  s.elements.favoritesButton.click();
  assert(s.elements.toast.textContent.includes('1 favoriniz duruyor'));
  assert(s.elements.toast.textContent.includes('silinmedi'));
  s.elements.spin.click();assert(s.eval('current.time<=30'));assert.equal(s.elements.filterWarning.hidden,true);
});
test('Favorite button explains an empty result instead of implying lost favorites', () => {
  const s=setup();
  // No favorites at all: say how to make one, never "none match the filter".
  s.elements.favoritesButton.click();
  assert(s.elements.toast.textContent.includes('Henüz favoriniz yok'));
  assert(!s.elements.toast.textContent.includes('filtre'));
  // One favorite, and it is the card already on screen.
  s.eval('showMeal(byId.get("meal-10"))');s.elements.heart.click();
  s.elements.favoritesButton.click();
  assert(s.elements.toast.textContent.includes('zaten ekranda'));
  assert(s.elements.toast.textContent.includes('1 favoriniz duruyor'));
  // A second favorite is reachable, and the card is scrolled into view since
  // the button sits in the top bar, far above the card.
  s.eval('showMeal(byId.get("meal-79"))');s.elements.heart.click();
  const scrolls=s.elements.mealCard.scrolledIntoView||0;
  s.elements.favoritesButton.click();
  assert.equal(s.eval('current.id'),'meal-10');
  assert.equal(s.elements.mealCard.scrolledIntoView,scrolls+1);
  assert.equal(s.eval('saved.favorites.length'),2);
});
test('Source link navigates reliably and has a copy fallback; the decorative blob is removed', async () => {
  const s=setup();
  s.eval('showMeal(byId.get("meal-79"))');
  assert.equal(s.elements.sourceLink.attrs.href,meal(79).source);
  s.elements.sourceLink.click();
  assert.equal(s.context.window.location.assigned,meal(79).source);
  assert(!html.includes('target="_blank"'));
  await s.elements.copySource.click();
  assert.equal(s.context.window.prompted.value,meal(79).source);
  const css=fs.readFileSync(path.join(root,'dist/style.css'),'utf8');
  // The decorative radial circle once used percentage stops, which resolved
  // against the growing document and swelled after every result. Any fixed
  // background (flat colour or gradient) is fine; a percentage radial is not.
  assert(/body\{background:(var\(--paper\)|linear-gradient\(135deg)/.test(css));
  assert(!css.includes('radial-gradient(circle 360px'));
  assert(!/radial-gradient\(circle at [^)]*\d%\s+0\s+\d/.test(css));
  for (const recipe of meals.filter(m => m.status === 'sourced')) {
    s.eval(`showMeal(byId.get(${JSON.stringify(recipe.id)}))`);
    assert.equal(s.elements.sourceLink.attrs.href,recipe.source);
    assert.doesNotThrow(()=>new URL(recipe.source));
  }
});
test('Time exclusion indicator explains hidden recipes and clears only the time limit', () => {
  const s=setup();
  s.elements.time.value='30'; s.elements.time.onchange();
  assert.equal(s.elements.timeExclusions.hidden,false);
  assert(/süreden uzun|toplam süresi net değil/.test(s.elements.timeExclusionText.textContent));
  s.elements.calorie.value='900'; s.elements.calorie.onchange();
  s.elements.clearTime.click();
  assert.equal(s.elements.time.value,'Infinity');
  assert.equal(s.elements.calorie.value,'900');
  assert.equal(s.elements.timeExclusions.hidden,true);
});
test('First menu batch has 20 sourced pairing records and renders every curated companion', () => {
  const ids=['meal-0','meal-1','meal-2','meal-4','meal-5','meal-6','meal-7','meal-8','meal-9','meal-10','meal-12','meal-13','meal-14','meal-15','meal-16','meal-17','meal-18','meal-19','meal-20','meal-21'];
  assert.deepEqual(Object.keys(menuPairings),ids);
  for(const id of ids){
    const pairing=menuPairings[id];
    assert(pairing.source.startsWith('https://'));
    assert(pairing.items.length>0);
    assert(pairing.items.every(item=>item.name&&item.kind));
  }
  const s=setup();
  s.eval('showMeal(byId.get("meal-7"))');
  assert.equal(s.elements.menuBuilder.hidden,false);
  s.elements.buildMenu.click();
  assert.equal(s.elements.menuSuggestions.hidden,false);
  assert.equal(s.elements.menuSuggestions.children.length,new Set(menuPairings['meal-7'].items.map(x=>x.kind)).size+1);
  assert.equal(s.elements.menuSuggestions.children[1].children[1].textContent,'Haşlanmış brokoli veya Fırın patates');
  assert.equal(s.elements.menuSuggestions.children[0].children[1].textContent,'Pirinç pilavı');
  s.elements.buildMenu.click();
  assert.equal(s.elements.menuSuggestions.hidden,true);
  s.eval('showMeal(byId.get("meal-19"))');
  s.elements.buildMenu.click();
  assert.equal(s.elements.menuSuggestions.children[2].children[0].textContent,'Ana yemek · isteğe bağlı');
});
test('Selected companions merge exact units, scale, preserve checks, and reset with a new main', () => {
  const s=setup();
  s.eval('showMeal(byId.get("meal-19"))'); s.elements.buildMenu.click();
  const select=s.elements.menuSuggestions.children[0].children[2];
  select.value='meal-23'; select.onchange();
  assert(s.elements.ingredientsNote.textContent.includes('Mercimek Çorbası'));
  assert.equal(s.eval('selectedSides.size'),1);
  assert.equal(s.eval('shoppingGroups().flatMap(g => g.rows).filter(r => typeof r.item === "object" && r.item.name === "tereyağı" && r.item.unit === "yemek kaşığı").length'),1);
  s.eval('selectedSides.set("test", {...current, id:"test"})');
  // Per-recipe grouping: a duplicated companion produces its own separate
  // row rather than merging its amount into the main recipe's row.
  assert.equal(s.eval('shoppingGroups().flatMap(g => g.rows).filter(r => typeof r.item === "object" && r.item.name === "tereyağı").length'), 2);
  assert.equal(s.eval('shoppingGroups().flatMap(g => g.rows).find(r => typeof r.item === "object" && r.item.name === "tereyağı").item.amount'), 4 * 2 / meal(19).yieldPeople);
  s.eval('selectedSides.delete("test")');
  const before=s.eval('shoppingGroups().flatMap(g => g.rows).find(r => typeof r.item === "object" && r.item.name === "tereyağı" && r.item.unit === "yemek kaşığı").item.amount');
  // index 0 is now the "Ana tarif · ..." heading li (added once >1 group is
  // shown); the first real ingredient row follows it at index 1.
  s.elements.ingredients.children[1].children[0].children[0].checked=true;
  s.elements.plus.click();
  assert(s.elements.ingredients.children[1].children[0].children[0].checked);
  assert.equal(s.eval('shoppingGroups().flatMap(g => g.rows).find(r => typeof r.item === "object" && r.item.name === "tereyağı" && r.item.unit === "yemek kaşığı").item.amount'),before*1.5);
  select.value=''; select.onchange(); assert.equal(s.eval('selectedSides.size'),0);
  assert.equal(s.elements.ingredients.children.length,meal(19).ingredients.length);
  select.value='meal-23'; select.onchange();
  s.eval('showMeal(byId.get("meal-1"))'); assert.equal(s.eval('selectedSides.size'),0);
});
test('Legacy recipe repairs contain source quantities and disclose uncertain amounts', () => {
  for(const id of [12,23,54,57,71]) assert(meal(id).ingredients.every(x=>typeof x==='object'));
  assert.equal(meal(23).ingredients.find(x=>x.name==='et suyu tablet').amount,1);
  assert.equal(meal(54).ingredients.find(x=>x.name==='yumurta').amount,4);
  assert.equal(meal(57).ingredients.find(x=>x.name==='un').amount,3);
  assert.equal(meal(71).ingredients[0].amount,2);
  assert.equal(meal(71).ingredients[0].unit,'kilogram');
  assert(meal(71).note.includes('ön ısıtma'));
  assert.equal(meal(0).ingredients[0].amount.join(','),'2,3');
  assert.equal(meal(0).cal,null);
  assert.equal(meal(12).ingredients.at(-1).amount.join(','),'0.5,1');
  const s=setup();
  for(const id of [0,12,23,54,57,71]) {
    s.eval(`showMeal(byId.get("meal-${id}"))`);
    for(let people=1;people<=8;people++) {
      const lines=s.eval(`current.ingredients.map(x=>ingredientText(x,current,${people}))`);
      assert(lines.every(x=>x&&!/NaN|undefined|\[object Object\]/.test(x)));
    }
  }
});
test('Homemade hamburger includes proofing and patty rest in its selectable total', () => {
  const hamburger=meal(36);
  assert.equal(hamburger.time,100);
  assert(hamburger.waitLabel.includes('95–100 dk'));
  assert(!matchesMeal(hamburger,{people:2,mode:'Tümü',maxTime:30,calorie:'any',includeIdeas:false}));
});
test('Unknown cards and exported text never print fabricated numbers', () => {
  // Doğrulanmamış fikir örneği: meal-11 10. pakette yayına alındığı için
  // hâlâ fikir olan bir kayda (Margarita Pizza) geçildi.
  const s=setup();s.eval('showMeal(byId.get("meal-166"))');
  assert.equal(s.elements.mealTime.textContent,'Doğrulanmadı');assert.equal(s.elements.perCal.textContent,'Bilinmiyor');assert.equal(s.elements.ingredients.children.length,0);
  const text = () => s.eval('shareBlocks(current,2).map(b => b.text).join(" ")');
  assert(text().includes('doğrulanmadı'));
  assert(!text().includes('null'));
  // Unknown calorie collapses into one "Kalori" cell instead of repeating
  // "Bilinmiyor" in both the per-portion and per-person slots.
  assert(s.elements.totalCalCell.hidden);
  assert.equal(s.elements.perCalLabel.textContent,'Kalori');
  assert(s.elements.metrics.classList.contains('cal-unknown'));
  // An unverified idea card offers no measurements at all, only the warning.
  assert(!s.eval('shareBlocks(current,2).some(b => b.type === "item")'));
  assert(!s.eval('shareBlocks(current,2).some(b => b.type === "cal")'));
  // A sourced recipe whose source gave no calorie says so once, per person.
  s.eval('showMeal(byId.get("meal-206"))');
  assert(s.eval('shareBlocks(current,2).some(b => b.text === "Kişi başı kalori bilinmiyor")'));
  assert(!s.eval('shareBlocks(current,2).some(b => b.text.includes("1 porsiyon"))'));
  // A recipe with a real calorie value keeps both cells and the split line.
  s.eval('showMeal(byId.get("meal-1"))');
  assert(!s.elements.totalCalCell.hidden);
  assert.equal(s.elements.perCalLabel.textContent,'Kaynak porsiyonu');
  assert(!s.elements.metrics.classList.contains('cal-unknown'));
});
test('Share success, download fallback, cancel and failure release the button (mock APIs)', async () => {
  const s=setup();s.eval('showMeal(byId.get("meal-10"))');
  await s.elements.share.click();assert(s.created.some(e=>e.tagName==='a'&&e.clicked));assert(!s.elements.share.disabled);
  let shared=false;s.navigator.canShare=()=>true;s.navigator.share=async()=>{shared=true;};await s.elements.share.click();assert(shared);
  s.navigator.share=async()=>{throw Object.assign(Error('cancel'),{name:'AbortError'});};await s.elements.share.click();assert(s.elements.toast.textContent.includes('iptal'));
  s.navigator.share=async()=>{throw Error('fail');};await s.elements.share.click();assert(s.elements.toast.textContent.includes('paylaşılamadı'));assert(!s.elements.share.disabled);
});
test('Every script/link/SW precache asset exists and catalog loads before app', () => {
  for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {const url=match[1];if(url.startsWith('#')||url.startsWith('http'))continue;assert(fs.existsSync(path.join(root,'dist',url.split('?')[0])),url);}
  assert(html.indexOf('src="catalog.js')<html.indexOf('src="app.js'));
  const sw=fs.readFileSync(path.join(root,'dist/sw.js'),'utf8');
  const assets=vm.runInNewContext(sw.split('self.addEventListener')[0]+'ASSETS');
  assets.forEach(asset=>assert(fs.existsSync(path.join(root,'dist',asset)),asset));
  assert(sw.includes("key.startsWith('ne-pisse-')"));
});
test('Ingredient lines stay shopping-list length; provenance lives in the note', () => {
  // A card line is read in the kitchen. Audit wording ("adımlarda kullanılıyor,
  // kaynak malzeme listesinde ölçü vermiyor") belongs in the note field, which
  // no longer reaches the screen at all.
  for(const m of meals) for(const item of m.ingredients) {
    const text = typeof item === 'string' ? item : item.name;
    assert(text.length<=60,`${m.id} malzeme satiri kart icin fazla uzun (${text.length}): ${text}`);
    assert(!/adımlarda|malzeme listesinde|doğrulandı|aralık olarak/.test(text),`${m.id} malzeme satirinda denetim dili: ${text}`);
    assert(!/^not:/.test(text),`${m.id} not satiri malzeme listesinde: ${text}`);
  }
  // The wait label is the one caveat still shown (in fine print) because it
  // changes the evening's plan; it stays a practical sentence, not an audit entry.
  for(const m of meals.filter(m => m.waitLabel)) {
    assert(m.waitLabel.length<=100,`${m.id} bekleme etiketi ince yazi icin uzun (${m.waitLabel.length})`);
    assert(!/başlığının|uyuşmuyor|adımlarında net değil/.test(m.waitLabel),`${m.id} bekleme etiketinde denetim dili`);
  }
  // The audit note itself must not be rendered anywhere on the card.
  const s=setup(); s.eval('showMeal(byId.get("meal-206"))');
  assert(!s.elements.mealMenu.textContent.includes(meal(206).note));
  assert(!s.elements.portionNote.textContent.includes(meal(206).note));
  assert(s.elements.mealMenu.textContent.includes(meal(206).variant));
  assert(s.elements.mealMenu.textContent.includes(meal(206).yieldLabel));
});
test('Share card carries the whole menu: main recipe, chosen companions, per-person calorie', () => {
  const s=setup();
  s.eval('showMeal(byId.get("meal-19"))');
  // Alone: one ingredient run, no per-recipe headings, no source or audit note.
  let blocks=s.eval('shareBlocks(current,2)');
  assert.equal(blocks.filter(b => b.type==='group').length,0);
  assert(blocks.some(b => b.type==='item'));
  assert.equal(blocks[0].type,'name'); assert.equal(blocks[0].text,meal(19).name);
  const joined = () => s.eval('shareBlocks(current,2).map(b => b.text).join(" | ")');
  assert(!joined().includes('http'),'paylasim karti kaynak baglantisi tasimamali');
  assert(!joined().includes(meal(19).note),'paylasim karti denetim notu tasimamali');
  assert(joined().includes('Kişi başı'));
  // With a companion chosen, its ingredients join the card under their own
  // heading, exactly as the on-screen shopping list groups them.
  s.elements.buildMenu.click();
  const select=s.elements.menuSuggestions.children[0].children[2];
  select.value='meal-23'; select.onchange();
  blocks=s.eval('shareBlocks(current,2)');
  const groups=blocks.filter(b => b.type==='group');
  assert.equal(groups.length,2);
  assert(groups[0].text.startsWith('Ana tarif · '+meal(19).name));
  assert(groups[1].text.startsWith('Eşlikçi · '+meal(23).name));
  const rows=s.eval('shoppingGroups().flatMap(g => g.rows).length');
  assert.equal(blocks.filter(b => b.type==='item').length,rows,'kartta eksik malzeme var');
  // Companion calories are not in the sources, so the figure stays the main
  // recipe's and says so instead of quietly under-reporting the menu.
  assert(blocks.find(b => b.type==='cal').text.includes('yalnızca ana tarif'));
});
test('Ninth package sources six world/fast-food recipes in people and hides no wait', () => {
  const batch = ['meal-206','meal-188','meal-211','meal-197','meal-195','meal-183'];
  for(const id of batch) {
    const m = meals.find(x => x.id === id);
    assert(m,'Katalog kaydi yok: '+id);
    assert.equal(m.status,'sourced',id+' sourced olmali');
    assert(m.source&&m.source.startsWith('https://'),id+' kaynak baglantisi yok');
    assert(m.checkedAt,id+' checkedAt yok');
    // Portion must be in people: "4 adet" or "1 tepsi" was rejected upstream.
    assert(Number.isFinite(m.yieldPeople)&&m.yieldPeople>0,id+' kisi sayisi yok');
    assert(/kişilik/.test(m.yieldLabel),id+' porsiyonu kisi cinsinden degil: '+m.yieldLabel);
    assert(m.ingredients.length>0,id+' malzemesiz');
    // Calories are the source's own per-portion figure or nothing at all.
    assert(m.cal===null||m.cal>0,id+' kalori yer tutucu');
    for(const item of m.ingredients) {
      // An unmeasured ingredient must say the source withheld the amount,
      // so a reader can tell a gap from a number we invented.
      if(typeof item==='string') { assert(item.includes('kaynak'),id+' olcusuz malzeme kaynagi anmiyor: '+item); continue; }
      assert(item.name&&item.unit,id+' malzeme adi/birimi eksik');
      assert(Number.isFinite(item.amount)&&item.amount>0,id+' malzeme miktari sayi degil');
      for(let people=1;people<=8;people++) assert(Number.isFinite(item.amount*people/m.yieldPeople));
    }
    if(m.extraPrep) assert(m.waitLabel,id+' extraPrep true ama bekleme aciklamasi yok');
  }
  // Squid rests in the fridge for 3+ hours on top of its 45 active minutes, so
  // it must stay out of every finite time filter even though time is a number.
  const kalamar = meals.find(m => m.id === 'meal-183');
  assert.equal(kalamar.time,45); assert.equal(kalamar.extraPrep,true);
  assert(/3 saat/.test(kalamar.waitLabel));
  assert(!matchesMeal(kalamar,{maxTime:240,people:2,calorie:'any'}));
  assert(matchesMeal(kalamar,{maxTime:Infinity,people:2,calorie:'any'}));
  // Only the two sources that printed a per-portion figure carry calories.
  assert.equal(meals.find(m => m.id === 'meal-195').cal,285);
  assert.equal(kalamar.cal,315);
  for(const id of ['meal-206','meal-188','meal-211','meal-197']) assert.equal(meals.find(m => m.id === id).cal,null,id+' kaynak kalori vermiyordu');
  // Pho's 1.5 hour simmer is the source's own cook time, not a hidden wait.
  const pho = meals.find(m => m.id === 'meal-197');
  assert.equal(pho.time,pho.prep+pho.cook); assert.equal(pho.extraPrep,false);
});
test('Fonts are self-hosted, precached, and never fetched from a CDN', () => {
  const css=fs.readFileSync(path.join(root,'dist/style.css'),'utf8');
  const sw=fs.readFileSync(path.join(root,'dist/sw.js'),'utf8');
  const assets=vm.runInNewContext(sw.split('self.addEventListener')[0]+'ASSETS');
  const faces=[...css.matchAll(/@font-face\{[^}]*\}/g)].map(m=>m[0]);
  assert(faces.length>=6,'font-face bloklari eksik');
  const families=new Set();
  for(const face of faces) {
    const url=face.match(/url\(([^)]+)\)/);
    assert(url,'font-face src yok: '+face.slice(0,60));
    // An external font URL would break the offline install the SW promises.
    assert(!/^https?:|\/\//.test(url[1]),'font CDN`den cekiliyor: '+url[1]);
    assert(fs.existsSync(path.join(root,'dist',url[1])),'font dosyasi yok: '+url[1]);
    assert(assets.includes(url[1]),'font onbellek listesinde yok: '+url[1]);
    // Turkish ğ Ğ ş Ş İ live in latin-ext, so every family needs both ranges.
    assert(/unicode-range:/.test(face),'unicode-range yok: '+url[1]);
    families.add(face.match(/font-family:\s*([^;]+)/)[1].trim());
  }
  for(const family of families) {
    const ext=faces.filter(f=>f.includes(`font-family:${family}`)&&f.includes('U+0100-02BA'));
    assert(ext.length,`${family} icin latin-ext yok; Turkce ğ ş İ kirilir`);
  }
  assert(!/fonts\.googleapis|fonts\.gstatic|@import/.test(css),'CSS disaridan font cekiyor');
  assert(!/fonts\.googleapis|fonts\.gstatic/.test(html),'HTML disaridan font cekiyor');
});
test('Spin always scrolls the meal card into view; "Başka yemek" only when it drifted off screen', () => {
  const s = setup();
  // "Bu akşamı seç" reveals the card, which sits below the fold on a phone.
  s.elements.spin.click();
  assert.equal(s.elements.mealCard.scrolledIntoView, 1);
  assert.equal(s.elements.mealCard.lastScrollOpts.block, 'start');
  assert.equal(s.elements.mealCard.lastScrollOpts.behavior, 'smooth');
  // Card is fully within the viewport (the default stub rect) — "Başka
  // yemek" is itself inside it, so scrolling again would just be a jolt.
  s.elements.again.click();
  assert.equal(s.elements.mealCard.scrolledIntoView, 1);
  // On a phone the freshly revealed card can end up partly below the fold
  // (e.g. the user scrolled down to read ingredients) — "Başka yemek" must
  // then bring it back into view instead of leaving the name off screen.
  s.elements.mealCard.rect = {top: 500, bottom: 1200, left: 0, right: 400};
  s.elements.again.click();
  assert.equal(s.elements.mealCard.scrolledIntoView, 2);
  assert.equal(s.elements.mealCard.lastScrollOpts.block, 'start');
  // Repeated spins keep scrolling regardless, since the user may have
  // scrolled away.
  s.elements.mealCard.rect = {top: 0, bottom: 0, left: 0, right: 400};
  s.elements.spin.click();
  assert.equal(s.elements.mealCard.scrolledIntoView, 3);
});
test('Tenth package: the catalog carries exactly what the package file recorded', () => {
  // research/package-10.cjs is the written record of what was read off each
  // source page. If the catalog and the record drift apart, one of them was
  // edited by hand and the provenance claim stops being true.
  const pkg = require('../research/package-10.cjs');
  // The catalog is evaluated in a separate vm realm, so its objects have a
  // different prototype; compare by value with a key-order-independent dump.
  const stable = value => JSON.stringify(value, (key,inner) => inner && !Array.isArray(inner) && typeof inner === 'object'
    ? Object.fromEntries(Object.keys(inner).sort().map(k => [k,inner[k]])) : inner);
  for(const row of [...pkg.applied,...pkg.fixes]) {
    const live = meals.find(m => m.id === row.id);
    assert(live,'Katalogda kayit yok: '+row.id);
    for(const [key,value] of Object.entries(row)) {
      assert.equal(stable(live[key]),stable(value),`${row.id}.${key} katalogda paket dosyasindan farkli`);
    }
  }
  // Twelve recipes went live: five staged in package 8 plus seven sourced now.
  assert.equal(pkg.applied.length,12);
  for(const row of pkg.applied) {
    const live = meals.find(m => m.id === row.id);
    assert.equal(live.status,'sourced',row.id+' sourced olmali');
    assert(live.source&&live.source.startsWith('https://'),row.id+' kaynak baglantisi yok');
    assert(live.checkedAt,row.id+' checkedAt yok');
    assert(Number.isFinite(live.yieldPeople)&&live.yieldPeople>0,row.id+' kisi sayisi yok');
    assert(/kişilik/.test(live.yieldLabel),row.id+' porsiyonu kisi cinsinden degil: '+live.yieldLabel);
    assert(live.cal===null||live.cal>0,row.id+' kalori yer tutucu');
    assert(live.ingredients.length>0,row.id+' malzemesiz');
    if(live.extraPrep) assert(live.waitLabel,row.id+' extraPrep true ama bekleme aciklamasi yok');
  }
  // The three sources that printed no usable per-person calorie carry none.
  for(const id of ['meal-180','meal-184','meal-233','meal-236','meal-237','meal-223']) {
    assert.equal(meals.find(m => m.id === id).cal,null,id+' kaynak kisi basi kalori vermiyordu');
  }
  assert.equal(meals.find(m => m.id === 'meal-174').cal,339);
  // Chia pudding's two-hour fridge rest is not in the source's 5 minutes, so
  // it stays out of every finite time filter even though time is a number.
  const chia = meals.find(m => m.id === 'meal-236');
  assert.equal(chia.time,5); assert.equal(chia.extraPrep,true); assert(/2 saat/.test(chia.waitLabel));
  assert(!matchesMeal(chia,{maxTime:240,people:2,calorie:'any'}));
  assert(matchesMeal(chia,{maxTime:Infinity,people:2,calorie:'any'}));
  // The two weak categories are the reason this package exists.
  const share = mode => meals.filter(m => m.mode === mode && m.status === 'sourced').length;
  assert.equal(share('Kahvaltı'),15); assert.equal(share('Fast Food / Kaçamak'),15);
});
test('Piece-count yields are converted to people out loud, never counted as people', () => {
  // "10 adet" was being read as "10 kişilik": a tray of stuffed vegetables
  // fed ten people on paper, so per-person calories and amounts came out at
  // roughly half. The sources give no headcount, so the assumption that
  // converts pieces to people is written on the card itself.
  for(const id of ['meal-110','meal-111','meal-112']) {
    const m = meals.find(x => x.id === id);
    const pieces = Number(m.yieldLabel.match(/^(\d+) adet/)[1]);
    assert.equal(m.yieldPeople,pieces/2,id+' kisi sayisi adet/2 degil');
    assert(/kişi başı 2 adet/.test(m.yieldLabel),id+' varsayim etiketinde yazmiyor');
    assert(/kişi başı 2 dolma varsayıldı/.test(m.note),id+' varsayim notta yazmiyor');
    // A pot of stuffed vegetables does not scale past its own capacity.
    assert.equal(m.batchLimited,true,id+' tencere kapasitesi isaretlenmemis');
    // None of the three sources tied its calorie figure to a person.
    assert.equal(m.cal,null,id+' kalori kaynakta kisi basi degil');
  }
  // Lahmacun set this precedent and must keep it.
  assert.equal(meal(10).yieldPeople,5);
  // Every other sourced record either states people or is one piece per person.
  const suspicious = meals.filter(m => m.status === 'sourced' && m.yieldLabel
    && !/kişi/.test(m.yieldLabel) && !/^(\d+) (adet|porsiyon|kase|tabaklık)/.test(m.yieldLabel));
  assert.equal(suspicious.length,0,'porsiyonu kisiye cevrilmemis kayit: '+suspicious.map(m => `${m.id} (${m.yieldLabel})`).join(', '));
});
test('A person range in the source becomes its upper bound, never an invented middle', () => {
  // yieldPeople answers "how many people can this batch feed at most", which
  // is what the time filter checks against (people > yieldPeople hides the
  // card). Taking the lower end hid recipes the source says it can feed;
  // taking the middle (4–6 → 5) printed a number no source ever gave.
  const ranged = meals.filter(m => m.status === 'sourced' && /^\d+\s*[-–]\s*\d+ kişilik/.test(m.yieldLabel || ''));
  assert(ranged.length >= 8,'aralikli kayit sayisi beklenenden az: '+ranged.length);
  for(const m of ranged) {
    const upper = Number(m.yieldLabel.match(/[-–]\s*(\d+) kişilik/)[1]);
    assert.equal(m.yieldPeople,upper,`${m.id} aralik ust siniri ${upper} degil ${m.yieldPeople}`);
  }
  // A "1-2 kişilik" breakfast has to survive the default two-person search.
  const toast = meals.find(m => m.id === 'meal-233');
  assert(matchesMeal(toast,{maxTime:60,people:2,calorie:'any'}));
});
(async()=>{for(const t of tests){await t.run();console.log('PASS',t.name);}console.log(`${tests.length} tests passed; browser rendering and native device APIs NOT tested.`);})().catch(error=>{console.error(error);process.exitCode=1;});
