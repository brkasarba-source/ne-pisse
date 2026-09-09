const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const rows=require('../research/package-8.cjs');
const model=vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../dist/catalog.js'),'utf8')+';({meals,matchesMeal})');
assert.equal(new Set(rows.map(r=>r.id)).size,rows.length);
for(const row of rows){
  const old=model.meals.find(m=>m.id===row.id);
  assert(old,'Known catalog ID'); assert.equal(old.status,'idea','Draft must not be live');
  assert(row.yieldPeople>0); assert(row.source.startsWith('https://'));
  assert(row.ingredients.length>0); assert(row.cal===null||row.cal>0);
  for(const item of row.ingredients){
    if(typeof item==='string'){assert(item.includes('kaynak'));continue;}
    assert(item.name&&item.unit);
    const quantities=Array.isArray(item.amount)?item.amount:[item.amount];
    assert(quantities.every(x=>Number.isFinite(x)&&x>0));
    for(let people=1;people<=8;people++) assert(quantities.every(x=>Number.isFinite(x*people/row.yieldPeople)));
  }
  if(row.time===null){
    assert(row.waitLabel);
    assert(!model.matchesMeal({...old,...row},{maxTime:240,people:1,calorie:'any'}));
  }
}
const pilav=rows.find(r=>r.id==='meal-86');
assert.equal(pilav.time,pilav.prep+pilav.cook+10);
assert(!model.matchesMeal({...model.meals.find(r=>r.id===pilav.id),...pilav},{maxTime:30,people:2,calorie:'any'}));
assert.equal(rows.find(r=>r.id==='meal-121').cal,null);
console.log(`${rows.length} staged recipes passed source-field, portion, amount and hidden-wait checks; no catalog changes or browser tests.`);
