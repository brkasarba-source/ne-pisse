# Ne Pişse?

Türkçe yemek önerisi ve menü planlama PWA projesi.

## Aktarım durumu — 9 Eylül 2026

Bu depo mevcut çalışma kopyasının aktarımıdır; yayına hazır sürüm olarak değerlendirilmemelidir. Canlı Sites yayını bu aktarım ile güncellenmez.

- Katalog: 233 kayıt, 135 kaynakla eşleştirilmiş tarif, 98 tamamlanmamış fikir.
- Sekizinci paket: 5 tarif dosyaya işlenmiş araştırma taslağı; uygulamaya eklenmemiştir.
- Kalite kontrol devam ediyor. Son ölçü değişikliğinden sonra audit testi başarısız: sarımsak 2/3 kullanım beklentisi ile yeni dörtte üç gösterimi uyuşmuyor. Beklentiyi körlemesine değiştirmeden yuvarlama doğruluğu incelenmelidir.
- Önceki 24 testlik geçiş son değişikliklerden öncedir; güncel sürümün tüm testleri geçtiği iddia edilmez.
- Gerçek mobil tarayıcı, iOS paylaşım ve PWA testleri tamamlanmadı.

## Çalıştırma

`npm ci` ardından `npm run dev`.

Testler: `npm test` ve `node tests/package-8.test.cjs`.

Statik uygulama `dist/` içindedir. Tarif kaynakları katalog kayıtlarında bulunur.

## Açık kalite kontrol işleri

- Ölçü yuvarlamalarının küçük porsiyonlarda oranı aşırı değiştirmesini önlemek; tepeleme/silme ölçülerini korumak.
- Orman Kebabı kaynak tutarsızlığını çözmek; açıklama satırını alışveriş kalemi olarak göstermemek.
- Lahmacun için yeni kişi başı 2 adet varsayımını ve porsiyon metnini birlikte gözden geçirmek.
- Kaynak içeriklerini, beklemeleri, porsiyonları ve kalorileri yeniden denetlemek.
- Eşlikçi tarifleri ve malzeme listelerinin ayrımını tasarlamak.
- Tarayıcı ve gerçek cihaz testlerini tamamlamak; yayın öncesi önbellek sürümünü güncellemek.
- 20'lik araştırma paketini tamamlamak.

Eski `scripts/apply-package-*.cjs` betikleri tarihsel veri aktarım araçlarıdır; mevcut kataloğa incelemeden tekrar uygulanmamalıdır.

## Geçmiş

GitHub aktarımı çalışma dosyalarının anlık görüntüsüdür. Önceki Sites Git commit geçmişi bu depoya taşınmamıştır. `AUDIT.md` tarihsel notlar içerir; güncel açık işler için bu README esas alınmalıdır.
