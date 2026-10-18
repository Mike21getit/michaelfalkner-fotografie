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
 * TRAVEL & LOCATION: Diese Kategorien sind vorbereitet, aber noch leer.
 * Sobald in "images" mindestens ein Bild steht, erscheinen Teaser,
 * Navigationspunkt und Portfolio-Bereich automatisch – sonst bleiben
 * sie ausgeblendet. Am HTML muss dafür nichts geändert werden.
 */
window.GALLERY = {
  portrait: {
    title: "Portrait",
    altPrefix: "Porträt",
    images: [
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
    title: "Location",
    altPrefix: "Location-Shooting",
    images: [
      // { file: "location-beispiel-01", name: "", w: 2000, h: 1333 },
    ]
  }
};
