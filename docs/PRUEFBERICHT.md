# Abschlussprüfung – 16.09.2026

## Erfolgreich

- 18 statische Seiten erzeugt; die fünf bestehenden Dateiadressen erhalten.
- 912 statische Prüfungen, darunter 610 lokale Verweise und Anker, eindeutige Titel, Beschreibung, Canonical, genau eine H1, lokale Bilddateien und Bilddimensionen.
- Alle 18 Seiten im Browser bei 390, 768 und 1440 Pixeln geprüft: kein horizontaler Überlauf. Nach den letzten Bild-/Rechtstextanpassungen sechs betroffene Seiten erneut in allen drei Breiten geprüft.
- Startseite, Navigation, Teaser, redaktionelles Raster, Filter, Bildstrecke und Formular zusätzlich visuell geprüft. Porträtproportionen korrigiert; Originaldateien unverändert.
- Location-Filter mit Region und Übernachtung kombiniert: Hohe Düne, Neptun und Blaue Boje. Zurücksetzen zeigt wieder alle zwölf geprüften Orte.
- Dienstleisterfilter: Fotografie zeigt Martens & Martens; noch unbesetzte Kategorie Floristik zeigt einen ehrlichen Leerzustand mit hilfreichen Verweisen.
- Mobiles Menü öffnet/schließt, Escape schließt mit Fokus auf dem Schalter; sichtbarer Fokus vorhanden. FAQ per Enter bedienbar.
- Zehn Countdown-Grenzfälle einschließlich Start, Ende beider Tage, Nacht dazwischen und Zeit nach der Veranstaltung. Explizite UTC-Offsets und Europe/Berlin.
- Sieben Anzeigenformate ausschließlich mit privaten Testdaten im Arbeitsspeicher geprüft; keine Testanzeigen in öffentlichen Dateien. Leere Slots erzeugen kein sichtbares HTML.
- Formspree-Endpunkt, Pflichtfelder, Honeypot und Datenschutzcheckbox erhalten. Browserprüfung der Pflichtfelder. Fünf simulierte Formularfälle: Erfolg, HTTP-Fehler, Netzfehler, Timeout, ungültige Eingaben. Bei Fehlern bleiben Eingaben erhalten. Fokus auf Rückmeldung.
- 42 externe Verweise technisch erreichbar (HTTP 200). Drei Archiv-PDFs liefern application/pdf. Protokoll: link-check.json.
- Wortlaut von Impressum und Datenschutz automatisiert mit Original verglichen: identisch. Nur Darstellung und Überschriftenebenen geändert.
- Keine externen CSS-, JavaScript- oder Font-Abhängigkeiten mehr. Keine neue Trackingsoftware, keine Karten-Einbettung, keine neuen Formulardienste.
- JavaScript-Syntax erfolgreich geprüft. Keine Browserfehler in der abschließenden Kontrolle.

## Grenzen und bewusst offene Punkte

- Kein Git-Verzeichnis vorhanden; deshalb keine Aussage über frühere Änderungen oder Versionshistorie möglich. Original-HTML-Dateien vor Änderungen gesichert. Keine Commits und kein Git neu initialisiert.
- Keine echten Formulare abgesendet; Zustellung an den Betreiber bleibt ungeprüft.
- Kein npm-/Framework-Build vorhanden oder eingeführt. Die Produktionserzeugung erfolgt passend zum bestehenden statischen Projekt mit work/build.cjs und anschließender Validierung.
- Keine bezahlte Kampagne oder vertragliche Partnerschaft erfunden. Werbeplätze und Profil-/Advertorial-Vorlagen sind vorbereitet, bleiben ohne bestätigte Inhalte verborgen.
- Keine vollständige freigegebene Hochzeit im Bestand: Reportagebereich angelegt, keine Paare oder Zitate erfunden.
- Nur drei verifizierte Dienstleisterdatensätze aus dem Bestand. Alle gewünschten Kategorien sind vorbereitet, weitere reale Anbieter müssen ergänzt werden.
- Größe/Gästekapazität wird mangels vollständiger offizieller Angaben nicht gefiltert. Unbestätigte frühere Location-Verweise bleiben separat im Archiv.
- Keine fremden Fotos geladen. Mehr Bildvielfalt benötigt zusätzliche eigene freigegebene Motive.
- Alte Rechtstexte unverändert; auffällige Stellen in BESTAND-UND-UMBAU.md und PFLEGE.md dokumentiert. Keine juristische Inhaltsprüfung vorgenommen.
- Vollständige assistive-technische Prüfung mit Screenreader und Rechtsprüfung sind nicht Teil der automatisierten Kontrollen.

## Übergabe

Die Vorschau läuft unter http://127.0.0.1:4173/ und bleibt lokal. Der Server lauscht nur auf dem Loopback-Interface. Nichts wurde veröffentlicht, hochgeladen oder deployed. Keine Änderungen außerhalb des beauftragten Projektordners vorgenommen.

## Nachtrag: Rechtsupdate vom 16.09.2026
Die zunächst unverändert übernommenen Rechtstexte wurden anschließend auf ausdrücklichen Wunsch aktualisiert. Maßgeblich: data/impressum.html und data/datenschutz.html. Cookie-Einstellungen sind lokal implementiert; Google Analytics ist nicht aktiv. Vollständige heutige Änderungsliste, Quellen und offene rechtliche Betriebsangaben: AENDERUNGEN-2026-09-16.md im Projektstamm.
