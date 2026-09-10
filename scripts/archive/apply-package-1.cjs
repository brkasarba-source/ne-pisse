const fs = require('node:fs');
const vm = require('node:vm');
const file = 'dist/catalog.js';
const source = fs.readFileSync(file, 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(source + ';this.items=meals;this.aliases=mealAliases', context);
const meals = context.items;
const updates = {
  'meal-1': {variant:'Et sote',prep:20,cook:50,time:70,yieldPeople:4,yieldLabel:'4 kişilik',cal:367,source:'https://yemek.com/tarif/et-sote/',ingredients:[['sotelik dana eti',600,'gram'],['zeytinyağı',4,'yemek kaşığı'],['kuru soğan',1,'adet'],['domates',2,'adet'],['yeşil biber',3,'adet'],['domates salçası',1,'tatlı kaşığı'],['biber salçası',0.5,'tatlı kaşığı'],['sıcak su',1,'su bardağı'],['tuz',1,'çay kaşığı'],['karabiber',0.5,'çay kaşığı'],['kekik',1,'tatlı kaşığı']]},
  'meal-2': {variant:'Tas kebabı',prep:20,cook:50,time:70,yieldPeople:5,yieldLabel:'5 kişilik',cal:360,source:'https://yemek.com/tarif/tas-kebabi/',ingredients:[['kuşbaşı dana eti',800,'gram'],['ayçiçek yağı',1,'yemek kaşığı'],['tereyağı',2,'yemek kaşığı'],['kuru soğan',1,'adet'],['sarımsak',3,'diş'],['un',1,'yemek kaşığı'],['domates salçası',1,'tatlı kaşığı'],['tuz',1,'tatlı kaşığı'],['patates',2,'adet'],['havuç',1,'adet'],['sıcak su',3,'su bardağı'],['tane karabiber',4,'adet']]},
  'meal-4': {variant:'Ev yapımı Adana kebap',prep:30,cook:20,time:null,yieldPeople:6,yieldLabel:'6 kişilik',cal:282,source:'https://yemek.com/tarif/adana-kebap/',extraPrep:true,waitLabel:'5–6 saat buzdolabında dinlendirme',ingredients:[['kuzu-dana karışık kıyma',600,'gram'],['pul biber',1,'yemek kaşığı'],['tuz',2,'tatlı kaşığı'],['karabiber',1,'çay kaşığı'],['tereyağı (isteğe bağlı)',1,'yemek kaşığı'],['kapya biber (isteğe bağlı)',1,'adet']]},
  'meal-5': {variant:'Fırında tavuk şiş',prep:90,cook:30,time:120,yieldPeople:2,yieldLabel:'2 kişilik',cal:250,source:'https://yemek.com/tarif/tavuk-sis/',waitLabel:'Hazırlığa en az 1 saat marinasyon dahil',ingredients:[['tavuk göğsü',500,'gram'],['süt',3.5,'yemek kaşığı'],['zeytinyağı',2,'yemek kaşığı'],['sarımsak',1,'diş'],['tuz',1,'tutam'],['kırmızı toz biber',1,'tutam'],['kekik',1,'tutam'],['karabiber',1,'tutam'],['pul biber',1,'tutam']]},
  'meal-6': {variant:'Tavuk fajita',prep:20,cook:15,time:65,yieldPeople:4,yieldLabel:'4 kişilik',cal:441,source:'https://yemek.com/tarif/tavuk-fajita/',waitLabel:'Başlık süresine ek 30 dakika marinasyon dahil edildi',ingredients:[['fileto tavuk göğsü',400,'gram'],['kuru soğan',1,'adet'],['kapya biber',2,'adet'],['yeşil dolmalık biber',2,'adet'],['zeytinyağı',2,'yemek kaşığı'],['tortilla ekmeği',4,'adet'],['limon suyu',3,'yemek kaşığı'],['karabiber',1,'çay kaşığı'],['sarımsak',2,'diş'],['soya sosu',2,'yemek kaşığı'],['tuz',1,'çay kaşığı'],['pudra şekeri',1,'çay kaşığı']]},
  'meal-7': {variant:'Köri soslu tavuk',prep:10,cook:20,time:30,yieldPeople:4,yieldLabel:'4 kişilik',cal:318,source:'https://yemek.com/tarif/kori-soslu-tavuk/',ingredients:[['kuşbaşı tavuk göğsü',600,'gram'],['sıvı yağ',2,'yemek kaşığı'],['un',1,'yemek kaşığı'],['tereyağı',2,'yemek kaşığı'],['soğuk süt',2,'su bardağı'],['sıcak su',0.5,'su bardağı'],['köri',1,'tatlı kaşığı'],['karabiber',1,'çay kaşığı'],['tuz',1,'çay kaşığı'],['maydanoz',0.25,'demet']]},
  'meal-8': {variant:'Tavuk şinitzel',prep:15,cook:13,time:28,yieldPeople:8,yieldLabel:'8 kişilik',cal:420,source:'https://yemek.com/tarif/tavuk-sinitzel/',ingredients:[['fileto tavuk göğsü',4,'adet'],['tuz',1,'çay kaşığı'],['karabiber',0.5,'çay kaşığı'],['un',5,'yemek kaşığı'],['yumurta',2,'adet'],['hardal (isteğe bağlı)',1,'tatlı kaşığı'],['galeta unu',1.5,'su bardağı'],['ayçiçek yağı',1.5,'su bardağı']]}
};
for (const meal of meals) if (updates[meal.id]) {
  const update = updates[meal.id];
  Object.assign(meal, {status:'sourced',extraPrep:false,note:'Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.',checkedAt:'2026-09-08'}, update, {ingredients:update.ingredients.map(([name,amount,unit])=>({name,amount,unit}))});
}
const suffix = source.slice(source.indexOf('function matchesMeal'));
fs.writeFileSync(file, '// Recipe-specific reference data. Unknown values MUST remain null; never inherit category estimates.\nconst mealAliases = '+JSON.stringify(context.aliases)+';\nconst meals = '+JSON.stringify(meals,null,2)+';\n'+suffix);
