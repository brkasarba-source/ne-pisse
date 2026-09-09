# Ne Pişse? içerik ve mantık denetimi

Son güncelleme: 2026-09-08

## Sonuç

Eski 238 kaydın tamamı yapısal olarak incelendi. Tam gastronomik doğrulama **tamamlanmadı**. Eski kategori bazlı süre, kalori, eşlikçi menü ve malzeme üretimi kaldırıldı. 233 aktif fikirden 95'i belirli bir kaynak tarifle eşleştirildi; 138 fikir doğrulanmayı bekliyor. Kaynak eşleşmesi, tarifin mutfakta tarafımızdan denendiği anlamına gelmez.

2026-09-08 tarihli ikinci, üçüncü ve dördüncü paketlerle 60 kayıt eklendi. Başlık ile tarif adımlarındaki beklemeler ayrıca kontrol edildi; kaynağın 0 kcal verdiği kayıtlar kalorisiz bırakıldı. Ölçülü malzemeler kişi sayısına göre orantılanır; kaşıklar daha küçük kaşığa, kesirli su bardağı ayrıca yaklaşık mililitreye çevrilir. Adetli ürünlerde satın alınacak tam adet ile tarifte kullanılacak pay ayrı gösterilir.

## Kaynaklı tarifler

Kaynakların başlığındaki hazırlık ve pişirme süreleri ayrı tutulur; evrensel bitiş süresi olarak sunulmaz. Eşlikçi yemekler dahil değildir. Kişi sayısı kaynak miktarını aştığında, adet veriminden porsiyon çıkarılamadığında veya ek bekleme net olmadığında süreli seçime girmez.

| Yemek / varyant | Hazırlık + pişirme | Kaynak miktarı | Sınırlama / kaynak |
|---|---:|---|---|
| Lokanta usulü tavuk sote | 20 + 25 dk | 2 kişi | [Kaynak](https://yemek.com/tarif/lokanta-usulu-tavuk-sote/). Kalori gösterilmiyor: yağ miktarı ile yayımlanmış yağ değeri arasında tutarsızlık şüphesi var. Adımlarda geçen su, malzeme türlerine eklendi. |
| El açması mantı | 60 + 15 dk | 3 kişi | [Kaynak](https://yemek.com/tarif/manti-3/). En az 10 dk hamur dinlendirmesinin başlık toplamına dahil olduğu net değil; süreli öneriden çıkarıldı. |
| Hamuru sıfırdan lahmacun | 30 + 50 dk | 10 adet | [Kaynak](https://yemek.com/tarif/lokanta-usulu-lahmacun/). Kişi başına adet uydurulmaz; süreli kişi filtresinden hariç. Fırın partileri süreyi etkiler. |
| Kuru fasulye | 30 + 50 dk | 4 kişi | [Kaynak](https://yemek.com/tarif/kuru-fasulye-1/). Geceden ıslatma ayrıca gerekli; süreli seçimden hariç. |
| Lokanta usulü mercimek çorbası | 10 + 50 dk | 6 kişi | [Kaynak](https://yemek.com/tarif/mercimek-corbasi/). Eski tostlu menü kaldırıldı. |
| Soğanlı menemen | 5 + 15 dk | 3 kişi | [Kaynak](https://yemek.com/tarif/domates-biber-soganli-menemen/). Ekmeğin/peynirin süresi ve kalorisi dahil değil. |
| Sade pankek | 10 + 20 dk | 6 kişi | [Kaynak](https://yemek.com/tarif/6-kisilik-pankek/). Meyve, bal ve diğer eşlikçiler dahil değil. |
| Fırında kuzu tandır | 20 + 210 dk | 6 kişi | [Kaynak](https://yemek.com/tarif/kuzu-tandir/). Eski kategori tahmini 45 dakika reddedildi. |

Kalorisi gösterilen tariflerde kaynak porsiyon değerleri kullanılır; bağımsız besin hesabı değildir. Her kişi için bir kaynak porsiyonu varsayılır. Kaynak değiştiğinde verinin yeniden kontrol edilmesi gerekir. Malzeme kontrol listesi kaynak verimini kişi sayısına oranlar ve uygulanabilir gösterime dönüştürür; tarifin kimyasal/duyusal dengesini yeniden formüle ettiği iddia edilmez. Uygulama hiçbir yemek için kendi yazdığı pişirme talimatı üretmez.

İncelenen alternatif [sade kuru fasulye](https://yemek.com/tarif/sade-kuru-fasulye/) sayfasında başlık süresi ile adımlardaki ön haşlama/düdüklü süreleri uyumlu olmadığından bu tarif süre referansı yapılmadı.

## Diğer düzeltmeler

- Gözleme, kalamar ızgara, piyaz ve tavuklu Sezar tekrarları birleştirildi. Eski favori kimlikleri yenilerine taşınır.
- Belirsiz Kori etiketi seçimden çıkarıldı; başka bir yemeğe sessizce dönüştürülmedi.
- Doğrulanmamış fikirler varsayılan olarak seçilmez. Kullanıcı açıkça dahil ederse yalnızca süre ve kalori sınırı yokken seçilir.
- 2.000 kcal üstü artık gerçekten > 2.000 kcal uygular; önceki <= 2.500 hatası giderildi.
- Gecikmeli seçim zamanlayıcısı kaldırıldı. Hızlı tıklamalar eski filtre sonucu ile kartı sonradan değiştiremez.
- Seçenek bitince filtreler ve yakın zamanda yenilenler sessizce yok sayılmaz.
- Favoriler de güncel filtreye uyar. Filtre değiştiğinde eski kartın artık uygun olmadığı belirtilir.
- Kişi artırma/azaltma kartı yeniden kurmaz; checkbox durumu korunur. Sınırlar 1 ve 8.
- Saklama verisi doğrulanır; bozuk JSON ve engellenen localStorage uygulamayı çökertmez. Geçmişte saklanan serbest isim HTML olarak işlenmez.
- Paylaşım metninde de bilinmeyen veriler bilinmiyor olarak kalır. Metin uzunluğuna göre görsel yüksekliği belirlenir. İptal ve hata ayrı bildirilir.
- Önbellek sürümü değiştirildi; yalnızca uygulamaya ait önbellekler temizlenir. Yeni sürüm açık eski sekmeler kapandıktan sonra etkinleşir; kullanıcıya güncelleme bildirimi verilir.

## Test kapsamı

Çalıştırma: `node tests/audit.test.cjs`

15 test geçti. Tüm katalog üzerinde kategori, 1–8 kişi, süre, kalori ve doğrulanmamış-fikir seçeneklerinin kombinasyonları kontrol edildi. Uygulama etkileşimleri sıkı bir DOM test dublörü ile test edildi. Paylaşım başarısı, iptali, hatası ve indirme fallback'i sahte tarayıcı API'leriyle test edildi. Yerel dosya referansları, script sırası, önbellek listesi ve JavaScript sözdizimi kontrol edildi.

**Gerçek tarayıcı yerleşimi, PNG render görünümü, iOS/Android paylaşım ekranı, çift dokunma davranışı ve gerçek çevrimdışı güncelleme yaşam döngüsü test edilmedi.** Bunlar otomatik mantık testlerinin kapsadığı şeyler değildir. Bu statik Sites projesinde desteklenen ajan tarayıcı önizlemesi yoktur.

## Yayın öncesi açık işler

1. 158 fikir için varyant, tam malzeme/ölçü, kaynak ve gerçekçi toplam süre doğrulaması; doğrulanana kadar mevcut karantina korunmalı.
2. Orijinal yemek çarkının bire bir tam aktarımının kontrolü. Mevcut katalogda Tatlı kategorisi yok; eksiksiz katalog iddiası kaldırıldı.
3. Kaynak porsiyonu ve gramajı ile tutarlı besin hesabı; gerçek kişi sayısına ölçeklenen alışveriş listesi henüz yok.
4. Gerçek mobil tarayıcıda dokunma, görsel paylaşım, kurulabilirlik ve eski önbellekten güncelleme testi. SVG-only manifest ikonlarının cihaz desteği ayrıca kontrol edilmeli.
5. Bu değişiklikler kaydedilmiş taslaktır; mevcut kamuya açık site otomatik güncellenmez.

## Kayıt bazında karar

| Eski kimlik | Yemek adı | İşlem |
|---|---|---|
| meal-0 | Tavuk Sote | Belirli kaynak tarifle eşleştirildi; alan kısıtları yukarıda |
| meal-1 | Et Sote | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-2 | Tas Kebabı | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-3 | Köfte | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-4 | Adana Kebap | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-5 | Tavuk Şiş | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-6 | Tavuk Fajita | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-7 | Tavuk Köri | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-8 | Tavuk Schnitzel | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-9 | Mantı | Belirli kaynak tarifle eşleştirildi; alan kısıtları yukarıda |
| meal-10 | Lahmacun | Belirli kaynak tarifle eşleştirildi; alan kısıtları yukarıda |
| meal-11 | Etli Nohut | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-12 | Kuru Fasulye | Belirli kaynak tarifle eşleştirildi; alan kısıtları yukarıda |
| meal-13 | Yeşil Mercimek | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-14 | Barbunya Pilaki | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-15 | Etli Bamya | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-16 | Karnıyarık | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-17 | Patlıcan Musakka | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-18 | Fırında Tavuk | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-19 | Fırın Makarna | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-20 | İzmir Köfte | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-21 | Zeytinyağlı Taze Fasulye | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-22 | Zeytinyağlı Enginar | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-23 | Mercimek Çorbası | Belirli kaynak tarifle eşleştirildi; alan kısıtları yukarıda |
| meal-24 | Ezogelin | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-25 | Tarhana | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-26 | Yayla Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-27 | Izgara Tavuk | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-28 | Izgara Somon | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-29 | Izgara Levrek | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-30 | Izgara Sebze | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-31 | Sezar Salata | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-32 | Ton Balıklı Salata | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-33 | Akdeniz Salatası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-34 | Tavuklu Sandviç | Kaynaklandı; 30 dk marinasyon başlık süresinden ayrı, süre filtresinden çıkarıldı |
| meal-35 | Sebzeli Sandviç | Kaynaklandı; 20 dk marinasyon hazırlık süresine dahil |
| meal-36 | Hamburger | Kaynaklandı; hamur ve köfte dinlendirmeleri nedeniyle süre filtresinden çıkarıldı |
| meal-37 | Cheeseburger | Kaynaklandı; hamur ve köfte dinlendirmeleri nedeniyle süre filtresinden çıkarıldı |
| meal-38 | Tavuk Burger | Kaynaklandı; kaynağın 0 kcal değeri kullanılmadı |
| meal-39 | Karışık Pizza | Kaynaklandı; maya beklemeleri nedeniyle süre filtresinden çıkarıldı |
| meal-40 | Kıymalı Pide | Kaynaklandı; maya beklemeleri nedeniyle süre filtresinden çıkarıldı |
| meal-41 | Kumpir | Kaynaklandı |
| meal-42 | Çıtır Tavuk | Kaynaklandı; 2–12 saat marinasyon nedeniyle süre filtresinden çıkarıldı |
| meal-43 | Balık Ekmek | Kaynaklandı; kaynağın 0 kcal değeri kullanılmadı |
| meal-44 | Taco | Kaynaklandı; 12 adet yaklaşık 4 porsiyon kabul edildi, belirsiz kalori kullanılmadı |
| meal-45 | Quesadilla | Kaynaklandı; kaynağın 0 kcal değeri kullanılmadı |
| meal-46 | Burrito | Kaynaklandı |
| meal-47 | Pad Thai | Kaynaklandı; kalori kaynağı olmadığı için gösterilmedi |
| meal-48 | Ramen | Kaynaklandı |
| meal-49 | Bibimbap | Kaynaklandı; kaynağın 0 kcal değeri kullanılmadı |
| meal-50 | Sushi | Kaynaklandı; önceden hazırlanmış sushi pilavı gerektiği için süre filtresinden çıkarıldı |
| meal-51 | Moussaka | Kaynaklandı; kaynağın 0 kcal değeri kullanılmadı |
| meal-52 | Falafel | Kaynaklandı; geceden ıslatma ve 1 saat dinlendirme nedeniyle süre filtresinden çıkarıldı |
| meal-53 | Karides Güveç | Kaynaklandı; kaynağın 0 kcal değeri kullanılmadı |
| meal-54 | Bol Sebzeli Menemen | Belirli kaynak tarifle eşleştirildi; alan kısıtları yukarıda |
| meal-55 | Sucuklu Yumurta | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-56 | Peynirli Omlet | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-57 | Pankek | Belirli kaynak tarifle eşleştirildi; alan kısıtları yukarıda |
| meal-58 | Kaşarlı Tost | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-59 | Simit Tabağı | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-60 | Bonfile | Kaynak tarifle eşleştirildi; 20–30 dk marine/dinlendirme hazırlığa dahil |
| meal-61 | Antrikot | Kaynak tarifle eşleştirildi; en az 2 saat marinasyon toplam süreye dahil |
| meal-62 | Dana Haşlama | Kuzu etli kaynak varyantına eşleştirildi; dana alternatifi süre uyarısıyla belirtildi |
| meal-63 | Hünkar Beğendi | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-64 | Ali Nazik | Kaynak tarifle eşleştirildi; belirsiz dinlenme nedeniyle süre filtresinden çıkarıldı |
| meal-65 | İskender | Kaynak tarifle eşleştirildi; marinasyon ve bir gecelik dondurma nedeniyle süre filtresinden çıkarıldı |
| meal-66 | Çökertme Kebabı | Kaynak tarifle eşleştirildi; 1 saat dinlenme nedeniyle süre filtresinden çıkarıldı |
| meal-67 | Patlıcan Kebabı | Kaynak tarifle eşleştirildi; belirsiz tuzlu-su beklemesi nedeniyle süre filtresinden çıkarıldı |
| meal-68 | Orman Kebabı | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-69 | Güveç | Kaynak tarifle eşleştirildi; fırın süresi adımlardaki 90 dk olarak düzeltildi |
| meal-70 | Etli Türlü | Kaynak tarifle eşleştirildi; düdüklüdeki et pişirme süresi kontrol edildi |
| meal-71 | Kuzu Tandır | Belirli kaynak tarifle eşleştirildi; alan kısıtları yukarıda |
| meal-72 | Ciğer Sote | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-73 | Hasanpaşa Köfte | Kaynak tarifle eşleştirildi; önceden haşlanmış patates gereksinimi belirtildi |
| meal-74 | Dalyan Köfte | Kaynak tarifle eşleştirildi; haşlama adımları hazırlık notuna alındı |
| meal-75 | Tavuk Pirzola | Kaynak tarifle eşleştirildi; 1 saat marinasyon nedeniyle süre filtresinden çıkarıldı |
| meal-76 | Tavuk Sarma | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-77 | Beşamel Soslu Tavuk | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-78 | Tavuk Graten | Kaynaklandı; önceden haşlanmış sebzeler nedeniyle süre filtresinden çıkarıldı |
| meal-79 | Tavuklu Pilav | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-80 | Kremalı Tavuk | Kaynaklandı; 2–3 saat marinasyon nedeniyle süre filtresinden çıkarıldı |
| meal-81 | Tavuk Kapama | Kaynak tarifle eşleştirildi; 1,5 saat pişirme korundu |
| meal-82 | Fırında Tavuk Kanat | Alternatif kaynakla eşleştirildi; 2–3 saat marinasyon nedeniyle süre filtresinden çıkarıldı |
| meal-83 | Tavuklu Makarna | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-84 | Tavuklu Keşkek | Kaynak tarifle eşleştirildi; düdüklü tencere yöntemi belirtildi |
| meal-85 | Etli Pilav | Kaynaklandı; önceden haşlanmış nohut nedeniyle süre filtresinden çıkarıldı |
| meal-86 | Tavuklu Bulgur Pilavı | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-87 | Özbek Pilavı | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-88 | İç Pilav | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-89 | Sebzeli Risotto | Kaynak tarifle eşleştirildi; 10 dakika dinlenme görünür kılındı |
| meal-90 | Pesto Makarna | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve süre kaynaktan alındı |
| meal-91 | Bolonez Makarna | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve kalori kaynaktan alındı |
| meal-92 | Napoliten Makarna | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve kalori kaynaktan alındı |
| meal-93 | Fettucine Alfredo | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve kalori kaynaktan alındı |
| meal-94 | Lazanya | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve kalori kaynaktan alındı |
| meal-95 | Mac & Cheese | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve kalori kaynaktan alındı |
| meal-96 | Etli Bezelye | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve kalori kaynaktan alındı |
| meal-97 | Patates Yemeği | Kaynak tarifle eşleştirildi; ölçü, porsiyon ve kalori kaynaktan alındı |
| meal-98 | Türlü | Kaynaklandı; belirsiz tuzlu-su beklemesi nedeniyle süre filtresinden çıkarıldı |
| meal-99 | Pırasa Yemeği | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-100 | Kabak Yemeği | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-101 | Kapuska | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-102 | Ispanak Yemeği | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-103 | Kereviz Yemeği | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-104 | Semizotu Yemeği | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-105 | Tavuklu Bezelye | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-106 | Etli Patates | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-107 | Sulu Köfte | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-108 | Ekşili Köfte | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-109 | Terbiyeli Köfte | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-110 | Biber Dolması | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-111 | Kabak Dolması | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-112 | Patlıcan Dolması | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-113 | Yaprak Sarma | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-114 | Lahana Sarma | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-115 | Soğan Dolması | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-116 | Kuru Dolma | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-117 | Fırında Sebzeli Köfte | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-118 | Tepsi Kebabı | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-119 | Patates Oturtma | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-120 | Kabak Musakka | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-121 | Beşamel Soslu Karnabahar | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-122 | Fırında Karnabahar | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-123 | Fırında Mücver | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-124 | Tavuklu Patates | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-125 | Mercimek Yemeği | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-126 | Kuru Börülce | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-127 | Maş Fasulyesi | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-128 | Zeytinyağlı Nohut | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-129 | Etli Kuru Fasulye | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-130 | Fasulye Piyazı | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-131 | Domates Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-132 | Sebze Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-133 | Tavuk Suyu Çorba | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-134 | Mantar Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-135 | Brokoli Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-136 | Karnabahar Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-137 | Düğün Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-138 | İşkembe Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-139 | Şehriye Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-140 | Kabak Çorbası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-141 | Çoban Salata | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-142 | Roka Salatası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-143 | Gavurdağı Salatası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-144 | Kinoalı Salata | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-145 | Zeytin Yağlı Sebze Salatası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-146 | Tavuklu Sezar Salata | Tavuklu Sezar: meal-31 ile birleştirildi |
| meal-147 | Hellimli Salata | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-148 | Nohutlu Salata | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-149 | Mercimek Salatası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-150 | Piyaz | Fasulye Piyazı meal-130 ile birleştirildi |
| meal-151 | Izgara Hindi | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-152 | Izgara Köfte | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-153 | Izgara Hellim | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-154 | Izgara Karides | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-155 | Izgara Ahtapot | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-156 | Izgara Kalamar | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-157 | Izgara Uskumru | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-158 | Izgara Çipura | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-159 | Sebze Sote | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-160 | Brokoli Sote | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-161 | Karnabahar Sote | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-162 | Mantar Sote | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-163 | Kabak Spagetti | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-164 | Sebzeli Kinoa | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-165 | Zeytinyağlı Semizotu | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-166 | Margarita Pizza | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-167 | Sucuklu Pizza | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-168 | Tavuklu Pizza | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-169 | Karışık Pide | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-170 | Kuşbaşılı Pide | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-171 | Kaşarlı Pide | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-172 | Etli Ekmek | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-173 | Kokoreç | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-174 | Tantuni | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-175 | Dürüm Döner | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-176 | Midye Dolma | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-177 | Islak Hamburger | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-178 | Gözleme | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-179 | Patso | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-180 | Sosisli Sandviç | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-181 | Soğan Halkası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-182 | Mozzarella Stick | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-183 | Kalamar Tava | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-184 | Midye Tava | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-185 | Paçanga Böreği | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-186 | Sigara Böreği | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-187 | Çıtır Peynir | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-188 | Noodle | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-189 | Spring Roll | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-190 | Kori | Belirsiz yemek adı; seçimden çıkarıldı |
| meal-191 | Tom Yum | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-192 | Teriyaki Tavuk | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-193 | Kung Pao Tavuk | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-194 | Yakitori | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-195 | Tempura | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-196 | Gyoza | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-197 | Pho | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-198 | Tabbouleh | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-199 | Şakşuka | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-200 | Humus Tabağı | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-201 | Fattoush | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-202 | Ratatouille | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-203 | Paella | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-204 | Falafel Dürüm | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-205 | Greek Bowl | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-206 | Nachos | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-207 | Enchilada | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-208 | Chili Con Carne | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-209 | Fajita Bowl | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-210 | Tostada | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-211 | Meksika Pilavı | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-212 | Ahtapot Salatası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-213 | Midye Güveç | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-214 | Kalamar Izgara | Izgara Kalamar meal-156 ile birleştirildi |
| meal-215 | Karides Tava | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-216 | Somon Teriyaki | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-217 | Deniz Mahsullü Makarna | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-218 | Sahanda Yumurta | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-219 | Çılbır | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-220 | Omlet | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-221 | Patatesli Yumurta | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-222 | Mantarlı Omlet | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-223 | Pastırmalı Yumurta | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-224 | Pişi | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-225 | Gözleme | Gözleme meal-178 ile birleştirildi |
| meal-226 | Bazlama | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-227 | Boyoz | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-228 | Kruvasan | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-229 | Açma | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-230 | Poğaça | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-231 | Börek | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-232 | Waffle | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-233 | French Toast | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-234 | Granola Kasesi | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-235 | Yulaf Lapası | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-236 | Chia Puding | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |
| meal-237 | Meyveli Yoğurt | Eski süre/kalori/malzeme reddedildi; yalnızca doğrulanmamış fikir |

## 2026-09-09 — Selected menu companions
- Added one companion selection per category and shared shopping list. Only exact name/unit numeric quantities are merged before display rounding; strings and ranges stay separate. People changes preserve checked rows. New main resets companions.
- Mapped existing mercimek soup, cauliflower soup and coban salad records; unavailable recipes remain disabled suggestions. Legacy mercimek ingredients remain explicitly unmeasured.
- Main time/calories and share card still exclude companions. Menu totals, missing companion measurements and next recipe batch remain pending.
- 22 automated tests pass; native mobile/browser rendering not tested in this change.
