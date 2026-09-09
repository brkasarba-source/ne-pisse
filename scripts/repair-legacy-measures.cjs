// Source ingredient facts rechecked 2026-09-09; recipe prose is not reproduced.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const file = path.join(__dirname, '../dist/catalog.js');
const source = fs.readFileSync(file, 'utf8');
const meals = vm.runInNewContext(source + ';meals');
const i = (amount, unit, name) => ({amount, unit, name});
const updates = {
  'meal-0': {ingredients:[i([2,3],'adet','tavuk göğsü'),i(1,'adet','soğan'),i(1,'adet','biber'),i(1,'yemek kaşığı','salça'),i(1,'çay kaşığı','tuz'),i(0.5,'çay kaşığı','karabiber'),i([2,3],'yemek kaşığı','sıvı yağ'),'sıcak su (kaynak miktar belirtmiyor)'], note:'Kaynak 2 kişilik tarifte 2–3 adet tavuk göğsü kullanıyor; gramaj belirtilmiyor. Sıcak su göz kararı ekleniyor. Süre miktar ve ekipmana bağlıdır. Kalori, et gramajı ve yağ miktarı belirsiz olduğundan gösterilmiyor.'},
  'meal-12': {ingredients:[i(500,'gram','kuru fasulye (geceden ıslatılacak)'),i(4,'yemek kaşığı','sıvı yağ'),i(2,'yemek kaşığı','tereyağı'),i(1,'adet','orta boy kuru soğan'),i(1,'yemek kaşığı','domates salçası'),i(3,'su bardağı','su'),i(1,'çay kaşığı','tuz'),i(1,'çay kaşığı','toz şeker'),i([0.5,1],'çay kaşığı','tatlı toz kırmızı biber')],note:'Geceden ıslatma 80 dakikaya dahil değildir; süreli seçimlere alınmaz. Kaynak biberi malzeme listesinde 1/2, yapılışta 1 çay kaşığı veriyor; aralık bu farkı gösterir. Su ihtiyacı fasulyeye göre değişebilir. İsteğe bağlı fırınlama ayrıca 20 dakika.'},
  'meal-23': {ingredients:[i(3,'yemek kaşığı','ayçiçek yağı'),i(1,'adet','kuru soğan'),i(1,'yemek kaşığı','un'),i(1,'adet','havuç'),i(1,'adet','büyük boy patates'),i(1,'tatlı kaşığı','tuz'),i(1,'çay kaşığı','karabiber'),i(1.5,'su bardağı','kırmızı veya sarı mercimek'),i(6,'su bardağı','sıcak su'),i(1,'adet','et suyu tablet'),i(3,'yemek kaşığı','sıvı yağ (üzeri için)'),i(2,'yemek kaşığı','tereyağı (üzeri için)'),i(1,'tatlı kaşığı','toz kırmızı biber (üzeri için)')], note:'6 kişilik kaynağın çorba ve üzerindeki yağ sosu birlikte listelendi. Suya eklenen et suyu tableti dahildir. Süre ve porsiyon kalorisi kaynak değeridir; ekipman ve kullanılan miktarlara göre değişir.'},
  'meal-54': {ingredients:[i(4,'yemek kaşığı','zeytinyağı'),i(0.5,'adet','soğan'),i(4,'adet','sivri biber'),i(1,'adet','kapya biber'),i(4,'adet','domates'),i(1,'dal','taze soğan'),i(4,'adet','yumurta'),i(1,'çay kaşığı','tuz'),i(1,'çay kaşığı','karabiber')]},
  'meal-57': {ingredients:[i(3,'adet','yumurta'),i(4,'yemek kaşığı','toz şeker'),i(3,'su bardağı','un'),i(1.5,'su bardağı','süt'),i(1,'paket','kabartma tozu'),i(1,'paket','vanilin')],note:'Sade pankek içindir; bal, reçel, çikolata ve meyve dahil değildir. 20 dakikalık pişirme kaynak miktarı içindir; tava kapasitesi ve parti sayısı süreyi değiştirir.'},
  'meal-71': {ingredients:[i(2,'kilogram','kemikli kuzu kol (kaynakta yaklaşık 2 kg tek parça)'),i(2,'diş','sarımsak'),i(0.5,'çay bardağı','zeytinyağı'),i(3,'çay kaşığı','tuz'),i(2,'çay kaşığı','taze çekilmiş karabiber'),i(1,'çay kaşığı','kekik')],note:'Kaynak yaklaşık 2 kg tek parça kemikli kol ve 6 kişiliktir. Kişi oranına göre gösterilen et miktarı alışveriş tahminidir; parçanın büyüklüğü pişmeyi değiştirir. 230 dakika önceden ısıtılmış fırın içindir; ön ısıtma ve isteğe bağlı son kızartma (+5 dakika) ayrıca gerekir.'}
};
for (const [id, update] of Object.entries(updates)) Object.assign(meals.find(m=>m.id===id),update,{checkedAt:'2026-09-09'});
const start = source.indexOf('const meals = ');
const end = source.indexOf('const menuPairings');
if(start < 0 || end < start) throw new Error('Catalog markers missing');
fs.writeFileSync(file, source.slice(0,start) + 'const meals = ' + JSON.stringify(meals,null,2) + ';\n\n' + source.slice(end));
console.log('Repaired six legacy ingredient lists; menu pairings preserved.');
