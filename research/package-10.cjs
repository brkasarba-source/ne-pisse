// Onuncu paket — 12 Eylül 2026. Bu dosya kataloğa UYGULANMIŞ verinin kaydıdır:
// tests/audit.test.cjs canlı katalogla bu dosyayı karşılaştırır, ikisi ayrışırsa test kırılır.
// Uygulama: node scripts/apply-catalog-package.cjs research/package-10.cjs
// Kural hatırlatması: kişi sayısı, ölçülü malzeme ve süre kaynaktan gelmiyorsa kayıt sourced olmaz.
const staged = require('./package-8.cjs'); // 8. pakette hazırlanıp bekletilen beş tarif
const i = (amount, unit, name) => ({amount, unit, name});

// Beş tarif, malzeme satırlarına 60 karakter sınırı gelmeden önce hazırlanmıştı.
// Bilgi aynı, cümle kısaldı; ölçüsüz malzeme hâlâ "kaynak" diyerek boşluğu söylüyor.
const shortened = {
  'ıslatma ve ön haşlama için su (miktar kaynakta belirtilmemiş)': 'ıslatma ve haşlama suyu (ölçüsü kaynakta yok)',
  'tuz (damak tadına göre; kaynak ölçü vermiyor)': 'tuz (ölçüsü kaynakta yok)',
  'karabiber (damak tadına göre; kaynak ölçü vermiyor)': 'karabiber (ölçüsü kaynakta yok)',
  'taze soğan (üzeri için; kaynak ölçü vermiyor)': 'taze soğan (ölçüsü kaynakta yok)',
  'karnabaharı haşlamak için su (kaynak ölçü vermiyor)': 'haşlama suyu (ölçüsü kaynakta yok)'
};
// Aynı şekilde bekleme etiketine 100 karakter sınırı geldi.
const shortenedWaits = {
  'meal-3': 'Köfte harcı en az 30 dakika buzdolabında dinlenir; kaynağın süresine dahil mi belirsiz'
};
const stagedRows = staged.map(row => ({
  ...row,
  waitLabel: shortenedWaits[row.id] || row.waitLabel,
  ingredients: row.ingredients.map(item => typeof item === 'string' ? (shortened[item] || item) : item)
}));

// Kaynak kişi ARALIĞI veriyorsa kapasitenin ÜST sınırı alınır: yieldPeople
// "bu miktar en fazla kaç kişiye yeter" demektir ve süre filtresi kişi sayısını
// buna karşı kontrol eder (people > yieldPeople ise kayıt gizlenir). Alt sınır
// alınırsa "1-2 kişilik" bir tarif iki kişilik aramada hiç görünmez.
const applied = [
  {
    id: 'meal-174', status: 'sourced', variant: 'Mersin usulü et tantuni',
    source: 'https://www.nefisyemektarifleri.com/mersin-et-tantuni-gercek-tantuni/',
    yieldPeople: 8, yieldLabel: '6-8 kişilik', prep: 5, cook: 30, time: 35,
    extraPrep: false, waitLabel: null, cal: 339,
    note: 'Kaynak 6-8 kişilik diyor; kapasite üst sınırı alındı. Tuz, kırmızı toz biber, sumak ve lavaş kaynakta ölçüsüz veriliyor. Kalori kaynağın 1 porsiyon değeridir.',
    ingredients: [
      i(600, 'gram', 'dana eti'), i(1, 'adet', 'kuru soğan'), i(0.5, 'demet', 'maydanoz'),
      i(2, 'adet', 'orta boy domates'), i(1, 'çay bardağı', 'sıvı yağ'), i(1, 'su bardağı', 'sıcak su'),
      'tuz (ölçüsü kaynakta yok)', 'kırmızı toz biber (ölçüsü kaynakta yok)',
      'sumak (ölçüsü kaynakta yok)', 'lavaş (ölçüsü kaynakta yok)'
    ]
  },
  {
    id: 'meal-180', status: 'sourced', variant: 'Salçalı soslu sosisli sandviç',
    source: 'https://www.nefisyemektarifleri.com/sosisli-sandvic-tarifi/',
    yieldPeople: 6, yieldLabel: '4-6 kişilik', prep: 10, cook: 25, time: 35,
    extraPrep: false, waitLabel: null, cal: null,
    note: 'Kaynak 4-6 kişilik diyor; kapasite üst sınırı alındı. Servis malzemeleri kaynakta ölçüsüz. Kalori kaynakta 1 sandviç için veriliyor, kişi başına düşeni yazmadığı için boş bırakıldı.',
    ingredients: [
      i(6, 'adet', 'sosis'), i(6, 'adet', 'sandviç ekmeği'), i(2, 'yemek kaşığı', 'domates salçası'),
      i(2, 'yemek kaşığı', 'tereyağı'), i(2, 'su bardağı', 'sıcak su'),
      i(0.5, 'tatlı kaşığı', 'tuz'), i(1, 'tatlı kaşığı', 'un'),
      'ketçap, mayonez, hardal (ölçüsü kaynakta yok)',
      'marul, kornişon turşu (ölçüsü kaynakta yok)',
      'patates kızartması (ölçüsü kaynakta yok)'
    ]
  },
  {
    id: 'meal-184', status: 'sourced', variant: 'Sodalı bulamaçla midye tava',
    source: 'https://www.nefisyemektarifleri.com/midye-tava-tarifi/',
    yieldPeople: 10, yieldLabel: '8-10 kişilik', prep: 60, cook: 15, time: 75,
    extraPrep: false, waitLabel: null, cal: null,
    note: 'Kaynak 8-10 kişilik diyor; kapasite üst sınırı alındı. Bir saatlik hazırlık kaynağın kendi süresidir, ek bekleme yok. Soda şişesinin hacmi kaynakta yazmıyor. Kalori kaynakta yok.',
    ingredients: [
      i(1, 'kilogram', 'iç midye'), i(2, 'su bardağı', 'sıvı yağ (kızartmak için)'),
      i(1, 'adet', 'yumurta (bulamaç için)'), i(1, 'yemek kaşığı', 'nişasta (bulamaç için)'),
      i(1, 'çay bardağı', 'un (bulamaç için)'), i(1, 'şişe', 'soda (şişe hacmi belirsiz)'),
      i(1, 'su bardağı', 'rendelenmiş bayat ekmek (sos için)'), i(4, 'diş', 'sarımsak (sos için)'),
      i(6, 'adet', 'ceviz içi (sos için)'), i(1, 'çay bardağı', 'yoğurt (sos için)'),
      i(1, 'tatlı kaşığı', 'sirke (sos için)'), i(1, 'fincan', 'mayonez (sos için)'),
      i(1, 'çay kaşığı', 'tuz (sos için)')
    ]
  },
  {
    id: 'meal-223', status: 'sourced', variant: 'Tavada pastırmalı yumurta',
    source: 'https://www.nefisyemektarifleri.com/pastirmali-yumurta-tarifi/',
    yieldPeople: 2, yieldLabel: '1-2 kişilik', prep: 10, cook: 10, time: 20,
    extraPrep: false, waitLabel: null, cal: null,
    note: 'Kaynak 1-2 kişilik diyor; kapasite üst sınırı alındı. Pastırma 7-8 dilim aralığı olarak veriliyor. Sıvı yağ kaynakta isteğe bağlı anıldığı için listeye alınmadı. Kalori kaynakta yok.',
    ingredients: [
      i([7, 8], 'dilim', 'pastırma'), i(3, 'adet', 'yumurta'), i(1, 'yemek kaşığı', 'tereyağı')
    ]
  },
  {
    id: 'meal-233', status: 'sourced', variant: 'Vanilyalı fransız tostu',
    source: 'https://www.nefisyemektarifleri.com/french-toast-fransiz-tostu/',
    yieldPeople: 2, yieldLabel: '1-2 kişilik', prep: 10, cook: 10, time: 20,
    extraPrep: false, waitLabel: null, cal: null,
    note: 'Kaynak 1-2 kişilik diyor; kapasite üst sınırı alındı. Süt ölçüsü kaynakta "yarım bardak"; bardağın hangi ölçü olduğu yazmıyor. Tereyağı, pudra şekeri ve ahududu ölçüsüz. Kalori kaynakta yok.',
    ingredients: [
      i(4, 'dilim', 'tost ekmeği'), i(1, 'adet', 'yumurta'), i(1, 'paket', 'vanilya'),
      i(0.5, 'bardak', 'süt (bardak ölçüsü kaynakta belirsiz)'),
      'tereyağı (ölçüsü kaynakta yok)', 'pudra şekeri (ölçüsü kaynakta yok)',
      'ahududu (ölçüsü kaynakta yok)'
    ]
  },
  {
    id: 'meal-236', status: 'sourced', variant: 'Buzdolabında bekletilen chia puding',
    source: 'https://www.nefisyemektarifleri.com/chia-puding-tarifi/',
    yieldPeople: 2, yieldLabel: '1-2 kişilik', prep: 5, cook: 0, time: 5,
    extraPrep: true, waitLabel: 'Chia buzdolabında en az 2 saat bekler; kaynağın süresine dahil değil', cal: null,
    note: 'Kaynak 1-2 kişilik diyor; kapasite üst sınırı alındı. "Bardak" ve "kaşık" ölçülerinin hangi ölçü olduğu kaynakta yazmıyor. Yulaf kepeği ve tatlandırıcı kaynakta isteğe bağlı. Kalori kaynakta yok.',
    ingredients: [
      i(3, 'yemek kaşığı', 'chia tohumu'),
      i(1, 'bardak', 'su veya süt (bardak ölçüsü belirsiz)'),
      i([2, 3], 'yemek kaşığı', 'yoğurt'),
      i([1, 2], 'yemek kaşığı', 'yulaf kepeği (isteğe bağlı)'),
      i([4, 5], 'kaşık', 'meyve (kaşık ölçüsü kaynakta belirsiz)'),
      'tatlandırıcı (ölçüsü kaynakta yok)'
    ]
  },
  {
    id: 'meal-237', status: 'sourced', variant: 'Rondodan geçirilmiş meyveli yoğurt',
    source: 'https://yemek.com/tarif/meyveli-yogurt/',
    yieldPeople: 5, yieldLabel: '5 kişilik', prep: 10, cook: 0, time: 10,
    extraPrep: false, waitLabel: null, cal: null,
    note: 'Kaynak 5 kişilik diyor. Bal yapılış adımlarında kullanılıyor ama malzeme listesinde yok; ölçüsüz eklendi. Süsleme meyveleri "birer avuç" olarak veriliyor. Kalori kaynakta yok.',
    ingredients: [
      i(15, 'yemek kaşığı', 'yoğurt'), i([7, 8], 'adet', 'çilek'), i(4, 'adet', 'muz'),
      i(2, 'adet', 'kivi'), i([2, 3], 'dilim', 'ananas'),
      'bal (ölçüsü kaynakta yok)', 'süsleme için birer avuç meyve (kaynak böyle veriyor)'
    ]
  }
];

// Mevcut kayıtlarda düzeltmeler. Her biri kayda sığ birleştirilir.
const fixes = [
  // Üç dolma "X adet" porsiyonunu doğrudan kişi sayısı sayıyordu: 10 dolma 10 kişi
  // olarak okunuyor, kişi başı kalori ve malzeme yarı yarıya yanlış çıkıyordu.
  // Kaynaklar kişi sayısı vermiyor; meal-10 Lahmacun'daki çözüm uygulandı:
  // kişi başı adet varsayımı yieldLabel ve note içinde açıkça yazılı.
  {
    id: 'meal-110', yieldPeople: 4, yieldLabel: '8 adet; kişi başı 2 adet sayıldı',
    cal: null, batchLimited: true,
    note: 'Kaynak 8 adet veriyor, kaç kişilik olduğunu söylemiyor; alışveriş hesabında kişi başı 2 dolma varsayıldı. Kaynağın 99 kcal değeri 1 adet içindir, kişi başına düşeni kaynakta yazmadığı için kalori boş bırakıldı.'
  },
  {
    id: 'meal-111', yieldPeople: 5, yieldLabel: '10 adet; kişi başı 2 adet sayıldı',
    cal: null, batchLimited: true,
    note: 'Kaynak 10 adet veriyor, kaç kişilik olduğunu söylemiyor; alışveriş hesabında kişi başı 2 dolma varsayıldı. Kaynağın 113 kcal değeri "1 porsiyon" diyor ama porsiyonun kaç dolma olduğunu yazmıyor, bu yüzden kalori boş.'
  },
  {
    id: 'meal-112', yieldPeople: 5, yieldLabel: '10 adet; kişi başı 2 adet sayıldı',
    cal: null, batchLimited: true, time: null, prep: 30, cook: 45, extraPrep: true,
    waitLabel: 'Oyulan patlıcanlar tuzlu suda bekletilir; kaynak süre vermiyor',
    note: 'Kaynak 10 adet veriyor, kaç kişilik olduğunu söylemiyor; kişi başı 2 dolma varsayıldı. 148 kcal değerinin neyin başına olduğu kaynakta yazmıyor, kalori boş. Rendelenmiş domates yapılış adımlarında kullanılıyor ama malzeme listesinde yok, ölçüsüz eklendi. Bilgi kutusu 45 dakika pişirme diyor, son adım 50 dakika diyor.',
    ingredients: [
      i([5, 6], 'adet', 'patlıcan'), i(1, 'çay bardağı', 'pirinç'),
      i(200, 'gram', 'orta yağlı kıyma'), i(1, 'adet', 'orta boy soğan'), i(3, 'diş', 'sarımsak'),
      i(1, 'yemek kaşığı', 'domates salçası (iç harç için)'),
      i(1, 'tatlı kaşığı', 'domates salçası (sos için)'),
      i(1, 'tatlı kaşığı', 'biber salçası'), i(0.2, 'demet', 'maydanoz'),
      i(6, 'yemek kaşığı', 'zeytinyağı (iç harç için)'),
      i(0.5, 'çay bardağı', 'zeytinyağı (sos için)'),
      i(1, 'çay kaşığı', 'tuz (iç harç için)'), i(1, 'çay kaşığı', 'tuz (sos için)'),
      i(1, 'çay kaşığı', 'karabiber'), i(1, 'çay kaşığı', 'pul biber'),
      i(1, 'tatlı kaşığı', 'nane'), i(2, 'su bardağı', 'sıcak su'),
      'rendelenmiş domates (ölçüsü kaynakta yok)'
    ]
  },
  // Aralıklı porsiyonlarda tek kural: üst sınır. meal-82 ortalama alıyordu (4-6 -> 5),
  // ki bu kaynakta olmayan bir sayı; diğer üçü alt sınır alıyordu ve kalabalık
  // aramalarda kaynağın kendi kapasitesine rağmen gizleniyorlardı.
  {id: 'meal-82', yieldPeople: 6, yieldLabel: '4-6 kişilik'},
  {id: 'meal-188', yieldPeople: 6, yieldLabel: '4-6 kişilik'},
  {id: 'meal-197', yieldPeople: 8, yieldLabel: '6-8 kişilik'},
  {id: 'meal-211', yieldPeople: 8, yieldLabel: '6-8 kişilik'}
];

// Bu oturumda elenen adaylar — aynı sayfalar tekrar denenmesin.
const rejected = [
  {name: 'Çıtır Peynir', source: 'nefisyemektarifleri', reason: 'Ana malzeme ölçüsüz: "Kaşar peyniri" ve "Galeta unu" miktarsız veriliyor.'},
  {name: 'Bazlama', source: 'yemek.com', reason: 'Porsiyon "10 adet", kişi cinsinden değil; ayrıca 1 saat mayalanma.'},
  {name: 'Etli Ekmek', source: 'nefisyemektarifleri', reason: 'Hamurun suyu ve tuzu ölçüsüz ("Ilık su", "Tuz"); 1 kg una göre su miktarı tahmin edilemez.'}
];

module.exports = {
  applied: [...stagedRows, ...applied.map(row => ({...row, checkedAt: '2026-09-12'}))],
  fixes, rejected
};
