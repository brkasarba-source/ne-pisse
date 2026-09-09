const fs = require('node:fs');
const vm = require('node:vm');
const file = 'dist/catalog.js';
const source = fs.readFileSync(file, 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(source + ';this.items=meals;this.aliases=mealAliases', context);

// Values are transcribed from the linked recipe, not inferred from a category.
// A null total means required waiting or prerequisite work is not represented
// reliably enough for the meal to participate in duration filtering.
const rows = [
 [55,'Sucuklu yumurta',2,'2 kişilik',5,5,10,386,'https://yemek.com/tarif/sucuklu-yumurta/',[
  '1/2 yemek kaşığı tereyağı (arzuya göre)','100 gram sucuk','2 adet yumurta','1/4 çay kaşığı tuz'
 ]],
 [56,'Peynirli omlet',2,'2 kişilik',5,5,10,null,'https://yemek.com/tarif/peynirli-omlet/',[
  '3 adet büyük boy yumurta','1/2 çay kaşığı tuz','1 tutam karabiber','1 tatlı kaşığı zeytinyağı','1 yemek kaşığı tereyağı','2 dilim beyaz peynir'
 ]],
 [58,'Kaşarlı tost',4,'4 adet',5,9,14,280,'https://yemek.com/tarif/kasarli-tost/',[
  '8 adet tost ekmeği','8 dilim kaşar peyniri','2 yemek kaşığı tereyağı'
 ]],
 [77,'Beşamel soslu tavuk',4,'4 kişilik',35,35,70,432,'https://yemek.com/tarif/besamel-soslu-tavuk/',[
  '2 yemek kaşığı zeytinyağı','600 gram kuşbaşı tavuk göğsü','1 çay kaşığı tuz','1/2 çay kaşığı tane karabiber','1/2 su bardağı rendelenmiş kaşar peyniri (üzeri için)','3 yemek kaşığı tereyağı','2 yemek kaşığı un','2,5 su bardağı soğuk süt','1 çay kaşığı tuz','1 çay kaşığı karabiber','1 çay kaşığı muskat cevizi rendesi','1/2 su bardağı rendelenmiş kaşar peyniri'
 ]],
 [60,'Tavada bonfile',3,'3 kişilik',30,15,45,335,'https://yemek.com/tarif/bonfile/',[
  '3 dilim dana bonfile','3 yemek kaşığı zeytinyağı','2 dal taze kekik','1 çay kaşığı tuz','1 tatlı kaşığı tereyağı'
 ],'Kaynak hazırlık süresine 20–30 dk marine/dinlendirme dahil'],
 [61,'Marine dana antrikot',2,'2 adet',120,10,135,927,'https://yemek.com/tarif/dana-antrikot/',[
  '300 gram dana antrikot','3 yemek kaşığı zeytinyağı','1 adet orta boy soğanın suyu','2 yemek kaşığı sirke (balzamik de olabilir)','1 dal taze biberiye','1/2 çay kaşığı taze çekilmiş karabiber','1/2 çay kaşığı tuz'
 ],'En az 2 saat, tercihen 4–6 saat marinasyon ve pişirme sonrası 5 dk dinlendirme gerekiyor'],
 [62,'Et haşlama (kuzu; dana alternatifi)',5,'5 kişilik',30,60,90,644,'https://yemek.com/tarif/haslama/',[
  '800 gram iri parça kuzu eti (kemikli ya da kemiksiz)','4 adet orta boy patates (iri doğranmış)','4 adet orta boy havuç (iri doğranmış)','2 adet kuru soğan (dörde bölünmüş)','5 su bardağı su','1 adet limonun suyu','1 yemek kaşığı un','2-3 çay kaşığı tuz','1 çay kaşığı tane karabiber','1 çay kaşığı pul biber','3 dal maydanoz (ince kıyılmış)'
 ],'Dana eti kullanılacaksa süre etin bölümüne ve tencereye göre uzayabilir'],
 [63,'Hünkar beğendi',4,'4 kişilik',60,60,120,567,'https://yemek.com/tarif/hunkar-begendi/',[
  '600 gram kuzu kuşbaşı eti (dana kuşbaşı da olabilir)','2 adet orta boy kuru soğan','4 diş sarımsak','3 yemek kaşığı zeytinyağı','3 adet orta boy domates','1 yemek kaşığı domates salçası','2 su bardağı sıcak su','1 çay kaşığı tuz','1/2 su bardağı kaşar peyniri','1 yemek kaşığı tereyağı','1,5 su bardağı süt','4 adet orta boy patlıcan','1,5 yemek kaşığı un','1 çay kaşığı tuz','1 çay kaşığı taze çekilmiş karabiber'
 ]],
 [64,'Ali Nazik (şiş köfteli)',4,'4 kişilik',45,45,null,null,'https://yemek.com/tarif/ali-nazik/',[
  '5 adet orta boy patlıcan','300 gram süzme yoğurt','3 diş sarımsak','1 çay kaşığı tuz','1/2 çay kaşığı karabiber','400 gram orta yağlı kıyma (dana-kuzu karışık)','1 adet küçük boy kuru soğan','1 çay kaşığı tuz','1/2 çay kaşığı karabiber','4 yemek kaşığı domates sosu (arzuya göre)','2 adet orta boy kapya biber','2 adet orta boy domates','2 yemek kaşığı zeytinyağı','1/2 çay kaşığı acı toz kırmızı biber','1/4 demet maydanoz'
 ],'Köfte harcı buzdolabında dinlendiriliyor; kaynak kesin bekleme süresi vermiyor'],
 [65,'Ev yapımı İskender',4,'4 kişilik',30,30,null,524,'https://yemek.com/tarif/iskender/',[
  '500 gram antrikot','1 su bardağı süt','1 çay kaşığı bal (isteğe bağlı)','1 adet soğan','4 diş sarımsak','1 tatlı kaşığı toz kırmızı biber','2 yemek kaşığı zeytinyağı','1 silme tatlı kaşığı kekik','1 çay kaşığı karabiber','1 çay kaşığı tuz','2 yemek kaşığı tereyağı','1 yemek kaşığı salça','1 tatlı kaşığı toz kırmızı biber','2 adet tırnak pide','8 yemek kaşığı koyu kıvamlı yoğurt'
 ],'Et en az 6 saat (tercihen 1 gün) marine edilmeli ve ardından en az 1 gece dondurulmalı'],
 [66,'Çökertme kebabı',4,'4 kişilik',30,40,null,570,'https://yemek.com/tarif/cokertme-kebabi/',[
  '300 gram dana kontrfile','2 yemek kaşığı sıvı yağ','1/2 çay kaşığı tuz','1/2 çay kaşığı taze çekilmiş karabiber','1 adet rendelenmiş soğan','1/2 çay bardağı zeytinyağı','1 tatlı kaşığı tuz','1 çay kaşığı kimyon','1 çay kaşığı karabiber','1/2 su bardağı süt','1 su bardağı soda','1 yemek kaşığı tereyağı (pişirmek için)','2 yemek kaşığı tereyağı','1 tatlı kaşığı pul biber','1 adet rendelenmiş domates','2 adet orta boy patates','1,5 su bardağı ayçiçek yağı (kızartmak için)','4 yemek kaşığı sarımsaklı yoğurt'
 ],'Etin pişirmeden önce 1 saat buzdolabında dinlenmesi gerekiyor'],
 [67,'Fırında patlıcan kebabı',4,'4 kişilik',45,30,null,null,'https://yemek.com/tarif/patlican-kebabi/',[
  '4 adet orta boy patlıcan','400 gram orta yağlı kıyma','1 adet soğan (rendelenmiş)','1 adet yumurta','1 çay bardağı galeta unu','1 çay kaşığı tuz','5-6 dal maydanoz (ince kıyılmış)','1 çay kaşığı karabiber','1 çay kaşığı pul biber','2 yemek kaşığı sıvı yağ','1 yemek kaşığı biber salçası'
 ],'Patlıcanlar tuzlu suda bekletiliyor; kaynak kesin bekleme süresi vermiyor'],
 [68,'Orman kebabı',7,'7 kişilik',20,45,65,207,'https://yemek.com/tarif/orman-kebabi/',[
  '500 gram dana kuşbaşı eti (kuzu kuşbaşı da olabilir)','2 adet orta boy soğan','2 adet havuç','2 adet patates','1 yemek kaşığı salça','2 yemek kaşığı un','3 yemek kaşığı zeytinyağı','1 kase konserve bezelye','2 yemek kaşığı tereyağı','1 çay kaşığı tuz','1 çay kaşığı karabiber','1 tatlı kaşığı kekik','1/4 çay bardağı zeytinyağı (kekiği ısıtmak için)'
 ]],
 [69,'Kuzu etli güveç',6,'6 kişilik',20,90,110,null,'https://yemek.com/tarif/guvec/',[
  '300 gram kuşbaşı kuzu eti','2 adet kuru soğan','8 diş sarımsak','2 adet patlıcan','1 adet patates','2 adet yeşil biber','3 yemek kaşığı zeytinyağı','1 yemek kaşığı tereyağı','2 adet rendelenmiş domates','3 çay kaşığı kekik','3 çay kaşığı tuz','2 çay kaşığı karabiber','1 çay bardağı sıcak su'
 ],'Kaynak hazırlığında patlıcanın 15 dk tuzlu suda beklemesi bulunuyor'],
 [70,'Etli türlü',6,'6 kişilik',20,40,60,null,'https://yemek.com/tarif/etli-turlu/',[
  '300 gram kuşbaşı et','1 adet soğan','2 adet patlıcan','2 adet patates','1 adet kabak','1 adet havuç','1 adet kapya biber','2 adet yeşil biber','1 yemek kaşığı salça','1 tatlı kaşığı tuz','1 çay kaşığı karabiber','2 yemek kaşığı sıvı yağ'
 ],'Tarif düdüklü tencere kullanıyor; etin yaklaşık 30 dk pişmesi toplam süreye dahil'],
 [72,'Ciğer sote',2,'2 kişilik',10,20,30,null,'https://yemek.com/tarif/ciger-sote/',[
  '500 gram ciğer','1 adet kuru soğan','2 yemek kaşığı sıvı yağ','1 çay kaşığı tuz','1 çay kaşığı toz karabiber','1 çay kaşığı toz kırmızı biber'
 ]],
 [73,'Hasanpaşa köftesi',4,'4 kişilik',30,45,75,583,'https://yemek.com/tarif/hasanpasa-koftesi/',[
  '500 gram orta yağlı kıyma','1 adet orta boy kuru soğan (rendelenmiş)','1 çay kaşığı tuz','1 çay kaşığı kimyon','1 çay kaşığı pul biber','1 su bardağı ufalanmış bayat ekmek kırıntısı','1 adet yumurta','1 tutam maydanoz','4 adet orta boy haşlanmış patates','1 çay bardağı süt','1 yemek kaşığı tereyağı','1/2 çay kaşığı tuz','1 su bardağı bezelye','2 adet orta boy havuç (küp doğranmış)','2 yemek kaşığı domates salçası','2 yemek kaşığı zeytinyağı','1 su bardağı sıcak su','1 su bardağı rendelenmiş kaşar peyniri'
 ],'Malzeme listesi patatesleri önceden haşlanmış ister; bu ön hazırlık başlık süresine dahil olmayabilir'],
 [74,'Dalyan köfte',8,'8 kişilik',30,60,90,null,'https://yemek.com/tarif/dalyan-kofte/',[
  '1 kilogram dana kıyma','2 adet soğan','1 su bardağı galeta unu','2 adet yumurta','1/2 çay bardağı sıvı yağ','2 çay kaşığı tuz','1 çay kaşığı karabiber','1 çay kaşığı pul biber','1 adet havuç','1 çay bardağı bezelye','5 adet yumurta','1 adet yumurta beyazı','1/2 su bardağı domates püresi','1 yemek kaşığı domates salçası','1 çay kaşığı tuz'
 ],'Hazırlıkta yumurtalar, havuç ve bezelye haşlanıyor; kaynak toplam hazırlık süresi 30 dk veriyor'],
 [75,'Marine tavuk pirzola',4,'4 kişilik',5,40,null,427,'https://yemek.com/tarif/tavuk-pirzola/',[
  '8 parça tavuk pirzola','1 çay kaşığı karabiber','1 tatlı kaşığı tuz','1 tatlı kaşığı toz kırmızı biber','1 tatlı kaşığı kekik','3 yemek kaşığı zeytinyağı','3 yemek kaşığı yoğurt','2 diş rendelenmiş sarımsak'
 ],'Tavuk pişirmeden önce 1 saat buzdolabında marine edilmeli'],
 [76,'Garnitürlü tavuk sarma',3,'3 kişilik',15,25,40,300,'https://yemek.com/tarif/tavuk-sarma/',[
  '3 adet tavuk göğsü','1 kase garnitür','2 yemek kaşığı zeytinyağı','150 gram kaşar peyniri','1/2 çay kaşığı tuz','1/4 çay kaşığı karabiber','1/2 çay kaşığı kırmızı toz biber'
 ]]
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
  const units=['büyük su bardağı','tepeleme yemek kaşığı','silme yemek kaşığı','silme tatlı kaşığı','yemek kaşığı','çorba kaşığı','tatlı kaşığı','çay kaşığı','su bardağı','çay bardağı','kilogram','mililitre','konserve','kavanoz','paket','gram','adet','demet','avuç','tutam','dilim','parça','yaprak','kase','diş','dal'];
  const unit=units.find(x=>rest.startsWith(x+' '));
  if(!unit) return clean;
  return {amount:numberPart(match[1].replace(/\s/g,'')),unit,name:rest.slice(unit.length+1)};
}

for(const [id,variant,yieldPeople,yieldLabel,prep,cook,time,cal,sourceUrl,ingredients,waitLabel] of rows){
  const meal=context.items.find(x=>x.id===`meal-${id}`);
  if(!meal) throw new Error(`Missing meal-${id}`);
  Object.assign(meal,{status:'sourced',variant,prep,cook,time,cal,yieldPeople,yieldLabel,source:sourceUrl,ingredients:ingredients.map(ingredient),extraPrep:!Number.isFinite(time),waitLabel:waitLabel||null,note:'Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.',checkedAt:'2026-09-08'});
}
const suffix=source.slice(source.indexOf('function matchesMeal'));
fs.writeFileSync(file,'// Recipe-specific reference data. Unknown values MUST remain null; never inherit category estimates.\nconst mealAliases = '+JSON.stringify(context.aliases)+';\nconst meals = '+JSON.stringify(context.items,null,2)+';\n'+suffix);
console.log(`Applied ${rows.length} verified recipes`);
