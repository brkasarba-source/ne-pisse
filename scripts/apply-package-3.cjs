const fs = require('node:fs');
const vm = require('node:vm');
const file = 'dist/catalog.js';
const source = fs.readFileSync(file, 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(source + ';this.items=meals;this.aliases=mealAliases', context);

// id, variant, yieldPeople, yieldLabel, prep, cook, total, calories, source,
// ingredients, waitLabel. A null total means the source omits required waiting
// or prerequisite preparation from its headline duration.
const rows = [
 [34,'Tavuklu sandviç',2,'2 kişilik',15,20,null,350,'https://yemek.com/tarif/tavuklu-sandvic/',[
  '1 adet tavuk göğsü (ya da tavuk kalça)','1 adet baget ekmeği (ya da sandviç ekmeği)','2-3 adet marul yaprağı','1 adet kornişon turşu','1 yemek kaşığı haşlanmış mısır','1 yemek kaşığı süzme yoğurt','2 yemek kaşığı mayonez','1/2 çay kaşığı karabiber','1 çay kaşığı tuz','2 yemek kaşığı zeytinyağı','1 tatlı kaşığı kuru kekik','1 tatlı kaşığı pul biber','1 tutam tuz'
 ],'Kaynak başlık süresine ek olarak 30 dk marinasyon gerekiyor'],
 [35,'Izgara sebze sandviç',1,'1 adet',30,15,45,456,'https://yemek.com/tarif/izgara-sebze-sandvic/',[
  '1 adet çiabata ekmeği (veya pita)','1/4 adet küçük boy patlıcan','1/4 adet büyük boy kabak','1/4 adet kırmızı dolmalık biber','1/4 adet yeşil dolmalık biber','1/4 adet sarı dolmalık biber','2 tatlı kaşığı labne peyniri','1 tatlı kaşığı zeytin ezmesi','2 diş sarımsak','1 dal taze soğan','1 dal taze kekik','5-6 yaprak taze fesleğen (veya reyhan)','1 tatlı kaşığı sirke','2 yemek kaşığı zeytinyağı','1 tatlı kaşığı rendelenmiş limon kabuğu','1/2 çay kaşığı öğütülmüş top karabiber'
 ],'Kaynak hazırlık süresine 20 dk marinasyon dahil'],
 [36,'Ev yapımı hamburger (ekmeği dahil)',4,'4 kişilik',30,20,null,700,'https://yemek.com/tarif/hamburger/',[
  '1 çay bardağı ılık su','1 çay bardağı ılık süt','1 paket instant maya','1/2 yemek kaşığı şeker','1 tatlı kaşığı tuz','2,5 yemek kaşığı tereyağı','2 adet yumurta','4,5 su bardağı un','1 adet yumurta sarısı','1 yemek kaşığı susam','300 gram dana kıyma','1/2 çay kaşığı tuz','1/2 çay kaşığı taze çekilmiş tane karabiber','1 yemek kaşığı sıvı yağ','1 adet orta boy domates (halka dilimlenmiş)','1 adet orta boy kırmızı soğan (halka dilimlenmiş)','4 yaprak kıvırcık marul','3 adet turşu (ince dilimlenmiş)','3 dilim soğan','1 tatlı kaşığı hardal','1 yemek kaşığı barbekü sos'
 ],'Başlık süresine ek olarak en az 30 dk hamur mayası ve 15–20 dk köfte dinlendirme gerekiyor'],
 [37,'Cheeseburger (ekmeği dahil)',4,'4 kişilik',50,40,null,800,'https://yemek.com/tarif/cheeseburger/',[
  '1/2 su bardağı ılık süt','3/4 su bardağı ılık su','3,5 su bardağı un','1 paket kuru maya','1 tatlı kaşığı toz şeker','150 gram eritilmiş tereyağı','1 çay kaşığı tuz','500 gram dana kıyma','1 adet yumurta','4 çorba kaşığı galeta unu','1 tatlı kaşığı sirke','1 çay kaşığı tuz','1 çay kaşığı karabiber','8 dilim cheddar peyniri','4 dilim domates (halka dilimlenmiş)','4 dilim soğan (halka dilimlenmiş)','4 yaprak marul','2-3 adet turşu (dilimlenmiş)','1 yemek kaşığı barbekü sos','1 yemek kaşığı ketçap'
 ],'En az 30 dk hamur mayası, 5 dk tepsi mayası ve 15 dk köfte dinlendirme gerekiyor'],
 [38,'Çıtır tavuk burger',4,'4 adet',20,14,34,null,'https://yemek.com/tarif/tavuk-burger/',[
  '4 parça kemiksiz but eti (dövülerek inceltilmiş)','4 adet burger ekmeği','1 su bardağı sıvı yağ (kızartmak için)','1 adet yumurta','1/2 su bardağı süt','1 su bardağı un','2 diş ezilmiş sarımsak','2 çay kaşığı köri','2 çay kaşığı kırmızı biber','1/2 çay kaşığı karabiber','1 tatlı kaşığı tuz','2 su bardağı sade mısır gevreği','8 dilim domates','4 dilim cheddar peyniri','4 yaprak marul','8 dilim mor soğan','4 yemek kaşığı ballı hardal','4 yemek kaşığı mayonez','4 yemek kaşığı hardal','4 adet salatalık turşusu (dilimlenmiş)'
 ]],
 [39,'Karışık pizza',8,'8 kişilik',30,30,null,null,'https://yemek.com/tarif/karisik-pizza/',[
  '1 büyük su bardağı yoğurt','1 adet yumurta','1 tepeleme yemek kaşığı sirke','2 silme yemek kaşığı eritilmiş tereyağı','1 silme tatlı kaşığı kuru maya','1 silme tatlı kaşığı tuz','2 adet küp şeker','2 silme yemek kaşığı sıcak su','3 su bardağı un','1 adet domates','1 adet biber','100 gram sucuk','10 adet siyah zeytin','100 gram rendelenmiş kaşar peyniri','1 silme yemek kaşığı domates salçası','2 silme yemek kaşığı su','1 çay kaşığı pul biber','1 çay kaşığı kekik'
 ],'Kaynak başlık süresine ek olarak 15 dk maya aktivasyonu ve 30 dk hamur mayası gerekiyor'],
 [40,'Evde kıymalı pide',5,'5 adet',40,35,null,530,'https://yemek.com/tarif/evde-kiymali-pide/',[
  '1 yemek kaşığı kuru maya','1 yemek kaşığı toz şeker','1 su bardağı ılık su','1 yemek kaşığı sıvı yağ','1 tatlı kaşığı tuz','3 su bardağı un','1 çay kaşığı tuz','300 gram dana kıyma','2 adet domates','1 adet soğan','3 diş sarımsak','4 adet sivri biber','2 yemek kaşığı sıvı yağ','1/2 çay bardağı su','2 yemek kaşığı eritilmiş tereyağı','1 adet yumurta sarısı','1 yemek kaşığı sıvı yağ'
 ],'Kaynak başlık süresine ek olarak 10 dk maya aktivasyonu ve 45 dk hamur mayası gerekiyor'],
 [41,'Fırında kumpir',2,'2 porsiyon',5,90,95,539,'https://yemek.com/tarif/kumpir/',[
  '2 adet büyük boy patates','2 yemek kaşığı tereyağı','3/4 su bardağı rendelenmiş kaşar peyniri','1 çay bardağı haşlanmış mısır','1/2 su bardağı çekirdekleri çıkarılmış zeytin','4-5 adet kornişon turşu','2 yemek kaşığı mayonez','2 yemek kaşığı ketçap','1/4 çay kaşığı tuz'
 ]],
 [42,'Marine çıtır tavuk',4,'4 kişilik',15,20,null,684,'https://yemek.com/tarif/citir-tavuk/',[
  '1 adet bütün tavuk','1 su bardağı yoğurt','3 su bardağı su','1 yemek kaşığı toz şeker','1 yemek kaşığı tuz','1 tatlı kaşığı sarımsak tozu','2 su bardağı un','1/2 su bardağı nişasta','1 tatlı kaşığı tuz','1 çay kaşığı karabiber','1 tatlı kaşığı toz kırmızı biber','1 çay kaşığı sarımsak tozu','1 çay kaşığı soğan tozu','3 su bardağı sıvı yağ','1 su bardağı mayonez','1/2 su bardağı ketçap','2 yemek kaşığı sarımsaklı acı sos','1 yemek kaşığı acı sos','1 çay kaşığı toz paprika','1 yemek kaşığı sirke','2 tatlı kaşığı bal','300 gram beyaz lahana','200 gram mor lahana','1 adet mor soğan','1 adet havuç','1 yemek kaşığı toz şeker','1 tatlı kaşığı tuz','1/2 çay bardağı elma sirkesi','1/4 demet dereotu'
 ],'Pişirmeden önce 2–12 saat buzdolabında marinasyon gerekiyor'],
 [43,'Uskumru balık ekmek',2,'2 kişilik',20,10,30,null,'https://yemek.com/tarif/balik-ekmek/',[
  '2 adet fileto uskumru','3 yemek kaşığı sıvı yağ','1 adet bütün ekmek','1 adet soğan','2 tatlı kaşığı sumak','1 tutam kıyılmış maydanoz','1/2 adet domates (dilimlenmiş)','6 yaprak roka','1 tatlı kaşığı tuz','1 tutam tuz (soğanı ovalamak için)'
 ]],
 [44,'Kıymalı taco',4,'12 adet (yaklaşık 4 porsiyon)',30,40,70,null,'https://yemek.com/tarif/taco/',[
  '12 adet mini lavaş (ya da taco kabuğu)','3 yemek kaşığı zeytinyağı','500 gram orta yağlı kıyma','1 adet küçük boy kuru soğan','1 adet orta boy domates','1 tatlı kaşığı acı sos','1 tatlı kaşığı domates salçası','1/2 çay kaşığı tuz','1/4 çay kaşığı kimyon','4 dal taze kişniş (ya da maydanoz)','1/2 demet maydanoz','1/2 adet avokado','1 adet büyük boy domates','1 adet orta boy kırmızı soğan','1/2 su bardağı rendelenmiş kaşar peyniri','1/2 su bardağı rendelenmiş cheddar peyniri','1/2 adet limonun suyu'
 ]],
 [45,'Sucuklu ve mantarlı quesadilla',6,'6 adet',30,30,60,null,'https://yemek.com/tarif/quesadilla/',[
  '2 adet jalapeno biberi','3 adet domates','1/2 adet kuru soğan','2 diş sarımsak','2 çay kaşığı tuz','4 dal kişniş','1/2 su bardağı su','3 yemek kaşığı sıvı yağ','1/2 adet kuru soğan','1 adet jalapeno biberi','1 diş sarımsak','1 adet domates','4 dal kişniş','1/2 adet lime suyu','1 çay kaşığı tuz','6 adet tortilla','3 yemek kaşığı sıvı yağ','1 adet kuru soğan','15 adet mantar','1 diş sarımsak','1 tatlı kaşığı toz şeker','1 çay kaşığı tuz','1/2 adet lime suyu','200 gram sucuk','1/2 çay bardağı sıcak su','200 gram rendelenmiş kaşar peyniri','150 gram rendelenmiş cheddar peyniri','6 yemek kaşığı sıvı yağ (pişirmek için)'
 ]],
 [46,'Tavuklu burrito',2,'2 adet',20,30,50,1030,'https://yemek.com/tarif/burrito/',[
  '4 adet tortilla (ya da lavaş)','300 gram tavuk göğsü','2 diş sarımsak','100 gram Meksika fasulyesi','1 adet kırmızı biber','1 adet havuç','1 adet soğan','1-2 yaprak marul','4 çorba kaşığı zeytinyağı','2 çorba kaşığı yoğurt','1 çorba kaşığı mayonez','2 tatlı kaşığı köri','1 çay kaşığı tuz','1 çay kaşığı karabiber','1 çay kaşığı pul biber'
 ]],
 [47,'Karidesli Pad Thai',2,'2 kişilik',15,15,30,null,'https://www.lezzetkosesi.com/pad-thai-tarifi/',[
  '200 gram pirinç eriştesi','200 gram karides (veya tavuk ya da tofu)','2 yemek kaşığı sıvı yağ','2 diş sarımsak','1 adet yumurta','1 adet havuç','3 dal taze soğan','1/2 su bardağı doğranmış yer fıstığı','1/2 su bardağı soya filizi','1 adet limon','2 yemek kaşığı balık sosu (veya soya sosu)','1 yemek kaşığı tamarind püresi','1 yemek kaşığı esmer şeker','1 çay kaşığı pul biber','1 yemek kaşığı limon suyu'
 ],'Kaynak hazırlık süresine eriştelerin 10–15 dk ılık suda beklemesi dahil'],
 [48,'Tavuklu ramen',2,'2 kişilik',20,25,45,554,'https://yemek.com/tarif/ramen/',[
  '400 gram tavuk','1 paket ramen (veya noodle)','2 yemek kaşığı soya sosu','1 tatlı kaşığı rendelenmiş taze zencefil','2 adet yumurta','4-5 dal taze soğan','2 diş sarımsak','1/2 çay kaşığı kabartma tozu','1 yemek kaşığı susam yağı','1 çay kaşığı tuz','4-5 dal taze soğan (yeşil kısımları)','100 gram soya filizi'
 ]],
 [49,'Sebzeli bibimbap',1,'1 kişilik',10,30,40,null,'https://yemek.com/tarif/bibimbap/',[
  '1 su bardağı basmati pirinci','2 su bardağı su','1 adet yumurta','1 adet havuç','1 adet kapya biber','1 adet soğan','1 adet kabak','1/2 demet ıspanak','1/2 yemek kaşığı sıvı yağ','1 çay kaşığı ezilmiş sarımsak','1/2 yemek kaşığı susam yağı','1/2 yemek kaşığı acı biber sosu'
 ]],
 [50,'Somonlu sushi',1,'1 kişilik',10,0,null,307,'https://yemek.com/tarif/sushi/',[
  '1 adet nori (yenilebilir deniz yosunu)','1 dilim somon fileto (ya da ton balığı)','2 dilim salatalık','1 kase önceden hazırlanmış sushi pilavı','1 tatlı kaşığı wasabi','2-3 yemek kaşığı pirinç sirkesi','1 çay kaşığı susam','1 kase soya sosu'
 ],'Kaynak süreye sushi pilavının hazırlanmasını dahil etmiyor'],
 [51,'Yunan usulü musakka',7,'7 kişilik',35,25,60,null,'https://yemek.com/tarif/yunan-usulu-musakka/',[
  '3 adet kemer patlıcan','3 adet orta boy patates','2 adet kabak','1 yemek kaşığı kızartma yağı','500 gram kıyma','6 diş sarımsak','1 çorba kaşığı kekik','1 adet defne yaprağı','1 tatlı kaşığı tarçın','3 adet yeşil sivri biber','3 adet orta boy domates','1 yemek kaşığı biber salçası','2 çorba kaşığı şarap sirkesi','1 tutam mercanköşk','1 tutam biberiye','1 çay kaşığı kişniş','2 çorba kaşığı zeytinyağı','1 çay kaşığı tuz','2 çorba kaşığı tereyağı','3 çorba kaşığı un','4-4,5 su bardağı süt','1/4 su bardağı zeytinyağı','1/2 su bardağı rendelenmiş parmesan peyniri','1 tutam karabiber','1 adet yumurta sarısı','1 çorba kaşığı hardal'
 ]],
 [52,'Klasik falafel',4,'4 kişilik',30,20,null,374,'https://yemek.com/tarif/falafel/',[
  '1,5 su bardağı nohut','1 adet soğan','2 diş sarımsak','1/4 demet maydanoz','2 dal taze soğan','1 çay kaşığı tuz','1 çay kaşığı karabiber','1 çay kaşığı kişniş','1 çay kaşığı kimyon','1 çay kaşığı toz kırmızı biber','1 çay kaşığı kabartma tozu','2 yemek kaşığı un','2 su bardağı sıvı yağ','1 su bardağı süzme yoğurt','2 diş sarımsak','2 yemek kaşığı tahin','1 yemek kaşığı limon suyu'
 ],'Nohut bir gece önceden ıslatılmalı; harç ayrıca en az 1 saat buzdolabında beklemeli'],
 [53,'Kaşarlı karides güveç',4,'4 kişilik',15,25,40,null,'https://yemek.com/tarif/karides-guvec/',[
  '200 gram karides','1 yemek kaşığı tereyağı','1 adet soğan','2 diş sarımsak','1 adet domates','1 adet kapya biber','1 adet yeşil biber','1 çay kaşığı toz kırmızı biber','1/2 çay kaşığı karabiber','1 çay kaşığı tuz','4 yemek kaşığı rendelenmiş kaşar peyniri'
 ]]
];

function numberPart(value) {
  if (value.includes('-')) return value.split('-').map(numberPart);
  if (value.includes('/')) { const [a,b]=value.split('/').map(Number); return a/b; }
  return Number(value.replace(',','.'));
}
function ingredient(line) {
  const clean=line.replace(/\s+/g,' ').trim().replace(/\btatl kaşığı\b/g,'tatlı kaşığı');
  const match=clean.match(/^(\d+(?:[.,]\d+)?(?:\s*-\s*\d+(?:[.,]\d+)?)?|\d+\/\d+)\s+(.+)$/);
  if(!match) return clean;
  const rest=match[2];
  const units=['büyük su bardağı','tepeleme yemek kaşığı','silme yemek kaşığı','silme tatlı kaşığı','büyük demet','yemek kaşığı','çorba kaşığı','tatlı kaşığı','çay kaşığı','su bardağı','çay bardağı','kilogram','mililitre','konserve','kavanoz','paket','gram','adet','demet','avuç','tutam','dilim','parça','yaprak','kase','diş','dal'];
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
