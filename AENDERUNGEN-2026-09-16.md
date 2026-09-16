# Änderungen am 16. September 2026

Projekt: D:\Hochzeitsmagazin-main. Alle Arbeiten erfolgten lokal. Keine Veröffentlichung, kein Deployment, kein Git-Commit. Dieses Dokument erfasst den heutigen Umbau und anschließende Korrekturen.

## Bestand und Gestaltung
- Ursprüngliche fünf HTML-Seiten gesichert unter work/original-2026-09-16; zusätzlicher Stand vor Rechtsupdate unter work/vor-rechtsupdate-2026-09-16.
- Vorhandene sechs Bilddateien und Mediadaten-PDF erhalten; statisches Projekt ohne Framework-Wechsel.
- Neues Editorial-Design in Marineblau, Weiß und Sand mit Systemschriften, gemeinsamer Navigation, mobilem Menü, Seitenfuß, Fokusdarstellung und Sprunglink.
- Startseite mit vorhandenem Hochzeitsfoto, Magazin, Regionen, Planung, Dienstleistern, Fotografie, Printarchiv und Partnerhinweisen.
- Verzerrte Bilder korrigiert, runde Portraits vollständig sichtbar und Kontrast über dem Startbild verbessert.
- Sichtbare Einblendung „FOTOGRAFIE · HOLGER MARTENS“ auf Wunsch ersatzlos entfernt.
- Gemeinsame Dateien site.css, site.js, favicon.svg; statischer Generator work/build.cjs.

## Seiten und Inhalte
- Bestehende URLs index.html, trends.html, trauorte.html, faq.html und kontakt.html erhalten und überarbeitet.
- Ergänzt: magazin.html, ausgaben.html, planen.html, dienstleister.html, hochzeitsmesse.html, fotografie-film.html, ueber-uns.html, echte-hochzeiten.html, partner-werden.html, impressum.html, datenschutz.html, brautstyling.html und trauringe.html.
- Insgesamt 18 Seiten mit individuellen Titeln, Beschreibungen, Canonicals und strukturierten Daten.
- Neun Planungsthemen, überarbeitete FAQs mit Aufklappelementen, sachlicher Trendbeitrag ohne unbelegte Prognosen; vorhandenes Styling-Interview bewahrt.
- Keine erfundenen Reportagen oder zahlenden Werbepartner.
- PDF-Ausgaben 2023, 2024 und 2025 sowie Mediadaten 2026 verlinkt.
- Zwölf recherchierte regionale Orte mit Quellen und Eigenschaften in data/places.json; weitere alte Links erhalten.
- Filterbare Orts- und Dienstleisterverzeichnisse mit Suchzustand in der URL; Kategorien und vorhandene Anbieter in data/providers.json.
- Messetermine: 30. und 31. Januar 2027, jeweils 10–18 Uhr, Europe/Berlin, in data/event.json und event-config.js. Countdown berücksichtigt Beginn, laufende Messe, Nachtpause und Ende.
- Sieben Werbeformen vorbereitet: Sponsoring, Banner, Kategoriesponsoring, native Platzierung, Artikelanzeige, Partnerprofile und Advertorials. Daten in data/ads.json; leere Plätze unsichtbar, keine Testanzeigen veröffentlicht.

## Kontaktformular
- Formspree-Endpunkt erhalten; Print-/Digitalanfragen, Branchenwahl, Honeypot und Pflichtfeldprüfung.
- Erfolg, Server-/Netzwerkfehler und Timeout berücksichtigt; Eingaben bleiben bei Fehler erhalten.
- Unbelegtes 48-Stunden-Antwortversprechen entfernt.
- Datenschutzcheckbox auf Kenntnisnahme der Verarbeitung über Formspree (USA) geändert. Sie ersetzt keine notwendige Vertrags-/Übermittlungsgrundlage.
- Keine echten Testanfragen versandt.

## Impressum und Datenschutz
- Zunächst übernommene Alttexte auf ausdrücklichen Wunsch aktualisiert. „Unverändert“ in früheren Dokumenten bezeichnet nur den Zwischenstand.
- Betreiberin bestätigt: Katrin Witt-Martens, Kwitt Medien & PR, Einzelunternehmen.
- Impressum auf § 5 DDG und § 18 Abs. 2 MStV umgestellt; alte TMG-/RStV-Verweise und EU-Online-Streitbeilegungslink entfernt.
- Kontaktdaten, Umsatzsteuer-ID und Bildnachweis aus Bestand übernommen.
- Vercel als bestätigten Hoster aufgenommen. Formspree, mögliche US-Verarbeitung, Datenarten, Zwecke und Rechtsgrundlagen beschrieben.
- Allgemeine Speicherkriterien statt erfundener konkreter Löschfristen; Betroffenenrechte, Widerspruch und Aufsichtsbehörde ergänzt.
- Unzutreffende Aussagen über aktive Google-Dienste, externe Schriftendienste und Social-Plugins entfernt.
- Google Analytics ausdrücklich als geplant, derzeit nicht aktiv beschrieben. Keine Analytics-ID, kein Google-Skript, keine vorsorgliche Einwilligung.
- Quellen der Rechtstexte jetzt data/impressum.html und data/datenschutz.html; Änderungen überstehen neue Seitengenerierung.

## Cookie-Einstellungen
- Hinweis auf allen Seiten mit „Nur erforderliche verwenden“ und „Einstellungen“; jederzeit über Seitenfuß erneut erreichbar.
- Analytics deaktiviert und nicht angekreuzt.
- Nur bestätigte Einstellung im lokalen Browserspeicher hm-privacy-v1; Gültigkeit 180 Tage; keine Übertragung der Auswahl an einen Server.
- Abgelaufene, beschädigte oder abweichende Versionen verworfen; gesperrter Speicher führt nicht zum Absturz.
- Späterer Analytics-Einsatz benötigt aktualisierte Details, echte Opt-in-/Widerrufssteuerung und eine neue Einstellungsversion.

## Prüfungen
- Struktur und Links: 18 Seiten, 1004 Prüfungen, 682 lokale Verweise.
- Zehn Countdown-Grenzfälle; sieben Werbeformen nur mit Testdaten im Arbeitsspeicher geprüft.
- Formular: Erfolg, Serverfehler, Netzwerkfehler, Timeout und ungültige Eingaben.
- Datenschutz: Gültigkeit, Ablauf, beschädigte Daten, abweichende Version, gesperrter Speicher, Speichern und Dialog.
- Heute alle Seiten in Mobil-, Tablet- und Desktopbreite geprüft, nach Bildkorrektur betroffene Seiten erneut.
- Rechtsupdate im Browser: mobiler Dialog, Speichern über Neuladen, erneutes Öffnen, Escape, Fokus und entfernte Bildbeschriftung.
- Frühere externe Prüfung: 42 Ziele erreichbar, PDF-Ziele als PDF bestätigt; keine dauerhafte Verfügbarkeitsgarantie.

## Verbleibende Grenzen
- Keine verbindliche juristische Freigabe oder Garantie von Rechtssicherheit.
- Auf Wunsch keine unbestätigten Angaben zu abgeschlossenem Formspree-AVV, konkreten Aufbewahrungsfristen oder Schlichtungsteilnahme erfunden.
- Tatsächliche Auftragsverarbeitungs-/Drittlandgrundlagen bei Formspree, Vercel-Kontokonfiguration, Löschpraxis und gegebenenfalls Angaben nach § 36 VSBG bleiben zu klären. Das Weglassen hebt Pflichten nicht auf.
- Für vollständige Datenschutzhinweise müssen die anwendbaren Übermittlungsgrundlagen und verfügbaren Garantien konkret verifiziert werden; Links zu Anbieterbedingungen allein bestätigen sie nicht.
- E-Mail-Anbieter und tatsächliche Produktionskonfiguration nicht geprüft; keine Vercel-Kontoeinstellungen verändert.
- Vor Veröffentlichung diese Betriebs- und Vertragsfragen klären. Die lokale Fassung ist keine bestätigte rechtssichere Veröffentlichungsvorlage.

## Offizielle Quellen zum Rechtsupdate
Geprüft am 16.09.2026:
- https://www.gesetze-im-internet.de/ddg/__5.html
- https://www.gesetze-im-internet.de/ttdsg/__25.html (offizielle URL für § 25 TDDDG)
- https://www.gesetze-im-internet.de/vsbg/__36.html
- https://www.die-medienanstalten.de/fileadmin/user_upload/Rechtsgrundlagen/Gesetze_Staatsvertraege/Medienstaatsvertrag_MStV.pdf
- https://consumer-redress.ec.europa.eu/site-relocation_en
- https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R3228
- https://datenschutz-hamburg.de/news/fragen-und-antworten-zum-tracking-durch-drittdienste-auf-websites
- https://www.datenschutz-mv.de/kontakt
- https://formspree.io/legal/privacy-policy/
- https://formspree.io/security/
- https://vercel.com/legal/dpa
- https://vercel.com/legal/privacy-notice

Weitere Dokumente: docs/BESTAND-UND-UMBAU.md, docs/QUELLEN.md, docs/PFLEGE.md, docs/PRUEFBERICHT.md.

## Nachkorrektur: Bildausschnitt des Startseitenteasers
- Den Bildausschnitt am oberen Bildrand ausgerichtet statt vertikal mittig zuzuschneiden. Dadurch bleiben insbesondere Stirn und Augen des Mannes auf breiten Bildschirmen sichtbar.
- Mobile Ausrichtung ebenfalls am oberen Bildrand; Originalbild unverändert.

## Korrektur der Teaserhöhe
- Die vorige reine Verschiebung des Bildausschnitts war nicht ausreichend und ist durch eine Darstellung im ursprünglichen Seitenverhältnis 3800:2961 ersetzt.
- Feste Teaserhöhen aufgehoben; das komplette Foto bleibt sichtbar.
- Auf Mobilgeräten steht der Text unter dem vollständigen Foto, damit weder Foto noch Text beschnitten werden.
