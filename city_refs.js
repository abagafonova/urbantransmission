// ============================================================
// CITY_REFS — scholarly references per city
// Edit via admin_refs.html or directly here.
// map.html reads this file automatically.
//
// Structure per city:
//   "Название города": [
//     {
//       id:       "unique-slug",          // внутренний ID (латиницей, без пробелов)
//       author:   "Фамилия И.О.",         // авторы через запятую; "" если нет
//       year:     1904,                   // год публикации (число)
//       title_ru: "Название на русском",
//       title_en: "Title in English",     // "" если нет
//       source_ru:"Журнал / Книга",       // источник / журнал на русском
//       source_en:"Journal / Book",       // "" если нет
//       pages:    "С. 45–72",             // "" если нет
//       url:      "https://...",          // полная ссылка; "" если нет
//       doi:      "10.XXXX/...",          // только суффикс DOI; "" если нет
//       note_ru:  "",                     // краткая заметка (необязательно)
//       note_en:  ""
//     }
//   ]
// ============================================================
var CITY_REFS = {

  "Череповец": [
    {
      id:       "cherepovets-vodoprovod-1909",
      author:   "",
      year:     1909,
      title_ru: "Водопровод города Череповца",
      title_en: "The Waterworks of the City of Cherepovets",
      source_ru:"Известия Общества гражданских инженеров",
      source_en:"Proceedings of the Society of Civil Engineers",
      pages:    "",
      url:      "",
      doi:      "",
      note_ru:  "Технический отчёт о проектировании и строительстве городского водопровода.",
      note_en:  "Technical report on the design and construction of the municipal waterworks."
    }
  ],

  "Омск": [
    {
      id:       "omsk-gorodskoe-hozyajstvo-1915",
      author:   "Лосев Д.А.",
      year:     1915,
      title_ru: "Городское хозяйство Омска: водоснабжение и канализация",
      title_en: "Municipal Services of Omsk: Water Supply and Sewerage",
      source_ru:"Городское дело",
      source_en:"Municipal Affairs",
      pages:    "С. 1201–1208",
      url:      "https://www.elibrary.ru/",
      doi:      "",
      note_ru:  "Обзор состояния городского водоснабжения накануне Первой мировой войны.",
      note_en:  "Overview of municipal water supply on the eve of the First World War."
    }
  ]

};
