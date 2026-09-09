const fs = require('node:fs');
const vm = require('node:vm');
const file = 'dist/catalog.js';
const source = fs.readFileSync(file, 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(source + ';this.items=meals;this.aliases=mealAliases', context);

const rows = [
 [13,'Yeşil Mercimek Yemeği',4,10,30,null,323,'https://yemek.com/tarif/yesil-mercimek-yemegi/',['1,5 su bardağı yeşil mercimek','2,5 su bardağı su','4 yemek kaşığı zeytinyağı','1 adet kuru soğan','1,5 yemek kaşığı domates salçası','1/2 tatlı kaşığı tuz','1 çay kaşığı karabiber','1 çay kaşığı pul biber','2,5 - 3 su bardağı su','1/4 adet limonun suyu'],'Ön ıslatma gerekiyor; kaynak süre belirtmiyor'],
 [14,'Barbunya Pilaki',6,15,35,50,199,'https://yemek.com/tarif/barbunya-pilaki/',['300 gram barbunya','1 adet havuç','2 adet patates','1 adet soğan','3 diş sarımsak','2 adet domates','1 yemek kaşığı domates salçası','1/2 çay bardağı zeytinyağı','2 su bardağı sıcak su','1 çay kaşığı tuz','1 adet kesme şeker','1/2 demet maydanoz']],
 [15,'Etli Bamya',4,20,25,45,210,'https://yemek.com/tarif/etli-bamya/',['300 gram kuşbaşı et','500 gram bamya','1 adet büyük boy soğan','2 adet domates','1 yemek kaşığı salça','1 çay kaşığı tuz','1/2 çay kaşığı karabiber','2 yemek kaşığı zeytinyağı','1 su bardağı sıcak su']],
 [16,'Karnıyarık',6,30,50,80,430,'https://yemek.com/tarif/karniyarik/',['6 adet patlıcan','3 yemek kaşığı zeytinyağı','1 adet kuru soğan','2 adet yeşil biber','350 gram kıyma','2 diş sarımsak','1/2 tatlı kaşığı biber salçası','1/2 tatlı kaşığı domates salçası','1 çay kaşığı tuz','1 çay kaşığı karabiber','2 adet domates','6 adet sivri biber','1 avuç maydanoz','1 su bardağı ayçiçek yağı']],
 [17,'Patlıcan Musakka',4,15,25,40,462,'https://yemek.com/tarif/patlican-musakka/',['2 yemek kaşığı sıvı yağ','1 adet kuru soğan','3 adet çarliston biber','4 adet patlıcan','300 gram kıyma','1 yemek kaşığı domates salçası','1 çay kaşığı tuz','1 çay kaşığı karabiber','1 çay kaşığı kimyon','2 adet domates','1 su bardağı su','1 su bardağı ayçiçek yağı']],
 [18,'Fırında Tavuk',4,10,45,55,590,'https://yemek.com/tarif/firinda-tavuk/',['1 kilogram tavuk baget','3 yemek kaşığı zeytinyağı','1 tutam karabiber','1 tutam kırmızı toz biber','1 tutam tuz','1 adet kapya biber','1 adet havuç']],
 [19,'Fırında Makarna',6,20,25,45,396,'https://yemek.com/tarif/firinda-makarna/',['1 paket fırın makarna','1,5 su bardağı kaşar peyniri','4 yemek kaşığı tereyağı','2 yemek kaşığı sıvı yağ','3 yemek kaşığı un','2,5 su bardağı süt','1/2 adet muskat cevizi']],
 [20,'İzmir Köfte',4,30,45,75,null,'https://yemek.com/tarif/izmir-kofte/',['500 gram dana kıyma','1 adet kuru soğan','1 diş sarımsak','1/2 adet bayat ekmek içi','1/2 çay bardağı maden suyu','1 adet yumurta','1/4 demet maydanoz','1,5 çay kaşığı tuz','1 tutam kimyon','1/2 çay kaşığı karabiber','2 su bardağı sıvı yağ','2 yemek kaşığı tereyağı','4 adet patates','4 adet biber','2 adet domates','1 yemek kaşığı domates salçası','1 su bardağı domates rendesi','1 su bardağı sıcak su','1 çay kaşığı kekik']],
 [21,'Zeytinyağlı Taze Fasulye',4,20,50,70,83,'https://yemek.com/tarif/zeytinyagli-taze-fasulye/',['750 gram taze fasulye','3 adet soğan','4 adet domates','2 çay kaşığı tuz','1 çay bardağı zeytinyağı']],
 [22,'Zeytinyağlı Enginar',6,10,25,35,null,'https://yemek.com/tarif/zeytinyagli-enginar/',['6 adet enginar','1 kavanoz garnitür','1 adet soğan','1 adet yeşil soğan','12 yemek kaşığı zeytinyağı','1 adet limon','1 su bardağı su','1 yemek kaşığı toz şeker','1 çay kaşığı tuz','1 tutam dereotu']],
 [24,'Ezogelin Çorbası',6,15,45,60,116,'https://yemek.com/tarif/ezogelin-corbasi/',['2 çay bardağı kırmızı mercimek','3 yemek kaşığı pirinç','2 yemek kaşığı bulgur','1 adet kuru soğan','1 tatlı kaşığı domates salçası','1 yemek kaşığı tereyağı','9 su bardağı sıcak su','1 tatlı kaşığı nane','1 tatlı kaşığı tuz','1/2 adet limonun suyu','1 tatlı kaşığı pul biber']],
 [25,'Tarhana Çorbası',6,5,20,25,55,'https://yemek.com/tarif/tarhana-corbasi/',['4 yemek kaşığı toz tarhana','1 yemek kaşığı kuru nane','7 su bardağı su','1 yemek kaşığı sıvı yağ','1 yemek kaşığı tereyağı','1 yemek kaşığı domates salçası','1 çay kaşığı tuz','1 diş sarımsak']],
 [26,'Yayla Çorbası',6,15,35,50,190,'https://yemek.com/tarif/yayla-corbasi/',['2 su bardağı yoğurt','2 yemek kaşığı tereyağı','1,5 yemek kaşığı un','2 çay kaşığı tuz','2 yemek kaşığı limon suyu','1 adet yumurta sarısı','1 tatlı kaşığı pul biber','6 su bardağı su','1 çay bardağı pirinç','2 yemek kaşığı zeytinyağı','1 yemek kaşığı kuru nane']],
 [27,'Izgara Tavuk',7,10,15,25,null,'https://yemek.com/tarif/izgara-tavuk/',['1 kilogram tavuk göğsü','1 yemek kaşığı salça','2 yemek kaşığı yoğurt','1 yemek kaşığı sıvı yağ','1 tatlı kaşığı pul biber','1/2 tatlı kaşığı kekik','1 çay kaşığı kimyon','2 tatlı kaşığı tuz']],
 [28,'Izgara Somon',2,10,10,20,null,'https://yemek.com/tarif/izgara-somon/',['2 dilim somon','1 çorba kaşığı zeytinyağı','1/2 adet portakalın suyu','10-15 adet tane karabiber','1 çay kaşığı deniz tuzu','1-2 dal taze kekik']],
 [29,'Izgara Levrek',4,15,25,40,null,'https://yemek.com/tarif/izgara-levrek/',['4 adet levrek','4 yemek kaşığı zeytinyağı','1/2 adet limonun suyu','1 tatlı kaşığı tuz']],
 [30,'Izgara Sebze',4,20,10,30,550,'https://yemek.com/tarif/izgara-sebze/',['2 adet patlıcan','2 adet kabak','2 adet kırmızı biber','10 adet kiraz domates','1 büyük demet taze fesleğen','50 gram çam fıstığı','75 gram parmesan peyniri','2 diş sarımsak','1 su bardağı zeytinyağı','1/4 çay kaşığı tuz','2 yemek kaşığı nar ekşisi']],
 [31,'Sezar Salata',2,10,10,20,null,'https://yemek.com/tarif/sezar-salata/',['1 adet tavuk göğsü','1/2 çay bardağı sıvı yağ','1 tatlı kaşığı toz kırmızı biber','1 tatlı kaşığı pul biber','1 tatlı kaşığı karabiber','1 çay kaşığı tuz','150 gram marul','1/2 çay bardağı Sezar sosu','1 yemek kaşığı parmesan peyniri']],
 [32,'Ton Balıklı Salata',2,15,0,15,455,'https://yemek.com/tarif/ton-balikli-salata/',['1/2 demet marul','3-4 dal taze soğan','1 avuç dereotu','4-5 adet cherry domates','1 adet salatalık','1 adet kapya biber','2 konserve ton balığı','1/2 adet limonun suyu','2 yemek kaşığı elma sirkesi','4 yemek kaşığı zeytinyağı','1 tatlı kaşığı hardal','1 tutam tuz','1 tutam karabiber']],
 [33,'Akdeniz Salatası',1,15,0,15,181,'https://yemek.com/tarif/akdeniz-salatasi/',['150 gram Akdeniz yeşilliği','4 adet cherry domates','75 gram beyaz peynir','3-4 yemek kaşığı zeytinyağı','1/2 adet limonun suyu','1 yemek kaşığı nar ekşisi','1 çay kaşığı tuz','1 çay kaşığı karabiber']]
];

function numberPart(value) {
  if (value.includes('-')) return value.split('-').map(numberPart);
  if (value.includes('/')) { const [a,b]=value.split('/').map(Number); return a/b; }
  return Number(value.replace(',','.'));
}
function ingredient(line) {
  const clean=line.replace(/\s+/g,' ').trim();
  const match=clean.match(/^(\d+(?:[.,]\d+)?(?:\s*-\s*\d+(?:[.,]\d+)?)?|\d+\/\d+)\s+(.+)$/);
  if(!match) return clean;
  const rest=match[2];
  const units=['büyük demet','yemek kaşığı','çorba kaşığı','tatlı kaşığı','çay kaşığı','su bardağı','çay bardağı','kilogram','konserve','kavanoz','paket','gram','adet','demet','avuç','tutam','dilim','diş','dal'];
  const unit=units.find(x=>rest.startsWith(x+' '));
  if(!unit) return clean;
  return {amount:numberPart(match[1].replace(/\s/g,'')),unit,name:rest.slice(unit.length+1)};
}

for(const [id,variant,yieldPeople,prep,cook,time,cal,sourceUrl,ingredients,waitLabel] of rows){
  const meal=context.items.find(x=>x.id===`meal-${id}`);
  if(!meal) throw new Error(`Missing meal-${id}`);
  Object.assign(meal,{status:'sourced',variant,prep,cook,time,cal,yieldPeople,yieldLabel:`${yieldPeople} kişilik`,source:sourceUrl,ingredients:ingredients.map(ingredient),extraPrep:!Number.isFinite(time),waitLabel:waitLabel||null,note:'Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.',checkedAt:'2026-09-08'});
}
const suffix=source.slice(source.indexOf('function matchesMeal'));
fs.writeFileSync(file,'// Recipe-specific reference data. Unknown values MUST remain null; never inherit category estimates.\nconst mealAliases = '+JSON.stringify(context.aliases)+';\nconst meals = '+JSON.stringify(context.items,null,2)+';\n'+suffix);
console.log(`Applied ${rows.length} verified recipes`);
