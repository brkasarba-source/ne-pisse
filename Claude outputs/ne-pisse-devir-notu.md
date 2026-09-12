# Ne Pişse? — Devir Notu (12 Eylül 2026, 4. oturum)

Bu dosyayı yeni sohbetin başında yapıştır. Bir öncekinin yerine geçer.

---

## Proje

- Türkçe yemek öneri / menü planlama PWA'sı. Kişi sayısı, süre, mod ve kaloriye
  göre akşam yemeği seçiyor.
- Depo: `github.com/brkasarba-source/ne-pisse` (main)
- **Canlı: `https://nepisse.app`** — GitHub Pages, her push'ta otomatik
  yayınlanıyor. `brkasarba-source.github.io/ne-pisse/` buraya yönleniyor.
- Saf statik uygulama: `dist/` içinde `index.html`, `app.js`, `catalog.js`,
  `style.css`, `sw.js`, `manifest.webmanifest`, `fonts/`, `icons/`. Derleme
  adımı yok. `vite.config.js` `root:'dist'` kullanıyor.
- Test: `npm test` → `tests/audit.test.cjs` + `tests/package-8.test.cjs`.
  Tarayıcı yok, DOM taklidi ile çalışıyor. Testler `dist/` içindeki dosyaları
  okur, kökü değil.

## Çalışma şekli

- Claude depoyu klonlayıp çalışır, çıktı olarak **tam depo zip'i** +
  tek dosyalık `ne-pisse-onizleme.html` verir.
- Claude GitHub'a push edemez (kimlik yok). Burak PC'den `git` ile yapıyor:
  `git pull` → zip'i üzerine aç → `npm test` → `git add -A` → commit → push.
- Burak "sen karar ver, olmazsa geri alırız" diyor; onay beklemeden sıradaki
  işi bitirmek isteniyor. Ara ara zip yüklemek yerine oturum sonunda tek
  paket verilecek.
- Önizleme **elle üretilmez**: `python3 scripts/build-preview.py`. Script
  service worker bloğunu parantez eşleştirerek çıkarır, font `.woff2`
  dosyalarını data URI olarak gömer ve yazmadan önce her inline script'i
  `node --check` ile doğrular.
- **`dist/sw.js` (CACHE sabiti), `dist/index.html` (`?v=`) ve
  `dist/manifest.webmanifest` (`start_url`) aynı önbellek sürümünü taşıyor.**
  `dist/` içinde herhangi bir dosya değiştiğinde üçü birden artırılmalı.

## Projenin temel kuralı: veri uydurulmaz

- Bir tarif ancak kaynağı **kişi sayısı**, **ölçülü malzemeler** ve süre
  bilgisi veriyorsa `sourced` olur. Eksikse `null` bırakılır, tahmin edilmez.
- **Porsiyon kişi cinsinden olmalı.** "4 porsiyon", "5 adet", "1 tepsi",
  "1 kavanoz" kabul edilmez. Bu oturumda üç adayı tek başına bu kural eledi.
- **Adımlar görülmeden tarif eklenmez.**
- Kalori kaynağın kendi değeridir. Kaynak "1 porsiyon için" demiyorsa, ya da
  "1 adet için" deyip kişi başı kaç düştüğünü söylemiyorsa → `cal: null`.
- Kaynağın vermediği bekleme süresi varsa `extraPrep: true`, `time: null`.
  Süre verilmiş ama kaynağın hazırlık+pişirme toplamına dahil değilse
  `extraPrep: true` + `waitLabel` (Kalamar Tava bu şekilde).
- Kaynak aralık veriyorsa tek değer yazılır ve not düşülür.
- Ölçüsüz malzeme metin (string) olarak yazılabilir; metin "kaynak" kelimesini
  içermeli — test bunu zorunlu tutuyor, böylece boşluk ile uydurma ayrılır.
- Test beklentisi körlemesine değiştirilmez; önce hangisinin haklı olduğu
  araştırılır.

### Malzeme–adım çapraz kontrolünde bu oturumda netleştirilen ayrım

Eski kural "listede olup adımlarda kullanılmayan **veya** adımlarda geçip
listede olmayan malzeme → reddedilir" diyordu. Uygulamada iki yön aynı şey
değil; şöyle ayrıldı (**Burak onaylamazsa geri alınır**):

- **Listede var, adımlarda yok → RED.** Tarif kendi içinde tutarsızdır, kaynak
  güvenilmez. Gyoza'yı (kıyma), Tom Yum'u (limon suyu), Islak Hamburger'i
  (yumurta) bu eledi. Tek istisna: yalnızca tuz/karabiber gibi serbest
  baharatsa kayıt alınır ve **not alanında açıkça yazılır** (Nachos böyle).
- **Adımlarda var, listede yok → KAYIT ALINIR, eksik malzeme ölçüsüz metin
  olarak eklenir.** Yöntem tutarlıdır, eksik olan yalnızca alışveriş
  listesidir; miktar uydurmadan tamamlanabilir (Karides Tempura'da tuz,
  karabiber ve kızartma yağı böyle eklendi).

Gerekçe: kullanıcının elinde hareket ettiği şey alışveriş listesidir. Eksik
kalem alışverişi bozar ve ölçüsüz de olsa eklenebilir; kullanılmayan kalem ise
kaynağın kendisinin bozuk olduğunu gösterir.

## Şu anki durum

- **34 otomatik test** geçiyor. Önbellek **v41** (üçü hizalı).
- **Canlı adres artık `https://nepisse.app`** (GitHub Pages, özel alan adı).
- Katalog: 244 kayıt — **169 kaynaklı**, 75 doğrulanmamış fikir.
- **Menü oluşturucu 20/20** — ölü menü yok.
- Kategoriler: Doyurucu 45/48 (%94), Ev Yemeği 43/46 (%93), Hafif 28/46 (%61),
  **Dünya Mutfağı 19/38 (%50)**, Kahvaltı 11/25 (%44),
  **Fast Food/Kaçamak 12/30 (%40)**, Tatlı 2/2, Eşlikçi 9/9.

## Bu oturumda yapılanlar

**1. "Başka yemek" kaydırması düzeltildi** (önceki turun 1. maddesi).
`revealCard(force)` eklendi. Spin her zaman kaydırır; "Başka yemek" yalnızca
kart görünüm alanının dışındaysa kaydırır (`getBoundingClientRect`).
Gerçek tarayıcıda 390px'te doğrulandı: kart görünürken `scrollY` 1196'da
sabit kaldı (sarsıntı yok), kart aşağı kaymışken 1696 → 1196'ya dönüp yemek
adını görünür yaptı.

**2. Kalorisi olmayan kartlardaki çift "Bilinmiyor" düzeltildi** (2. madde).
Kalori yoksa iki hücre tek "Kalori: Bilinmiyor" hücresine birleşiyor
(`#totalCalCell` gizleniyor, `#perCalLabel` "Kalori" oluyor, `.metrics`
konteynerine `cal-unknown` sınıfı geliyor). Paylaşım metninde de tek satır.
Tarayıcıda doğrulandı: kalorili tarifte 3 hücre (285 kcal / 570 kcal),
kalorisizde 2 hücre.

**3. Favori mesajı netleştirildi** (6. madde). Artık üç ayrı durum var:
favori yokken "Henüz favoriniz yok, ♡ ile ekleyebilirsiniz"; tek favori
ekrandayken "zaten ekranda"; filtreler engelliyorken "N favoriniz duruyor,
**silinmedi** — mod/süre/kalori seçimini gevşetince geri gelir". Ayrıca
favori düğmesi artık karta kaydırıyor (düğme üst barda, kart çok aşağıdaydı).

**4. Fontlar self-host edildi** (5. madde). `scripts/build-fonts.py`
`@fontsource-variable/inter` + `lora` paketlerinden yalnızca kullanılan
karakterleri alıp `dist/fonts/` içine 6 `.woff2` üretiyor: **88 KB**
(tam dosyalar ~253 KB olurdu). `latin` + `latin-ext` ikilisi şart, çünkü
Türkçe **ğ Ğ ş Ş İ latin-ext'te**, ı ise latin'de. Script yazmadan önce
kapsamı doğruluyor: gereken karakter eksikse hata verip hiçbir şey yazmıyor.
Fontlar `sw.js` önbellek listesinde; yeni test CDN'e kaçışı ve eksik
`unicode-range`'i yakalıyor. Tarayıcıda 6/6 font yüklendi, Türkçe karakterler
Lora ile çiziliyor (fallback genişliğinden farklı).
`≈ ↗ ✓ ♡` işaretleri bu alt kümelerin dışında; eskiden olduğu gibi sistem
fontundan geliyorlar — davranış değişmedi.

**5. Altı tarif kaynaklandı.** Dünya Mutfağı %37 → %50, Fast Food %37 → %40.

| ID | Tarif | Kişi | Süre | Kalori | Kaynak |
|---|---|---|---|---|---|
| meal-206 | Nachos (kıymalı) | 4 | 40 dk | — | yemek.com |
| meal-188 | Noodle (tavuklu sebzeli) | 4 | 25 dk | — | nefisyemektarifleri |
| meal-211 | Meksika Pilavı | 6 | 25 dk | — | nefisyemektarifleri |
| meal-197 | Pho (tavuklu) | 6 | 105 dk | — | nefisyemektarifleri |
| meal-195 | Tempura (karides) | 2 | 20 dk | 285 | yemek.com |
| meal-183 | Kalamar Tava | 2 | 45 dk + 3 sa | 315 | yemek.com |

Kalamar'ın en az 3 saatlik buzdolabı dinlendirmesi kaynağın süresine dahil
değil: `extraPrep: true` + `waitLabel`, süreli seçimlerden çıkarıldı (test
bunu doğruluyor).

**6. Arayüzden denetim dili çıkarıldı** (Burak'ın "kullanıcıya bu kadar açık
olmalı mıyız?" sorusu üzerine, kararı kendisi verdi: **not tamamen kalksın**).

- `detailsText` artık yalnızca varyant, kaynağın porsiyonu ve hazırlık+pişirme
  süresini yazıyor. Kaydın `note` alanı (ör. "Beş adımın tamamı doğrulandı;
  listedeki malzemelerin hepsi adımlarda kullanılıyor") **hiçbir yerde
  görünmüyor**, katalog verisinde duruyor. Test bunu koruyor.
- `timeText` artık `waitLabel`'ın tamamını süre hücresine basmıyor. "45 dk"
  boyundaki hücreye 20 kelimelik cümle giriyordu (Burak'ın ekran görüntüsü).
  Hücre "Süre belirsiz" yazıyor, bekleme uyarısı metriklerin altındaki ince
  yazıya iniyor — bu bilgi denetim notu değil, akşamın planını değiştiren şey.
  34 kayıt etkileniyordu.
- **Malzeme satırları kısaltıldı.** "tuz (adımlarda kullanılıyor, kaynak
  malzeme listesinde ölçü vermiyor)" → "tuz (ölçüsü kaynakta yok)". 13 satır
  düzeltildi; `meal-68`'de malzeme listesine not olarak yazılmış bir satır
  kaldırıldı (aynı bilgi zaten `note` alanında vardı). Yeni test malzeme
  satırlarını 60 karakterle sınırlıyor ve denetim kelimelerini yasaklıyor.
- **Bekleme etiketleri kısaltıldı.** 8 tanesi 100 karakteri aşıyordu ve
  kaynak tartışması içeriyordu; test artık 100 karakterle sınırlıyor.

**7. Paylaşım kartı (PNG) yeniden yazıldı.** Eski kart hâlâ eski gri-kırmızı
paletteydi ve her şeyi döküyordu: mod, tam not paragrafı, kaynak süresi,
"1 porsiyon / 4 porsiyon" kalori satırı, disclaimer, tam URL. Yeni kart:

- Krem zemin + beyaz kart, Lora başlık, domates kırmızısı vurgu — uygulamanın
  şu anki tasarım diliyle aynı.
- İçerik: **yemek adı, kişi sayısına göre ölçeklenmiş malzeme listesi,
  kişi başı kalori.** Kaynak notu ve bağlantı yok (Burak'ın kararı).
- **Eşlikçiler artık kartta.** Menüde eşlikçi seçiliyse kart `shoppingGroups()`
  kullanıyor; "Ana tarif · X" ve "Eşlikçi · Y" başlıklarıyla ekrandaki
  alışveriş listesinin aynısını basıyor. Kalori satırı bu durumda
  "(yalnızca ana tarif)" diyor, çünkü eşlikçilerin kalorisi kaynaklarda yok.
- Fikir kayıtlarında malzeme/kalori yerine tek uyarı satırı çıkıyor.
- `shareLines` → `shareBlocks`; blok tipleri (`name`, `label`, `group`,
  `item`, `cal`, `foot`) `SHARE_STYLES` ile çiziliyor. Gerçek tarayıcıda PNG
  üretilip göze bakıldı.

**8. Menü bölümü beyazlatıldı ve boş seçenek metni düzeltildi.** Panel ve iç
kutular `var(--paper)` (krem) yerine `var(--card)` (beyaz) + ince `--line`
kenarlık. Krem, 3. oturumdaki tasarım dili değişikliğiyle gelmişti; Burak
beyaz istedi. Açılır listedeki boş seçenek "Ekleme" → **"Seçilmedi"**:
kapalı bir `<select>` seçili değeri gösterir, komut değil — "Ekle" de "Ekleme"
de yanlış okunuyordu.

**9. Kaynak devre dışı bırakma anahtarı eklendi** (telif itirazına hazırlık).
`dist/catalog.js` içinde `disabledSources` dizisi var; bir alan adı yazılınca
o kaynaktan gelen bütün kayıtlar ölçüsüz "fikir" durumuna düşer — malzeme,
süre, kalori ve bağlantı gizlenir, yalnızca yemeğin adı kalır. Veri silinmez,
diziyi boşaltmak geri alır. Tek komut: `node scripts/disable-source.cjs
yemek.com` (geri alma `--enable`, durum `--list`).

**Önemli ayrıntı:** testler bu duruma hazırlandı. Katalog verisine dayanan 25
test `dataTest()` ile işaretlendi ve bir kaynak kapalıyken atlanıyor; aksi
hâlde sayım beklentileri kırılır, CI kırmızı yanar ve **takedown'ı yayına
alacak deploy'u kendi testlerimiz engellerdi**. Kapalıyken 9 test geçiyor,
25'i atlanıyor, süit yeşil kalıyor. Uçtan uca denendi: yemek.com kapatıldı
(169 → 6 kaynaklı, 163 kayıt gizlendi, hiçbir bağlantı kalmadı), sonra geri
alındı (169'a döndü).

**Önbellek v38 → v41.** (v37'den v41'e, hepsi bu oturumda.)

## Fark edilen veri sorunu: "adet" porsiyonlar kişi sayısı sayılıyor

Burak'ın gönderdiği Patlıcan Dolması kartında görüldü: kayıt
`yieldLabel: "10 adet"`, `yieldPeople: 10`. Yani uygulama 10 dolmayı
**10 kişilik** sayıyor ve kişi başı kaloriyi 148 kcal gösteriyor. 10 dolma
gerçekte 4-5 kişilik ise kişi başı kalori yaklaşık yarı yarıya düşük
görünüyor ve malzemeler de o oranda yanlış ölçekleniyor.

Kişi cinsinden olmayan `yieldLabel` taşıyan **18 kaynaklı kayıt** var.
Bir kısmı doğru eşlenmiş (Taco: "12 adet (yaklaşık 4 porsiyon)" →
`yieldPeople: 4`). Sorunlu olanlar adet sayısını doğrudan kişi sayısı
yapanlar: Patlıcan Dolması (10), Quesadilla (6), Kıymalı Pide (5),
Tavuk Burger (4), Burrito (2), Sebzeli Sandviç (1)...

Bu, kalori ve alışveriş miktarını doğrudan etkilediği için
**sıradaki turun ilk işi olmalı**. Her biri için kaynağa dönüp "bu kaç kişi
doyurur" sorusunun cevabı aranmalı; kaynak söylemiyorsa `yieldPeople`
tahmin edilemez, o zaman kaydın kaynaklanma durumu tekrar değerlendirilmeli.

## Bu oturumda reddedilen kaynaklar (tekrar aranacak)

- **Enchilada** (yemek.com) — porsiyon "5 adet", kişi cinsinden değil.
- **Gyoza** (nefisyemektarifleri) — 250 g kıyma listede, adımlarda hiç yok.
- **Tom Yum Goong** (yemek.com) — 2 yemek kaşığı limon suyu listede,
  adımlarda yok. Kalori veriyordu (150 kcal), yine de alınmadı.
- **Mozzarella Sticks** (yemek.com) — porsiyon "30 adet".
- **Paçanga Böreği** (yemek.com) — porsiyon "8 adet"; ayrıca 3 yufkadan
  8 üçgen çıktığını söylüyor, kendi içinde tutarsız.
- **Islak Hamburger** (nefisyemektarifleri) — 1 yumurta listede, adımlarda yok.
- **Tostada** — nefisyemektarifleri ve yemek.com'da Türkçe tarifi yok.

Önceki oturumlardan kalan redler (Tabbule, Chili Con Carne adayları, Klasik
Şakşuka, Acılı ezme, Gözleme diğer sürümleri, Sade Yulaf Lapası) hâlâ geçerli.

## Fark edilen: uygulanmayı bekleyen 5 tarif

`research/package-8.cjs` içinde **doğrulanmış ama kataloğa girmemiş 5 tarif**
duruyor: meal-3 (Anne köftesi), meal-11 (Etli nohut), meal-86 (Tavuklu bulgur
pilavı), meal-121 (Beşamel soslu karnabahar), meal-151 (Izgara hindi).
`research/package-8.md` "20 tamamlanmadan yayımlanmayacak" diyor; 3. oturum
ise 13 tarifi doğrudan kataloğa ekledi, yani o kural fiilen değişmiş.
Bunlar Doyurucu/Ev Yemeği/Hafif kategorilerinde, yani zayıf kategorilere
katkıları yok — bu yüzden **bilerek uygulanmadı**. Karar Burak'ta: uygulanacak
mı, yoksa 20'lik paket kuralı mı sürecek?

## Alan adı geçişi — 12 Eylül, yaşananlar ve dersler

`nepisse.app` Hostinger'dan alındı ve GitHub Pages'e bağlandı. Süreç sancılı
geçti, iki tuzak not edilmeye değer:

**1. Pages kaynağı "Deploy from a branch"e kaymıştı.** Settings → Pages'te
Source alanı `main` / `(root)` görünüyordu ve yayını GitHub'ın klasik
"pages build and deployment" işi yapıyordu. Depo kökünde `index.html` yok
(uygulama `dist/` içinde), dolayısıyla site boş yayınlandı ve her iki adres de
404 verdi. **Source mutlaka "GitHub Actions" olmalı**; değiştirdikten sonra
son "Test ve yayın" koşusunu elle "Re-run all jobs" ile tetiklemek gerekiyor,
kaynağı değiştirmek tek başına yeniden yayınlamıyor.

**2. `.app` uzantısında HTTP yedeği yok.** `.app` ve `.dev` Google Registry
tarafından HSTS preload listesine konmuş; tarayıcılar bu adreslere düz HTTP
ile *hiç* bağlanmıyor, otomatik HTTPS'e çeviriyor. Yani GitHub sertifikayı
çıkarana kadar site hiçbir tarayıcıda açılmaz — "http ile dene" diye bir
kaçış yolu yok. Sertifika beklenirken panik yapılmamalı.

**3. CNAME `dist/` içinde olmalı.** GitHub, Settings'ten alan adı girilince
CNAME'i deponun **köküne** commit'liyor. Ama iş akışı yalnızca `dist/`
yayınlıyor, dolayısıyla kökteki dosya artefakta hiç girmiyor. `dist/CNAME`
eklendi ve testi yazıldı; kökteki dosya GitHub'ın kendi koyduğu dosya olduğu
için silinmedi.

**Sıra önemliydi:** DNS'ten önce özel alan adı girilirse `github.io` adresi
henüz çözülmeyen alan adına yönlenir ve site tamamen kapanır. Bu bir süre
yaşandı. Doğru sıra: DNS → yayılma → CNAME → Pages ayarı → Enforce HTTPS.

DNS (Hostinger, ad sunucuları `aurora`/`nebula.dns-parking.com` olarak kaldı —
değiştirilmemeli): apex `@` için dört A kaydı (`185.199.108.153` ...
`185.199.111.153`), `www` için CNAME → `brkasarba-source.github.io`.

## Sırada, önem sırasıyla

1. **Üç dolma kaydında porsiyon hatası.** Önceki notta "18 kayıt" yazmıştım,
   inceleyince abartılı çıktı: 18 kaydın çoğu doğru eşlenmiş ("4 porsiyon" →
   4 kişi, Taco "12 adet (yaklaşık 4 porsiyon)" → 4 kişi, bir sandviç/burger
   → 1 kişi mantıklı). Gerçekten yanlış olan üç tanesi, hepsi dolma:
   `meal-110` Biber Dolması (8 adet → 8 kişi, 100 g kıyma yani kişi başı
   12 g), `meal-111` Kabak Dolması (10 adet → 10 kişi, 200 g kıyma),
   `meal-112` Patlıcan Dolması (10 adet → 10 kişi, 200 g kıyma). Kimse tek
   dolmayı akşam yemeği saymaz; kişi başı kalori de o oranda düşük görünüyor.
   Düzeltmek için kaynağa dönüp "kaç kişilik" aranmalı; kaynak söylemiyorsa
   `meal-10` Lahmacun'daki çözüm örnek alınabilir (10 adet, kişi başı 2 adet
   varsayımı **not alanında açıkça yazılı**, `yieldPeople: 5`).
2. **Fast Food/Kaçamak hâlâ %40.** 18 fikir bekliyor. Pizza ve pide
   varyantları (meal-166..171) hamur mayalanması nedeniyle `extraPrep`
   gerektirir; Tantuni, Etli Ekmek, Sosisli Sandviç, Çıtır Peynir, Midye Tava
   daha kolay adaylar. Basit tarifler (5-8 malzeme) çapraz kontrolü daha sık
   geçiyor.
3. **Kahvaltı %44** — Dünya Mutfağı %50'ye çıktığına göre sıradaki en zayıf
   ikinci kategori burası.
4. **Dünya Mutfağı'nın kalanı:** Enchilada, Tostada, Gyoza, Tom Yum için
   temiz kaynak arayışı sürüyor (yukarıdaki red listesine bak, aynı sayfalar
   tekrar denenmesin).
5. **18 eşlikçi adının ölçülü tarifi yok**; menüde öneri olarak görünür,
   seçilemez. Dürüst bir durum, acil değil.
6. **Yemek görselleri** ve **kart üst şeridi** — Burak iş yükü nedeniyle
   erteledi. "Toplam kalori" hesaplanmış bir değer, veri kuralı açısından
   nasıl gösterileceği kararlaştırılmadı.
7. **Alan adı bağlandı** (aşağıdaki "Alan adı geçişi" bölümüne bak).
8. **Gerçek cihaz testi.** Bu oturumun dördü de (kaydırma, kalori hücresi,
   favori mesajı, fontlar) başsız Chromium'da 390px ve 1280px'te doğrulandı,
   ama gerçek telefonda görülmedi. Özellikle fontların ilk açılışta
   "yanıp sönme" (FOUT) yapıp yapmadığına ve yeni paylaşım kartının gerçek
   telefonda paylaş menüsünden düzgün çıktığına bakılmalı.

## Claude'un yapamadığı, Burak'ta kalanlar

- GitHub'a push (kimlik yok).
- Gerçek cihaz testi (başsız tarayıcı testi artık yapılabiliyor, bkz. aşağısı).
- Alan adı satın alma.
- Önizleme dosyasında localStorage kapalı olduğu için favori/geçmiş
  kaydedilmez — ortam kısıtı, kod hatası değil. Gerçek testi canlı adreste yap.

## Bu oturumda öğrenilen yöntem notları

- **Başsız tarayıcı doğrulaması artık mümkün.** Konteynerde Chromium kurulu
  (`/opt/pw-browsers/chromium`), `playwright-core` npm'den kurulabiliyor.
  `python3 -m http.server` ile `dist/` yayınlanıp ekran görüntüsü alınabiliyor,
  `scrollY`, yüklenen fontlar, hücre sayısı, yatay taşma sayfanın içinden
  ölçülebiliyor. Testlerin "browser rendering NOT tested" dediği boşluk
  böylece kapanıyor. Bu oturumdaki dört düzeltmenin hepsi bu yolla doğrulandı.
- **Arama sonuçlarında snippet gelmiyor.** Önceki devir notundaki
  "snippet'te adımlar tam görünüyorsa sayfa çekme" yöntemi bu oturumda
  işlemedi: arama yalnızca başlık + bağlantı döndürdü, her aday için sayfa
  çekmek gerekti. Sayfa çekme burada ~2 bin token, yani korkulduğu kadar
  pahalı değil.
- **Tek istekte tam veri iste.** WebFetch'e "adımları kelimesi kelimesine
  kopyala, ÖZETLEME, 'sayfada mevcuttur' deme" denmezse adımları özetleyip
  geçiyor ve ikinci bir istek gerekiyor.
- **Kaynak tercihi:** nefisyemektarifleri porsiyonu neredeyse her zaman
  "X Kişilik" veriyor (kural için iyi) ama adımları özensiz olabiliyor;
  yemek.com adımları düzgün ama porsiyonu sık sık "X adet" veriyor (kural
  için kötü). İkisi de denenmeli.
