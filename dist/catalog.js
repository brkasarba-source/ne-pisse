// Recipe-specific reference data. Unknown values MUST remain null; never inherit category estimates.
const mealAliases = {"meal-225":"meal-178","meal-214":"meal-156","meal-150":"meal-130","meal-146":"meal-31"};
const meals = [
  {
    "id": "meal-0",
    "name": "Tavuk Sote",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Lokanta usulü tavuk sote",
    "prep": 20,
    "cook": 25,
    "time": 45,
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Kaynak 2 kişilik tarifte 2–3 adet tavuk göğsü kullanıyor; gramaj belirtilmiyor. Sıcak su göz kararı ekleniyor. Süre miktar ve ekipmana bağlıdır. Kalori, et gramajı ve yağ miktarı belirsiz olduğundan gösterilmiyor.",
    "cal": null,
    "ingredients": [
      {
        "amount": [
          2,
          3
        ],
        "unit": "adet",
        "name": "tavuk göğsü"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "biber"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "salça"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": [
          2,
          3
        ],
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      "sıcak su (ölçüsü kaynakta yok)"
    ],
    "source": "https://yemek.com/tarif/lokanta-usulu-tavuk-sote/",
    "checkedAt": "2026-09-09"
  },
  {
    "id": "meal-1",
    "name": "Et Sote",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Et sote",
    "time": 70,
    "prep": 20,
    "cook": 50,
    "cal": 367,
    "ingredients": [
      {
        "name": "sotelik dana eti",
        "amount": 600,
        "unit": "gram"
      },
      {
        "name": "zeytinyağı",
        "amount": 4,
        "unit": "yemek kaşığı"
      },
      {
        "name": "kuru soğan",
        "amount": 1,
        "unit": "adet"
      },
      {
        "name": "domates",
        "amount": 2,
        "unit": "adet"
      },
      {
        "name": "yeşil biber",
        "amount": 3,
        "unit": "adet"
      },
      {
        "name": "domates salçası",
        "amount": 1,
        "unit": "tatlı kaşığı"
      },
      {
        "name": "biber salçası",
        "amount": 0.5,
        "unit": "tatlı kaşığı"
      },
      {
        "name": "sıcak su",
        "amount": 1,
        "unit": "su bardağı"
      },
      {
        "name": "tuz",
        "amount": 1,
        "unit": "çay kaşığı"
      },
      {
        "name": "karabiber",
        "amount": 0.5,
        "unit": "çay kaşığı"
      },
      {
        "name": "kekik",
        "amount": 1,
        "unit": "tatlı kaşığı"
      }
    ],
    "source": "https://yemek.com/tarif/et-sote/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-2",
    "name": "Tas Kebabı",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Tas kebabı",
    "time": 70,
    "prep": 20,
    "cook": 50,
    "cal": 360,
    "ingredients": [
      {
        "name": "kuşbaşı dana eti",
        "amount": 800,
        "unit": "gram"
      },
      {
        "name": "ayçiçek yağı",
        "amount": 1,
        "unit": "yemek kaşığı"
      },
      {
        "name": "tereyağı",
        "amount": 2,
        "unit": "yemek kaşığı"
      },
      {
        "name": "kuru soğan",
        "amount": 1,
        "unit": "adet"
      },
      {
        "name": "sarımsak",
        "amount": 3,
        "unit": "diş"
      },
      {
        "name": "un",
        "amount": 1,
        "unit": "yemek kaşığı"
      },
      {
        "name": "domates salçası",
        "amount": 1,
        "unit": "tatlı kaşığı"
      },
      {
        "name": "tuz",
        "amount": 1,
        "unit": "tatlı kaşığı"
      },
      {
        "name": "patates",
        "amount": 2,
        "unit": "adet"
      },
      {
        "name": "havuç",
        "amount": 1,
        "unit": "adet"
      },
      {
        "name": "sıcak su",
        "amount": 3,
        "unit": "su bardağı"
      },
      {
        "name": "tane karabiber",
        "amount": 4,
        "unit": "adet"
      }
    ],
    "source": "https://yemek.com/tarif/tas-kebabi/",
    "yieldPeople": 5,
    "yieldLabel": "5 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "checkedAt": "2026-09-08"
  },
  {
      "id": "meal-3",
      "name": "Köfte",
      "mode": "Doyurucu",
      "subcategory": "Etli",
      "status": "sourced",
      "variant": "Tavada anne köftesi",
      "time": null,
      "prep": 45,
      "cook": 20,
      "cal": 412,
      "ingredients": [
        {
          "amount": 600,
          "unit": "gram",
          "name": "orta yağlı dana kıyma"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "yumurta"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "orta boy kuru soğan"
        },
        {
          "amount": 2,
          "unit": "dilim",
          "name": "bayat ekmek içi"
        },
        {
          "amount": 2,
          "unit": "yemek kaşığı",
          "name": "süt"
        },
        {
          "amount": 1,
          "unit": "diş",
          "name": "sarımsak"
        },
        {
          "amount": 0.25,
          "unit": "demet",
          "name": "maydanoz"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "tuz"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "karabiber"
        },
        {
          "amount": 0.5,
          "unit": "çay kaşığı",
          "name": "kimyon"
        },
        {
          "amount": 0.5,
          "unit": "çay kaşığı",
          "name": "köfte baharatı (isteğe bağlı)"
        },
        {
          "amount": 4,
          "unit": "yemek kaşığı",
          "name": "ayçiçek yağı (kızartmak için)"
        }
      ],
      "source": "https://yemek.com/tarif/anne-koftesi/",
      "yieldPeople": 4,
      "yieldLabel": "4 kişilik",
      "extraPrep": true,
      "note": "Kaynak 45 dakika hazırlık ve 20 dakika pişirme verir. Dinlendirme dahil toplam süre belirsiz olduğundan süreli filtrelere alınmaz. Köfte baharatı isteğe bağlıdır. Kalori kaynak porsiyon tahminidir.",
      "waitLabel": "Köfte harcı en az 30 dakika buzdolabında dinlenir; kaynağın süresine dahil mi belirsiz",
      "checkedAt": "2026-09-09"
    },
  {
    "id": "meal-4",
    "name": "Adana Kebap",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Ev yapımı Adana kebap",
    "time": null,
    "prep": 30,
    "cook": 20,
    "cal": 282,
    "ingredients": [
      {
        "name": "kuzu-dana karışık kıyma",
        "amount": 600,
        "unit": "gram"
      },
      {
        "name": "pul biber",
        "amount": 1,
        "unit": "yemek kaşığı"
      },
      {
        "name": "tuz",
        "amount": 2,
        "unit": "tatlı kaşığı"
      },
      {
        "name": "karabiber",
        "amount": 1,
        "unit": "çay kaşığı"
      },
      {
        "name": "tereyağı (isteğe bağlı)",
        "amount": 1,
        "unit": "yemek kaşığı"
      },
      {
        "name": "kapya biber (isteğe bağlı)",
        "amount": 1,
        "unit": "adet"
      }
    ],
    "source": "https://yemek.com/tarif/adana-kebap/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "checkedAt": "2026-09-08",
    "waitLabel": "5–6 saat buzdolabında dinlendirme"
  },
  {
    "id": "meal-5",
    "name": "Tavuk Şiş",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Fırında tavuk şiş",
    "time": 120,
    "prep": 90,
    "cook": 30,
    "cal": 250,
    "ingredients": [
      {
        "name": "tavuk göğsü",
        "amount": 500,
        "unit": "gram"
      },
      {
        "name": "süt",
        "amount": 3.5,
        "unit": "yemek kaşığı"
      },
      {
        "name": "zeytinyağı",
        "amount": 2,
        "unit": "yemek kaşığı"
      },
      {
        "name": "sarımsak",
        "amount": 1,
        "unit": "diş"
      },
      {
        "name": "tuz",
        "amount": 1,
        "unit": "tutam"
      },
      {
        "name": "kırmızı toz biber",
        "amount": 1,
        "unit": "tutam"
      },
      {
        "name": "kekik",
        "amount": 1,
        "unit": "tutam"
      },
      {
        "name": "karabiber",
        "amount": 1,
        "unit": "tutam"
      },
      {
        "name": "pul biber",
        "amount": 1,
        "unit": "tutam"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-sis/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "checkedAt": "2026-09-08",
    "waitLabel": "Hazırlığa en az 1 saat marinasyon dahil"
  },
  {
    "id": "meal-6",
    "name": "Tavuk Fajita",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Tavuk fajita",
    "time": 65,
    "prep": 20,
    "cook": 15,
    "cal": 441,
    "ingredients": [
      {
        "name": "fileto tavuk göğsü",
        "amount": 400,
        "unit": "gram"
      },
      {
        "name": "kuru soğan",
        "amount": 1,
        "unit": "adet"
      },
      {
        "name": "kapya biber",
        "amount": 2,
        "unit": "adet"
      },
      {
        "name": "yeşil dolmalık biber",
        "amount": 2,
        "unit": "adet"
      },
      {
        "name": "zeytinyağı",
        "amount": 2,
        "unit": "yemek kaşığı"
      },
      {
        "name": "tortilla ekmeği",
        "amount": 4,
        "unit": "adet"
      },
      {
        "name": "limon suyu",
        "amount": 3,
        "unit": "yemek kaşığı"
      },
      {
        "name": "karabiber",
        "amount": 1,
        "unit": "çay kaşığı"
      },
      {
        "name": "sarımsak",
        "amount": 2,
        "unit": "diş"
      },
      {
        "name": "soya sosu",
        "amount": 2,
        "unit": "yemek kaşığı"
      },
      {
        "name": "tuz",
        "amount": 1,
        "unit": "çay kaşığı"
      },
      {
        "name": "pudra şekeri",
        "amount": 1,
        "unit": "çay kaşığı"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-fajita/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "checkedAt": "2026-09-08",
    "waitLabel": "Başlık süresine ek 30 dakika marinasyon dahil edildi"
  },
  {
    "id": "meal-7",
    "name": "Tavuk Köri",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Köri soslu tavuk",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "cal": 318,
    "ingredients": [
      {
        "name": "kuşbaşı tavuk göğsü",
        "amount": 600,
        "unit": "gram"
      },
      {
        "name": "sıvı yağ",
        "amount": 2,
        "unit": "yemek kaşığı"
      },
      {
        "name": "un",
        "amount": 1,
        "unit": "yemek kaşığı"
      },
      {
        "name": "tereyağı",
        "amount": 2,
        "unit": "yemek kaşığı"
      },
      {
        "name": "soğuk süt",
        "amount": 2,
        "unit": "su bardağı"
      },
      {
        "name": "sıcak su",
        "amount": 0.5,
        "unit": "su bardağı"
      },
      {
        "name": "köri",
        "amount": 1,
        "unit": "tatlı kaşığı"
      },
      {
        "name": "karabiber",
        "amount": 1,
        "unit": "çay kaşığı"
      },
      {
        "name": "tuz",
        "amount": 1,
        "unit": "çay kaşığı"
      },
      {
        "name": "maydanoz",
        "amount": 0.25,
        "unit": "demet"
      }
    ],
    "source": "https://yemek.com/tarif/kori-soslu-tavuk/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-8",
    "name": "Tavuk Schnitzel",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Tavuk şinitzel",
    "time": 28,
    "prep": 15,
    "cook": 13,
    "cal": 420,
    "ingredients": [
      {
        "name": "fileto tavuk göğsü",
        "amount": 4,
        "unit": "adet"
      },
      {
        "name": "tuz",
        "amount": 1,
        "unit": "çay kaşığı"
      },
      {
        "name": "karabiber",
        "amount": 0.5,
        "unit": "çay kaşığı"
      },
      {
        "name": "un",
        "amount": 5,
        "unit": "yemek kaşığı"
      },
      {
        "name": "yumurta",
        "amount": 2,
        "unit": "adet"
      },
      {
        "name": "hardal (isteğe bağlı)",
        "amount": 1,
        "unit": "tatlı kaşığı"
      },
      {
        "name": "galeta unu",
        "amount": 1.5,
        "unit": "su bardağı"
      },
      {
        "name": "ayçiçek yağı",
        "amount": 1.5,
        "unit": "su bardağı"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-sinitzel/",
    "yieldPeople": 8,
    "yieldLabel": "8 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-9",
    "name": "Mantı",
    "mode": "Doyurucu",
    "subcategory": "Hamurlu",
    "status": "sourced",
    "variant": "El açması mantı",
    "prep": 60,
    "cook": 15,
    "time": 75,
    "yieldPeople": 3,
    "yieldLabel": "3 kişilik",
    "extraPrep": true,
    "note": "Hamur en az 10 dakika dinleniyor. Bu beklemenin başlıktaki hazırlık süresine dahil olduğu net değil; süre sınırına göre önerilmez. Sos için verilen yarım fincanın mililitre karşılığı kaynakta belirtilmiyor.",
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta (hamur için)"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "un (hamur için)"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz (hamur için)"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "su (hamura kontrollü eklenecek)"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan (iç harç için)"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz (iç harç için)"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "biber salçası (iç harç için)"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "yoğurt (üzeri için)"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "fincan",
        "name": "sıvı yağ (sos için)"
      },
      {
        "amount": 0.5,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "biber salçası (sos için)"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kuru nane"
      },
      "mantıyı haşlamak için tuzlu su (ölçüsü kaynakta yok)"
    ],
    "source": "https://yemek.com/tarif/manti-3/",
    "checkedAt": "2026-09-07"
  },
  {
    "id": "meal-10",
    "batchLimited": true,
    "name": "Lahmacun",
    "mode": "Doyurucu",
    "subcategory": "Hamurlu",
    "status": "sourced",
    "variant": "Hamuru sıfırdan, fırında lahmacun",
    "prep": 30,
    "cook": 50,
    "time": 80,
    "yieldPeople": 5,
    "yieldLabel": "10 adet; alışveriş hesabında kişi başı 2 adet",
    "extraPrep": false,
    "note": "Kaynak 10 adet verir; kişi sayısına çevirmek için alışveriş hesabında açıkça kişi başı 2 lahmacun varsayılır. Süre 10 adetlik tarif içindir; fırın kapasitesi ve parti sayısı süreyi uzatabilir.",
    "cal": null,
    "ingredients": [
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "ılık su (hamur için)"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz (hamur için)"
      },
      {
        "amount": [
          4.5,
          5
        ],
        "unit": "su bardağı",
        "name": "un (hamura kontrollü eklenecek)"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı (hamur için)"
      },
      {
        "amount": 400,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yeşil biber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tepeleme salça"
      },
      {
        "amount": 3,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı (iç harç için)"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz (iç harç için)"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz biber"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "maydanoz"
      }
    ],
    "source": "https://yemek.com/tarif/lokanta-usulu-lahmacun/",
    "checkedAt": "2026-09-07"
  },
  {
      "id": "meal-11",
      "name": "Etli Nohut",
      "mode": "Doyurucu",
      "subcategory": "Bakliyat",
      "status": "sourced",
      "variant": "Tencerede etli nohut",
      "time": null,
      "prep": 20,
      "cook": 45,
      "cal": 420,
      "ingredients": [
        {
          "amount": 2,
          "unit": "su bardağı",
          "name": "nohut (geceden ıslatılmış)"
        },
        {
          "amount": 300,
          "unit": "gram",
          "name": "kuşbaşı dana eti"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "büyük boy soğan"
        },
        {
          "amount": 2,
          "unit": "yemek kaşığı",
          "name": "sıvı yağ"
        },
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "tereyağı"
        },
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "domates salçası"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "tuz"
        },
        {
          "amount": 0.5,
          "unit": "çay kaşığı",
          "name": "karabiber"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "pul biber (isteğe bağlı)"
        },
        {
          "amount": [
            3,
            4
          ],
          "unit": "su bardağı",
          "name": "sıcak su veya et suyu"
        },
        "ıslatma ve haşlama suyu (ölçüsü kaynakta yok)"
      ],
      "source": "https://www.lezzet.com.tr/yemek-tarifleri/diger-tarifler/baklagil-ve-tahilli-yemekler/etli-nohut-yemegi-tarifi",
      "yieldPeople": 6,
      "yieldLabel": "6 kişilik",
      "extraPrep": true,
      "note": "Kaynak nohudu geceden ıslatılmış olarak ölçülendiriyor. Ön haşlama suyu ayrıca gerekir; miktarı belirtilmemiştir. 20+45 dakika tüm ön hazırlıkları kapsamaz. Kalori kaynağın yaklaşık porsiyon değeridir.",
      "waitLabel": "Geceden ıslatma ve ön haşlama gerekiyor; haşlama süresi kaynakta belirtilmemiş",
      "checkedAt": "2026-09-09"
    },
  {
    "id": "meal-12",
    "name": "Kuru Fasulye",
    "mode": "Ev Yemeği",
    "subcategory": "Bakliyat",
    "status": "sourced",
    "variant": "Geceden ıslatılan kuru fasulye",
    "prep": 30,
    "cook": 50,
    "time": 80,
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Geceden ıslatma 80 dakikaya dahil değildir; süreli seçimlere alınmaz. Kaynak biberi malzeme listesinde 1/2, yapılışta 1 çay kaşığı veriyor; aralık bu farkı gösterir. Su ihtiyacı fasulyeye göre değişebilir. İsteğe bağlı fırınlama ayrıca 20 dakika.",
    "cal": 427,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "kuru fasulye (geceden ıslatılacak)"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy kuru soğan"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": [
          0.5,
          1
        ],
        "unit": "çay kaşığı",
        "name": "tatlı toz kırmızı biber"
      }
    ],
    "source": "https://yemek.com/tarif/kuru-fasulye-1/",
    "checkedAt": "2026-09-09"
  },
  {
    "id": "meal-13",
    "name": "Yeşil Mercimek",
    "mode": "Ev Yemeği",
    "subcategory": "Bakliyat",
    "status": "sourced",
    "variant": "Yeşil Mercimek Yemeği",
    "time": null,
    "prep": 10,
    "cook": 30,
    "cal": 323,
    "ingredients": [
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "yeşil mercimek"
      },
      {
        "amount": 2.5,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 1.5,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 0.5,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": [
          2.5,
          3
        ],
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 0.25,
        "unit": "adet",
        "name": "limonun suyu"
      }
    ],
    "source": "https://yemek.com/tarif/yesil-mercimek-yemegi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Ön ıslatma gerekiyor; kaynak süre belirtmiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-14",
    "name": "Barbunya Pilaki",
    "mode": "Ev Yemeği",
    "subcategory": "Zeytinyağlı",
    "status": "sourced",
    "variant": "Barbunya Pilaki",
    "time": 50,
    "prep": 15,
    "cook": 35,
    "cal": 199,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "barbunya"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 3,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kesme şeker"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "maydanoz"
      }
    ],
    "source": "https://yemek.com/tarif/barbunya-pilaki/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-15",
    "name": "Etli Bamya",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Etli Bamya",
    "time": 45,
    "prep": 20,
    "cook": 25,
    "cal": 210,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "kuşbaşı et"
      },
      {
        "amount": 500,
        "unit": "gram",
        "name": "bamya"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy soğan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "salça"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "sıcak su"
      }
    ],
    "source": "https://yemek.com/tarif/etli-bamya/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-16",
    "name": "Karnıyarık",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Karnıyarık",
    "time": 80,
    "prep": 30,
    "cook": 50,
    "cal": 430,
    "ingredients": [
      {
        "amount": 6,
        "unit": "adet",
        "name": "patlıcan"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yeşil biber"
      },
      {
        "amount": 350,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "tatlı kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 0.5,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 6,
        "unit": "adet",
        "name": "sivri biber"
      },
      {
        "amount": 1,
        "unit": "avuç",
        "name": "maydanoz"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "ayçiçek yağı"
      }
    ],
    "source": "https://yemek.com/tarif/karniyarik/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-17",
    "batchLimited": true,
    "name": "Patlıcan Musakka",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Patlıcan Musakka",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": 462,
    "ingredients": [
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "çarliston biber"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "patlıcan"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "ayçiçek yağı"
      }
    ],
    "source": "https://yemek.com/tarif/patlican-musakka/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-18",
    "batchLimited": true,
    "name": "Fırında Tavuk",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Fırında Tavuk",
    "time": 55,
    "prep": 10,
    "cook": 45,
    "cal": 590,
    "ingredients": [
      {
        "amount": 1,
        "unit": "kilogram",
        "name": "tavuk baget"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "kırmızı toz biber"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      }
    ],
    "source": "https://yemek.com/tarif/firinda-tavuk/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-19",
    "batchLimited": true,
    "name": "Fırın Makarna",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Fırında Makarna",
    "time": 45,
    "prep": 20,
    "cook": 25,
    "cal": 396,
    "ingredients": [
      {
        "amount": 1,
        "unit": "paket",
        "name": "fırın makarna"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "kaşar peyniri"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2.5,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "muskat cevizi"
      }
    ],
    "source": "https://yemek.com/tarif/firinda-makarna/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-20",
    "name": "İzmir Köfte",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "İzmir Köfte",
    "time": 75,
    "prep": 30,
    "cook": 45,
    "cal": null,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "dana kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "bayat ekmek içi"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "maden suyu"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 1.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "kimyon"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıvı yağ"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "biber"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "domates rendesi"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kekik"
      }
    ],
    "source": "https://yemek.com/tarif/izmir-kofte/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-21",
    "name": "Zeytinyağlı Taze Fasulye",
    "mode": "Ev Yemeği",
    "subcategory": "Zeytinyağlı",
    "status": "sourced",
    "variant": "Zeytinyağlı Taze Fasulye",
    "time": 70,
    "prep": 20,
    "cook": 50,
    "cal": 83,
    "ingredients": [
      {
        "amount": 750,
        "unit": "gram",
        "name": "taze fasulye"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "zeytinyağı"
      }
    ],
    "source": "https://yemek.com/tarif/zeytinyagli-taze-fasulye/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-22",
    "name": "Zeytinyağlı Enginar",
    "mode": "Ev Yemeği",
    "subcategory": "Zeytinyağlı",
    "status": "sourced",
    "variant": "Zeytinyağlı Enginar",
    "time": 35,
    "prep": 10,
    "cook": 25,
    "cal": null,
    "ingredients": [
      {
        "amount": 6,
        "unit": "adet",
        "name": "enginar"
      },
      {
        "amount": 1,
        "unit": "kavanoz",
        "name": "garnitür"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yeşil soğan"
      },
      {
        "amount": 12,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "limon"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "dereotu"
      }
    ],
    "source": "https://yemek.com/tarif/zeytinyagli-enginar/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-23",
    "name": "Mercimek Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Lokanta usulü mercimek çorbası",
    "prep": 10,
    "cook": 50,
    "time": 60,
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "6 kişilik kaynağın çorba ve üzerindeki yağ sosu birlikte listelendi. Suya eklenen et suyu tableti dahildir. Süre ve porsiyon kalorisi kaynak değeridir; ekipman ve kullanılan miktarlara göre değişir.",
    "cal": 290,
    "ingredients": [
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "ayçiçek yağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy patates"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "kırmızı veya sarı mercimek"
      },
      {
        "amount": 6,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "et suyu tablet"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ (üzeri için)"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı (üzeri için)"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber (üzeri için)"
      }
    ],
    "source": "https://yemek.com/tarif/mercimek-corbasi/",
    "checkedAt": "2026-09-09"
  },
  {
    "id": "meal-24",
    "name": "Ezogelin",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Ezogelin Çorbası",
    "time": 60,
    "prep": 15,
    "cook": 45,
    "cal": 116,
    "ingredients": [
      {
        "amount": 2,
        "unit": "çay bardağı",
        "name": "kırmızı mercimek"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "pirinç"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "bulgur"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 9,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "nane"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "pul biber"
      }
    ],
    "source": "https://yemek.com/tarif/ezogelin-corbasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-25",
    "name": "Tarhana",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Tarhana Çorbası",
    "time": 25,
    "prep": 5,
    "cook": 20,
    "cal": 55,
    "ingredients": [
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "toz tarhana"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "kuru nane"
      },
      {
        "amount": 7,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      }
    ],
    "source": "https://yemek.com/tarif/tarhana-corbasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-26",
    "name": "Yayla Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Yayla Çorbası",
    "time": 50,
    "prep": 15,
    "cook": 35,
    "cal": 190,
    "ingredients": [
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "yoğurt"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1.5,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "limon suyu"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta sarısı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 6,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "pirinç"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "kuru nane"
      }
    ],
    "source": "https://yemek.com/tarif/yayla-corbasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-27",
    "name": "Izgara Tavuk",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "sourced",
    "variant": "Izgara Tavuk",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "kilogram",
        "name": "tavuk göğsü"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "salça"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "yoğurt"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 0.5,
        "unit": "tatlı kaşığı",
        "name": "kekik"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/izgara-tavuk/",
    "yieldPeople": 7,
    "yieldLabel": "7 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-28",
    "name": "Izgara Somon",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "sourced",
    "variant": "Izgara Somon",
    "time": 20,
    "prep": 10,
    "cook": 10,
    "cal": null,
    "ingredients": [
      {
        "amount": 2,
        "unit": "dilim",
        "name": "somon"
      },
      {
        "amount": 1,
        "unit": "çorba kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "portakalın suyu"
      },
      {
        "amount": [
          10,
          15
        ],
        "unit": "adet",
        "name": "tane karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "deniz tuzu"
      },
      {
        "amount": [
          1,
          2
        ],
        "unit": "dal",
        "name": "taze kekik"
      }
    ],
    "source": "https://yemek.com/tarif/izgara-somon/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-29",
    "name": "Izgara Levrek",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "sourced",
    "variant": "Izgara Levrek",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": null,
    "ingredients": [
      {
        "amount": 4,
        "unit": "adet",
        "name": "levrek"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/izgara-levrek/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-30",
    "name": "Izgara Sebze",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "sourced",
    "variant": "Izgara Sebze",
    "time": 30,
    "prep": 20,
    "cook": 10,
    "cal": 550,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "patlıcan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kabak"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kırmızı biber"
      },
      {
        "amount": 10,
        "unit": "adet",
        "name": "kiraz domates"
      },
      {
        "amount": 1,
        "unit": "büyük demet",
        "name": "taze fesleğen"
      },
      {
        "amount": 50,
        "unit": "gram",
        "name": "çam fıstığı"
      },
      {
        "amount": 75,
        "unit": "gram",
        "name": "parmesan peyniri"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "nar ekşisi"
      }
    ],
    "source": "https://yemek.com/tarif/izgara-sebze/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-31",
    "name": "Sezar Salata",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "sourced",
    "variant": "Sezar Salata",
    "time": 20,
    "prep": 10,
    "cook": 10,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "tavuk göğsü"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 150,
        "unit": "gram",
        "name": "marul"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "Sezar sosu"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "parmesan peyniri"
      }
    ],
    "source": "https://yemek.com/tarif/sezar-salata/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-32",
    "name": "Ton Balıklı Salata",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "sourced",
    "variant": "Ton Balıklı Salata",
    "time": 15,
    "prep": 15,
    "cook": 0,
    "cal": 455,
    "ingredients": [
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "marul"
      },
      {
        "amount": [
          3,
          4
        ],
        "unit": "dal",
        "name": "taze soğan"
      },
      {
        "amount": 1,
        "unit": "avuç",
        "name": "dereotu"
      },
      {
        "amount": [
          4,
          5
        ],
        "unit": "adet",
        "name": "cherry domates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "salatalık"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 2,
        "unit": "konserve",
        "name": "ton balığı"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "elma sirkesi"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "hardal"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/ton-balikli-salata/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-33",
    "name": "Akdeniz Salatası",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "sourced",
    "variant": "Akdeniz Salatası",
    "time": 15,
    "prep": 15,
    "cook": 0,
    "cal": 181,
    "ingredients": [
      {
        "amount": 150,
        "unit": "gram",
        "name": "Akdeniz yeşilliği"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "cherry domates"
      },
      {
        "amount": 75,
        "unit": "gram",
        "name": "beyaz peynir"
      },
      {
        "amount": [
          3,
          4
        ],
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "nar ekşisi"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/akdeniz-salatasi/",
    "yieldPeople": 1,
    "yieldLabel": "1 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-34",
    "name": "Tavuklu Sandviç",
    "mode": "Hafif",
    "subcategory": "Sandviç",
    "status": "sourced",
    "variant": "Tavuklu sandviç",
    "time": null,
    "prep": 15,
    "cook": 20,
    "cal": 350,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "tavuk göğsü (ya da tavuk kalça)"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "baget ekmeği (ya da sandviç ekmeği)"
      },
      {
        "amount": [
          2,
          3
        ],
        "unit": "adet",
        "name": "marul yaprağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kornişon turşu"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "haşlanmış mısır"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "süzme yoğurt"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "mayonez"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "kuru kekik"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/tavuklu-sandvic/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak başlık süresine ek olarak 30 dk marinasyon gerekiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-35",
    "name": "Sebzeli Sandviç",
    "mode": "Hafif",
    "subcategory": "Sandviç",
    "status": "sourced",
    "variant": "Izgara sebze sandviç",
    "time": 45,
    "prep": 30,
    "cook": 15,
    "cal": 456,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "çiabata ekmeği (veya pita)"
      },
      {
        "amount": 0.25,
        "unit": "adet",
        "name": "küçük boy patlıcan"
      },
      {
        "amount": 0.25,
        "unit": "adet",
        "name": "büyük boy kabak"
      },
      {
        "amount": 0.25,
        "unit": "adet",
        "name": "kırmızı dolmalık biber"
      },
      {
        "amount": 0.25,
        "unit": "adet",
        "name": "yeşil dolmalık biber"
      },
      {
        "amount": 0.25,
        "unit": "adet",
        "name": "sarı dolmalık biber"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "labne peyniri"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "zeytin ezmesi"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "dal",
        "name": "taze soğan"
      },
      {
        "amount": 1,
        "unit": "dal",
        "name": "taze kekik"
      },
      {
        "amount": [
          5,
          6
        ],
        "unit": "yaprak",
        "name": "taze fesleğen (veya reyhan)"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "sirke"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "rendelenmiş limon kabuğu"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "öğütülmüş top karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/izgara-sebze-sandvic/",
    "yieldPeople": 1,
    "yieldLabel": "1 adet",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak hazırlık süresine 20 dk marinasyon dahil",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-36",
    "name": "Hamburger",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Burger",
    "status": "sourced",
    "variant": "Ev yapımı hamburger (ekmeği dahil)",
    "time": 100,
    "prep": 30,
    "cook": 20,
    "cal": 700,
    "ingredients": [
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "ılık su"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "ılık süt"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "instant maya"
      },
      {
        "amount": 0.5,
        "unit": "yemek kaşığı",
        "name": "şeker"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2.5,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 4.5,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta sarısı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "susam"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "dana kıyma"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş tane karabiber"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy domates (halka dilimlenmiş)"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy kırmızı soğan (halka dilimlenmiş)"
      },
      {
        "amount": 4,
        "unit": "yaprak",
        "name": "kıvırcık marul"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "turşu (ince dilimlenmiş)"
      },
      {
        "amount": 3,
        "unit": "dilim",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "hardal"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "barbekü sos"
      }
    ],
    "source": "https://yemek.com/tarif/hamburger/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "En az 30 dk hamur mayası ve 15–20 dk köfte dinlendirme gerekir; toplam yaklaşık 95–100 dk",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-37",
    "name": "Cheeseburger",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Burger",
    "status": "sourced",
    "variant": "Cheeseburger (ekmeği dahil)",
    "time": null,
    "prep": 50,
    "cook": 40,
    "cal": 800,
    "ingredients": [
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "ılık süt"
      },
      {
        "amount": 0.75,
        "unit": "su bardağı",
        "name": "ılık su"
      },
      {
        "amount": 3.5,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "kuru maya"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 150,
        "unit": "gram",
        "name": "eritilmiş tereyağı"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 500,
        "unit": "gram",
        "name": "dana kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 4,
        "unit": "çorba kaşığı",
        "name": "galeta unu"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "sirke"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 8,
        "unit": "dilim",
        "name": "cheddar peyniri"
      },
      {
        "amount": 4,
        "unit": "dilim",
        "name": "domates (halka dilimlenmiş)"
      },
      {
        "amount": 4,
        "unit": "dilim",
        "name": "soğan (halka dilimlenmiş)"
      },
      {
        "amount": 4,
        "unit": "yaprak",
        "name": "marul"
      },
      {
        "amount": [
          2,
          3
        ],
        "unit": "adet",
        "name": "turşu (dilimlenmiş)"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "barbekü sos"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "ketçap"
      }
    ],
    "source": "https://yemek.com/tarif/cheeseburger/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "En az 30 dk hamur mayası, 5 dk tepsi mayası ve 15 dk köfte dinlendirme gerekiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-38",
    "name": "Tavuk Burger",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Burger",
    "status": "sourced",
    "variant": "Çıtır tavuk burger",
    "time": 34,
    "prep": 20,
    "cook": 14,
    "cal": null,
    "ingredients": [
      {
        "amount": 4,
        "unit": "parça",
        "name": "kemiksiz but eti (dövülerek inceltilmiş)"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "burger ekmeği"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "sıvı yağ (kızartmak için)"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "ezilmiş sarımsak"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "köri"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "kırmızı biber"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sade mısır gevreği"
      },
      {
        "amount": 8,
        "unit": "dilim",
        "name": "domates"
      },
      {
        "amount": 4,
        "unit": "dilim",
        "name": "cheddar peyniri"
      },
      {
        "amount": 4,
        "unit": "yaprak",
        "name": "marul"
      },
      {
        "amount": 8,
        "unit": "dilim",
        "name": "mor soğan"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "ballı hardal"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "mayonez"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "hardal"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "salatalık turşusu (dilimlenmiş)"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-burger/",
    "yieldPeople": 4,
    "yieldLabel": "4 adet",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-39",
    "batchLimited": true,
    "name": "Karışık Pizza",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "sourced",
    "variant": "Karışık pizza",
    "time": null,
    "prep": 30,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "büyük su bardağı",
        "name": "yoğurt"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "tepeleme yemek kaşığı",
        "name": "sirke"
      },
      {
        "amount": 2,
        "unit": "silme yemek kaşığı",
        "name": "eritilmiş tereyağı"
      },
      {
        "amount": 1,
        "unit": "silme tatlı kaşığı",
        "name": "kuru maya"
      },
      {
        "amount": 1,
        "unit": "silme tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "küp şeker"
      },
      {
        "amount": 2,
        "unit": "silme yemek kaşığı",
        "name": "sıcak su"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "biber"
      },
      {
        "amount": 100,
        "unit": "gram",
        "name": "sucuk"
      },
      {
        "amount": 10,
        "unit": "adet",
        "name": "siyah zeytin"
      },
      {
        "amount": 100,
        "unit": "gram",
        "name": "rendelenmiş kaşar peyniri"
      },
      {
        "amount": 1,
        "unit": "silme yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 2,
        "unit": "silme yemek kaşığı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kekik"
      }
    ],
    "source": "https://yemek.com/tarif/karisik-pizza/",
    "yieldPeople": 8,
    "yieldLabel": "8 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak başlık süresine ek olarak 15 dk maya aktivasyonu ve 30 dk hamur mayası gerekiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-40",
    "batchLimited": true,
    "name": "Kıymalı Pide",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "sourced",
    "variant": "Evde kıymalı pide",
    "time": null,
    "prep": 40,
    "cook": 35,
    "cal": 530,
    "ingredients": [
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "kuru maya"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "ılık su"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "dana kıyma"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 3,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "sivri biber"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "su"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "eritilmiş tereyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta sarısı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      }
    ],
    "source": "https://yemek.com/tarif/evde-kiymali-pide/",
    "yieldPeople": 5,
    "yieldLabel": "5 adet",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak başlık süresine ek olarak 10 dk maya aktivasyonu ve 45 dk hamur mayası gerekiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-41",
    "name": "Kumpir",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Sokak Lezzeti",
    "status": "sourced",
    "variant": "Fırında kumpir",
    "time": 95,
    "prep": 5,
    "cook": 90,
    "cal": 539,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "büyük boy patates"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 0.75,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "haşlanmış mısır"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "çekirdekleri çıkarılmış zeytin"
      },
      {
        "amount": [
          4,
          5
        ],
        "unit": "adet",
        "name": "kornişon turşu"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "mayonez"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "ketçap"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/kumpir/",
    "yieldPeople": 2,
    "yieldLabel": "2 porsiyon",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-42",
    "name": "Çıtır Tavuk",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Kızarmış",
    "status": "sourced",
    "variant": "Marine çıtır tavuk",
    "time": null,
    "prep": 15,
    "cook": 20,
    "cal": 684,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "bütün tavuk"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "yoğurt"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "sarımsak tozu"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "nişasta"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "sarımsak tozu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "soğan tozu"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "mayonez"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "ketçap"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sarımsaklı acı sos"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "acı sos"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz paprika"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sirke"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "bal"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "beyaz lahana"
      },
      {
        "amount": 200,
        "unit": "gram",
        "name": "mor lahana"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "mor soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "elma sirkesi"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "dereotu"
      }
    ],
    "source": "https://yemek.com/tarif/citir-tavuk/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Pişirmeden önce 2–12 saat buzdolabında marinasyon gerekiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-43",
    "name": "Balık Ekmek",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Sokak Lezzeti",
    "status": "sourced",
    "variant": "Uskumru balık ekmek",
    "time": 30,
    "prep": 20,
    "cook": 10,
    "cal": null,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "fileto uskumru"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "bütün ekmek"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "sumak"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "kıyılmış maydanoz"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "domates (dilimlenmiş)"
      },
      {
        "amount": 6,
        "unit": "yaprak",
        "name": "roka"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "tuz (soğanı ovalamak için)"
      }
    ],
    "source": "https://yemek.com/tarif/balik-ekmek/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-44",
    "name": "Taco",
    "mode": "Dünya Mutfağı",
    "subcategory": "Meksika",
    "status": "sourced",
    "variant": "Kıymalı taco",
    "time": 70,
    "prep": 30,
    "cook": 40,
    "cal": null,
    "ingredients": [
      {
        "amount": 12,
        "unit": "adet",
        "name": "mini lavaş (ya da taco kabuğu)"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 500,
        "unit": "gram",
        "name": "orta yağlı kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "küçük boy kuru soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy domates"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "acı sos"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 4,
        "unit": "dal",
        "name": "taze kişniş (ya da maydanoz)"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "avokado"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy domates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy kırmızı soğan"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "rendelenmiş cheddar peyniri"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limonun suyu"
      }
    ],
    "source": "https://yemek.com/tarif/taco/",
    "yieldPeople": 4,
    "yieldLabel": "12 adet (yaklaşık 4 porsiyon)",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-45",
    "name": "Quesadilla",
    "mode": "Dünya Mutfağı",
    "subcategory": "Meksika",
    "status": "sourced",
    "variant": "Sucuklu ve mantarlı quesadilla",
    "time": 60,
    "prep": 30,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "jalapeno biberi"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 4,
        "unit": "dal",
        "name": "kişniş"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "jalapeno biberi"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 4,
        "unit": "dal",
        "name": "kişniş"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "lime suyu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 6,
        "unit": "adet",
        "name": "tortilla"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 15,
        "unit": "adet",
        "name": "mantar"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "lime suyu"
      },
      {
        "amount": 200,
        "unit": "gram",
        "name": "sucuk"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 200,
        "unit": "gram",
        "name": "rendelenmiş kaşar peyniri"
      },
      {
        "amount": 150,
        "unit": "gram",
        "name": "rendelenmiş cheddar peyniri"
      },
      {
        "amount": 6,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ (pişirmek için)"
      }
    ],
    "source": "https://yemek.com/tarif/quesadilla/",
    "yieldPeople": 6,
    "yieldLabel": "6 adet",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-46",
    "name": "Burrito",
    "mode": "Dünya Mutfağı",
    "subcategory": "Meksika",
    "status": "sourced",
    "variant": "Tavuklu burrito",
    "time": 50,
    "prep": 20,
    "cook": 30,
    "cal": 1030,
    "ingredients": [
      {
        "amount": 4,
        "unit": "adet",
        "name": "tortilla (ya da lavaş)"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "tavuk göğsü"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 100,
        "unit": "gram",
        "name": "Meksika fasulyesi"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kırmızı biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": [
          1,
          2
        ],
        "unit": "yaprak",
        "name": "marul"
      },
      {
        "amount": 4,
        "unit": "çorba kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2,
        "unit": "çorba kaşığı",
        "name": "yoğurt"
      },
      {
        "amount": 1,
        "unit": "çorba kaşığı",
        "name": "mayonez"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "köri"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      }
    ],
    "source": "https://yemek.com/tarif/burrito/",
    "yieldPeople": 2,
    "yieldLabel": "2 adet",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-47",
    "name": "Pad Thai",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "sourced",
    "variant": "Karidesli Pad Thai",
    "time": 30,
    "prep": 15,
    "cook": 15,
    "cal": null,
    "ingredients": [
      {
        "amount": 200,
        "unit": "gram",
        "name": "pirinç eriştesi"
      },
      {
        "amount": 200,
        "unit": "gram",
        "name": "karides (veya tavuk ya da tofu)"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 3,
        "unit": "dal",
        "name": "taze soğan"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "doğranmış yer fıstığı"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "soya filizi"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "limon"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "balık sosu (veya soya sosu)"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tamarind püresi"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "esmer şeker"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "limon suyu"
      }
    ],
    "source": "https://www.lezzetkosesi.com/pad-thai-tarifi/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak hazırlık süresine eriştelerin 10–15 dk ılık suda beklemesi dahil",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-48",
    "name": "Ramen",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "sourced",
    "variant": "Tavuklu ramen",
    "time": 45,
    "prep": 20,
    "cook": 25,
    "cal": 554,
    "ingredients": [
      {
        "amount": 400,
        "unit": "gram",
        "name": "tavuk"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "ramen (veya noodle)"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "soya sosu"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "rendelenmiş taze zencefil"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": [
          4,
          5
        ],
        "unit": "dal",
        "name": "taze soğan"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "kabartma tozu"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "susam yağı"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": [
          4,
          5
        ],
        "unit": "dal",
        "name": "taze soğan (yeşil kısımları)"
      },
      {
        "amount": 100,
        "unit": "gram",
        "name": "soya filizi"
      }
    ],
    "source": "https://yemek.com/tarif/ramen/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-49",
    "name": "Bibimbap",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "sourced",
    "variant": "Sebzeli bibimbap",
    "time": 40,
    "prep": 10,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "basmati pirinci"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kabak"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "ıspanak"
      },
      {
        "amount": 0.5,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "ezilmiş sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "yemek kaşığı",
        "name": "susam yağı"
      },
      {
        "amount": 0.5,
        "unit": "yemek kaşığı",
        "name": "acı biber sosu"
      }
    ],
    "source": "https://yemek.com/tarif/bibimbap/",
    "yieldPeople": 1,
    "yieldLabel": "1 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-50",
    "name": "Sushi",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "sourced",
    "variant": "Somonlu sushi",
    "time": null,
    "prep": 10,
    "cook": 0,
    "cal": 307,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "nori (yenilebilir deniz yosunu)"
      },
      {
        "amount": 1,
        "unit": "dilim",
        "name": "somon fileto (ya da ton balığı)"
      },
      {
        "amount": 2,
        "unit": "dilim",
        "name": "salatalık"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "önceden hazırlanmış sushi pilavı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "wasabi"
      },
      {
        "amount": [
          2,
          3
        ],
        "unit": "yemek kaşığı",
        "name": "pirinç sirkesi"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "susam"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "soya sosu"
      }
    ],
    "source": "https://yemek.com/tarif/sushi/",
    "yieldPeople": 1,
    "yieldLabel": "1 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak süreye sushi pilavının hazırlanmasını dahil etmiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-51",
    "name": "Moussaka",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "sourced",
    "variant": "Yunan usulü musakka",
    "time": 60,
    "prep": 35,
    "cook": 25,
    "cal": null,
    "ingredients": [
      {
        "amount": 3,
        "unit": "adet",
        "name": "kemer patlıcan"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "orta boy patates"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kabak"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "kızartma yağı"
      },
      {
        "amount": 500,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 6,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "çorba kaşığı",
        "name": "kekik"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "defne yaprağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tarçın"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "yeşil sivri biber"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "orta boy domates"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 2,
        "unit": "çorba kaşığı",
        "name": "şarap sirkesi"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "mercanköşk"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "biberiye"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kişniş"
      },
      {
        "amount": 2,
        "unit": "çorba kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "çorba kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 3,
        "unit": "çorba kaşığı",
        "name": "un"
      },
      {
        "amount": [
          4,
          4.5
        ],
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 0.25,
        "unit": "su bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "rendelenmiş parmesan peyniri"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta sarısı"
      },
      {
        "amount": 1,
        "unit": "çorba kaşığı",
        "name": "hardal"
      }
    ],
    "source": "https://yemek.com/tarif/yunan-usulu-musakka/",
    "yieldPeople": 7,
    "yieldLabel": "7 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-52",
    "name": "Falafel",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "sourced",
    "variant": "Klasik falafel",
    "time": null,
    "prep": 30,
    "cook": 20,
    "cal": 374,
    "ingredients": [
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "nohut"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 2,
        "unit": "dal",
        "name": "taze soğan"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kişniş"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kabartma tozu"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "süzme yoğurt"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tahin"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "limon suyu"
      }
    ],
    "source": "https://yemek.com/tarif/falafel/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Nohut bir gece önceden ıslatılmalı; harç ayrıca en az 1 saat buzdolabında beklemeli",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-53",
    "name": "Karides Güveç",
    "mode": "Dünya Mutfağı",
    "subcategory": "Deniz Ürünleri",
    "status": "sourced",
    "variant": "Kaşarlı karides güveç",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": null,
    "ingredients": [
      {
        "amount": 200,
        "unit": "gram",
        "name": "karides"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yeşil biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "rendelenmiş kaşar peyniri"
      }
    ],
    "source": "https://yemek.com/tarif/karides-guvec/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-54",
    "name": "Bol Sebzeli Menemen",
    "mode": "Kahvaltı",
    "subcategory": "Yumurtalı",
    "status": "sourced",
    "variant": "Soğanlı menemen",
    "prep": 5,
    "cook": 15,
    "time": 20,
    "yieldPeople": 3,
    "yieldLabel": "3 kişilik",
    "extraPrep": false,
    "note": "Süre, kaynak tarifin miktarı ve ekipmanına bağlıdır; bitiş garantisi değildir.",
    "cal": 276,
    "ingredients": [
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "sivri biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "dal",
        "name": "taze soğan"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/domates-biber-soganli-menemen/",
    "checkedAt": "2026-09-09"
  },
  {
    "id": "meal-55",
    "name": "Sucuklu Yumurta",
    "mode": "Kahvaltı",
    "subcategory": "Yumurtalı",
    "status": "sourced",
    "variant": "Sucuklu yumurta",
    "time": 10,
    "prep": 5,
    "cook": 5,
    "cal": 386,
    "ingredients": [
      {
        "amount": 0.5,
        "unit": "yemek kaşığı",
        "name": "tereyağı (arzuya göre)"
      },
      {
        "amount": 100,
        "unit": "gram",
        "name": "sucuk"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/sucuklu-yumurta/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-56",
    "name": "Peynirli Omlet",
    "mode": "Kahvaltı",
    "subcategory": "Peynirli",
    "status": "sourced",
    "variant": "Peynirli omlet",
    "time": 10,
    "prep": 5,
    "cook": 5,
    "cal": null,
    "ingredients": [
      {
        "amount": 3,
        "unit": "adet",
        "name": "büyük boy yumurta"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "dilim",
        "name": "beyaz peynir"
      }
    ],
    "source": "https://yemek.com/tarif/peynirli-omlet/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-57",
    "name": "Pankek",
    "mode": "Kahvaltı",
    "subcategory": "Tatlı Kahvaltı",
    "status": "sourced",
    "variant": "Sade pankek",
    "prep": 10,
    "cook": 20,
    "time": 30,
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Sade pankek içindir; bal, reçel, çikolata ve meyve dahil değildir. 20 dakikalık pişirme kaynak miktarı içindir; tava kapasitesi ve parti sayısı süreyi değiştirir.",
    "cal": 250,
    "ingredients": [
      {
        "amount": 3,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "kabartma tozu"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "vanilin"
      }
    ],
    "source": "https://yemek.com/tarif/6-kisilik-pankek/",
    "checkedAt": "2026-09-09"
  },
  {
    "id": "meal-58",
    "name": "Kaşarlı Tost",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "sourced",
    "variant": "Kaşarlı tost",
    "time": 14,
    "prep": 5,
    "cook": 9,
    "cal": 280,
    "ingredients": [
      {
        "amount": 8,
        "unit": "adet",
        "name": "tost ekmeği"
      },
      {
        "amount": 8,
        "unit": "dilim",
        "name": "kaşar peyniri"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      }
    ],
    "source": "https://yemek.com/tarif/kasarli-tost/",
    "yieldPeople": 4,
    "yieldLabel": "4 adet",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-59",
    "name": "Simit Tabağı",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-60",
    "name": "Bonfile",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Tavada bonfile",
    "time": 45,
    "prep": 30,
    "cook": 15,
    "cal": 335,
    "ingredients": [
      {
        "amount": 3,
        "unit": "dilim",
        "name": "dana bonfile"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2,
        "unit": "dal",
        "name": "taze kekik"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tereyağı"
      }
    ],
    "source": "https://yemek.com/tarif/bonfile/",
    "yieldPeople": 3,
    "yieldLabel": "3 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak hazırlık süresine 20–30 dk marine/dinlendirme dahil",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-61",
    "name": "Antrikot",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Marine dana antrikot",
    "time": 135,
    "prep": 120,
    "cook": 10,
    "cal": 927,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "dana antrikot"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy soğanın suyu"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sirke (balzamik de olabilir)"
      },
      {
        "amount": 1,
        "unit": "dal",
        "name": "taze biberiye"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş karabiber"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/dana-antrikot/",
    "yieldPeople": 2,
    "yieldLabel": "2 adet",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "En az 2 saat, tercihen 4–6 saat marinasyon ve pişirme sonrası 5 dk dinlendirme gerekiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-62",
    "name": "Dana Haşlama",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Et haşlama (kuzu; dana alternatifi)",
    "time": 90,
    "prep": 30,
    "cook": 60,
    "cal": 644,
    "ingredients": [
      {
        "amount": 800,
        "unit": "gram",
        "name": "iri parça kuzu eti (kemikli ya da kemiksiz)"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "orta boy patates (iri doğranmış)"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "orta boy havuç (iri doğranmış)"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kuru soğan (dörde bölünmüş)"
      },
      {
        "amount": 5,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": [
          2,
          3
        ],
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tane karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 3,
        "unit": "dal",
        "name": "maydanoz (ince kıyılmış)"
      }
    ],
    "source": "https://yemek.com/tarif/haslama/",
    "yieldPeople": 5,
    "yieldLabel": "5 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Dana eti kullanılacaksa süre etin bölümüne ve tencereye göre uzayabilir",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-63",
    "name": "Hünkar Beğendi",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Hünkar beğendi",
    "time": 120,
    "prep": 60,
    "cook": 60,
    "cal": 567,
    "ingredients": [
      {
        "amount": 600,
        "unit": "gram",
        "name": "kuzu kuşbaşı eti (dana kuşbaşı da olabilir)"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy kuru soğan"
      },
      {
        "amount": 4,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "orta boy domates"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "kaşar peyniri"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "orta boy patlıcan"
      },
      {
        "amount": 1.5,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/hunkar-begendi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-64",
    "name": "Ali Nazik",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Ali Nazik (şiş köfteli)",
    "time": null,
    "prep": 45,
    "cook": 45,
    "cal": null,
    "ingredients": [
      {
        "amount": 5,
        "unit": "adet",
        "name": "orta boy patlıcan"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "süzme yoğurt"
      },
      {
        "amount": 3,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 400,
        "unit": "gram",
        "name": "orta yağlı kıyma (dana-kuzu karışık)"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "küçük boy kuru soğan"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "domates sosu (arzuya göre)"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy kapya biber"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy domates"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "acı toz kırmızı biber"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "maydanoz"
      }
    ],
    "source": "https://yemek.com/tarif/ali-nazik/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Köfte harcı buzdolabında dinlendiriliyor; kaynak kesin bekleme süresi vermiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-65",
    "name": "İskender",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Ev yapımı İskender",
    "time": null,
    "prep": 30,
    "cook": 30,
    "cal": 524,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "antrikot"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "bal (isteğe bağlı)"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 4,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "silme tatlı kaşığı",
        "name": "kekik"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "salça"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "tırnak pide"
      },
      {
        "amount": 8,
        "unit": "yemek kaşığı",
        "name": "koyu kıvamlı yoğurt"
      }
    ],
    "source": "https://yemek.com/tarif/iskender/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Et en az 6 saat (tercihen 1 gün) marine edilmeli ve ardından en az 1 gece dondurulmalı",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-66",
    "name": "Çökertme Kebabı",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Çökertme kebabı",
    "time": null,
    "prep": 30,
    "cook": 40,
    "cal": 570,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "dana kontrfile"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş karabiber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "rendelenmiş soğan"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "soda"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı (pişirmek için)"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "rendelenmiş domates"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy patates"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "ayçiçek yağı (kızartmak için)"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "sarımsaklı yoğurt"
      }
    ],
    "source": "https://yemek.com/tarif/cokertme-kebabi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Etin pişirmeden önce 1 saat buzdolabında dinlenmesi gerekiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-67",
    "name": "Patlıcan Kebabı",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Fırında patlıcan kebabı",
    "time": null,
    "prep": 45,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 4,
        "unit": "adet",
        "name": "orta boy patlıcan"
      },
      {
        "amount": 400,
        "unit": "gram",
        "name": "orta yağlı kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan (rendelenmiş)"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "galeta unu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": [
          5,
          6
        ],
        "unit": "dal",
        "name": "maydanoz (ince kıyılmış)"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "biber salçası"
      }
    ],
    "source": "https://yemek.com/tarif/patlican-kebabi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Patlıcanlar tuzlu suda bekletiliyor; kaynak kesin bekleme süresi vermiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-68",
    "name": "Orman Kebabı",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Orman kebabı",
    "time": null,
    "prep": 20,
    "cook": 45,
    "cal": 207,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "dana kuşbaşı eti (kuzu kuşbaşı da olabilir)"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy soğan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "salça"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "konserve bezelye"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "kekik"
      },
      {
        "amount": 0.25,
        "unit": "çay bardağı",
        "name": "zeytinyağı (kekiği ısıtmak için)"
      },
      "yemeğin üzerini geçecek kadar sıcak su"
    ],
    "source": "https://yemek.com/tarif/orman-kebabi/",
    "yieldPeople": 7,
    "yieldLabel": "7 kişilik",
    "extraPrep": true,
    "note": "Kaynak 20 dakika hazırlık ve 45 dakika pişirme verir; ancak adımda etin iyice yumuşamasına kadar pişirme istenir. Etin cinsine göre toplam süre değişebileceğinden süreli filtrelere alınmaz. Kaynağın malzeme listesinde kekik yağı için zeytinyağı, yapılışta ise tereyağı kullanılır; bu çelişki açıkça korunmuştur.",
    "waitLabel": "Et yumuşayana kadar pişirme süresi değişebilir; toplam süre kesin değil",
    "checkedAt": "2026-09-09"
  },
  {
    "id": "meal-69",
    "name": "Güveç",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Kuzu etli güveç",
    "time": 110,
    "prep": 20,
    "cook": 90,
    "cal": null,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "kuşbaşı kuzu eti"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 8,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "patlıcan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yeşil biber"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "rendelenmiş domates"
      },
      {
        "amount": 3,
        "unit": "çay kaşığı",
        "name": "kekik"
      },
      {
        "amount": 3,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "sıcak su"
      }
    ],
    "source": "https://yemek.com/tarif/guvec/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak hazırlığında patlıcanın 15 dk tuzlu suda beklemesi bulunuyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-70",
    "name": "Etli Türlü",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Etli türlü",
    "time": 60,
    "prep": 20,
    "cook": 40,
    "cal": null,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "kuşbaşı et"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "patlıcan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kabak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yeşil biber"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "salça"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      }
    ],
    "source": "https://yemek.com/tarif/etli-turlu/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Tarif düdüklü tencere kullanıyor; etin yaklaşık 30 dk pişmesi toplam süreye dahil",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-71",
    "name": "Kuzu Tandır",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Fırında kuzu tandır",
    "prep": 20,
    "cook": 210,
    "time": 230,
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Kaynak yaklaşık 2 kg tek parça kemikli kol ve 6 kişiliktir. Kişi oranına göre gösterilen et miktarı alışveriş tahminidir; parçanın büyüklüğü pişmeyi değiştirir. 230 dakika önceden ısıtılmış fırın içindir; ön ısıtma ve isteğe bağlı son kızartma (+5 dakika) ayrıca gerekir.",
    "cal": null,
    "ingredients": [
      {
        "amount": 2,
        "unit": "kilogram",
        "name": "kemikli kuzu kol (kaynakta yaklaşık 2 kg tek parça)"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 3,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kekik"
      }
    ],
    "source": "https://yemek.com/tarif/kuzu-tandir/",
    "checkedAt": "2026-09-09"
  },
  {
    "id": "meal-72",
    "name": "Ciğer Sote",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Ciğer sote",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "cal": null,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "ciğer"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz kırmızı biber"
      }
    ],
    "source": "https://yemek.com/tarif/ciger-sote/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-73",
    "name": "Hasanpaşa Köfte",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Hasanpaşa köftesi",
    "time": 75,
    "prep": 30,
    "cook": 45,
    "cal": 583,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "orta yağlı kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy kuru soğan (rendelenmiş)"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "ufalanmış bayat ekmek kırıntısı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "maydanoz"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "orta boy haşlanmış patates"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "süt"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "bezelye"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy havuç (küp doğranmış)"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri"
      }
    ],
    "source": "https://yemek.com/tarif/hasanpasa-koftesi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Patatesler önceden haşlanmış isteniyor; bu süre dahil olmayabilir",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-74",
    "name": "Dalyan Köfte",
    "mode": "Doyurucu",
    "subcategory": "Etli",
    "status": "sourced",
    "variant": "Dalyan köfte",
    "time": 90,
    "prep": 30,
    "cook": 60,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "kilogram",
        "name": "dana kıyma"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "galeta unu"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "sıvı yağ"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "bezelye"
      },
      {
        "amount": 5,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta beyazı"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "domates püresi"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/dalyan-kofte/",
    "yieldPeople": 8,
    "yieldLabel": "8 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Hazırlıkta yumurtalar, havuç ve bezelye haşlanıyor; kaynak toplam hazırlık süresi 30 dk veriyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-75",
    "name": "Tavuk Pirzola",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Marine tavuk pirzola",
    "time": null,
    "prep": 5,
    "cook": 40,
    "cal": 427,
    "ingredients": [
      {
        "amount": 8,
        "unit": "parça",
        "name": "tavuk pirzola"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "kekik"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "yoğurt"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "rendelenmiş sarımsak"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-pirzola/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Tavuk pişirmeden önce 1 saat buzdolabında marine edilmeli",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-76",
    "name": "Tavuk Sarma",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Garnitürlü tavuk sarma",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": 300,
    "ingredients": [
      {
        "amount": 3,
        "unit": "adet",
        "name": "tavuk göğsü"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "garnitür"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 150,
        "unit": "gram",
        "name": "kaşar peyniri"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "kırmızı toz biber"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-sarma/",
    "yieldPeople": 3,
    "yieldLabel": "3 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-77",
    "name": "Beşamel Soslu Tavuk",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Beşamel soslu tavuk",
    "time": 70,
    "prep": 35,
    "cook": 35,
    "cal": 432,
    "ingredients": [
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 600,
        "unit": "gram",
        "name": "kuşbaşı tavuk göğsü"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tane karabiber"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri (üzeri için)"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2.5,
        "unit": "su bardağı",
        "name": "soğuk süt"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "muskat cevizi rendesi"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri"
      }
    ],
    "source": "https://yemek.com/tarif/besamel-soslu-tavuk/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-78",
    "batchLimited": true,
    "name": "Tavuk Graten",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Tavuk graten",
    "time": null,
    "prep": 20,
    "cook": 30,
    "cal": 465,
    "ingredients": [
      {
        "amount": 3,
        "unit": "adet",
        "name": "tavuk göğsü"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "haşlanmış patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "haşlanmış havuç"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "haşlanmış bezelye"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kişniş"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2.5,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-graten/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Patates ve havuç önceden haşlanmış isteniyor; bu ön hazırlık kaynak süresine dahil olmayabilir",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-79",
    "name": "Tavuklu Pilav",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Tavuklu pilav",
    "time": 40,
    "prep": 20,
    "cook": 20,
    "cal": 336,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "tavuk göğsü"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "pirinç"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "tavuk suyu"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş tane karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/tavuklu-pilav/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-80",
    "name": "Kremalı Tavuk",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Kremalı tavuk",
    "time": null,
    "prep": 10,
    "cook": 20,
    "cal": 474,
    "ingredients": [
      {
        "amount": 600,
        "unit": "gram",
        "name": "tavuk göğsü"
      },
      {
        "amount": 5,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sirke"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kuru kekik"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "kutu",
        "name": "sıvı krema"
      }
    ],
    "source": "https://yemek.com/tarif/kremali-tavuk/",
    "yieldPeople": 3,
    "yieldLabel": "3 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Tavuk tarif adımlarında 2–3 saat dinlendiriliyor; bu süre başlıktaki 30 dakikaya dahil değil",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-81",
    "name": "Tavuk Kapama",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Tavuk kapama",
    "time": 110,
    "prep": 20,
    "cook": 90,
    "cal": null,
    "ingredients": [
      {
        "amount": 9,
        "unit": "çay kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "litre",
        "name": "tavuk suyu"
      },
      {
        "amount": 4,
        "unit": "su bardağı",
        "name": "pirinç"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 2,
        "unit": "tepeleme yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "pilavlık bulgur"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "yoğurt"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 8,
        "unit": "adet",
        "name": "tavuk baget"
      },
      {
        "amount": 2,
        "unit": "litre",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tane karabiber"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "defne yaprağı"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "küçük boy soğan"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-kapama/",
    "yieldPeople": 8,
    "yieldLabel": "8 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
      "id": "meal-82",
      "batchLimited": true,
      "name": "Fırında Tavuk Kanat",
      "mode": "Doyurucu",
      "subcategory": "Tavuklu",
      "status": "sourced",
      "variant": "Fırında soslu tavuk kanat",
      "time": null,
      "prep": 10,
      "cook": 20,
      "cal": null,
      "ingredients": [
        {
          "amount": 800,
          "unit": "gram",
          "name": "tavuk kanat"
        },
        {
          "amount": 25,
          "unit": "gram",
          "name": "acı sos"
        },
        {
          "amount": 10,
          "unit": "mililitre",
          "name": "soya sosu"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "limonun suyu"
        },
        {
          "amount": 35,
          "unit": "mililitre",
          "name": "ayçiçek yağı"
        },
        {
          "amount": 2,
          "unit": "diş",
          "name": "rendelenmiş sarımsak"
        },
        {
          "amount": 10,
          "unit": "gram",
          "name": "rendelenmiş taze zencefil"
        },
        {
          "amount": 10,
          "unit": "gram",
          "name": "kırmızı toz biber"
        },
        {
          "amount": 5,
          "unit": "gram",
          "name": "tuz"
        },
        {
          "amount": 1,
          "unit": "tutam",
          "name": "karabiber"
        }
      ],
      "source": "https://www.kisikatesakademi.com.tr/tarif/firinda-tavuk-kanat-tarifi-1599",
      "yieldPeople": 6,
      "yieldLabel": "4-6 kişilik",
      "extraPrep": true,
      "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
      "waitLabel": "Kanatlar pişirmeden önce en az 2–3 saat buzdolabında marine ediliyor",
      "checkedAt": "2026-09-08"
    },
  {
    "id": "meal-83",
    "name": "Tavuklu Makarna",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Domates soslu tavuklu makarna",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": 410,
    "ingredients": [
      {
        "amount": 0.5,
        "unit": "paket",
        "name": "burgu makarna"
      },
      {
        "amount": 5,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "küçük boy tavuk göğsü"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/tavuklu-makarna/",
    "yieldPeople": 3,
    "yieldLabel": "3 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-84",
    "name": "Tavuklu Keşkek",
    "mode": "Doyurucu",
    "subcategory": "Tavuklu",
    "status": "sourced",
    "variant": "Düdüklüde tavuklu keşkek",
    "time": 60,
    "prep": 20,
    "cook": 40,
    "cal": 301,
    "ingredients": [
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "aşurelik buğday"
      },
      {
        "amount": [
          4,
          5
        ],
        "unit": "adet",
        "name": "tavuk pirzola"
      },
      {
        "amount": 4,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1.5,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      }
    ],
    "source": "https://yemek.com/tarif/tavuklu-keskek/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-85",
    "name": "Etli Pilav",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Etli pilav",
    "time": null,
    "prep": 20,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "pirinç"
      },
      {
        "amount": 0.5,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 250,
        "unit": "gram",
        "name": "dana kuşbaşı eti"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "kuş üzümü"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "haşlanmış nohut"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kesme şeker"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "sıcak su"
      }
    ],
    "source": "https://yemek.com/tarif/etli-pilav/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Tarif nohudu önceden haşlanmış ister; bu ön hazırlık kaynak süresine dahil değil",
    "checkedAt": "2026-09-08"
  },
  {
      "id": "meal-86",
      "name": "Tavuklu Bulgur Pilavı",
      "mode": "Doyurucu",
      "subcategory": "Makarna / Pilav",
      "status": "sourced",
      "variant": "Kuşbaşı tavuk göğüslü bulgur pilavı",
      "time": 55,
      "prep": 15,
      "cook": 30,
      "cal": 350,
      "ingredients": [
        {
          "amount": 2,
          "unit": "su bardağı",
          "name": "pilavlık bulgur"
        },
        {
          "amount": [
            300,
            350
          ],
          "unit": "gram",
          "name": "kuşbaşı tavuk göğsü"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "orta boy soğan"
        },
        {
          "amount": 2,
          "unit": "yemek kaşığı",
          "name": "tereyağı veya sıvı yağ"
        },
        {
          "amount": 3,
          "unit": "su bardağı",
          "name": "tavuk suyu veya su"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "yeşil biber"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "domates"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "pul biber veya kekik"
        },
        "tuz (ölçüsü kaynakta yok)",
        "karabiber (ölçüsü kaynakta yok)",
        "taze soğan (ölçüsü kaynakta yok)"
      ],
      "source": "https://www.lezzet.com.tr/yemek-tarifleri/pilav-ve-makarna-tarifleri/pilav-tarifleri/tavuklu-bulgur-pilavi-tarifi",
      "yieldPeople": 4,
      "yieldLabel": "4 kişilik",
      "extraPrep": true,
      "note": "Toplam: kaynakta 15 dakika hazırlık + 30 dakika pişirme + adımlardaki 10 dakika demlenme. Çiğ kuşbaşı tavuk doğrudan sotelenir; ayrı ön haşlama yoktur. Tuz, karabiber ve taze soğanın miktarı kaynakta belirtilmemiştir. Süre ve kalori yaklaşıktır.",
      "waitLabel": "10 dakika demlenme toplam 55 dakikaya eklendi",
      "checkedAt": "2026-09-09"
    },
  {
    "id": "meal-87",
    "name": "Özbek Pilavı",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Özbek pilavı",
    "time": 65,
    "prep": 20,
    "cook": 45,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "pirinç"
      },
      {
        "amount": 1,
        "unit": "baş",
        "name": "sarımsak"
      },
      {
        "amount": 250,
        "unit": "gram",
        "name": "kuşbaşı et"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/ozbek-pilavi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-88",
    "name": "İç Pilav",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "İç pilav",
    "time": 60,
    "prep": 30,
    "cook": 30,
    "cal": 315,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy kuru soğan"
      },
      {
        "amount": 50,
        "unit": "gram",
        "name": "Antep fıstığı veya dolmalık çam fıstığı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "kuş üzümü"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "baldo pirinç"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "kaynar su veya tavuk suyu"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tarçın"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "yenibahar"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "dereotu"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "maydanoz"
      }
    ],
    "source": "https://yemek.com/tarif/ic-pilav/",
    "yieldPeople": 5,
    "yieldLabel": "5 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-89",
    "name": "Sebzeli Risotto",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Sebzeli risotto",
    "time": 90,
    "prep": 60,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1.5,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 4,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "risotto pirinci (500 gram)"
      },
      {
        "amount": 1.25,
        "unit": "su bardağı",
        "name": "beyaz şarap veya beyaz sirke"
      },
      {
        "amount": [
          3,
          4
        ],
        "unit": "dal",
        "name": "taze biberiye"
      },
      {
        "amount": [
          3,
          4
        ],
        "unit": "dal",
        "name": "taze kekik"
      },
      {
        "amount": 4,
        "unit": "tepeleme yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "litre",
        "name": "su"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kabak"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "kereviz sapı"
      },
      {
        "amount": 400,
        "unit": "gram",
        "name": "istiridye mantarı"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "ıspanak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kırmızı Kaliforniya biberi"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "sarı biber"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "konserve bezelye"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "beyaz karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "toz parmesan (100 gram)"
      }
    ],
    "source": "https://yemek.com/tarif/sebzeli-risotto/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kaynak tarifte risotto 10 dakika dinlendiriliyor; bu bekleme 1 saatlik hazırlık süresi içindedir",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-90",
    "name": "Pesto Makarna",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Pesto soslu makarna",
    "time": 30,
    "prep": 15,
    "cook": 15,
    "cal": null,
    "ingredients": [
      {
        "amount": 0.5,
        "unit": "paket",
        "name": "yassı spagetti"
      },
      {
        "amount": 0.75,
        "unit": "su bardağı",
        "name": "pesto sos"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "krema (100 mililitre)"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": [
          1,
          2
        ],
        "unit": "dal",
        "name": "taze fesleğen"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "çam fıstığı"
      }
    ],
    "source": "https://yemek.com/tarif/pesto-soslu-makarna/",
    "yieldPeople": 4,
    "yieldLabel": "4 porsiyon",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-91",
    "name": "Bolonez Makarna",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Bolonez soslu makarna",
    "time": 40,
    "prep": 10,
    "cook": 30,
    "cal": 429,
    "ingredients": [
      {
        "amount": 0.5,
        "unit": "paket",
        "name": "spagetti makarna"
      },
      {
        "amount": 6,
        "unit": "su bardağı",
        "name": "kaynar su"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 250,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 1.5,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "rendelenmiş domates"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tepeleme tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon (arzuya göre)"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "kaynar su"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "maydanoz"
      }
    ],
    "source": "https://yemek.com/tarif/bolonez-soslu-makarna/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-92",
    "name": "Napoliten Makarna",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Napoliten soslu makarna",
    "time": 35,
    "prep": 10,
    "cook": 25,
    "cal": 317,
    "ingredients": [
      {
        "amount": 0.5,
        "unit": "paket",
        "name": "spagetti makarna"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tuz"
      },
      {
        "amount": 5,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "domates püresi"
      },
      {
        "amount": [
          7,
          8
        ],
        "unit": "yaprak",
        "name": "taze fesleğen"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/napoliten-soslu-makarna/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-93",
    "name": "Fettucine Alfredo",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Tavuklu fettucini Alfredo",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": 530,
    "ingredients": [
      {
        "amount": 1,
        "unit": "paket",
        "name": "fettucine makarna"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 200,
        "unit": "gram",
        "name": "mantar"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "tavuk göğsü"
      },
      {
        "amount": 3,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "krema"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "fesleğen"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "rendelenmiş parmesan peyniri"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş tane karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/fettucini-alfredo/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-94",
    "name": "Lazanya",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Kıymalı lazanya",
    "time": 45,
    "prep": 20,
    "cook": 25,
    "cal": 695,
    "ingredients": [
      {
        "amount": 1,
        "unit": "paket",
        "name": "lazanya yaprağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "ayçiçek yağı"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 400,
        "unit": "gram",
        "name": "orta yağlı kıyma"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "rendelenmiş domates"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "defne yaprağı"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "bezelye"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 4,
        "unit": "su bardağı",
        "name": "soğuk süt"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "rendelenmiş muskat cevizi"
      }
    ],
    "source": "https://yemek.com/tarif/lazanya/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-95",
    "name": "Mac & Cheese",
    "mode": "Doyurucu",
    "subcategory": "Makarna / Pilav",
    "status": "sourced",
    "variant": "Mac and cheese",
    "time": 70,
    "prep": 15,
    "cook": 55,
    "cal": 460,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "dirsek makarna"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "muskat cevizi rendesi"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "rendelenmiş eski kaşar peyniri"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "çeçil peyniri"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "rendelenmiş Kolot peyniri"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "rendelenmiş cheddar peyniri"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta sarısı"
      }
    ],
    "source": "https://yemek.com/tarif/mac-and-cheese/",
    "yieldPeople": 8,
    "yieldLabel": "8 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-96",
    "name": "Etli Bezelye",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Etli bezelye yemeği",
    "time": 65,
    "prep": 20,
    "cook": 45,
    "cal": 350,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "kuşbaşı dana eti"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı veya sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy soğan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "bezelye"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": [
          2,
          3
        ],
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kapya biber"
      },
      "tuz ve karabiber (damak tadına göre)",
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz kırmızı biber"
      }
    ],
    "source": "https://www.lezzet.com.tr/yemek-tarifleri/sebze-yemekleri/sulu-yemek-tarifleri/etli-bezelye-yemegi-tarifi",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-97",
    "name": "Patates Yemeği",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Etsiz patates yemeği",
    "time": 30,
    "prep": 5,
    "cook": 25,
    "cal": 376,
    "ingredients": [
      {
        "amount": 4,
        "unit": "adet",
        "name": "orta boy patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy kuru soğan"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş tane karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/patates-yemegi/",
    "yieldPeople": 2,
    "yieldLabel": "2 tabaklık",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-98",
    "name": "Türlü",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Zeytinyağlı türlü",
    "time": null,
    "prep": 20,
    "cook": 35,
    "cal": 230,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy kabak"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy patlıcan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy soğan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy domates"
      },
      {
        "amount": 3,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 5,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/turlu/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Patlıcanlar tuzlu suda bekletiliyor; kaynak kesin bekleme süresi vermiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-99",
    "name": "Pırasa Yemeği",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Pirinçli pırasa yemeği",
    "time": 35,
    "prep": 10,
    "cook": 25,
    "cal": 122,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "pırasa"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "pirinç"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/pirasa-yemegi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-100",
    "name": "Kabak Yemeği",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Pirinçli kabak yemeği",
    "time": 55,
    "prep": 20,
    "cook": 35,
    "cal": 198,
    "ingredients": [
      {
        "amount": 5,
        "unit": "adet",
        "name": "orta boy kabak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy kuru soğan"
      },
      {
        "amount": 3,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy domates"
      },
      {
        "amount": 0.5,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "pirinç"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "dereotu"
      }
    ],
    "source": "https://yemek.com/tarif/kabak-yemegi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-101",
    "name": "Kapuska",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Etli kapuska",
    "time": null,
    "prep": 20,
    "cook": 38,
    "cal": 250,
    "ingredients": [
      {
        "amount": 1,
        "unit": "kilogram",
        "name": "lahana"
      },
      {
        "amount": 400,
        "unit": "gram",
        "name": "kuşbaşı et"
      },
      {
        "amount": 1,
        "unit": "tepeleme yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy kuru soğan"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2.5,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "pul biber"
      }
    ],
    "source": "https://yemek.com/tarif/kapuska/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Et önceden düdüklüde haşlanıyor; kaynak bu ön hazırlığın süresini vermiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-102",
    "name": "Ispanak Yemeği",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Pirinçli ıspanak yemeği",
    "time": 25,
    "prep": 5,
    "cook": 20,
    "cal": 125,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "ıspanak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "pirinç"
      },
      {
        "amount": 5,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "çorba kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/ispanak-yemegi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-103",
    "name": "Kereviz Yemeği",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Portakallı kereviz yemeği",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": 146,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy kereviz"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limon"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "portakal suyu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": [
          3,
          4
        ],
        "unit": "adet",
        "name": "kereviz yaprağı"
      }
    ],
    "source": "https://yemek.com/tarif/kereviz-yemegi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-104",
    "name": "Semizotu Yemeği",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Yoğurtlu semizotu yemeği",
    "time": null,
    "prep": 20,
    "cook": 15,
    "cal": 81,
    "ingredients": [
      {
        "amount": 1,
        "unit": "demet",
        "name": "semizotu"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "salça"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "kırık pirinç"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "yoğurt"
      }
    ],
    "source": "https://yemek.com/tarif/semizotu-yemegi/",
    "yieldPeople": 5,
    "yieldLabel": "5 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Semizotu sirkeli suda bekletiliyor; kaynak kesin bekleme süresi vermiyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-105",
    "name": "Tavuklu Bezelye",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Tavuklu bezelye yemeği",
    "time": null,
    "prep": 15,
    "cook": 40,
    "cal": 179,
    "ingredients": [
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "haşlanmış bezelye"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 500,
        "unit": "gram",
        "name": "kemiksiz tavuk kalça"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 4,
        "unit": "su bardağı",
        "name": "tavuk suyu"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/tavuklu-bezelye-yemegi/",
    "yieldPeople": 8,
    "yieldLabel": "8 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Bezelye haşlanmış, tavuk suyu hazır isteniyor; bu ön hazırlığın süresi belirsiz",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-106",
    "name": "Etli Patates",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Etli patates yemeği",
    "time": 60,
    "prep": 15,
    "cook": 45,
    "cal": 210,
    "ingredients": [
      {
        "amount": 400,
        "unit": "gram",
        "name": "kuşbaşı dana eti"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 2.5,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 2.5,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/etli-patates-yemegi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-107",
    "name": "Sulu Köfte",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Patatesli sulu köfte",
    "time": 75,
    "prep": 30,
    "cook": 45,
    "cal": 424,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "orta yağlı kıyma"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "ince bulgur"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "rendelenmiş soğan"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 2.5,
        "unit": "su bardağı",
        "name": "sıcak su"
      }
    ],
    "source": "https://yemek.com/tarif/sulu-kofte/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-108",
    "name": "Ekşili Köfte",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Terbiyeli ekşili köfte",
    "time": 60,
    "prep": 30,
    "cook": 30,
    "cal": 300,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "orta yağlı kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "pirinç"
      },
      {
        "amount": 2.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "ayçiçek yağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 7,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kekik"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta sarısı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "yoğurt"
      }
    ],
    "source": "https://yemek.com/tarif/eksili-kofte/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-109",
    "name": "Terbiyeli Köfte",
    "mode": "Ev Yemeği",
    "subcategory": "Tencere Yemeği",
    "status": "sourced",
    "variant": "Limon terbiyeli sulu köfte",
    "time": 45,
    "prep": 20,
    "cook": 25,
    "cal": 123,
    "ingredients": [
      {
        "amount": 250,
        "unit": "gram",
        "name": "dana kıyma"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "kırık pirinç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta sarısı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "limon suyu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/terbiyeli-sulu-kofte/",
    "yieldPeople": 4,
    "yieldLabel": "4 porsiyon",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
      "id": "meal-110",
      "name": "Biber Dolması",
      "mode": "Ev Yemeği",
      "subcategory": "Dolma / Sarma",
      "status": "sourced",
      "variant": "Etli biber dolması",
      "time": 55,
      "prep": 25,
      "cook": 30,
      "cal": null,
      "ingredients": [
        {
          "amount": 8,
          "unit": "adet",
          "name": "orta boy dolmalık biber"
        },
        {
          "amount": 100,
          "unit": "gram",
          "name": "orta yağlı dana kıyma"
        },
        {
          "amount": 1.5,
          "unit": "su bardağı",
          "name": "kırık pirinç"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "orta boy kuru soğan"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "küçük boy domates"
        },
        {
          "amount": 1.5,
          "unit": "yemek kaşığı",
          "name": "domates salçası"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "biber salçası"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "nane"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "karabiber"
        },
        {
          "amount": 1.25,
          "unit": "çay kaşığı",
          "name": "tuz"
        },
        {
          "amount": 1,
          "unit": "su bardağı",
          "name": "sıcak su"
        }
      ],
      "source": "https://yemek.com/tarif/biber-dolmasi/",
      "yieldPeople": 4,
      "yieldLabel": "8 adet; kişi başı 2 adet sayıldı",
      "extraPrep": false,
      "note": "Kaynak 8 adet veriyor, kaç kişilik olduğunu söylemiyor; alışveriş hesabında kişi başı 2 dolma varsayıldı. Kaynağın 99 kcal değeri 1 adet içindir, kişi başına düşeni kaynakta yazmadığı için kalori boş bırakıldı.",
      "waitLabel": null,
      "checkedAt": "2026-09-08",
      "batchLimited": true
    },
  {
      "id": "meal-111",
      "name": "Kabak Dolması",
      "mode": "Ev Yemeği",
      "subcategory": "Dolma / Sarma",
      "status": "sourced",
      "variant": "Kıymalı kabak dolması",
      "time": 65,
      "prep": 30,
      "cook": 35,
      "cal": null,
      "ingredients": [
        {
          "amount": 4,
          "unit": "adet",
          "name": "orta boy kabak"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "orta boy kuru soğan"
        },
        {
          "amount": 200,
          "unit": "gram",
          "name": "orta yağlı kıyma"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "orta boy rendelenmiş domates"
        },
        {
          "amount": 1.5,
          "unit": "çay bardağı",
          "name": "pirinç"
        },
        {
          "amount": 0.25,
          "unit": "demet",
          "name": "maydanoz"
        },
        {
          "amount": 1.5,
          "unit": "tatlı kaşığı",
          "name": "domates salçası"
        },
        {
          "amount": 1.5,
          "unit": "çay kaşığı",
          "name": "tuz"
        },
        {
          "amount": 0.5,
          "unit": "çay kaşığı",
          "name": "karabiber"
        },
        {
          "amount": 0.5,
          "unit": "tatlı kaşığı",
          "name": "nane"
        },
        {
          "amount": 1.5,
          "unit": "su bardağı",
          "name": "sıcak su"
        },
        {
          "amount": 4,
          "unit": "yemek kaşığı",
          "name": "ayçiçek yağı"
        }
      ],
      "source": "https://yemek.com/tarif/kabak-dolmasi/",
      "yieldPeople": 5,
      "yieldLabel": "10 adet; kişi başı 2 adet sayıldı",
      "extraPrep": false,
      "note": "Kaynak 10 adet veriyor, kaç kişilik olduğunu söylemiyor; alışveriş hesabında kişi başı 2 dolma varsayıldı. Kaynağın 113 kcal değeri \"1 porsiyon\" diyor ama porsiyonun kaç dolma olduğunu yazmıyor, bu yüzden kalori boş.",
      "waitLabel": null,
      "checkedAt": "2026-09-08",
      "batchLimited": true
    },
  {
      "id": "meal-112",
      "name": "Patlıcan Dolması",
      "mode": "Ev Yemeği",
      "subcategory": "Dolma / Sarma",
      "status": "sourced",
      "variant": "Kıymalı patlıcan dolması",
      "time": null,
      "prep": 30,
      "cook": 45,
      "cal": null,
      "ingredients": [
        {
          "amount": [
            5,
            6
          ],
          "unit": "adet",
          "name": "patlıcan"
        },
        {
          "amount": 1,
          "unit": "çay bardağı",
          "name": "pirinç"
        },
        {
          "amount": 200,
          "unit": "gram",
          "name": "orta yağlı kıyma"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "orta boy soğan"
        },
        {
          "amount": 3,
          "unit": "diş",
          "name": "sarımsak"
        },
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "domates salçası (iç harç için)"
        },
        {
          "amount": 1,
          "unit": "tatlı kaşığı",
          "name": "domates salçası (sos için)"
        },
        {
          "amount": 1,
          "unit": "tatlı kaşığı",
          "name": "biber salçası"
        },
        {
          "amount": 0.2,
          "unit": "demet",
          "name": "maydanoz"
        },
        {
          "amount": 6,
          "unit": "yemek kaşığı",
          "name": "zeytinyağı (iç harç için)"
        },
        {
          "amount": 0.5,
          "unit": "çay bardağı",
          "name": "zeytinyağı (sos için)"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "tuz (iç harç için)"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "tuz (sos için)"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "karabiber"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "pul biber"
        },
        {
          "amount": 1,
          "unit": "tatlı kaşığı",
          "name": "nane"
        },
        {
          "amount": 2,
          "unit": "su bardağı",
          "name": "sıcak su"
        },
        "rendelenmiş domates (ölçüsü kaynakta yok)"
      ],
      "source": "https://yemek.com/tarif/patlican-dolmasi/",
      "yieldPeople": 5,
      "yieldLabel": "10 adet; kişi başı 2 adet sayıldı",
      "extraPrep": true,
      "note": "Kaynak 10 adet veriyor, kaç kişilik olduğunu söylemiyor; kişi başı 2 dolma varsayıldı. 148 kcal değerinin neyin başına olduğu kaynakta yazmıyor, kalori boş. Rendelenmiş domates yapılış adımlarında kullanılıyor ama malzeme listesinde yok, ölçüsüz eklendi. Bilgi kutusu 45 dakika pişirme diyor, son adım 50 dakika diyor.",
      "waitLabel": "Oyulan patlıcanlar tuzlu suda bekletilir; kaynak süre vermiyor",
      "checkedAt": "2026-09-08",
      "batchLimited": true
    },
  {
    "id": "meal-113",
    "name": "Yaprak Sarma",
    "mode": "Ev Yemeği",
    "subcategory": "Dolma / Sarma",
    "status": "sourced",
    "variant": "Zeytinyağlı yaprak sarma",
    "time": 85,
    "prep": 40,
    "cook": 45,
    "cal": 564,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "asma yaprağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "limon"
      },
      {
        "amount": 0.75,
        "unit": "su bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2.5,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "orta boy kuru soğan"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "pirinç"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "dolmalık fıstık"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "kuş üzümü"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "nane"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "yenibahar"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tarçın"
      }
    ],
    "source": "https://yemek.com/tarif/zeytinyagli-yaprak-sarma/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-114",
    "name": "Lahana Sarma",
    "mode": "Ev Yemeği",
    "subcategory": "Dolma / Sarma",
    "status": "sourced",
    "variant": "Etli lahana sarması",
    "time": 95,
    "prep": 60,
    "cook": 35,
    "cal": 361,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy lahana"
      },
      {
        "amount": 7,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "pirinç"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "bulgur"
      },
      {
        "amount": 200,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "rendelenmiş soğan"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "nane"
      },
      {
        "amount": 1.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "şeker"
      }
    ],
    "source": "https://yemek.com/tarif/lahana-sarmasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-115",
    "name": "Soğan Dolması",
    "mode": "Ev Yemeği",
    "subcategory": "Dolma / Sarma",
    "status": "sourced",
    "variant": "Kıymalı soğan dolması",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": null,
    "ingredients": [
      {
        "amount": 5,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 400,
        "unit": "gram",
        "name": "yağsız kıyma"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "pirinç"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "yenibahar"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "biber salçası"
      }
    ],
    "source": "https://yemek.com/tarif/sogan-dolmasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-116",
    "name": "Kuru Dolma",
    "mode": "Ev Yemeği",
    "subcategory": "Dolma / Sarma",
    "status": "sourced",
    "variant": "Zeytinyağlı karışık kuru dolma",
    "time": 90,
    "prep": 15,
    "cook": 75,
    "cal": null,
    "ingredients": [
      {
        "amount": [
          20,
          25
        ],
        "unit": "adet",
        "name": "kuru patlıcan, biber veya kabak"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "pirinç"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 10,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "kuş üzümü"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "kuru nane"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "nar ekşisi"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "ceviz içi"
      }
    ],
    "source": "https://yemek.com/tarif/kuru-dolma/",
    "yieldPeople": 8,
    "yieldLabel": "8 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-117",
    "batchLimited": true,
    "name": "Fırında Sebzeli Köfte",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Fırında sebzeli köfte",
    "time": null,
    "prep": 15,
    "cook": 55,
    "cal": 436,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "dana kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "rendelenmiş soğan"
      },
      {
        "amount": 4,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "galeta unu"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "kekik"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "kırmızı toz biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karbonat"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "patlıcan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy kabak"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "yeşil biber"
      },
      {
        "amount": 1,
        "unit": "kahve fincanı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      }
    ],
    "source": "https://yemek.com/tarif/firinda-sebzeli-kofte/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Köfte harcı süresi belirtilmeden dinlendiriliyor ve önceden kızartılıyor; toplam süre kesin değil",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-118",
    "batchLimited": true,
    "name": "Tepsi Kebabı",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Antakya usulü tepsi kebabı",
    "time": 85,
    "prep": 40,
    "cook": 45,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "kapya biber"
      },
      {
        "amount": 7,
        "unit": "adet",
        "name": "yeşil veya sivri biber"
      },
      {
        "amount": 6,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 500,
        "unit": "gram",
        "name": "dana döş kıyma"
      },
      {
        "amount": 500,
        "unit": "gram",
        "name": "kuzu kıyması"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "pul biber"
      },
      {
        "amount": 3,
        "unit": "tatlı kaşığı",
        "name": "biber salçası"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "kaynar su"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      }
    ],
    "source": "https://yemek.com/tarif/tepsi-kebabi/",
    "yieldPeople": 8,
    "yieldLabel": "8 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-119",
    "name": "Patates Oturtma",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Kızartmadan fırında patates oturtma",
    "time": 70,
    "prep": 20,
    "cook": 35,
    "cal": 403,
    "ingredients": [
      {
        "amount": 4,
        "unit": "adet",
        "name": "büyük boy patates"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 500,
        "unit": "gram",
        "name": "orta yağlı kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy kuru soğan"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 4,
        "unit": "adet",
        "name": "sivri biber"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "domates konservesi"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 250,
        "unit": "gram",
        "name": "rendelenmiş kaşar peyniri"
      }
    ],
    "source": "https://yemek.com/tarif/patates-oturtma/",
    "yieldPeople": 6,
    "yieldLabel": "6 porsiyon",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Fırından çıktıktan sonra 10–15 dakika dinlendirilir; toplam süreye 15 dakika eklendi",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-120",
    "batchLimited": true,
    "name": "Kabak Musakka",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Kıymalı kabak musakka",
    "time": 60,
    "prep": 15,
    "cook": 45,
    "cal": null,
    "ingredients": [
      {
        "amount": 5,
        "unit": "adet",
        "name": "orta boy kabak"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "domates"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "dereotu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıcak su"
      }
    ],
    "source": "https://yemek.com/tarif/kabak-musakka/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
      "id": "meal-121",
      "name": "Beşamel Soslu Karnabahar",
      "mode": "Ev Yemeği",
      "subcategory": "Fırın Yemeği",
      "status": "sourced",
      "variant": "Fırında beşamel soslu karnabahar",
      "time": null,
      "prep": 10,
      "cook": 30,
      "cal": null,
      "ingredients": [
        {
          "amount": 1,
          "unit": "adet",
          "name": "küçük boy karnabahar"
        },
        {
          "amount": 1,
          "unit": "su bardağı",
          "name": "rendelenmiş kaşar peyniri"
        },
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "tereyağı"
        },
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "un"
        },
        {
          "amount": 1,
          "unit": "su bardağı",
          "name": "süt"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "tuz"
        },
        {
          "amount": 0.5,
          "unit": "çay kaşığı",
          "name": "karabiber"
        },
        "haşlama suyu (ölçüsü kaynakta yok)"
      ],
      "source": "https://yemek.com/tarif/firinda-besamel-soslu-karnabahar/",
      "yieldPeople": 4,
      "yieldLabel": "4 kişilik",
      "extraPrep": true,
      "note": "Başlıkta 10 dakika hazırlık ve 30 dakika pişirme var. Adımlarda haşlama, 15 dakika fırın ve peynir eklendikten sonra yeniden kızartma bulunuyor. Eksik süreler nedeniyle süreli filtrelere alınmaz. Kalori kaynağı yok.",
      "waitLabel": "Ön haşlama ve son kızartma süreleri kaynakta belirtilmemiş; toplam süre kesin değil",
      "checkedAt": "2026-09-09"
    },
  {
    "id": "meal-122",
    "batchLimited": true,
    "name": "Fırında Karnabahar",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Özel soslu fırında karnabahar",
    "time": 80,
    "prep": 15,
    "cook": 65,
    "cal": null,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "küçük boy karnabahar"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "sarı biber"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kırmızı biber"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 120,
        "unit": "gram",
        "name": "eritilmiş tereyağı"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kırmızı toz biber"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "ezilmiş sarımsak"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "şeker"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/firinda-karnabahar/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-123",
    "batchLimited": true,
    "name": "Fırında Mücver",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Fırında kabak mücveri",
    "time": 55,
    "prep": 15,
    "cook": 40,
    "cal": 115,
    "ingredients": [
      {
        "amount": 3,
        "unit": "adet",
        "name": "orta boy kabak"
      },
      {
        "amount": 5,
        "unit": "dal",
        "name": "taze soğan"
      },
      {
        "amount": 0.3333333333333333,
        "unit": "demet",
        "name": "dereotu"
      },
      {
        "amount": 0.3333333333333333,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "un"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "beyaz peynir"
      },
      {
        "amount": 0.3333333333333333,
        "unit": "su bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "kabartma tozu"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      }
    ],
    "source": "https://yemek.com/tarif/firinda-kabak-mucveri/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-124",
    "name": "Tavuklu Patates",
    "mode": "Ev Yemeği",
    "subcategory": "Fırın Yemeği",
    "status": "sourced",
    "variant": "Tencerede tavuklu patates yemeği",
    "time": 50,
    "prep": 15,
    "cook": 35,
    "cal": 148,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "kuşbaşı tavuk göğsü"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      "malzemelerin üstüne çıkacak kadar sıcak su"
    ],
    "source": "https://yemek.com/tarif/tavuklu-patates-yemegi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-125",
    "name": "Mercimek Yemeği",
    "mode": "Ev Yemeği",
    "subcategory": "Bakliyat",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-126",
    "name": "Kuru Börülce",
    "mode": "Ev Yemeği",
    "subcategory": "Bakliyat",
    "status": "sourced",
    "variant": "Zeytinyağlı kuru börülce yemeği",
    "time": null,
    "prep": 10,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "kuru börülce"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy soğan"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      },
      "börülcelerin üzerini geçecek kadar sıcak su"
    ],
    "source": "https://yemek.com/tarif/zeytinyagli-kuru-borulce-yemegi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kuru börülcenin yumuşama süresi belirsiz; bakliyatın cinsine göre değişir",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-127",
    "name": "Maş Fasulyesi",
    "mode": "Ev Yemeği",
    "subcategory": "Bakliyat",
    "status": "sourced",
    "variant": "Salçalı maş fasulyesi yemeği",
    "time": null,
    "prep": 15,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "maş fasulyesi"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "salça"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "kaynar su"
      }
    ],
    "source": "https://yemek.com/tarif/mas-fasulyesi-yemegi/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Maş fasulyesi 15 dakika ön haşlanıyor; sonraki pişirme süresi belirsiz",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-128",
    "name": "Zeytinyağlı Nohut",
    "mode": "Ev Yemeği",
    "subcategory": "Bakliyat",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-129",
    "name": "Etli Kuru Fasulye",
    "mode": "Ev Yemeği",
    "subcategory": "Bakliyat",
    "status": "sourced",
    "variant": "Etli kuru fasulye",
    "time": null,
    "prep": 30,
    "cook": 50,
    "cal": 267,
    "ingredients": [
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "kuru fasulye"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy soğan"
      },
      {
        "amount": 300,
        "unit": "gram",
        "name": "dana kuşbaşı eti"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "biber veya domates salçası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kimyon"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      "fasulye ve etin üzerini geçecek kadar su"
    ],
    "source": "https://yemek.com/tarif/etli-kuru-fasulye/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Fasulyeler geceden ıslatılıyor; haşlama süreleri belirsiz",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-130",
    "name": "Fasulye Piyazı",
    "mode": "Ev Yemeği",
    "subcategory": "Bakliyat",
    "status": "sourced",
    "variant": "Klasik fasulye piyazı",
    "time": null,
    "prep": 15,
    "cook": 40,
    "cal": 266,
    "ingredients": [
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "kuru fasulye"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy mor soğan"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "ayıklanmış maydanoz"
      },
      {
        "amount": 0.25,
        "unit": "adet",
        "name": "limon"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "sirke"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "sumak"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "haşlanmış yumurta"
      }
    ],
    "source": "https://yemek.com/tarif/piyaz/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kuru fasulye geceden ıslatılıyor; ertesi gün 35–40 dakika kontrollü haşlanıyor",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-131",
    "name": "Domates Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Sütlü domates çorbası",
    "time": 60,
    "prep": 30,
    "cook": 30,
    "cal": 198,
    "ingredients": [
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "çay bardağı",
        "name": "sıcak süt"
      },
      {
        "amount": 5,
        "unit": "adet",
        "name": "büyük boy domates"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 4,
        "unit": "su bardağı",
        "name": "sıcak et suyu"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "rendelenmiş kaşar peyniri"
      }
    ],
    "source": "https://yemek.com/tarif/domates-corbasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-132",
    "name": "Sebze Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Yoğurt terbiyeli taneli sebze çorbası",
    "time": 40,
    "prep": 10,
    "cook": 30,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kabak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "patates"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "yoğurt"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "kereviz yaprağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "tel şehriye"
      },
      {
        "amount": 5,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/sebze-corbasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kase",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-133",
    "name": "Tavuk Suyu Çorba",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Şehriyeli tavuk suyu çorbası",
    "time": 100,
    "prep": 50,
    "cook": 50,
    "cal": 161,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "tavuk göğsü"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "tavuk budu"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "kuru soğan"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 6,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "tel şehriye"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/tavuk-suyu-corbasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-134",
    "name": "Mantar Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Kremalı mantar çorbası",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "cal": 111,
    "ingredients": [
      {
        "amount": 400,
        "unit": "gram",
        "name": "mantar"
      },
      {
        "amount": 6,
        "unit": "su bardağı",
        "name": "mantarı haşlamak için su"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 5,
        "unit": "su bardağı",
        "name": "çorba için su"
      },
      {
        "amount": 200,
        "unit": "mililitre",
        "name": "krema"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "dereotu"
      }
    ],
    "source": "https://yemek.com/tarif/mantar-corbasi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-135",
    "name": "Brokoli Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Sütsüz ve kremasız brokoli çorbası",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "cal": 97,
    "ingredients": [
      {
        "amount": 500,
        "unit": "gram",
        "name": "brokoli"
      },
      {
        "amount": 7,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 1.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      }
    ],
    "source": "https://yemek.com/tarif/brokoli-corbasi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-136",
    "name": "Karnabahar Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Sütlü karnabahar çorbası",
    "time": 40,
    "prep": 10,
    "cook": 30,
    "cal": 250,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "küçük boy karnabahar"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy kuru soğan"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "orta boy patates"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 1.5,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 4,
        "unit": "su bardağı",
        "name": "su"
      }
    ],
    "source": "https://yemek.com/tarif/karnabahar-corbasi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-137",
    "name": "Düğün Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Kuzu gerdanlı düğün çorbası",
    "time": null,
    "prep": 10,
    "cook": 30,
    "cal": 296,
    "ingredients": [
      {
        "amount": 400,
        "unit": "gram",
        "name": "kuzu gerdan eti"
      },
      {
        "amount": 1,
        "unit": "litre",
        "name": "su"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 5,
        "unit": "yemek kaşığı",
        "name": "yoğurt"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta sarısı"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "su"
      },
      {
        "amount": 1.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "toz kırmızı biber"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "nane"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "pul biber"
      }
    ],
    "source": "https://yemek.com/tarif/dugun-corbasi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": "Kuzu gerdanın haşlanma süresi kaynak adımlarında verilmediği için toplam süre kesin değil",
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-138",
    "name": "İşkembe Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Terbiyeli işkembe çorbası",
    "time": 90,
    "prep": 30,
    "cook": 60,
    "cal": 285,
    "ingredients": [
      {
        "amount": 1,
        "unit": "kilogram",
        "name": "iyi temizlenmiş işkembe"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 5,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "haşlama için limon suyu"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "küçük boy kuru soğan"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "haşlama için sarımsak"
      },
      {
        "amount": 6,
        "unit": "su bardağı",
        "name": "su"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "yumurta sarısı"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "yoğurt"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "terbiye için limon suyu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "sirke"
      },
      {
        "amount": 4,
        "unit": "diş",
        "name": "servis için sarımsak"
      }
    ],
    "source": "https://yemek.com/tarif/iskembe-corbasi/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-139",
    "name": "Şehriye Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Domatesli tel şehriye çorbası",
    "time": 35,
    "prep": 10,
    "cook": 25,
    "cal": 133,
    "ingredients": [
      {
        "amount": 1,
        "unit": "adet",
        "name": "soğan"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "domates salçası"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "domates konservesi"
      },
      {
        "amount": 1,
        "unit": "litre",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "tel şehriye"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "kuru nane"
      }
    ],
    "source": "https://yemek.com/tarif/sehriye-corbasi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-140",
    "name": "Kabak Çorbası",
    "mode": "Hafif",
    "subcategory": "Çorba",
    "status": "sourced",
    "variant": "Sütlü kabak çorbası",
    "time": 30,
    "prep": 10,
    "cook": 20,
    "cal": 170,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy kabak"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "tepeleme yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 4,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": [
          3,
          4
        ],
        "unit": "dal",
        "name": "dereotu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kuru nane"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "toz kırmızı biber"
      }
    ],
    "source": "https://yemek.com/tarif/kabak-corbasi/",
    "yieldPeople": 5,
    "yieldLabel": "5 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-141",
    "name": "Çoban Salata",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "sourced",
    "variant": "Klasik çoban salatası",
    "time": 20,
    "prep": 20,
    "cook": 0,
    "cal": null,
    "ingredients": [
      {
        "amount": 4,
        "unit": "adet",
        "name": "orta boy domates"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "orta boy yeşil biber"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "orta boy salatalık"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "büyük boy kuru soğan"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 5,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "taze sıkılmış limon suyu"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/coban-salatasi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Süre ve kalori kaynak tarifin yaklaşık değeridir; kullanılan malzeme ve ekipmana göre değişebilir.",
    "waitLabel": null,
    "checkedAt": "2026-09-08"
  },
  {
    "id": "meal-142",
    "name": "Roka Salatası",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "sourced",
    "variant": "Tulum peynirli roka salatası",
    "time": 10,
    "prep": 10,
    "cook": 0,
    "cal": null,
    "ingredients": [
      {"amount": 1, "unit": "demet", "name": "roka"},
      {"amount": 1, "unit": "kase", "name": "tulum peyniri"},
      {"amount": 1, "unit": "kase", "name": "ayıklanmış nar"},
      {"amount": 1, "unit": "kahve fincanı", "name": "nar ekşisi"},
      {"amount": 0.5, "unit": "kahve fincanı", "name": "sıvı yağ"},
      {"amount": 1, "unit": "çay kaşığı", "name": "tuz"}
    ],
    "source": "https://yemek.com/tarif/tulum-peynirli-roka-salatasi/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Pişirme yok. Peynir ve nar kaynakta kase olarak verilmiş, gram karşılığı belirtilmemiştir. Kaynak kalori vermiyor.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-143",
    "name": "Gavurdağı Salatası",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "sourced",
    "variant": "Kebapçı usulü gerçek gavurdağı salata",
    "time": 15,
    "prep": 15,
    "cook": 0,
    "cal": null,
    "ingredients": [
      {"amount": 5, "unit": "adet", "name": "domates (kabuğu soyulmuş)"},
      {"amount": 2, "unit": "adet", "name": "küçük boy kırmızı soğan"},
      {"amount": 1, "unit": "adet", "name": "kapya biber"},
      {"amount": 0.5, "unit": "demet", "name": "maydanoz"},
      {"amount": 100, "unit": "gram", "name": "ceviz içi"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "nar ekşisi"},
      {"amount": 5, "unit": "yemek kaşığı", "name": "sızma zeytinyağı"},
      {"amount": 1, "unit": "adet", "name": "limonun suyu"},
      {"amount": 1, "unit": "çay kaşığı", "name": "sumak"},
      {"amount": 1.5, "unit": "çay kaşığı", "name": "tuz"}
    ],
    "source": "https://yemek.com/tarif/gercek-gavurdagi-salata/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Pişirme yok; süre yalnızca doğrama ve sos hazırlığıdır. Kaynak kalori vermiyor. Tuz adımda damak tadına göre ekleniyor, ölçü listede verilmiş.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-144",
    "name": "Kinoalı Salata",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-145",
    "name": "Zeytin Yağlı Sebze Salatası",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-147",
    "name": "Hellimli Salata",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-148",
    "name": "Nohutlu Salata",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-149",
    "name": "Mercimek Salatası",
    "mode": "Hafif",
    "subcategory": "Salata",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
      "id": "meal-151",
      "name": "Izgara Hindi",
      "mode": "Hafif",
      "subcategory": "Izgara",
      "status": "sourced",
      "variant": "Izgara hindi göğüs",
      "time": null,
      "prep": 15,
      "cook": 15,
      "cal": 276,
      "ingredients": [
        {
          "amount": 250,
          "unit": "gram",
          "name": "hindi göğüs"
        },
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "zeytinyağı"
        },
        {
          "amount": 1,
          "unit": "tutam",
          "name": "tuz"
        },
        {
          "amount": 1,
          "unit": "tutam",
          "name": "karabiber"
        },
        {
          "amount": 1,
          "unit": "tutam",
          "name": "tatlı toz biber"
        },
        {
          "amount": 1,
          "unit": "dal",
          "name": "taze biberiye"
        },
        {
          "amount": 2,
          "unit": "diş",
          "name": "sarımsak"
        }
      ],
      "source": "https://yemek.com/tarif/izgara-hindi-gogus/",
      "yieldPeople": 1,
      "yieldLabel": "1 kişilik",
      "extraPrep": true,
      "note": "Kaynak 15 dakika hazırlık ve 15 dakika pişirme verir; marinasyon beklemesi belirsiz olduğundan süreli seçimlere alınmaz. Kalori kaynağın yaklaşık kişi başı değeridir.",
      "waitLabel": "Sosladıktan sonra bekletme var; kaynak süresini belirtmiyor",
      "checkedAt": "2026-09-09"
    },
  {
    "id": "meal-152",
    "name": "Izgara Köfte",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "sourced",
    "variant": "Tavada/ızgarada köftelik kıyma köfte",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "cal": null,
    "ingredients": [
      {"amount": 750, "unit": "gram", "name": "köftelik kıyma"},
      {"amount": 1, "unit": "adet", "name": "yumurta"},
      {"amount": 1, "unit": "adet", "name": "soğan (rendelenmiş)"},
      {"amount": 1, "unit": "çay kaşığı", "name": "kimyon"},
      {"amount": 0.5, "unit": "çay kaşığı", "name": "karabiber"},
      {"amount": 1.5, "unit": "çay kaşığı", "name": "tuz"},
      {"amount": 0.5, "unit": "kahve fincanı", "name": "galeta unu"}
    ],
    "source": "https://yemek.com/tarif/izgara-kofte-2/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Kaynak kalori vermiyor. Tüm malzemeler tek adımda yoğrulup şekil veriliyor; ayrı bir dinlendirme süresi belirtilmemiş.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-153",
    "name": "Izgara Hellim",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-154",
    "name": "Izgara Karides",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "sourced",
    "variant": "Balık Osman usulü ızgara jumbo karides",
    "time": 25,
    "prep": 15,
    "cook": 10,
    "cal": null,
    "ingredients": [
      {"amount": 4, "unit": "adet", "name": "jumbo karides"},
      {"amount": 1, "unit": "yemek kaşığı", "name": "zeytinyağı"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "soya sosu (servis için)"}
    ],
    "source": "https://yemek.com/tarif/balik-osman-izgara-jumbo-karides/",
    "yieldPeople": 1,
    "yieldLabel": "1 kişilik",
    "extraPrep": false,
    "note": "Marinasyon isteğe bağlı (arzuya göre); zorunlu bekleme yok. Kaynak kalori vermiyor.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-155",
    "name": "Izgara Ahtapot",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-156",
    "name": "Izgara Kalamar",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-157",
    "name": "Izgara Uskumru",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-158",
    "name": "Izgara Çipura",
    "mode": "Hafif",
    "subcategory": "Izgara",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-159",
    "name": "Sebze Sote",
    "mode": "Hafif",
    "subcategory": "Sebzeli",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-160",
    "name": "Brokoli Sote",
    "mode": "Hafif",
    "subcategory": "Sebzeli",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-161",
    "name": "Karnabahar Sote",
    "mode": "Hafif",
    "subcategory": "Sebzeli",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-162",
    "name": "Mantar Sote",
    "mode": "Hafif",
    "subcategory": "Sebzeli",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-163",
    "name": "Kabak Spagetti",
    "mode": "Hafif",
    "subcategory": "Sebzeli",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-164",
    "name": "Sebzeli Kinoa",
    "mode": "Hafif",
    "subcategory": "Sebzeli",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-165",
    "name": "Zeytinyağlı Semizotu",
    "mode": "Hafif",
    "subcategory": "Sebzeli",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-166",
    "name": "Margarita Pizza",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-167",
    "name": "Sucuklu Pizza",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-168",
    "name": "Tavuklu Pizza",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-169",
    "name": "Karışık Pide",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-170",
    "name": "Kuşbaşılı Pide",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-171",
    "name": "Kaşarlı Pide",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-172",
    "name": "Etli Ekmek",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Pizza / Pide",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-173",
    "name": "Kokoreç",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Sokak Lezzeti",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
      "id": "meal-174",
      "name": "Tantuni",
      "mode": "Fast Food / Kaçamak",
      "subcategory": "Sokak Lezzeti",
      "status": "sourced",
      "variant": "Mersin usulü et tantuni",
      "time": 35,
      "prep": 5,
      "cook": 30,
      "cal": 339,
      "ingredients": [
        {
          "amount": 600,
          "unit": "gram",
          "name": "dana eti"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "kuru soğan"
        },
        {
          "amount": 0.5,
          "unit": "demet",
          "name": "maydanoz"
        },
        {
          "amount": 2,
          "unit": "adet",
          "name": "orta boy domates"
        },
        {
          "amount": 1,
          "unit": "çay bardağı",
          "name": "sıvı yağ"
        },
        {
          "amount": 1,
          "unit": "su bardağı",
          "name": "sıcak su"
        },
        "tuz (ölçüsü kaynakta yok)",
        "kırmızı toz biber (ölçüsü kaynakta yok)",
        "sumak (ölçüsü kaynakta yok)",
        "lavaş (ölçüsü kaynakta yok)"
      ],
      "source": "https://www.nefisyemektarifleri.com/mersin-et-tantuni-gercek-tantuni/",
      "yieldPeople": 8,
      "yieldLabel": "6-8 kişilik",
      "extraPrep": false,
      "note": "Kaynak 6-8 kişilik diyor; kapasite üst sınırı alındı. Tuz, kırmızı toz biber, sumak ve lavaş kaynakta ölçüsüz veriliyor. Kalori kaynağın 1 porsiyon değeridir.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "meal-175",
    "name": "Dürüm Döner",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Sokak Lezzeti",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-176",
    "name": "Midye Dolma",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Sokak Lezzeti",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-177",
    "name": "Islak Hamburger",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Sokak Lezzeti",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-178",
    "name": "Gözleme",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Sokak Lezzeti",
    "status": "sourced",
    "variant": "Hazır yufkadan kaşarlı gözleme",
    "time": 20,
    "prep": 10,
    "cook": 10,
    "cal": null,
    "ingredients": [
      {"amount": 1, "unit": "adet", "name": "yufka"},
      {"amount": 1, "unit": "küçük kase", "name": "rendelenmiş kaşar peyniri"},
      {"amount": 1, "unit": "yemek kaşığı", "name": "tereyağı"}
    ],
    "source": "https://yemek.com/tarif/kasarli-gozleme/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Kaynak kaloriyi 1 dilim için 446 kcal olarak verir; kişi başına kaç dilim düştüğü belirtilmediğinden kalori gösterilmiyor. Üç malzeme de adımlarda kullanılıyor (yufka, kaşar, tereyağı).",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-179",
    "name": "Patso",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Sokak Lezzeti",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
      "id": "meal-180",
      "name": "Sosisli Sandviç",
      "mode": "Fast Food / Kaçamak",
      "subcategory": "Sokak Lezzeti",
      "status": "sourced",
      "variant": "Salçalı soslu sosisli sandviç",
      "time": 35,
      "prep": 10,
      "cook": 25,
      "cal": null,
      "ingredients": [
        {
          "amount": 6,
          "unit": "adet",
          "name": "sosis"
        },
        {
          "amount": 6,
          "unit": "adet",
          "name": "sandviç ekmeği"
        },
        {
          "amount": 2,
          "unit": "yemek kaşığı",
          "name": "domates salçası"
        },
        {
          "amount": 2,
          "unit": "yemek kaşığı",
          "name": "tereyağı"
        },
        {
          "amount": 2,
          "unit": "su bardağı",
          "name": "sıcak su"
        },
        {
          "amount": 0.5,
          "unit": "tatlı kaşığı",
          "name": "tuz"
        },
        {
          "amount": 1,
          "unit": "tatlı kaşığı",
          "name": "un"
        },
        "ketçap, mayonez, hardal (ölçüsü kaynakta yok)",
        "marul, kornişon turşu (ölçüsü kaynakta yok)",
        "patates kızartması (ölçüsü kaynakta yok)"
      ],
      "source": "https://www.nefisyemektarifleri.com/sosisli-sandvic-tarifi/",
      "yieldPeople": 6,
      "yieldLabel": "4-6 kişilik",
      "extraPrep": false,
      "note": "Kaynak 4-6 kişilik diyor; kapasite üst sınırı alındı. Servis malzemeleri kaynakta ölçüsüz. Kalori kaynakta 1 sandviç için veriliyor, kişi başına düşeni yazmadığı için boş bırakıldı.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "meal-181",
    "name": "Soğan Halkası",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Kızarmış",
    "status": "sourced",
    "variant": "Fast food usulü kolay soğan halkası",
    "time": 25,
    "prep": 10,
    "cook": 15,
    "cal": null,
    "ingredients": [
      {"amount": 2, "unit": "adet", "name": "büyük boy soğan"},
      {"amount": 1, "unit": "çay bardağı", "name": "un"},
      {"amount": 1, "unit": "yemek kaşığı", "name": "nişasta"},
      {"amount": 0.5, "unit": "çay bardağı", "name": "soda"},
      {"amount": 1, "unit": "kase", "name": "galeta unu"},
      {"amount": 1, "unit": "çay kaşığı", "name": "tuz"},
      {"amount": 1, "unit": "çay kaşığı", "name": "karabiber"},
      {"amount": 1, "unit": "su bardağı", "name": "sıvı yağ (kızartmak için)"}
    ],
    "source": "https://yemek.com/tarif/kolay-sogan-halkasi/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "batchLimited": true,
    "note": "Altı adımın tamamı doğrulandı; listedeki her malzeme adımlarda kullanılıyor. Kaynak 312 kcal veriyor fakat bunun kişi başı mı toplam mı olduğunu belirtmiyor, bu yüzden gösterilmiyor. Halkalar tek tavada parti parti kızartılır.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-182",
    "name": "Mozzarella Stick",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Kızarmış",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-183",
    "name": "Kalamar Tava",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Kızarmış",
    "status": "sourced",
    "variant": "Maden sulu çıtır kalamar",
    "time": 45,
    "prep": 30,
    "cook": 15,
    "cal": 315,
    "ingredients": [
      {
        "amount": 300,
        "unit": "gram",
        "name": "kalamar"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "limon (suyu için)"
      },
      {
        "amount": 1,
        "unit": "şişe",
        "name": "maden suyu (şişe hacmi belirsiz)"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karbonat"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "un"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "su bardağı",
        "name": "sıvı yağ (kızartmak için)"
      }
    ],
    "source": "https://yemek.com/tarif/kalamar/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": true,
    "note": "Altı adımın tamamı görüldü; listedeki her malzeme adımlarda kullanılıyor. Kaynak servis için tarator sos öneriyor, sos malzeme listesinde yok ve ayrı bir tariftir. Kalori kaynağın 1 porsiyon için verdiği değerdir.",
    "waitLabel": "En az 3 saat buzdolabında dinlendirme gerekir; kaynağın 45 dakikasına dahil değil",
    "checkedAt": "2026-09-12"
  },
  {
      "id": "meal-184",
      "name": "Midye Tava",
      "mode": "Fast Food / Kaçamak",
      "subcategory": "Kızarmış",
      "status": "sourced",
      "variant": "Sodalı bulamaçla midye tava",
      "time": 75,
      "prep": 60,
      "cook": 15,
      "cal": null,
      "ingredients": [
        {
          "amount": 1,
          "unit": "kilogram",
          "name": "iç midye"
        },
        {
          "amount": 2,
          "unit": "su bardağı",
          "name": "sıvı yağ (kızartmak için)"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "yumurta (bulamaç için)"
        },
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "nişasta (bulamaç için)"
        },
        {
          "amount": 1,
          "unit": "çay bardağı",
          "name": "un (bulamaç için)"
        },
        {
          "amount": 1,
          "unit": "şişe",
          "name": "soda (şişe hacmi belirsiz)"
        },
        {
          "amount": 1,
          "unit": "su bardağı",
          "name": "rendelenmiş bayat ekmek (sos için)"
        },
        {
          "amount": 4,
          "unit": "diş",
          "name": "sarımsak (sos için)"
        },
        {
          "amount": 6,
          "unit": "adet",
          "name": "ceviz içi (sos için)"
        },
        {
          "amount": 1,
          "unit": "çay bardağı",
          "name": "yoğurt (sos için)"
        },
        {
          "amount": 1,
          "unit": "tatlı kaşığı",
          "name": "sirke (sos için)"
        },
        {
          "amount": 1,
          "unit": "fincan",
          "name": "mayonez (sos için)"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "tuz (sos için)"
        }
      ],
      "source": "https://www.nefisyemektarifleri.com/midye-tava-tarifi/",
      "yieldPeople": 10,
      "yieldLabel": "8-10 kişilik",
      "extraPrep": false,
      "note": "Kaynak 8-10 kişilik diyor; kapasite üst sınırı alındı. Bir saatlik hazırlık kaynağın kendi süresidir, ek bekleme yok. Soda şişesinin hacmi kaynakta yazmıyor. Kalori kaynakta yok.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "meal-185",
    "name": "Paçanga Böreği",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Kızarmış",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-186",
    "name": "Sigara Böreği",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Kızarmış",
    "status": "sourced",
    "variant": "Zeytinyağında tavada sigara böreği",
    "time": 25,
    "prep": 15,
    "cook": 10,
    "cal": null,
    "ingredients": [
      {"amount": 3, "unit": "adet", "name": "yufka"},
      {"amount": 1, "unit": "su bardağı", "name": "zeytinyağı (kızartmak için)"},
      {"amount": 0.5, "unit": "kilogram", "name": "lor peyniri"},
      {"amount": 1, "unit": "çay bardağı", "name": "rendelenmiş kaşar peyniri"},
      {"amount": 1, "unit": "tutam", "name": "maydanoz"},
      {"amount": 1, "unit": "adet", "name": "taze soğan"},
      {"amount": 1, "unit": "tutam", "name": "kırmızı toz biber"},
      {"amount": 1, "unit": "çay kaşığı", "name": "karabiber"},
      {"amount": 1, "unit": "çay kaşığı", "name": "tuz"}
    ],
    "source": "https://yemek.com/tarif/sigara-boregi-2/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "batchLimited": true,
    "note": "3 yufkalık sabit bir parti; tek tavada kızartma kapasitesiyle sınırlı olduğundan batchLimited işaretlendi. Kalori kaynakta yok.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-187",
    "name": "Çıtır Peynir",
    "mode": "Fast Food / Kaçamak",
    "subcategory": "Kızarmış",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
      "id": "meal-188",
      "name": "Noodle",
      "mode": "Dünya Mutfağı",
      "subcategory": "Asya",
      "status": "sourced",
      "variant": "Tavuklu sebzeli noodle",
      "time": 25,
      "prep": 10,
      "cook": 15,
      "cal": null,
      "ingredients": [
        {
          "amount": 220,
          "unit": "gram",
          "name": "noodle (4 parça)"
        },
        {
          "amount": 400,
          "unit": "gram",
          "name": "tavuk göğsü"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "kuru soğan"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "kırmızı biber"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "havuç"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "kabak"
        },
        {
          "amount": 62.5,
          "unit": "mililitre",
          "name": "soya sosu"
        },
        {
          "amount": 4,
          "unit": "yemek kaşığı",
          "name": "zeytinyağı"
        },
        {
          "amount": 2,
          "unit": "yemek kaşığı",
          "name": "susam"
        },
        {
          "amount": 1,
          "unit": "litre",
          "name": "sıcak su"
        }
      ],
      "source": "https://www.nefisyemektarifleri.com/tavuklu-sebzeli-noodle-tarifi/",
      "yieldPeople": 6,
      "yieldLabel": "4-6 kişilik",
      "extraPrep": false,
      "note": "Yedi adımın tamamı görüldü; listedeki malzemelerin hepsi adımlarda kullanılıyor, adımlarda listede olmayan malzeme yok. Kaynak 4-6 kişilik diyor, alt sınır 4 alındı. Soya sosu kaynakta hem yarım çay bardağı hem 62,5 ml olarak verilmiş, mililitre yazıldı. Kaynak kalori vermiyor.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "meal-189",
    "name": "Spring Roll",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-191",
    "name": "Tom Yum",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-192",
    "name": "Teriyaki Tavuk",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "sourced",
    "variant": "Teriyaki soslu tavuk",
    "time": 35,
    "prep": 10,
    "cook": 25,
    "cal": null,
    "ingredients": [
      {"amount": 500, "unit": "gram", "name": "tavuk göğsü"},
      {"amount": 4, "unit": "yemek kaşığı", "name": "soya sosu"},
      {"amount": 1, "unit": "yemek kaşığı", "name": "toz şeker"},
      {"amount": 1, "unit": "tatlı kaşığı", "name": "bal"},
      {"amount": 1, "unit": "çay kaşığı", "name": "zencefil"},
      {"amount": 2, "unit": "diş", "name": "sarımsak"},
      {"amount": 3, "unit": "yemek kaşığı", "name": "zeytinyağı"},
      {"amount": 0.5, "unit": "çay bardağı", "name": "su"},
      {"amount": 1, "unit": "tatlı kaşığı", "name": "tuz"},
      {"amount": 1, "unit": "tutam", "name": "susam"},
      {"amount": 1, "unit": "yemek kaşığı", "name": "sirke"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "nişasta (isteğe bağlı)"}
    ],
    "source": "https://yemek.com/tarif/teriyaki-soslu-tavuk/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Beş adımın tamamı doğrulandı; listedeki malzemelerin hepsi adımlarda kullanılıyor. Soya sosu ve zeytinyağı kaynakta aralık olarak verilmiş (3-5 ve 3-4 yemek kaşığı), alt sınıra yakın tek değer yazıldı. Kaynak kalori vermiyor.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-193",
    "name": "Kung Pao Tavuk",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-194",
    "name": "Yakitori",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-195",
    "name": "Tempura",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "sourced",
    "variant": "Karides tempura (dinamit sosla)",
    "time": 20,
    "prep": 10,
    "cook": 10,
    "cal": 285,
    "ingredients": [
      {
        "amount": 250,
        "unit": "gram",
        "name": "karides"
      },
      {
        "amount": 100,
        "unit": "gram",
        "name": "un"
      },
      {
        "amount": 25,
        "unit": "gram",
        "name": "mısır nişastası"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı ucu",
        "name": "kabartma tozu"
      },
      {
        "amount": 0.5,
        "unit": "şişe",
        "name": "maden suyu (şişe hacmi belirsiz)"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "mayonez"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "sriracha ya da acı sos"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "susam"
      },
      "tuz (ölçüsü kaynakta yok)",
      "karabiber (ölçüsü kaynakta yok)",
      "kızartmak için sıvı yağ (ölçüsü kaynakta yok)",
      "taze soğan (servis için, ölçüsü kaynakta yok)"
    ],
    "source": "https://yemek.com/tarif/karides-tempura/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "note": "Sekiz adımın tamamı görüldü. Kaynak adımlarda tuz, karabiber ve kızartma yağı kullanıyor ama malzeme listesinde vermiyor; üçü de ölçüsüz olarak eklendi, miktar uydurulmadı. Servis için taze soğan yalnızca son adımda geçiyor. Maden suyu \"yarım şişe\" olarak veriliyor, şişe hacmi belirtilmemiş. Kalori kaynağın 1 porsiyon için verdiği değerdir.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-196",
    "name": "Gyoza",
    "mode": "Dünya Mutfağı",
    "subcategory": "Asya",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
      "id": "meal-197",
      "name": "Pho",
      "mode": "Dünya Mutfağı",
      "subcategory": "Asya",
      "status": "sourced",
      "variant": "Vietnam usulü tavuklu pho",
      "time": 105,
      "prep": 15,
      "cook": 90,
      "cal": null,
      "ingredients": [
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "bitkisel yağ (kanola ya da nötr yağ)"
        },
        {
          "amount": 2,
          "unit": "adet",
          "name": "soğan (ikiye bölünmüş, kabuklu)"
        },
        {
          "amount": 5,
          "unit": "santimetre",
          "name": "taze zencefil (dilimlenmiş, kabuklu)"
        },
        {
          "amount": 2,
          "unit": "litre",
          "name": "su"
        },
        {
          "amount": 1.5,
          "unit": "kilogram",
          "name": "kemikli ve derili tavuk"
        },
        {
          "amount": 1,
          "unit": "küçük demet",
          "name": "kişniş"
        },
        {
          "amount": 2,
          "unit": "adet",
          "name": "yıldız anason"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "tarçın çubuğu"
        },
        {
          "amount": 4,
          "unit": "adet",
          "name": "karanfil"
        },
        {
          "amount": 2,
          "unit": "tatlı kaşığı",
          "name": "rezene tohumu"
        },
        {
          "amount": 2,
          "unit": "tatlı kaşığı",
          "name": "kişniş tohumu"
        },
        {
          "amount": 3,
          "unit": "tatlı kaşığı",
          "name": "beyaz şeker"
        },
        {
          "amount": 0.75,
          "unit": "tatlı kaşığı",
          "name": "tuz"
        },
        {
          "amount": 360,
          "unit": "gram",
          "name": "ince pirinç eriştesi"
        },
        {
          "amount": 2,
          "unit": "adet",
          "name": "taze soğan sapı (ince doğranmış)"
        },
        {
          "amount": 3,
          "unit": "su bardağı",
          "name": "fasulye filizi"
        },
        {
          "amount": 1,
          "unit": "küçük demet",
          "name": "tay fesleğeni, nane ve kişniş (karışık)"
        },
        {
          "amount": 2,
          "unit": "adet",
          "name": "lime (dörde bölünmüş)"
        },
        "kırmızı biber (isteğe bağlı, ölçüsü kaynakta yok)"
      ],
      "source": "https://www.nefisyemektarifleri.com/vietnamese-tavuklu-pho/",
      "yieldPeople": 8,
      "yieldLabel": "6-8 kişilik",
      "extraPrep": false,
      "note": "On yedi adımın tamamı görüldü; çorba suyu malzemeleri adımda topluca ekleniyor, tuz ayrı adımda veriliyor, üst malzemeler sunum adımlarında tek tek anılıyor. 1,5 saatlik kaynatma kaynağın verdiği pişirme süresine dahildir, ayrıca bekleme yok. Kaynak 6-8 kişilik diyor, alt sınır 6 alındı. Kaynağın verdiği 600 g taze erişte alternatifi yazılmadı. Kaynak kalori vermiyor.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "meal-198",
    "name": "Tabbouleh",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-199",
    "name": "Şakşuka",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "sourced",
    "variant": "Kızartma patlıcanlı klasik şakşuka",
    "time": 45,
    "prep": 25,
    "cook": 20,
    "cal": null,
    "ingredients": [
      {"amount": 2, "unit": "adet", "name": "patlıcan"},
      {"amount": 2, "unit": "adet", "name": "yeşil biber"},
      {"amount": 5, "unit": "yemek kaşığı", "name": "sıvı yağ (kızartmak için)"},
      {"amount": 5, "unit": "adet", "name": "domates"},
      {"amount": 0.25, "unit": "çay bardağı", "name": "zeytinyağı"},
      {"amount": 1, "unit": "yemek kaşığı", "name": "sirke"},
      {"amount": 2, "unit": "diş", "name": "sarımsak"},
      {"amount": 1, "unit": "tutam", "name": "tuz"},
      "toz şeker (çay kaşığı ucu, ölçüsü kaynakta yok)"
    ],
    "source": "https://yemek.com/tarif/saksuka-7/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "Patlıcan tuzlu suda bekletiliyor; kaynak bu beklemeye süre vermiyor, 25+20 dakikaya dahil olduğu varsayılmadı, adımda belirtiliyor. Sos soğutulduktan sonra sebzelerle karıştırılıyor. Kalori kaynakta yok.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-200",
    "name": "Humus Tabağı",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "sourced",
    "variant": "Porsiyonluk humus",
    "time": null,
    "prep": 10,
    "cook": null,
    "cal": null,
    "ingredients": [
      {"amount": 1, "unit": "su bardağı", "name": "haşlanmış nohut"},
      {"amount": 3, "unit": "yemek kaşığı", "name": "tahin"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "limon suyu"},
      {"amount": 1, "unit": "diş", "name": "sarımsak"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "zeytinyağı"},
      {"amount": 1, "unit": "çay kaşığı", "name": "kimyon"},
      {"amount": 1, "unit": "çay kaşığı", "name": "tuz"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "içme suyu"}
    ],
    "source": "https://yemek.com/tarif/humus-5/",
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": true,
    "note": "Kaynak nohudu hazır haşlanmış olarak kullanıyor; ıslatma/haşlama süresi belirtilmediğinden toplam süre belirsiz, süreli filtrelere alınmaz. Kalori kaynakta yok.",
    "waitLabel": "Nohut ıslatma/haşlama süresi kaynakta belirtilmemiş",
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-201",
    "name": "Fattoush",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-202",
    "name": "Ratatouille",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-203",
    "name": "Paella",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-204",
    "name": "Falafel Dürüm",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-205",
    "name": "Greek Bowl",
    "mode": "Dünya Mutfağı",
    "subcategory": "Akdeniz",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-206",
    "name": "Nachos",
    "mode": "Dünya Mutfağı",
    "subcategory": "Meksika",
    "status": "sourced",
    "variant": "Kıymalı nachos (guacamole ve peynir soslu)",
    "time": 40,
    "prep": 15,
    "cook": 25,
    "cal": null,
    "ingredients": [
      "1 paket nachos / mısır cipsi (gramajı kaynakta yok)",
      {
        "amount": 300,
        "unit": "gram",
        "name": "kıyma"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "ufak doğranmış kuru soğan"
      },
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "sıvı yağ"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "Meksika fasulyesi (konserve)"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "karabiber"
      },
      {
        "amount": 1.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "dal",
        "name": "kişniş yaprağı (kıyılmış)"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "avokado"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "küçük boy domates"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "mor soğan"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "sarımsak (ezilmiş)"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "lime ya da limon (suyu için)"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "tuz (guacamole için)"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "karabiber (guacamole için)"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "un"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 100,
        "unit": "gram",
        "name": "cheddar peyniri"
      },
      {
        "amount": 100,
        "unit": "gram",
        "name": "mozarella peyniri"
      }
    ],
    "source": "https://yemek.com/tarif/nachos/",
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "note": "On adımın tamamı görüldü. Guacamole için listelenen 1/4 çay kaşığı tuz ile 1 tutam karabiber adımlarda ayrıca anılmıyor; diğer bütün malzemeler adımlarda kullanılıyor. Kişniş kaynakta 2-3 dal aralığı olarak verilmiş, alt sınır yazıldı. Cips miktarı \"paket\" olarak veriliyor, gramaj yok. Kaynak kalori vermiyor.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-207",
    "name": "Enchilada",
    "mode": "Dünya Mutfağı",
    "subcategory": "Meksika",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-208",
    "name": "Chili Con Carne",
    "mode": "Dünya Mutfağı",
    "subcategory": "Meksika",
    "status": "sourced",
    "variant": "Bitter çikolatalı Teksas usulü chili con carne",
    "time": 135,
    "prep": 15,
    "cook": 120,
    "cal": 480,
    "ingredients": [
      {"amount": 4, "unit": "yemek kaşığı", "name": "sıvı yağ"},
      {"amount": 1, "unit": "adet", "name": "kuru soğan"},
      {"amount": 1, "unit": "adet", "name": "kapya biber"},
      {"amount": 2, "unit": "diş", "name": "sarımsak"},
      {"amount": 1, "unit": "tatlı kaşığı", "name": "tuz"},
      {"amount": 1, "unit": "çay kaşığı", "name": "karabiber"},
      {"amount": 0.5, "unit": "çay kaşığı", "name": "kimyon"},
      {"amount": 1, "unit": "tatlı kaşığı", "name": "kekik"},
      {"amount": 1, "unit": "tatlı kaşığı", "name": "toz paprika"},
      {"amount": 500, "unit": "gram", "name": "dana kıyma (orta yağlı)"},
      {"amount": 2, "unit": "su bardağı", "name": "domates püresi"},
      {"amount": 2, "unit": "su bardağı", "name": "sıcak et suyu"},
      {"amount": 1, "unit": "tatlı kaşığı", "name": "domates salçası"},
      {"amount": 1.5, "unit": "su bardağı", "name": "haşlanmış Meksika fasulyesi"},
      {"amount": 2, "unit": "kare", "name": "bitter çikolata"},
      {"amount": 1, "unit": "kase", "name": "jalapeno biber turşusu (servis için)"},
      {"amount": 1, "unit": "tutam", "name": "kişniş veya maydanoz (servis için)"},
      {"amount": 1, "unit": "dilim", "name": "limon (servis için)"},
      {"amount": 1, "unit": "kase", "name": "sade pilav (servis için)"}
    ],
    "source": "https://yemek.com/tarif/chili-con-carne/",
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "note": "Yedi adımın tamamı doğrulandı; servis malzemeleri dahil listedeki her kalem adımlarda kullanılıyor. Kalori kaynakta açıkça 1 porsiyon için verilmiş. Pişirme 2 saat: yaklaşık 1 saat kısık ateşte koyulaşma, sonra fasulyeyle en az 15 dakika daha.",
    "waitLabel": null,
    "checkedAt": "2026-09-12"
  },
  {
    "id": "meal-209",
    "name": "Fajita Bowl",
    "mode": "Dünya Mutfağı",
    "subcategory": "Meksika",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-210",
    "name": "Tostada",
    "mode": "Dünya Mutfağı",
    "subcategory": "Meksika",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
      "id": "meal-211",
      "name": "Meksika Pilavı",
      "mode": "Dünya Mutfağı",
      "subcategory": "Meksika",
      "status": "sourced",
      "variant": "Bezelyeli ve havuçlu Meksika pilavı",
      "time": 25,
      "prep": 10,
      "cook": 15,
      "cal": null,
      "ingredients": [
        {
          "amount": 2,
          "unit": "su bardağı",
          "name": "uzun taneli pirinç"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "küçük kuru soğan"
        },
        {
          "amount": 3,
          "unit": "diş",
          "name": "sarımsak"
        },
        {
          "amount": 2,
          "unit": "adet",
          "name": "küçük havuç"
        },
        {
          "amount": 1,
          "unit": "su bardağı",
          "name": "dondurulmuş bezelye"
        },
        {
          "amount": 1,
          "unit": "su bardağı",
          "name": "domates sosu"
        },
        {
          "amount": 3,
          "unit": "çorba kaşığı",
          "name": "tereyağı"
        },
        {
          "amount": 3.5,
          "unit": "su bardağı",
          "name": "tavuk suyu"
        },
        {
          "amount": 1,
          "unit": "tatlı kaşığı",
          "name": "tuz"
        },
        {
          "amount": 1,
          "unit": "tatlı kaşığı",
          "name": "kimyon"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "toz kırmızı biber"
        },
        {
          "amount": 1,
          "unit": "çay kaşığı",
          "name": "karabiber"
        }
      ],
      "source": "https://www.nefisyemektarifleri.com/meksika-pilavi/",
      "yieldPeople": 8,
      "yieldLabel": "6-8 kişilik",
      "extraPrep": false,
      "note": "Dört adımın tamamı görüldü; baharatlar adımda topluca (\"baharatı ekleyelim\") anılıyor, listedeki her malzeme adımlarda karşılığını buluyor. Kaynak 6-8 kişilik diyor, alt sınır 6 alındı. Kaynak kalori vermiyor.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "meal-212",
    "name": "Ahtapot Salatası",
    "mode": "Dünya Mutfağı",
    "subcategory": "Deniz Ürünleri",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-213",
    "name": "Midye Güveç",
    "mode": "Dünya Mutfağı",
    "subcategory": "Deniz Ürünleri",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-215",
    "name": "Karides Tava",
    "mode": "Dünya Mutfağı",
    "subcategory": "Deniz Ürünleri",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-216",
    "name": "Somon Teriyaki",
    "mode": "Dünya Mutfağı",
    "subcategory": "Deniz Ürünleri",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-217",
    "name": "Deniz Mahsullü Makarna",
    "mode": "Dünya Mutfağı",
    "subcategory": "Deniz Ürünleri",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-218",
    "batchLimited": true,
    "name": "Sahanda Yumurta",
    "mode": "Kahvaltı",
    "subcategory": "Yumurtalı",
    "status": "sourced",
    "variant": "Sahanda Yumurta",
    "prep": 3,
    "cook": 3,
    "time": 6,
    "yieldPeople": 1,
    "yieldLabel": "1 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "tuz"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 1,
        "unit": "tutam",
        "name": "pul biber (isteğe bağlı)"
      }
    ],
    "source": "https://yemek.com/tarif/sahanda-yumurta/",
    "note": "Kaynakta porsiyon kalorisi belirtilmemiştir."
  },
  {
    "id": "meal-219",
    "batchLimited": true,
    "name": "Çılbır",
    "mode": "Kahvaltı",
    "subcategory": "Yumurtalı",
    "status": "sourced",
    "variant": "Çılbır",
    "prep": 15,
    "cook": 10,
    "time": 25,
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {
        "amount": 200,
        "unit": "mililitre",
        "name": "süzme yoğurt"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 50,
        "unit": "gram",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "diş",
        "name": "sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "pul biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "kırmızı tatlı toz biber"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "nane"
      }
    ],
    "source": "https://yemek.com/tarif/cilbir-6/",
    "note": "Kaynakta porsiyon kalorisi belirtilmemiştir."
  },
  {
    "id": "meal-220",
    "batchLimited": true,
    "name": "Omlet",
    "mode": "Kahvaltı",
    "subcategory": "Yumurtalı",
    "status": "sourced",
    "variant": "Omlet",
    "prep": 5,
    "cook": 3,
    "time": 8,
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": 206,
    "ingredients": [
      {
        "amount": 4,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş karabiber"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      }
    ],
    "source": "https://yemek.com/tarif/omlet/",
    "note": "Kalori kaynak porsiyonuna aittir; bağımsız hesaplama değildir."
  },
  {
    "id": "meal-221",
    "batchLimited": true,
    "name": "Patatesli Yumurta",
    "mode": "Kahvaltı",
    "subcategory": "Yumurtalı",
    "status": "sourced",
    "variant": "Patatesli Yumurta",
    "prep": 20,
    "cook": 20,
    "time": 40,
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": 248,
    "ingredients": [
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "orta boy patates"
      },
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 0.25,
        "unit": "çay kaşığı",
        "name": "taze çekilmiş tane karabiber"
      },
      {
        "amount": 0.25,
        "unit": "demet",
        "name": "maydanoz"
      }
    ],
    "source": "https://yemek.com/tarif/patatesli-yumurta/",
    "note": "Kalori kaynak porsiyonuna aittir; bağımsız hesaplama değildir."
  },
  {
    "id": "meal-222",
    "batchLimited": true,
    "name": "Mantarlı Omlet",
    "mode": "Kahvaltı",
    "subcategory": "Yumurtalı",
    "status": "sourced",
    "variant": "Mantarlı Omlet",
    "prep": 10,
    "cook": 15,
    "time": 25,
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {
        "amount": 2,
        "unit": "adet",
        "name": "yumurta"
      },
      {
        "amount": 10,
        "unit": "adet",
        "name": "kültür mantarı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "süt"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 0.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/mantarli-omlet/",
    "note": "Kaynakta porsiyon kalorisi belirtilmemiştir."
  },
  {
      "id": "meal-223",
      "name": "Pastırmalı Yumurta",
      "mode": "Kahvaltı",
      "subcategory": "Yumurtalı",
      "status": "sourced",
      "variant": "Tavada pastırmalı yumurta",
      "time": 20,
      "prep": 10,
      "cook": 10,
      "cal": null,
      "ingredients": [
        {
          "amount": [
            7,
            8
          ],
          "unit": "dilim",
          "name": "pastırma"
        },
        {
          "amount": 3,
          "unit": "adet",
          "name": "yumurta"
        },
        {
          "amount": 1,
          "unit": "yemek kaşığı",
          "name": "tereyağı"
        }
      ],
      "source": "https://www.nefisyemektarifleri.com/pastirmali-yumurta-tarifi/",
      "yieldPeople": 2,
      "yieldLabel": "1-2 kişilik",
      "extraPrep": false,
      "note": "Kaynak 1-2 kişilik diyor; kapasite üst sınırı alındı. Pastırma 7-8 dilim aralığı olarak veriliyor. Sıvı yağ kaynakta isteğe bağlı anıldığı için listeye alınmadı. Kalori kaynakta yok.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "meal-224",
    "name": "Pişi",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-226",
    "name": "Bazlama",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-227",
    "name": "Boyoz",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-228",
    "name": "Kruvasan",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-229",
    "name": "Açma",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-230",
    "name": "Poğaça",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-231",
    "name": "Börek",
    "mode": "Kahvaltı",
    "subcategory": "Hamur İşi",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-232",
    "name": "Waffle",
    "mode": "Kahvaltı",
    "subcategory": "Tatlı Kahvaltı",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
      "id": "meal-233",
      "name": "French Toast",
      "mode": "Kahvaltı",
      "subcategory": "Tatlı Kahvaltı",
      "status": "sourced",
      "variant": "Vanilyalı fransız tostu",
      "time": 20,
      "prep": 10,
      "cook": 10,
      "cal": null,
      "ingredients": [
        {
          "amount": 4,
          "unit": "dilim",
          "name": "tost ekmeği"
        },
        {
          "amount": 1,
          "unit": "adet",
          "name": "yumurta"
        },
        {
          "amount": 1,
          "unit": "paket",
          "name": "vanilya"
        },
        {
          "amount": 0.5,
          "unit": "bardak",
          "name": "süt (bardak ölçüsü kaynakta belirsiz)"
        },
        "tereyağı (ölçüsü kaynakta yok)",
        "pudra şekeri (ölçüsü kaynakta yok)",
        "ahududu (ölçüsü kaynakta yok)"
      ],
      "source": "https://www.nefisyemektarifleri.com/french-toast-fransiz-tostu/",
      "yieldPeople": 2,
      "yieldLabel": "1-2 kişilik",
      "extraPrep": false,
      "note": "Kaynak 1-2 kişilik diyor; kapasite üst sınırı alındı. Süt ölçüsü kaynakta \"yarım bardak\"; bardağın hangi ölçü olduğu yazmıyor. Tereyağı, pudra şekeri ve ahududu ölçüsüz. Kalori kaynakta yok.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "meal-234",
    "name": "Granola Kasesi",
    "mode": "Kahvaltı",
    "subcategory": "Tatlı Kahvaltı",
    "status": "idea",
    "variant": null,
    "time": null,
    "prep": null,
    "cook": null,
    "cal": null,
    "ingredients": [],
    "source": null,
    "yieldPeople": null,
    "yieldLabel": null,
    "extraPrep": false,
    "note": "Bu yemek yalnızca fikir olarak listeleniyor. Süre, kalori ve malzemeleri henüz doğrulanmadı."
  },
  {
    "id": "meal-235",
    "name": "Yulaf Lapası",
    "mode": "Kahvaltı",
    "subcategory": "Tatlı Kahvaltı",
    "status": "sourced",
    "variant": "Yulaf Lapası",
    "prep": 5,
    "cook": 5,
    "time": 10,
    "yieldPeople": 1,
    "yieldLabel": "1 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": 287,
    "ingredients": [
      {
        "amount": 4,
        "unit": "yemek kaşığı",
        "name": "yulaf ezmesi"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 1,
        "unit": "çay bardağı",
        "name": "su"
      },
      {
        "amount": 5,
        "unit": "adet",
        "name": "çiğ badem"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tarçın"
      },
      {
        "amount": 1,
        "unit": "kase",
        "name": "dilediğiniz meyve çeşitleri (üzeri için)"
      }
    ],
    "source": "https://yemek.com/tarif/yulaf-lapasi-7/",
    "note": "Kalori kaynak porsiyonuna aittir; bağımsız hesaplama değildir."
  },
  {
      "id": "meal-236",
      "name": "Chia Puding",
      "mode": "Kahvaltı",
      "subcategory": "Tatlı Kahvaltı",
      "status": "sourced",
      "variant": "Buzdolabında bekletilen chia puding",
      "time": 5,
      "prep": 5,
      "cook": 0,
      "cal": null,
      "ingredients": [
        {
          "amount": 3,
          "unit": "yemek kaşığı",
          "name": "chia tohumu"
        },
        {
          "amount": 1,
          "unit": "bardak",
          "name": "su veya süt (bardak ölçüsü belirsiz)"
        },
        {
          "amount": [
            2,
            3
          ],
          "unit": "yemek kaşığı",
          "name": "yoğurt"
        },
        {
          "amount": [
            1,
            2
          ],
          "unit": "yemek kaşığı",
          "name": "yulaf kepeği (isteğe bağlı)"
        },
        {
          "amount": [
            4,
            5
          ],
          "unit": "kaşık",
          "name": "meyve (kaşık ölçüsü kaynakta belirsiz)"
        },
        "tatlandırıcı (ölçüsü kaynakta yok)"
      ],
      "source": "https://www.nefisyemektarifleri.com/chia-puding-tarifi/",
      "yieldPeople": 2,
      "yieldLabel": "1-2 kişilik",
      "extraPrep": true,
      "note": "Kaynak 1-2 kişilik diyor; kapasite üst sınırı alındı. \"Bardak\" ve \"kaşık\" ölçülerinin hangi ölçü olduğu kaynakta yazmıyor. Yulaf kepeği ve tatlandırıcı kaynakta isteğe bağlı. Kalori kaynakta yok.",
      "waitLabel": "Chia buzdolabında en az 2 saat bekler; kaynağın süresine dahil değil",
      "checkedAt": "2026-09-12"
    },
  {
      "id": "meal-237",
      "name": "Meyveli Yoğurt",
      "mode": "Kahvaltı",
      "subcategory": "Tatlı Kahvaltı",
      "status": "sourced",
      "variant": "Rondodan geçirilmiş meyveli yoğurt",
      "time": 10,
      "prep": 10,
      "cook": 0,
      "cal": null,
      "ingredients": [
        {
          "amount": 15,
          "unit": "yemek kaşığı",
          "name": "yoğurt"
        },
        {
          "amount": [
            7,
            8
          ],
          "unit": "adet",
          "name": "çilek"
        },
        {
          "amount": 4,
          "unit": "adet",
          "name": "muz"
        },
        {
          "amount": 2,
          "unit": "adet",
          "name": "kivi"
        },
        {
          "amount": [
            2,
            3
          ],
          "unit": "dilim",
          "name": "ananas"
        },
        "bal (ölçüsü kaynakta yok)",
        "süsleme için birer avuç meyve (kaynak böyle veriyor)"
      ],
      "source": "https://yemek.com/tarif/meyveli-yogurt/",
      "yieldPeople": 5,
      "yieldLabel": "5 kişilik",
      "extraPrep": false,
      "note": "Kaynak 5 kişilik diyor. Bal yapılış adımlarında kullanılıyor ama malzeme listesinde yok; ölçüsüz eklendi. Süsleme meyveleri \"birer avuç\" olarak veriliyor. Kalori kaynakta yok.",
      "waitLabel": null,
      "checkedAt": "2026-09-12"
    },
  {
    "id": "dessert-1",
    "name": "Muhallebi",
    "mode": "Tatlı",
    "subcategory": "Sütlü",
    "status": "sourced",
    "variant": "Muhallebi",
    "prep": 5,
    "cook": 15,
    "time": null,
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": true,
    "waitLabel": "Soğutma süresi kaynakta belirtilmemiş",
    "cal": 415,
    "ingredients": [
      {
        "amount": 5,
        "unit": "su bardağı",
        "name": "süt"
      },
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "toz şeker"
      },
      {
        "amount": 3,
        "unit": "yemek kaşığı",
        "name": "buğday nişastası (elenmiş)"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "vanilin"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "un (elenmiş)"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "muz (servis için)"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "toz Antep fıstığı (servis için)"
      }
    ],
    "source": "https://yemek.com/tarif/muhallebi/",
    "note": "Servis malzemeleri kaynak listesine dahildir. Kalori kaynak porsiyonuna aittir; bağımsız hesaplama değildir."
  },
  {
    "id": "dessert-2",
    "name": "Sütlü İrmik Tatlısı",
    "mode": "Tatlı",
    "subcategory": "Sütlü",
    "status": "sourced",
    "variant": "Sütlü İrmik Tatlısı",
    "prep": 10,
    "cook": 20,
    "time": null,
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": true,
    "waitLabel": "İlk soğutma + en az 4 saat buzdolabı beklemesi; ilk soğutmanın süresi belirsiz",
    "cal": 254,
    "ingredients": [
      {
        "amount": 1,
        "unit": "litre",
        "name": "süt"
      },
      {
        "amount": 9,
        "unit": "yemek kaşığı",
        "name": "irmik"
      },
      {
        "amount": 10,
        "unit": "yemek kaşığı",
        "name": "toz şeker"
      },
      {
        "amount": 1,
        "unit": "paket",
        "name": "vanilin"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tarçın (servis için)"
      }
    ],
    "source": "https://yemek.com/tarif/sutlu-irmik-tatlisi/",
    "note": "Kalori kaynak porsiyonuna aittir; bağımsız hesaplama değildir. İsteğe bağlı, miktarı verilmeyen vişne listeye dahil değildir."
  },
  {
    "id": "side-1",
    "name": "Pirinç Pilavı",
    "mode": "Eşlikçi",
    "subcategory": "Pilav",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Sade Pilav",
    "prep": 10,
    "cook": 20,
    "time": null,
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": true,
    "waitLabel": "Pirinç 15 dakika tuzlu ılık suda bekler; demlenme süresi kaynakta verilmemiştir.",
    "cal": 260,
    "ingredients": [
      {
        "amount": 1,
        "unit": "su bardağı",
        "name": "pilavlık pirinç"
      },
      {
        "amount": 1.5,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "şeker"
      }
    ],
    "source": "https://yemek.com/tarif/sade-pilav/",
    "note": "Kalori kaynak porsiyonuna aittir; bağımsız hesaplama değildir. Kaynak demlenme süresini vermediği için toplam süre hesaplanmamıştır."
  },
  {
    "id": "side-2",
    "name": "Cacık",
    "mode": "Eşlikçi",
    "subcategory": "Meze",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Cacık",
    "prep": 15,
    "cook": 0,
    "time": 15,
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {
        "amount": 3,
        "unit": "adet",
        "name": "orta boy salatalık"
      },
      {
        "amount": 750,
        "unit": "gram",
        "name": "yoğurt"
      },
      {
        "amount": 2,
        "unit": "tatlı kaşığı",
        "name": "tuz"
      },
      {
        "amount": 250,
        "unit": "mililitre",
        "name": "su"
      },
      {
        "amount": 3,
        "unit": "diş",
        "name": "ezilmiş sarımsak"
      },
      {
        "amount": 3.5,
        "unit": "dal",
        "name": "dereotu"
      },
      {
        "amount": 3.5,
        "unit": "dal",
        "name": "taze nane"
      },
      {
        "amount": 30,
        "unit": "mililitre",
        "name": "sızma zeytinyağı"
      }
    ],
    "source": "https://yemek.com/tarif/klasik-cacik/",
    "note": "Kaynakta porsiyon kalorisi belirtilmemiştir. Dereotu ve nane kaynakta 3-4 dal aralığıyla verilmiştir."
  },
  {
    "id": "side-3",
    "name": "Tereyağlı Pilav",
    "mode": "Eşlikçi",
    "subcategory": "Pilav",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Tereyağlı Pilav",
    "prep": 15,
    "cook": 20,
    "time": 55,
    "yieldPeople": 5,
    "yieldLabel": "5 kişilik",
    "extraPrep": false,
    "waitLabel": "Pişirme sonrası 20 dakika demlenir; bu süre toplama dahildir.",
    "cal": 318,
    "ingredients": [
      {
        "amount": 2,
        "unit": "su bardağı",
        "name": "pilavlık pirinç"
      },
      {
        "amount": 3,
        "unit": "su bardağı",
        "name": "sıcak su"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "tereyağı"
      },
      {
        "amount": 2,
        "unit": "yemek kaşığı",
        "name": "arpa şehriye"
      },
      {
        "amount": 1.5,
        "unit": "çay kaşığı",
        "name": "tuz"
      }
    ],
    "source": "https://yemek.com/tarif/tereyagli-pilav/",
    "note": "Kalori kaynak porsiyonuna aittir; bağımsız hesaplama değildir. Kaynağın 20 dakikalık demlenme süresi toplama eklenmiştir. Pirinci önceden ıslatmak kaynakta zorunlu değil, püf noktası olarak verilmiştir."
  },
  {
    "id": "side-4",
    "name": "Mevsim Salatası",
    "mode": "Eşlikçi",
    "subcategory": "Salata",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Restoran Usulü Mevsim Salatası",
    "prep": 15,
    "cook": 0,
    "time": 15,
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {
        "amount": 5.5,
        "unit": "yaprak",
        "name": "kıvırcık marul"
      },
      {
        "amount": 3,
        "unit": "adet",
        "name": "havuç"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "orta boy mor lahana"
      },
      {
        "amount": 0.5,
        "unit": "demet",
        "name": "maydanoz"
      },
      {
        "amount": 0.5,
        "unit": "çay bardağı",
        "name": "zeytinyağı"
      },
      {
        "amount": 1,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "tatlı kaşığı",
        "name": "kurutulmuş reyhan"
      }
    ],
    "source": "https://yemek.com/index%2Ephp/tarif/restoran-usulu-mevsim-salatasi/",
    "note": "Kaynakta porsiyon kalorisi belirtilmemiştir. Kaynağın isteğe bağlı saydığı sumak ve nar ekşisi listeye dahil edilmemiştir. Marul kaynakta 5-6 yaprak aralığıyla verilmiştir."
  },
  {
    "id": "side-5",
    "name": "Brokoli Salatası",
    "mode": "Eşlikçi",
    "subcategory": "Salata",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Buharda Brokoli Salatası",
    "prep": 5,
    "cook": 15,
    "time": 20,
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "brokoli"
      },
      {
        "amount": 2,
        "unit": "diş",
        "name": "büyük diş sarımsak"
      },
      {
        "amount": 0.5,
        "unit": "adet",
        "name": "limonun suyu"
      },
      {
        "amount": 1,
        "unit": "çay kaşığı",
        "name": "tuz"
      },
      {
        "amount": 1,
        "unit": "yemek kaşığı",
        "name": "zeytinyağı"
      }
    ],
    "source": "https://yemek.com/tarif/brokoli-salatasi-3/",
    "note": "Kaynakta porsiyon kalorisi belirtilmemiştir. Brokoli suda değil buharda pişirilir; kaynak 10-15 dakika verir, üst sınır alınmıştır. Menüde \"Haşlanmış brokoli\" olarak önerilen eşlikçinin karşılığıdır."
  },
  {
    "id": "side-6",
    "name": "Sumaklı Soğan Salatası",
    "mode": "Eşlikçi",
    "subcategory": "Salata",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Sumaklı Soğan Salatası",
    "prep": 10,
    "cook": 0,
    "time": 10,
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {"amount": 2, "unit": "adet", "name": "soğan (piyazlık doğranmış)"},
      {"amount": 0.25, "unit": "demet", "name": "maydanoz"},
      {"amount": 0.5, "unit": "tatlı kaşığı", "name": "tuz"},
      {"amount": 1, "unit": "tatlı kaşığı", "name": "pul biber"},
      {"amount": 2, "unit": "tatlı kaşığı", "name": "sumak"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "zeytinyağı"},
      {"amount": 0.5, "unit": "adet", "name": "limon"},
      {"amount": 1, "unit": "çay kaşığı", "name": "nar ekşisi"}
    ],
    "source": "https://yemek.com/tarif/sumakli-sogan-salatasi",
    "note": "Kaynakta porsiyon kalorisi belirtilmemiştir. Kaynağın isteğe bağlı saydığı ek yeşillikler listeye dahil edilmemiştir."
  },
  {
    "id": "side-8",
    "name": "Guacamole",
    "mode": "Eşlikçi",
    "subcategory": "Meze",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Meksika usulü guacamole",
    "prep": 15,
    "cook": 0,
    "time": 15,
    "yieldPeople": 4,
    "yieldLabel": "4 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": 120,
    "ingredients": [
      {"amount": 2, "unit": "adet", "name": "avokado"},
      {"amount": 0.5, "unit": "adet", "name": "lime suyu"},
      {"amount": 1, "unit": "diş", "name": "sarımsak"},
      {"amount": 0.25, "unit": "adet", "name": "mor soğan"},
      {"amount": 3, "unit": "adet", "name": "kiraz domates"},
      {"amount": 1, "unit": "avuç", "name": "kişniş yaprağı"},
      {"amount": 1, "unit": "tutam", "name": "tuz"},
      {"amount": 1, "unit": "tutam", "name": "pul biber"}
    ],
    "source": "https://yemek.com/tarif/guacamole/",
    "note": "Kaynak kaloriyi açıkça 1 porsiyon için veriyor. Üç adımın tamamı doğrulandı; listedeki sekiz malzemenin hepsi adımlarda kullanılıyor. Pişirme yok.",
    "checkedAt": "2026-09-12"
  },
  {
    "id": "side-9",
    "name": "Salçalı Bulgur Pilavı",
    "mode": "Eşlikçi",
    "subcategory": "Pilav",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Salçalı tereyağlı bulgur pilavı",
    "prep": 10,
    "cook": 25,
    "time": 35,
    "yieldPeople": 6,
    "yieldLabel": "6 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {"amount": 1.5, "unit": "su bardağı", "name": "pilavlık bulgur"},
      {"amount": 3, "unit": "su bardağı", "name": "sıcak su"},
      {"amount": 0.5, "unit": "yemek kaşığı", "name": "biber salçası"},
      {"amount": 1, "unit": "yemek kaşığı", "name": "domates salçası"},
      {"amount": 3, "unit": "yemek kaşığı", "name": "tereyağı"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "sıvı yağ"},
      {"amount": 1, "unit": "tatlı kaşığı", "name": "tuz"}
    ],
    "source": "https://yemek.com/index%2Ephp/tarif/salcali-tereyagli-bulgur-pilavi/",
    "note": "Beş adımın tamamı doğrulandı; yedi malzemenin hepsi adımlarda kullanılıyor. Kaynak kalori vermiyor. Kaynak adresi arama sonucunda bu kodlanmış biçimde döndü, uydurulmadan aynen yazıldı.",
    "checkedAt": "2026-09-12"
  },
  {
    "id": "side-7",
    "name": "Atom Mezesi",
    "mode": "Eşlikçi",
    "subcategory": "Meze",
    "status": "sourced",
    "companionOnly": true,
    "variant": "Atom Mezesi",
    "prep": 5,
    "cook": 5,
    "time": 10,
    "yieldPeople": 2,
    "yieldLabel": "2 kişilik",
    "extraPrep": false,
    "waitLabel": null,
    "cal": null,
    "ingredients": [
      {"amount": 4, "unit": "yemek kaşığı", "name": "süzme yoğurt"},
      {"amount": 1, "unit": "diş", "name": "rendelenmiş sarımsak"},
      {"amount": 1, "unit": "çay kaşığı", "name": "tuz"},
      {"amount": 7, "unit": "adet", "name": "kurutulmuş Arnavut biberi"},
      {"amount": 2, "unit": "yemek kaşığı", "name": "tereyağı"},
      {"amount": 0.5, "unit": "tatlı kaşığı", "name": "susam"}
    ],
    "source": "https://yemek.com/tarif/klasik-atom-mezesi/",
    "note": "Kaynakta porsiyon kalorisi belirtilmemiştir."
  }
];

const menuPairings = {
  "meal-0": {source:"https://yemek.com/tarif/lokanta-usulu-tavuk-sote/", items:[
    {name:"Pirinç pilavı",kind:"Pilav",catalogId:"side-1"},{name:"Çoban salata",kind:"Salata",catalogId:"meal-141"},{name:"Yoğurt",kind:"Meze",purchased:true}
  ]},
  "meal-1": {source:"https://yemek.com/tarif/et-sote/", items:[
    {name:"Pirinç pilavı",kind:"Pilav",catalogId:"side-1"},{name:"Kaşık salata",kind:"Salata"}
  ]},
  "meal-2": {source:"https://yemek.com/tarif/tas-kebabi/", items:[
    {name:"Pirinç pilavı",kind:"Pilav",catalogId:"side-1"},{name:"Közlenmiş biber salatası",kind:"Salata"}
  ]},
  "meal-4": {source:"https://yemek.com/tarif/adana-kebap/", items:[
    {name:"Lavaş",kind:"Ekmek",purchased:true},{name:"Sumaklı soğan salatası",kind:"Salata",catalogId:"side-6"},{name:"Közlenmiş domates ve biber",kind:"Sebze"}
  ]},
  "meal-5": {source:"https://yemek.com/tarif/tavuk-sis/", items:[
    {name:"Karnabahar çorbası",kind:"Çorba",catalogId:"meal-136"},{name:"Kinoa salatası",kind:"Salata"}
  ]},
  "meal-6": {source:"https://yemek.com/tarif/tavuk-fajita/", items:[
    {name:"Tortilla",kind:"Ekmek",purchased:true},{name:"Guacamole",kind:"Sos / Meze",catalogId:"side-8"}
  ]},
  "meal-7": {source:"https://yemek.com/tarif/kori-soslu-tavuk/", items:[
    {name:"Pirinç pilavı",kind:"Pilav",catalogId:"side-1"},{name:"Haşlanmış brokoli",kind:"Sebze",catalogId:"side-5"},{name:"Fırın patates",kind:"Sebze"},{name:"Hafif yoğurtlu salata",kind:"Salata"}
  ]},
  "meal-8": {source:"https://yemek.com/tarif/tavuk-sinitzel/", items:[
    {name:"Fırınlanmış patates püresi",kind:"Sebze"},{name:"Maş fasulyeli yeşil salata",kind:"Salata"},{name:"Haşlanmış brokoli",kind:"Sebze",catalogId:"side-5"}
  ]},
  "meal-9": {source:"https://yemektarifleri.gzt.com/blog/mantinin-yanina-ne-gider-sofranizi-tamamlayacak-10-tarif-3534916", items:[
    {name:"Mercimek çorbası",kind:"Çorba",catalogId:"meal-23"},{name:"Gavurdağı salatası",kind:"Salata",catalogId:"meal-143"},{name:"Sütlaç",kind:"Tatlı"}
  ]},
  "meal-10": {source:"https://yemek.com/tarif/lokanta-usulu-lahmacun/", items:[
    {name:"Acılı ezme",kind:"Meze"},{name:"Atom mezesi",kind:"Meze",catalogId:"side-7"}
  ]},
  "meal-12": {source:"https://yemek.com/tarif/kuru-fasulye-1/", items:[
    {name:"Tereyağlı pilav",kind:"Pilav",catalogId:"side-3"},{name:"Salatalık turşusu",kind:"Turşu",purchased:true}
  ]},
  "meal-13": {source:"https://yemek.com/tarif/yesil-mercimek-yemegi/", items:[
    {name:"Pirinç pilavı",kind:"Pilav",catalogId:"side-1"},{name:"Bulgur pilavı",kind:"Pilav"},{name:"Cacık veya yoğurt",kind:"Meze",purchased:true},{name:"Turşu",kind:"Turşu",purchased:true}
  ]},
  "meal-14": {source:"https://yemek.com/tarif/barbunya-pilaki/", items:[
    {name:"Cacık",kind:"Meze",catalogId:"side-2"},{name:"Kuskuslu yaz salatası",kind:"Salata"}
  ]},
  "meal-15": {source:"https://yemek.com/tarif/etli-bamya/", items:[
    {name:"Salçalı bulgur pilavı",kind:"Pilav",catalogId:"side-9"}
  ]},
  "meal-16": {source:"https://yemek.com/tarif/karniyarik/", items:[
    {name:"Tereyağlı pilav",kind:"Pilav",catalogId:"side-3"},{name:"Cacık",kind:"Meze",catalogId:"side-2"},{name:"Yeşil salata",kind:"Salata"},{name:"Turşu",kind:"Turşu",purchased:true}
  ]},
  "meal-17": {source:"https://yemek.com/tarif/patlican-musakka/", items:[
    {name:"Tereyağlı pilav",kind:"Pilav",catalogId:"side-3"},{name:"Cacık",kind:"Meze",catalogId:"side-2"}
  ]},
  "meal-18": {source:"https://yemek.com/tarif/firinda-tavuk/", items:[
    {name:"Arpa şehriyeli pirinç pilavı",kind:"Pilav"},{name:"Mevsim salatası",kind:"Salata",catalogId:"side-4"},{name:"Roka salatası",kind:"Salata",catalogId:"meal-142"},{name:"Acılı şalgam",kind:"İçecek",purchased:true}
  ]},
  "meal-19": {source:"https://yemek.com/tarif/firinda-makarna/", items:[
    {name:"Mercimek çorbası",kind:"Çorba",catalogId:"meal-23"},{name:"Mısırlı salata",kind:"Salata"},{name:"Ev köftesi",kind:"Ana yemek"}
  ]},
  "meal-20": {source:"https://yemek.com/tarif/izmir-kofte/", items:[
    {name:"Taze otlu bulgur pilavı",kind:"Pilav"},{name:"Mevsim salatası",kind:"Salata",catalogId:"side-4"},{name:"Yoğurt",kind:"Meze",purchased:true}
  ]},
  "meal-21": {source:"https://ye-mek.net/menu/yanina-ne-gider/zeytinyagli-taze-fasulye", items:[
    {name:"Domatesli bulgur pilavı",kind:"Pilav"},{name:"Cacık",kind:"Meze",catalogId:"side-2"}
  ]}
};

function matchesMeal(m, {mode='Tümü', people=2, maxTime=Infinity, calorie='any', includeIdeas=false, includeCompanions=false}={}) {
  if (m.companionOnly && !includeCompanions) return false;
  if (mode !== 'Tümü' && m.mode !== mode) return false;
  if (m.status !== 'sourced' && !includeIdeas) return false;
  if (Number.isFinite(maxTime) && (!Number.isFinite(m.time) || m.extraPrep || !m.yieldPeople || people > m.yieldPeople || m.time > maxTime)) return false;
  if (calorie !== 'any') {
    if (!Number.isFinite(m.cal)) return false;
    const total=m.cal*people;
    if (calorie === 'over2000' ? total < 2000 : total > Number(calorie)) return false;
  }
  return true;
}
