/*
 * Galerie-Daten – Michael Falkner Fotografie
 * -------------------------------------------------------------
 * Jede Kategorie hat eine Liste von Bildern. Pro Bild:
 *   file : Dateiname OHNE Endung. Es werden zwei Dateien erwartet:
 *          img/full/<file>.webp  (max. 2000 px lange Kante)
 *          img/thumb/<file>.webp (max. 800 px lange Kante)
 *          -> erzeugen mit: python3 tools/optimize.py <kategorie> <bild.jpg> ...
 *   name : Name des Models (für den Alt-Text), darf leer sein ""
 *   alt  : (optional) eigener Alt-Text statt des automatisch erzeugten
 *   w, h : Pixelmaße der full-Version (verhindert Layout-Sprünge)
 *
 * Das erste Bild einer Kategorie ist automatisch das Teaser-Bild.
 *
 * TRAVEL: Diese Kategorie ist vorbereitet, aber noch leer (LOCATION ist aktiv).
 * Sobald in "images" mindestens ein Bild steht, erscheinen Teaser,
 * Navigationspunkt und Portfolio-Bereich automatisch – sonst bleiben
 * sie ausgeblendet. Am HTML muss dafür nichts geändert werden.
 */
window.GALLERY = {
  portrait: {
    title: "Portrait",
    altPrefix: "Porträt",
    images: [
      { file: "portrait-claudio-02", name: "Claudio", w: 2000, h: 1500 },
      { file: "portrait-clara-rene-02", name: "Clara Rene", w: 1599, h: 2000 },
      { file: "portrait-img-01", name: "", w: 1334, h: 2000 },
      { file: "portrait-jorina-01", name: "Jorina", w: 1500, h: 2000 },
      { file: "portrait-kukie-01", name: "Kukie", w: 1500, h: 2000 },
      { file: "portrait-lara-vogel-02", name: "Lara Vogel", w: 1500, h: 2000 },
      { file: "portrait-inked-fit-devil-01", name: "Inked Fit Devil", w: 1500, h: 2000 },
      { file: "portrait-mara-01", name: "Mara", w: 1500, h: 2000 },
      { file: "portrait-olga-01", name: "Olga", w: 1500, h: 2000 },
      { file: "portrait-perrine-01", name: "Perrine", w: 2000, h: 1333 },
      { file: "portrait-soso-01", name: "Soso", w: 1333, h: 2000 },
      { file: "portrait-t-marli-01", name: "Marli", w: 1500, h: 2000 },
      { file: "portrait-tanja-01", name: "Tanja", w: 1500, h: 2000 },
      { file: "portrait-tina-02", name: "Tina", w: 1500, h: 2000 },
      { file: "portrait-vic-03", name: "Vic", w: 1500, h: 2000 },
      { file: "portrait-perrine-02", name: "Perrine", w: 1333, h: 2000 },
      { file: "portrait-mathy-01", name: "Mathy", w: 1500, h: 2000 },
      { file: "portrait-clara-rene-01", name: "Clara Rene", w: 1500, h: 2000 },
      { file: "portrait-loft-14c-01", name: "", w: 1500, h: 2000 },
      { file: "portrait-queen-didi-01", name: "Queen Didi", w: 1500, h: 2000 },
      { file: "portrait-guilia-01", name: "Guilia", w: 2000, h: 1500 },
      { file: "portrait-margot-01", name: "Margot", w: 1500, h: 2000 },
      { file: "portrait-cass-01", name: "", w: 1500, h: 2000 },
      { file: "portrait-niczi-01", name: "Niczi", w: 1500, h: 2000 },
      {"file": "portrait-2018-06-10-stefan-beutler-widget-067-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-dscf8162-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-olga-1229-2", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-dscf2472-1-web-col", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-0c2a9409-1-big", "name": "", "w": 1334, "h": 2000},
      {"file": "portrait-olga-1228", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-2021-04-03-nicky-s-0610-1", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-0c2a9709-1-big", "name": "", "w": 1300, "h": 2000},
      {"file": "portrait-dscf4508-1-big", "name": "", "w": 2000, "h": 1500},
      {"file": "portrait-0c2a9284-1-big", "name": "", "w": 1334, "h": 2000},
      {"file": "portrait-dscf4503-1-web-bw", "name": "", "w": 2000, "h": 1500},
      {"file": "portrait-2021-04-03-nicky-s-0631-1-web-b-col", "name": "", "w": 1334, "h": 2000},
      {"file": "portrait-dscf6275-3-web-bw", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-2022-05-14-cotton-mill-007-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-2019-04-05-lara-vogel-0044-1-big", "name": "", "w": 2000, "h": 1500},
      {"file": "portrait-2018-08-22-kukie-199-1-big-bw", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-2020-10-03-inked-fit-devil-0029-1-web-bw", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-2020-01-18-loft-14c-043-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-2020-01-18-loft-14c-179-1-web-col", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-2019-10-12-loft-14c-0189-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "portrait-2018-08-22-kukie-012-1-web-col", "name": "", "w": 1500, "h": 2000},
    ]
  },
  nude: {
    title: "Nude",
    altPrefix: "Künstlerische Aktfotografie",
    gated: true, // Altersabfrage (ab 18) vor dem Anzeigen
    images: [
      { file: "nude-tina-03", name: "Tina", w: 1500, h: 2000 },
      { file: "nude-petra-02", name: "Petra", w: 2000, h: 1500 },
      { file: "nude-olga-06", name: "Olga", w: 1500, h: 2000 },
      { file: "nude-ness-03", name: "Ness", w: 2000, h: 1500 },
      { file: "nude-loft-studio-cologne-01", name: "", alt: "Künstlerische Aktfotografie im Loft Studio Köln – Michael Falkner Fotografie", w: 2000, h: 1333 },
      { file: "nude-jasmin-rituper-01", name: "Jasmin Rituper", w: 1333, h: 2000 },
      { file: "nude-guilia-02", name: "Guilia", w: 1500, h: 2000 },
      { file: "nude-cardii-02", name: "Cardii", w: 1333, h: 2000 },
      { file: "nude-loft-studio-cologne-02", name: "", alt: "Künstlerische Aktfotografie im Loft Studio Köln – Michael Falkner Fotografie", w: 1333, h: 2000 },
      { file: "nude-aneta-02", name: "Aneta", w: 1500, h: 2000 },
      { file: "nude-cardii-01", name: "Cardii", w: 2000, h: 1125 },
      { file: "nude-0c2a7184", name: "", w: 1334, h: 2000 },
      { file: "nude-guilia-01", name: "Guilia", w: 2000, h: 1500 },
      { file: "nude-0c2a7490", name: "", w: 2000, h: 1334 },
      { file: "nude-margot-01", name: "Margot", w: 1500, h: 2000 },
      { file: "nude-margot-02", name: "Margot", w: 1500, h: 2000 },
      { file: "nude-chiara-01", name: "Chiara", w: 1500, h: 2000 },
      { file: "nude-laura-01", name: "Laura", w: 1500, h: 2000 },
      { file: "nude-niczi-01", name: "Niczi", w: 1500, h: 2000 },
      { file: "nude-victoria-01", name: "Victoria", w: 1500, h: 2000 },
      {"file": "nude-dscf4548-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "nude-2023-05-20-margot-betty-0581-1-big", "name": "", "w": 2000, "h": 1500},
      {"file": "nude-0c2a9669-1-big", "name": "", "w": 2000, "h": 1334},
      {"file": "nude-5a4a9396-1-big-2", "name": "", "w": 1334, "h": 2000},
      {"file": "nude-5a4a2944-1", "name": "", "w": 2000, "h": 1334},
      {"file": "nude-5a4a2812-1", "name": "", "w": 1334, "h": 2000},
      {"file": "nude-5a4a2674-1", "name": "", "w": 2000, "h": 1334},
      {"file": "nude-dscf2471-1", "name": "", "w": 1500, "h": 2000},
      {"file": "nude-dscf2058-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "nude-dscf8091-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "nude-dscf8244-1-big", "name": "", "w": 2000, "h": 1500},
      {"file": "nude-0c2a0763-1-big-col", "name": "", "w": 1334, "h": 2000},
      {"file": "nude-dscf0503-1-big", "name": "", "w": 2000, "h": 1500},
      {"file": "nude-dscf8610-1-big", "name": "", "w": 2000, "h": 1500},
      {"file": "nude-0c2a7398-big", "name": "", "w": 2000, "h": 1334},
    ]
  },
  travel: {
    title: "Travel",
    altPrefix: "Reisefotografie",
    images: [
      // { file: "travel-beispiel-01", name: "", w: 2000, h: 1333 },
    ]
  },
  location: {
    title: "On Location",
    altPrefix: "Location-Shooting",
    images: [
      { file: "location-0c2a7439", name: "", w: 2000, h: 1334 },
      { file: "location-0c2a7509", name: "", w: 1334, h: 2000 },
      { file: "location-la-petite-douce-146", name: "", w: 1500, h: 2000 },
      { file: "location-eugenia-0565", name: "Eugenia", w: 1334, h: 2000 },
      { file: "location-bourdonant-0503", name: "", w: 2000, h: 1500 },
      { file: "location-queen-didi-0008", name: "Queen Didi", w: 1500, h: 2000 },
      { file: "location-queen-didi-0208", name: "Queen Didi", w: 1500, h: 2000 },
      { file: "location-albert-rolex-351", name: "", w: 2000, h: 1500 },
      { file: "location-margot-0274", name: "Margot", w: 1500, h: 2000 },
      { file: "location-corinna-trienbacher-0238", name: "Corinna Trienbacher", w: 1500, h: 2000 },
      { file: "location-cass-6217", name: "", w: 1309, h: 2000 },
      { file: "location-corinna-9870", name: "Corinna", w: 1500, h: 2000 },
      { file: "location-niczi-6455", name: "Niczi", w: 2000, h: 1500 },
      { file: "location-sunny-mara-3", name: "Sunny Mara", w: 1562, h: 2000 },
      { file: "location-sunny-mara-2", name: "Sunny Mara", w: 1500, h: 2000 },
      { file: "location-taya-1", name: "Taya", w: 1500, h: 2000 },
      {"file": "location-2021-08-09-bourdonant-0533-1-big", "name": "", "w": 2000, "h": 1500},
      {"file": "location-2021-08-09-bourdonant-0538-1-big", "name": "", "w": 1334, "h": 2000},
      {"file": "location-dscf3286", "name": "", "w": 1500, "h": 2000},
      {"file": "location-dscf3336-1", "name": "", "w": 2000, "h": 1500},
      {"file": "location-dscf1195-1-web-col", "name": "", "w": 2000, "h": 1500},
      {"file": "location-dscf1907-1-web-col-2", "name": "", "w": 2000, "h": 1500},
      {"file": "location-dscf2600-1-web-col", "name": "", "w": 2000, "h": 1334},
      {"file": "location-dscf2575-web-bw", "name": "", "w": 1500, "h": 2000},
      {"file": "location-5a4a0948-1-big", "name": "", "w": 2000, "h": 1334},
      {"file": "location-dscf2246-web-bw", "name": "", "w": 1500, "h": 2000},
      {"file": "location-sadie-1430", "name": "", "w": 1500, "h": 2000},
      {"file": "location-olga-1320", "name": "", "w": 1500, "h": 2000},
      {"file": "location-dscf0362-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "location-2020-11-28-curvy-ann-0373-1-web-bw", "name": "", "w": 1334, "h": 2000},
      {"file": "location-2021-02-27-eugenia-0436-1-web-col", "name": "", "w": 1500, "h": 2000},
      {"file": "location-2020-12-19-mary-van-dee-0447-1", "name": "", "w": 1334, "h": 2000},
      {"file": "location-dscf4524-1-web-bw", "name": "", "w": 1500, "h": 2000},
      {"file": "location-2022-07-06-corinna-t-0671-1-web-col-10proz", "name": "", "w": 1334, "h": 2000},
      {"file": "location-2022-07-06-corinna-t-0227-1-web-bw", "name": "", "w": 1334, "h": 2000},
      {"file": "location-2022-07-06-corinna-t-0532-4-big-col", "name": "", "w": 1500, "h": 2000},
      {"file": "location-2019-09-28-de-toni-673", "name": "", "w": 2000, "h": 1500},
      {"file": "location-2018-08-22-kukie-170-1-web-col-19proz", "name": "", "w": 1500, "h": 2000},
      {"file": "location-2018-07-28-lapadu-0014-1-big", "name": "", "w": 1500, "h": 2000},
      {"file": "location-2018-07-28-lapadu-0266-1-web-col-4-3", "name": "", "w": 2000, "h": 1500},
      {"file": "location-2022-07-06-corinna-t-0555-1-big-col", "name": "", "w": 2000, "h": 1500},
      {"file": "location-2021-02-27-eugenia-0212-1-web-col-22proz", "name": "", "w": 1500, "h": 2000},
      {"file": "location-2022-07-06-corinna-t-0295-1-web-col-6proz", "name": "", "w": 1334, "h": 2000},
      {"file": "location-2022-07-06-corinna-t-0366-1-web-col-12proz", "name": "", "w": 1334, "h": 2000},
    ]
  }
};
