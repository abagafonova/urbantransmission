// ============================================================
// CITY_META — approximate dates & multi-phase histories
// Edit this file to add notes; map.html reads it automatically.
// ============================================================
var CITY_META = {

  // ── Cities with approximate / uncertain construction dates ──
  // year_approx: true  →  year shown as "~1880" on the map
  // year_note_ru / year_note_en  →  optional tooltip text
  "Горбатов":      { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Чистополь":     { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Сухум":         { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Севск":         { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Сердобск":      { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Хвалынск":      { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Мещовск":       { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Герюсы":        { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Александровск (Влад. г.)": { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Бугуруслан":    { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Ахалцих":       { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Елисаветполь":  { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },
  "Старый Крым":   { year_approx: true, year_note_ru: "Точная дата неизвестна", year_note_en: "Exact date unknown" },

  // ── Profile 4: multi-phase waterworks histories ──
  // phases_ru / phases_en  →  shown as expandable note in city panel
  // Fill in as you document each city.
  "Москва": {
    phases_ru: "1804 — Мытищинский самотёчный водопровод; 1858 — первая насосная станция; 1900 — Рублёвская фильтровальная станция; 1900-е — расширение сети.",
    phases_en: "1804 — Mytishchi gravity waterworks; 1858 — first pumping station; 1900 — Rublevo filtration plant; 1900s — network expansion."
  },
  "Санкт-Петербург": {
    phases_ru: "1861 — первый городской водопровод (Лиговский канал); 1880-е — строительство фильтровальных станций; 1900-е — расширение и модернизация.",
    phases_en: "1861 — first municipal waterworks (Ligovsky canal source); 1880s — filtration stations built; 1900s — expansion and modernisation."
  },
  "Варшава": {
    phases_ru: "1855 — частный водопровод Линдли; 1885 — муниципализация и расширение системы.",
    phases_en: "1855 — Lindley private waterworks; 1885 — municipalisation and system expansion."
  },
  "Нижний Новгород": {
    phases_ru: "1880 — первый водопровод; 1890-е — расширение в связи с Всероссийской выставкой 1896 г.",
    phases_en: "1880 — first waterworks; 1890s — expansion ahead of the 1896 All-Russia Exhibition."
  },
  "Одесса": {
    phases_ru: "1873 — первый водопровод (частный); 1890-е — муниципализация и расширение.",
    phases_en: "1873 — first waterworks (private); 1890s — municipalisation and expansion."
  },
  "Рига": {
    phases_ru: "1860-е — частный водопровод; 1904 — полная реконструкция муниципальной системы.",
    phases_en: "1860s — private waterworks; 1904 — complete reconstruction of the municipal system."
  },
  "Тифлис": {
    phases_ru: "1886 — первый городской водопровод; 1900-е — расширение и строительство резервуаров.",
    phases_en: "1886 — first municipal waterworks; 1900s — expansion and reservoir construction."
  },
  "Воронеж": {
    phases_ru: "1868 — первый водопровод; дальнейшие этапы модернизации уточняются.",
    phases_en: "1868 — first waterworks; subsequent modernisation phases to be documented."
  },
  "Уфа": {
    phases_ru: "1900 — первый водопровод; этапы расширения уточняются.",
    phases_en: "1900 — first waterworks; expansion phases to be documented."
  },
  "Торжок": {
    phases_ru: "1887 — первый водопровод; этапы модернизации уточняются.",
    phases_en: "1887 — first waterworks; modernisation phases to be documented."
  },
  "Сенгилей": {
    phases_ru: "1904 — первый водопровод; этапы уточняются.",
    phases_en: "1904 — first waterworks; phases to be documented."
  },
  "Старая Русса": {
    phases_ru: "1909 — первый водопровод; этапы уточняются.",
    phases_en: "1909 — first waterworks; phases to be documented."
  },
  "Шуя": {
    phases_ru: "1883 — первый водопровод; этапы уточняются.",
    phases_en: "1883 — first waterworks; phases to be documented."
  },
  "Ялта": {
    phases_ru: "1875 — первый водопровод; дальнейшие этапы уточняются.",
    phases_en: "1875 — first waterworks; further phases to be documented."
  },
  "Чистополь": {
    year_approx: true,
    phases_ru: "Несколько этапов строительства; точная периодизация уточняется.",
    phases_en: "Several construction phases; periodisation to be documented.",
    year_note_ru: "Точная дата неизвестна",
    year_note_en: "Exact date unknown"
  }
};
