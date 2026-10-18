# Michael Falkner Fotografie

Statische Portfolio-Website (HTML/CSS/JS, ohne Framework, ohne externe Ressourcen), gehostet über GitHub Pages.

Live: https://mike21getit.github.io/michaelfalkner-fotografie/

## Struktur
- `index.html` – alle Inhalte (Hero, Teaser, Über mich, Portfolio, Kontakt, Impressum, Datenschutz)
- `css/style.css` – Styles
- `js/gallery-data.js` – **Bilderlisten pro Kategorie** (hier neue Bilder eintragen)
- `js/main.js` – Masonry-Galerie, Lightbox, Altersabfrage, Menü
- `img/full/` (max. 2000 px) und `img/thumb/` (max. 800 px) – WebP-Versionen
- `fonts/` – Cormorant Garamond (selbst gehostet, SIL OFL)
- `tools/optimize.py` – erzeugt Web-Versionen neuer Bilder (benötigt Pillow)

## Neue Bilder / Travel & Location aktivieren
1. `python3 tools/optimize.py travel pfad/zu/bild1.jpg pfad/zu/bild2.jpg`
2. Die ausgegebenen Zeilen in `js/gallery-data.js` unter `travel.images` (bzw. `location.images`) einfügen, Namen ergänzen.
3. Committen & pushen. Teaser, Kategorie-Link und Galerie erscheinen automatisch, sobald eine Liste nicht leer ist.

## Offene Punkte
Im Impressum/Datenschutz sind Platzhalter in `[eckigen Klammern]` (gelb markiert, Klasse `ph`) durch echte Angaben zu ersetzen.
