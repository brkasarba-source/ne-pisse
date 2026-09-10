# Kategori önceliği — 10 Eylül 2026

Başlangıç sayımı doğrudan dist/catalog.js üzerinden yapıldı. Kullanım analitiği yok;
öncelik kullanım sıklığı iddiasına değil, kaynaklı kapsam oranına dayanır.

| Kategori | Kaynaklı | Fikir | Kaynaklı oranı |
|---|---:|---:|---:|
| Kahvaltı | 5 | 20 | %20 |
| Dünya Mutfağı | 10 | 28 | %26 |
| Kaçamak | 8 | 22 | %27 |
| Hafif | 24 | 22 | %52 |
| Ev Yemeği | 43 | 3 | %93 |
| Doyurucu | 45 | 3 | %94 |

İlk odak Kahvaltı. Sahanda Yumurta ve Omlet işlendi: artık 7 kaynaklı / 18 fikir.
Sıradaki adaylar Çılbır, Patatesli Yumurta, Mantarlı Omlet, Yulaf Lapası.
Sonra Dünya Mutfağı ve Kaçamak. Porsiyonu belirsiz hamur işi kayıtları sayıyı doldurmak için zorlanmayacak.

## Bu turda işlenen kaynaklar

- [Sahanda Yumurta](https://yemek.com/tarif/sahanda-yumurta/): 1 kişi, 3+3 dk; 4 malzeme, kalori yok. Tava ısıtma adımda var, ek dinlendirme yok. Büyük porsiyonlarda aynı süre varsayılmaz.
- [Omlet](https://yemek.com/tarif/omlet/): 2 kişi, 5+3 dk, 206 kcal/porsiyon; 5 malzeme. Katlama sonrası 1–2 dk pişirme var, ayrıca bekleme yok.
- [Muhallebi](https://yemek.com/tarif/muhallebi/): 4 kişi, 5+15 dk, 415 kcal/porsiyon; servis dahil 8 malzeme. Soğutma süresi verilmediğinden toplam süre null, extraPrep true.
- [Sütlü İrmik Tatlısı](https://yemek.com/tarif/sutlu-irmik-tatlisi/): 6 kişi, 10+20 dk, 254 kcal/porsiyon; 6 malzeme. İlk soğuma + en az 4 saat buzdolabı beklemesi: toplam süre null, extraPrep true. İsteğe bağlı vişne miktarı verilmediğinden temel malzemelere eklenmedi.

Malzemeler kaynak ölçüleriyle işlendi; hazırlama metinleri kopyalanmadı. Kaynak kalorileri bağımsız olarak hesaplanmış sayılmaz.
Bu dört kayıt ayrı küçük gruptur; research/package-8.cjs içindeki beş taslakla birleştirilmiş tamamlanmış 20'lik paket değildir.
