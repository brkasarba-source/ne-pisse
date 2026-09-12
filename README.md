# Ne Pişse?

Türkçe yemek önerisi ve menü planlama PWA projesi. Statik uygulama `dist/` içindedir.
GitHub güncellemeleri mevcut Sites yayınını otomatik değiştirmez.

## Güncel durum — 12 Eylül 2026, akşam (10. paket)

- 244 kayıt: **181 kaynaklı**, 63 doğrulanmamış fikir. Kategoriler: Doyurucu 48/48,
  Ev Yemeği 44/46, Hafif 29/46, Kahvaltı 15/25, Fast Food/Kaçamak 15/30,
  Dünya Mutfağı 19/38, Tatlı 2/2, Eşlikçi 9/9.
- **Porsiyon hatası düzeltildi.** Üç dolma kaydı (`meal-110`, `meal-111`, `meal-112`)
  "10 adet" porsiyonunu doğrudan 10 kişi sayıyordu; kişi başı kalori ve malzeme
  yarı yarıya yanlış çıkıyordu. Kaynaklar kişi sayısı vermediği için Lahmacun'daki
  çözüm uygulandı: kişi başı 2 adet varsayımı `yieldLabel` ve notta açıkça yazılı,
  kalori (kaynak kişi başına bağlamadığı için) boşaltıldı, `batchLimited` işaretlendi.
- **Aralıklı porsiyonlarda tek kural:** kaynak "4-6 kişilik" diyorsa `yieldPeople`
  üst sınırdır. `yieldPeople` "bu miktar en fazla kaç kişiye yeter" demektir ve süre
  filtresi kişi sayısını buna karşı kontrol eder; alt sınır alınınca kaynak yettiğini
  söylediği hâlde kayıt gizleniyordu. `meal-82` ortalama alıyordu (4-6 → 5), yani
  kaynakta olmayan bir sayı; `meal-188`, `meal-197`, `meal-211` ile birlikte düzeltildi.
- **Yedi yeni kaynaklı tarif:** Tantuni, Sosisli Sandviç, Midye Tava (Fast Food),
  Pastırmalı Yumurta, French Toast, Chia Puding, Meyveli Yoğurt (Kahvaltı).
  Kahvaltı %44 → %60, Fast Food %40 → %50.
- **8. paketteki beş tarif yayına alındı** (`meal-3`, `meal-11`, `meal-86`, `meal-121`,
  `meal-151`). "20 tamamlanmadan yayımlanmaz" kuralı kaldırıldı; doğrulanan tarif bekletilmiyor.
- **Ölçü satırları yeniden yazıldı.** Hiçbir satırda eğik çizgi yok ("3/4 çay kaşığı"
  telefonda "3 ya da 4" okunuyordu): kesirler yazıyla ("yarım", "çeyrek", "dörtte üç").
  Çeyrek çay kaşığının altındaki kuru baharat "bir tutam" oluyor, sıvılar kaşıkta kalıyor.
  Satır başına düşen "yaklaşık" kalktı; yuvarlama listenin üstünde tek cümlede yazıyor.
  Adet/paket satırı kısaldı: "1 paket lazanya yaprağı · üçte biri kadarı".
- Paket verisi artık `research/package-10.cjs` içinde duruyor ve test canlı katalogla
  karşılaştırıyor; elle düzenlenirse süit kırılır.

## Önceki durum — 12 Eylül 2026

- 244 kayıt: 163 kaynakla eşleştirilmiş tarif, 81 doğrulanmamış fikir.
- `meal-208` Chili Con Carne (chili-con-carne, 6 kişilik, kişi başı 480 kcal) — Meksika kolundaki ilk kaynaklı tarif. Pişirme 2 saat.
- Chili Con Carne için iki aday reddedildi: `chilli-con-carne` (7 kişilik) adımlarında maydanoz geçiyor ama listede yok; `chili-con-carne-2` (4 kişilik) adımlarında "1 su bardağı sıcak su" geçiyor, listede yok.
- **Tüm menüler çalışıyor: 20/20.** `side-9` Salçalı Bulgur Pilavı (salcali-tereyagli-bulgur-pilavi, 6 kişilik) eklenip Etli Bamya'ya bağlandı; son ölü menü de kapandı.
- `meal-192` Teriyaki Tavuk (teriyaki-soslu-tavuk, 4 kişilik) — Dünya Mutfağı'nın boş Asya kolundaki ilk kaynaklı tarif.
- **Yeni tasarım dili uygulandı.** Gri-mavi ve mat kahve paleti kalktı; krem zemin, domates kırmızısı aksiyon rengi, kömür karası metin, Lora başlıklar. Yemek kartı kırmızı zeminden beyaz karta çevrildi. Zemin gradyanı düz renge indi.
- **Tavuk Fajita menüsü dirildi.** `side-8` Guacamole (yemek.com/tarif/guacamole, 4 kişilik, kişi başı 120 kcal kaynakta açıkça veriliyor) eşlikçi olarak eklendi ve menüye bağlandı. Çalışan menü 18/20 → **19/20**; geriye yalnızca Etli Bamya kaldı (salçalı bulgur pilavı eksik).
- Bu turda kaynaklanan Gavurdağı ve Roka Salatası `menuPairings` içinde `catalogId` ile bağlandı; çözülü eşlikçi kalemi 10 → 12.
- Zayıf kategorilere 5 yeni kaynaklı tarif eklendi: Kaşarlı Gözleme ve Sigara Böreği (Fast Food/Kaçamak), Izgara Köfte ve Izgara Jumbo Karides (Hafif), Humus Tabağı (Dünya Mutfağı). Hepsi yemek.com, kişi cinsinden porsiyon, adımlarla eşleşen ölçülü malzeme.
- Kök dizindeki 8 yinelenen dosya (`app.js`, `catalog.js`, `index.html`, `manifest.webmanifest`, `style.css`, `sw.js`, `audit.test.cjs`, `package-8.test.cjs`) silindi — bunlar önceki bir web arayüzü yüklemesinden kalma kazayla oluşmuş kopyalardı (`vite.config.js` zaten `root:'dist'` kullanıyor). Tek kaynak artık yalnızca `dist/` (uygulama) ve `tests/` (testler).
- Bu silme sırasında kökteki dosyaların `dist/` kopyalarından **daha güncel** olduğu görüldü (companion/`side-N` tarifleri, `batchLimited` alanı içeriyorlardı, `dist/` içermiyordu) — `dist/` bu turda kökteki güncel içerikle senkronize edildi.
- `shoppingGroups()`'a geçişten (tarifler arası toplama kaldırılması) sonra güncellenmemiş kalan eski `shoppingItems()` testi düzeltildi; artık tarif başına ayrı satır davranışını doğruluyor.
- İkinci turda 3 tarif daha: Gerçek Gavurdağı Salata (Hafif, 4 kişilik), Tulum Peynirli Roka Salatası (Hafif, 2 kişilik), Şakşuka (Dünya Mutfağı, 4 kişilik).
- Soğan Halkası (Fast Food/Kaçamak, 4 kişilik, batchLimited) tam sayfa çekilerek doğrulandı ve eklendi.
- Zayıf kategori durumu: Hafif 28/46 (%61), Kahvaltı 11/25 (%44), Fast Food/Kaçamak 11/30 (%37), Dünya Mutfağı 13/38 (%34).
- "Bu akşamı seç"e basınca sayfa yemek kartına yumuşak şekilde kayıyor (`revealCard()`). "Başka yemek" kaydırmaz, çünkü o düğme zaten kartın içinde. `prefers-reduced-motion` açıksa kaydırma ani yapılır. Davranış testle sabitlendi.
- Önbellek sürümü v31 → v33 (`sw.js` ve `index.html`'deki `?v=` sorgu dizesi).
- Tek dosyalık önizleme artık `python3 scripts/build-preview.py` ile üretiliyor. Script service worker bloğunu parantez eşleştirerek çıkarır (regex ile kesmek bloğun içindeki `;` yüzünden sözdizimini bozuyordu) ve yazmadan önce her inline script'i `node --check` ile doğrular. Üretilen `ne-pisse-onizleme.html` `.gitignore`'da.

## Yayın

`.github/workflows/deploy.yml` her `main` push'unda önce `npm test` çalıştırır,
testler geçerse `dist/` klasörünü GitHub Pages'e yayınlar. Testler kırmızıysa
yayın adımı hiç çalışmaz, yani bozuk sürüm canlıya çıkmaz.

İlk kullanımdan önce depo ayarlarında **Settings → Pages → Source: GitHub
Actions** seçilmelidir; aksi halde iş akışı izin hatası verir.

Yollar göreli (`./`, `icons/...`) olduğu için uygulama alt dizinde
(`/ne-pisse/`) sorunsuz çalışır. Özel alan adı bağlanınca `dist/` içine `CNAME`
dosyası eklenmelidir.

## Görev listesi

### Tasarım turunda ele alınacak (biriktirildi)
- Palet/tipografi turu tamamlandı ve Burak "şu haliyle iyi" dedi; aşağıdaki iki
  madde hâlâ açık, yerleşim kararıyla birlikte ele alınacak.
- **Fontlar şu an sistemden geliyor.** Lora/Inter kurulu değilse Georgia'ya
  düşer. CDN çevrimdışını bozar; doğrusu `.woff2` dosyalarını `dist/fonts/`
  içine koyup `sw.js` önbellek listesine eklemek.
- **Yemek görselleri ertelendi** (iş yükü). Kart üst şeridi (SÜRE / PORSİYON
  KALORİ / TOPLAM) de bekliyor: `cal: null` olan tarifler, `extraPrep` yüzünden
  süresi bilinmeyenler ve "toplam kalori"nin hesaplanmış bir değer olması
  kararlaştırılmadan uygulanmayacak.
- **Alan adı `nepisse.app`** alınınca `manifest.webmanifest` ve paylaşım
  metinleri güncellenecek.
- **"Başka yemek" de karta kaydırmalı — gerçek cihazda doğrulandı (öncelikli).**
  Telefonda "Başka yemek"e basınca yeni tarif geliyor ama sayfa kartın başına
  dönmüyor; kullanıcı kartın ortasında/altında kalıyor ve yeni yemeğin adını
  görmek için elle yukarı kaydırmak zorunda. Bu, kaydırmayı bilerek dışarıda
  bırakma kararının telefonda yanlış olduğunu gösteriyor. Çözüm kartın üstünü
  hizalamak (`revealCard()` zaten `block:'start'` kullanıyor, `#again` için de
  çağrılmalı). Tek risk masaüstünde gereksiz sarsıntı; gerekirse yalnızca kart
  görünüm alanının dışındaysa kaydırmak gibi bir koşul eklenebilir.
- **Favori mesajı netleştirilmeli.** Kalbe basınca çıkan "Bu filtrelere uygun
  başka favori yok" teknik olarak doğru ama kafa karıştırıyor: kullanıcı
  favorilerinin silindiğini sanabiliyor. Ya mesaj açıkça filtreye işaret
  etmeli ya da favoriler listesi filtreden bağımsız gösterilmeli. Karar
  tasarım turunda.

- **Kartta çift "Bilinmiyor".** Kalorisi olmayan tariflerde ("Kaynak porsiyonu"
  ve "Seçilen kişi sayısı için") iki hücre birden "Bilinmiyor" yazıyor ve boş
  bir izlenim bırakıyor. Kaynak kişi başı kalori vermediği için değer
  uydurulamaz; çözüm görsel olmalı — iki hücreyi tek satırda birleştirmek,
  kalori bloğunu tamamen gizlemek ya da "kaynak kalori vermiyor" gibi tek ve
  açıklayıcı bir ifade kullanmak. Kart üst şeridi (SÜRE / PORSİYON KALORİ /
  TOPLAM) tasarımıyla birlikte ele alınacak; şu an 162 kaynaklı tarifin büyük
  kısmında kalori yok, yani bu kartların çoğunu etkiliyor.

### Veri ve içerik
- **Dünya Mutfağı %32, Fast Food/Kaçamak %37** — en zayıf iki kategori.
  Dünya Mutfağı'nda Asya (Noodle, Teriyaki Tavuk, Gyoza, Pho) ve Meksika
  (Nachos, Chili Con Carne, Enchilada) kolları tamamen boş.
- ~~Ölü menüler~~ — **bitti, 20/20 çalışıyor.**
- **18 eşlikçi adının ölçülü tarifi yok**; menüde öneri olarak görünür,
  seçilemez.

### Kod
- ~~`purchased` alanı~~ — **incelendi, iş yok.** Alan hem `app.js`'de
  (`item.purchased ? 'hazır alınır' : 'tarif bekleniyor'`) hem katalogda
  mevcut; 7 kalem işaretli. Önceki devir notu "yapılmadı" diyordu, yanlışmış.
  Kalan 20 kalem gerçekten tarifi beklenen kalemler, "hazır alınır" değil.

### Burak'ta
- **Gerçek cihaz testi ve yayın.** PWA kurulumu, çevrimdışı açılış, iOS
  paylaşım ekranı. PC'de çalışıyor; gerçek cihazda hiç denenmedi.

## Bu turda reddedilen kaynaklar (tekrar aranacak)

- **Tabbule Salatası** (yemek.com/tabbule-salatasi) — malzeme listesinde iki ayrı taze nane satırı var (1 demet + 4 dal), adımlarda tek kullanım görünüyor ve adımlar kesik. Tam sayfa çekilip iki nanenin de kullanıldığı doğrulanmadan eklenmeyecek.
- **Klasik Şakşuka** (yemek.com/klasik-saksuka) — 2 kişilik sürüm; sirkenin adımlarda kullanımı doğrulanamadı. Yerine adımları tam görünen `saksuka-7` (4 kişilik) alındı.

## Çalıştırma ve kontroller

`npm ci` ardından `npm run dev`.

Tek test komutu: `npm test` → `tests/audit.test.cjs`. İlk başarısızlıkta komut başarısız çıkar.
`tests/package-8.test.cjs` kaldırıldı: beklettiği beş tarif yayına alındığı için "kataloğa girmemiş olmalı"
beklentisi artık yanlıştı; yerine 10. paketi canlı katalogla karşılaştıran kontrol geldi.
Güncel sonuç: 35 otomatik kontrol geçiyor.
Audit tarayıcı DOM taklidi kullanır; bu sonuç gerçek cihaz, kurulum veya yerel paylaşım ekranı testi değildir.
Ek olarak Chrome önizlemesinde Tatlı seçimi, 30 dakika filtresiyle iki beklemeli tarifin elenmesi, yalnız süre sınırının kaldırılması, Muhallebi kartı, 2→3 kişi süt miktarı 500→750 ml ve kaynak bağlantısının Yemek.com'a yönlenmesi kontrol edildi. Telefon/PWA testleri açık kalır.

## Görevler

- [x] Sayılabilir malzemelerde 1/3 ve 2/3 desteği; mevcut beklentiyi koruyan regresyon kontrolleri.
- [x] İki test dosyasını tek komutta birleştirme.
- [x] Kategori kapsamını sayma ve en zayıf kategori olan Kahvaltı'dan başlama.
- [x] Tatlı modu ve iki kaynaklı başlangıç tarifi.
- [x] Yedi tarihsel aktarım betiğini `scripts/archive/` altına taşıma.
- [x] Çılbır, Patatesli Yumurta, Mantarlı Omlet, Yulaf Lapası kaynaklandı (Sade Yulaf Lapası çelişkili kaynak olduğu için reddedildi).
- [ ] Kahvaltı 20'lik pakete devam: Dünya Mutfağı ve Kaçamak en zayıf kalan kategoriler.
- [ ] Gerçek iPhone Safari/Android Chrome: kaynak bağlantısı, ana ekrana kurulum, çevrimdışı yeniden açılma, güncelleme, paylaşım/iptal, geri dönüş ve çift dokunma.
- [ ] Orman Kebabı kaynak çelişkisi ve alışverişe karışan not satırı; lahmacun kişi başı adet varsayımı.
- [ ] Çok küçük ölçülerde yuvarlama hatasının büyüklüğü ve tepeleme/silme ayrımı: okunabilirlik testi tek başına miktar doğruluğunun kanıtı değildir.
- [ ] Eşlikçilerin malzeme/hazırlama bilgilerinin ana tariften ayrılması.
- [ ] Yayın öncesinde önbellek sürümünü artırma ve canlı sürümü ayrıca güncelleme.

Kategori sayımı, kaynak bağlantıları ve bekleme incelemeleri: `research/category-priority.md`.
Tarihsel aktarım betikleri tekrar çalıştırılmamalıdır; `scripts/archive/README.md` açıklamayı içerir.

## Geçmiş

GitHub başlangıcı çalışma dosyalarının anlık görüntüsüdür; önceki Sites Git geçmişi taşınmadı.
`AUDIT.md` tarihsel notları içerir. Güncel durum ve açık işler için bu README esas alınmalıdır.
