# Ne Pişse?

Türkçe yemek önerisi ve menü planlama PWA projesi. Statik uygulama `dist/` içindedir.
GitHub güncellemeleri mevcut Sites yayınını otomatik değiştirmez.

## Güncel durum — 12 Eylül 2026

- 244 kayıt: 162 kaynakla eşleştirilmiş tarif, 82 doğrulanmamış fikir.
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
- **"Başka yemek" de karta kaydırmalı.** Şu an kaydırmıyor, çünkü düğme kartın
  içinde ve tekrar kaydırmak sarsıntı yaratıyor. Doğru çözüm muhtemelen kartın
  üstünü hizalamak (düğmeyi değil) ya da kart yerinde kalırken içeriği
  değiştirmek. Yerleşim kararıyla birlikte bakılacak.
- **Favori mesajı netleştirilmeli.** Kalbe basınca çıkan "Bu filtrelere uygun
  başka favori yok" teknik olarak doğru ama kafa karıştırıyor: kullanıcı
  favorilerinin silindiğini sanabiliyor. Ya mesaj açıkça filtreye işaret
  etmeli ya da favoriler listesi filtreden bağımsız gösterilmeli. Karar
  tasarım turunda.

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

Tek test komutu: `npm test`. Önce `tests/audit.test.cjs`, başarılıysa `tests/package-8.test.cjs` çalışır. İlk başarısızlıkta komut başarısız çıkar.
Güncel sonuç: 26 otomatik kontrol (4'ü Çılbır/Patatesli Yumurta/Mantarlı Omlet/Yulaf Lapası'nı pinliyor) ve beş araştırma kaydının alan kontrolleri geçti.
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
