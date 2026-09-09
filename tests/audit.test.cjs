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
  assert.equal(meals.length,233); assert.equal(Object.keys(mealAliases).length,4);
  assert.equal(meals.length+Object.keys(mealAliases).length+1,238);
  assert.equal(new Set(meals.map(m => m.id)).size,233);
  assert.equal(new Set(meals.map(m => m.name.toLocaleLowerCase('tr-TR'))).size,233);
  assert.equal(meals.filter(m => m.status === 'sourced').length,135);
  assert.equal(meals.filter(m => m.status === 'idea').length,98);
  assert(!meal(190));
  Object.values(mealAliases).forEach(id => assert(meals.some(m => m.id === id)));
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
  assert.equal(meal(86).status,'idea');
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
  assert.equal(meal(121).status,'idea');
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
    remove() { this.removed=true; }
    closest() { return this; }
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]); assert.equal(new Set(ids).size,ids.length);
  const elements = Object.fromEntries(ids.map(id=>[id,new Element()]));
  elements.time.value='Infinity'; elements.calorie.value='any';
  const created=[]; const canvasContext={measureText:text=>({width:text.length*18}),fillRect(){},fillText(){}};
  const document={querySelector:s=>{ assert(s.startsWith('#')); assert(elements[s.slice(1)], 'Missing HTML element '+s); return elements[s.slice(1)]; },querySelectorAll:()=>[],body:new Element('body'),createElement:tag=>{const e=new Element(tag); created.push(e); if(tag==='canvas'){e.getContext=()=>canvasContext;e.toBlob=cb=>cb(new Blob(['stub'],{type:'image/png'}));} return e;}};
  const navigator={}; const timers=[];
  const location={assigned:null,assign(url){this.assigned=url;},reload(){this.reloaded=true;}};
  const context=vm.createContext({document,navigator,window:{addEventListener(){},location,prompt(label,value){this.prompted={label,value};}},localStorage:{getItem(){if(storageThrows)throw Error('denied');return storage;},setItem(k,v){if(storageThrows)throw Error('denied');storage=v;}},setTimeout:(fn)=>{timers.push(fn);return timers.length;},clearTimeout(){},Blob,File:class{constructor(parts,name,options){this.name=name;this.type=options.type;}},URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}},console});
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
  assert.equal(render(0.5),'1 adet soğan al · yaklaşık yarısını kullan');
  assert.equal(render(2/3,'diş','sarımsak'),'1 diş sarımsak al · yaklaşık 2/3’ünü kullan');
  assert.equal(render(2/3,'yemek kaşığı','sıvı yağ'),'2 çay kaşığı sıvı yağ');
  assert.equal(render(2+2/3,'yemek kaşığı','toz tarhana'),'2 yemek kaşığı + 2 çay kaşığı toz tarhana');
  assert.equal(render(2/3,'çay kaşığı','tuz'),'yaklaşık 3/4 çay kaşığı tuz');
  assert.equal(render(0.4,'su bardağı','su'),'yaklaşık 80 ml su');
  assert.equal(render(0.375,'su bardağı','su'),'yaklaşık 75 ml su');
  assert.equal(render(0.8,'su bardağı','su'),'yaklaşık 160 ml su');
  assert.equal(render(1.5,'yemek kaşığı','salça'),'1,5 yemek kaşığı salça');
  assert.equal(render(1.8,'çay kaşığı','tuz'),'yaklaşık 2 çay kaşığı tuz');
  assert.equal(render(0.1875,'demet','maydanoz'),"1 demet maydanoz al · yaklaşık %20'sini kullan");
  assert.equal(render(0.5,'kilogram','patates'),'500 gram patates');
  assert.equal(render(166.67,'gram','kıyma'),'yaklaşık 165 gram kıyma');
  assert.equal(s.eval('ingredientText({amount:[4,5],unit:"adet",name:"tavuk pirzola"},{yieldPeople:6},2)'),'2 adet tavuk pirzola');
  assert.equal(s.eval('ingredientText({amount:[2,3],unit:"su bardağı",name:"su"},{yieldPeople:4},2)'),'yaklaşık 200–300 ml su');
  assert.equal(render(0.25,'litre','tavuk suyu'),'250 mililitre tavuk suyu');
  assert.equal(s.eval('ingredientText({amount:2,unit:"adet",name:"patates"},{yieldPeople:7},8)'),"3 adet patates al · yaklaşık 2 adet ve birinin çeyreğini kullan");
  assert.equal(s.eval('ingredientText({amount:1,unit:"kase",name:"bezelye"},{yieldPeople:7},8)'),'yaklaşık 1 kase bezelye');
  assert.equal(s.eval('ingredientText({amount:1,unit:"tatlı kaşığı",name:"kekik"},{yieldPeople:7},8)'),'yaklaşık 2,5 çay kaşığı kekik');
  assert.equal(s.eval('ingredientText({amount:.25,unit:"çay bardağı",name:"yağ"},{yieldPeople:7},8)'),'yaklaşık 30 ml yağ');
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
  s.elements.favoritesButton.click();assert(s.elements.toast.textContent.includes('uygun başka favori yok'));
  s.elements.spin.click();assert(s.eval('current.time<=30'));assert.equal(s.elements.filterWarning.hidden,true);
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
  assert(css.includes('body{background:linear-gradient(135deg'));
  assert(!css.includes('radial-gradient(circle 360px'));
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
  assert.equal(s.eval('shoppingItems().filter(r => typeof r.item === "object" && r.item.name === "tereyağı" && r.item.unit === "yemek kaşığı").length'),1);
  s.eval('selectedSides.set("test", {...current, id:"test"})');
  assert.equal(s.eval('shoppingItems().find(r => typeof r.item === "object" && r.item.name === "tereyağı").item.amount'), 4 * 2 / meal(19).yieldPeople * 2);
  s.eval('selectedSides.delete("test")');
  const before=s.eval('shoppingItems().find(r => typeof r.item === "object" && r.item.name === "tereyağı" && r.item.unit === "yemek kaşığı").item.amount');
  s.elements.ingredients.children[0].children[0].children[0].checked=true;
  s.elements.plus.click();
  assert(s.elements.ingredients.children[0].children[0].children[0].checked);
  assert.equal(s.eval('shoppingItems().find(r => typeof r.item === "object" && r.item.name === "tereyağı" && r.item.unit === "yemek kaşığı").item.amount'),before*1.5);
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
  const s=setup();s.eval('showMeal(byId.get("meal-11"))');
  assert.equal(s.elements.mealTime.textContent,'Doğrulanmadı');assert.equal(s.elements.perCal.textContent,'Bilinmiyor');assert.equal(s.elements.ingredients.children.length,0);
  assert(s.eval('shareLines(current,2).join(" ").includes("doğrulanmadı")'));
  assert(!s.eval('shareLines(current,2).join(" ").includes("null")'));
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
(async()=>{for(const t of tests){await t.run();console.log('PASS',t.name);}console.log(`${tests.length} tests passed; browser rendering and native device APIs NOT tested.`);})().catch(error=>{console.error(error);process.exitCode=1;});
