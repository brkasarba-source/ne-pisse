# Ne Pişse?

Türkçe yemek önerisi ve menü planlama PWA projesi. Statik uygulama `dist/` içindedir.
GitHub güncellemeleri mevcut Sites yayınını otomatik değiştirmez.

## Güncel durum — 11 Eylül 2026

- 235 kayıt: 143 kaynakla eşleştirilmiş tarif, 92 doğrulanmamış fikir.
- 233 eski kayıt korunur; dört eski kimlik takma adla yönlendirilir, belirsiz Kori kaydı dışarıdadır. İki yeni tatlı eklendi.
- Kahvaltı 7'den 11 kaynaklı tarife çıktı: Çılbır, Patatesli Yumurta, Mantarlı Omlet, Yulaf Lapası eklendi (hepsi yemek.com).
- Sade Yulaf Lapası (yemek.com) reddedildi: malzeme listesinde Hindistan cevizi şekeri ve Hindistan cevizi yağı var ama hiçbir adımda kullanılmıyor.
- Tatlı kategorisi: Muhallebi ve Sütlü İrmik Tatlısı. Soğutma beklemeleri nedeniyle sonlu süre filtresinden çıkarılırlar.
- `research/package-8.cjs` içindeki 5 tarif ayrı araştırma taslağıdır; uygulamaya eklenmemiştir. Bu turdaki dört kayıt tamamlanmış 20'lik paket olarak sayılmaz.
- 1/3–2/3 sayılabilir malzeme desteği eklendi. Sarımsak beklentisi değiştirilmeden düzeldi. Küçük kaşık dönüşümleri ve ham iki basamaklı ölçüler de kontrol edildi.
- Önbellek sürümü v25 → v26 (`sw.js` ve `index.html`'deki `?v=` sorgu dizesi).

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
