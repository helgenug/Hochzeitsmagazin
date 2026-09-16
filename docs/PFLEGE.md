# Pflege und lokale Vorschau

Die Website bleibt eine statische Mehrseitenwebsite. Kein Framework, keine Pakete, keine Lockdatei. Alle Originalbilder und das lokale Mediadaten-PDF bleiben unverändert. Keine Veröffentlichung und keine Git-Commits.

## Vorschau

Im Projektverzeichnis: node work/serve.cjs. Anschließend http://127.0.0.1:4173 öffnen. Der Server bindet ausschließlich an 127.0.0.1 und liefert keine work-, docs- oder data-Dateien aus. Bei bereits laufender Vorschau nicht ein zweites Mal starten.

## Bearbeitung

Gemeinsame Navigation: work/nav.html. Gemeinsame Seitentemplates und redaktionelle Texte: work/build.cjs. Gestaltung: site.css. Menü, Filter, Countdown und Formular: site.js. Die HTML-Dateien sind fertig erzeugte statische Dateien; dauerhafte Inhaltsänderungen in den Vorlagen pflegen. Originale Sicherung unter work/original-2026-09-16 nicht überschreiben.

Nach Änderungen: node work/build.cjs. Danach node work/validate.cjs und node work/test-form.cjs. Dies ist die Produktions-Erzeugung für die bestehende statische Technik; npm build wäre hier unpassend. Es werden keine Dateien auf einen Server hochgeladen.

## Daten

- data/event.json: einzige Konfiguration für Start-/Endzeiten, Zeitzone, Adresse und Jahr. Explizite UTC-Offsets für jedes Datum beibehalten und event.year aktualisieren. Die Logik bildet das angefragte zweitägige Event ab. Danach build.cjs ausführen; event-config.js wird automatisch erzeugt.
- data/places.json: bestätigte Ortsinformationen. Jeder Datensatz hat URL und Prüfdatum. Unbekannte Merkmale nicht als bestätigt markieren. Größe wird mangels geprüfter Kapazitäten nicht gefiltert.
- data/providers.json: Kategorien und redaktionelle Anbieter. kind: editorial, publisher, partner oder advertisement. partner und advertisement werden immer als Werbung gekennzeichnet.
- data/ads.json: derzeit alle Slots leer, keine aktiven Partnerverträge oder Advertorials eingetragen. Leere Slots erzeugen kein HTML und keinen Leerraum.

## Anzeigen

slots enthält home-sponsor, home-banner, places-sponsor, providers-native, article-inline. Ein gebuchter Datensatz benötigt active: true, label (Anzeige, Werbung oder Advertorial), title und url. Optional: text, image und alt; Bilder ausschließlich als freigegebene lokale Dateien. Die feste Gestaltung reserviert Bildverhältnisse.

partnerProfiles enthält erst nach bestätigter Buchung vollständige Anbieterobjekte mit active: true, kind: partner, name, category, region, url, description; optional image, imageAlt, services, profileText und detail. Advertorials: active, slug, title, sponsor, description, body (vertrauenswürdiger, redaktionell kontrollierter HTML-Inhalt). Sie werden als eigene Seiten erzeugt und im Magazin verlinkt. Keine ungeprüften Eingaben in body übernehmen.

Bei Deaktivierung eines schon erzeugten Advertorials bleibt seine alte HTML-Datei aus Gründen der Datensicherheit erhalten. Vor einer etwaigen späteren Veröffentlichung muss diese Datei ausdrücklich zurückgezogen oder mit einer redaktionellen Archivnotiz versehen werden. Lokal wird sie nicht mehr verlinkt.

## Erhaltene URLs

index.html, trends.html, trauorte.html, faq.html und kontakt.html bleiben vorhanden. Der lokale Server unterstützt zusätzlich die Varianten ohne .html. Canonicals zeigen nun einheitlich die tatsächlich vorhandenen HTML-Adressen. Vor einem späteren Hosting sollten gegebenenfalls bestehende Regeln für die endungslosen URLs übernommen werden; hier wurde kein produktives Routing geändert. Frühere Startseitenanker bleiben bestehen. Alte Modal-IDs werden clientseitig auf die entsprechenden Inhaltsseiten geführt.

## Formulare

Der Formspree-Endpunkt blieb unverändert. Pflichtfelder, Honeypot und Datenschutzcheckbox bleiben aktiv. Es wurden keine echten Testnachrichten abgesandt. Die Tests simulieren Erfolg, HTTP-Fehler, Netzwerkfehler, Timeout und unvollständige Eingaben. Eine tatsächliche Zustellprüfung benötigt einen bewusst abgesendeten Test durch den Betreiber.

## Noch benötigte Inhalte

Freigegebene vollständige Reportagen einschließlich Veröffentlichungsrechten; zusätzliche eigene Hochzeits- und Locationfotos; Angaben zu weiteren realen Dienstleistern; bestätigte Anzeigenkunden und Motive; redaktionelle Prüfung des vorhandenen HCT-Interviews auf Aktualität. Die vorhandenen Rechtstexte wurden wortgleich übernommen, enthalten jedoch möglicherweise nicht mehr zutreffende Angaben zu Tracking, Maps, sozialen Plugins und Rechtsverweisen. Diese Punkte sowie die Formspree-Verarbeitung bitte fachlich prüfen lassen. Keine Trackingsoftware hinzugefügt.

## Nachtrag: Rechtsupdate vom 16.09.2026
Die zunächst unverändert übernommenen Rechtstexte wurden anschließend auf ausdrücklichen Wunsch aktualisiert. Maßgeblich: data/impressum.html und data/datenschutz.html. Cookie-Einstellungen sind lokal implementiert; Google Analytics ist nicht aktiv. Vollständige heutige Änderungsliste, Quellen und offene rechtliche Betriebsangaben: AENDERUNGEN-2026-09-16.md im Projektstamm.
