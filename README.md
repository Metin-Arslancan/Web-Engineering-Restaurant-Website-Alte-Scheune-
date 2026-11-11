# Alte Scheune – Web Engineering

Studienprojekt aus dem Modul **Web Engineering** an der Hochschule Niederrhein: Umsetzung einer Restaurant-Website mit HTML, CSS und JavaScript.

## Projektablauf

Eine andere Projektgruppe stellte das Lastenheft bereit. Auf dieser Grundlage entwickelte unsere Gruppe die Website und erstellte das zugehörige Pflichtenheft sowie eine Testdokumentation. Das ursprüngliche Lastenheft unserer eigenen Gruppe gehört nicht zu diesem Repository.

## Team

Gemeinsame Umsetzung: Metin Arslancan und Merve Karadag (Gruppe 47). Die einzelnen Beiträge werden hier nicht getrennt ausgewiesen.

## Website

- Startseite mit Restaurantinformationen und Speisekarte
- Eventflyer als PDF
- Suchfunktion mit Treffernavigation
- Reservierungsformular mit E-Mail-Formatprüfung
- Separate Seiten für Impressum und Datenschutz

Das Reservierungsformular ist eine **Demonstration**: Nach der Prüfung erfolgt eine Weiterleitung auf eine Bestätigungsseite. Es gibt keinen Backend-Versand und keine echte Reservierungsverarbeitung.

## Dokumentation

| Dokument | Inhalt |
| --- | --- |
| [Lastenheft](docs/Lastenheft.pdf) | Von der anderen Gruppe bereitgestellte Anforderungen |
| [Pflichtenheft](docs/Pflichtenheft.md) | Dokumentation unserer Umsetzung |
| [Tests](docs/Tests.md) | Im Rahmen des Praktikums erstellte Testdokumentation |

Die Dokumente wurden unverändert aus dem abgegebenen Projekt übernommen. Die dort beschriebenen Testergebnisse sind historische Projektangaben, keine erneute vollständige Prüfung.

## Lokal ansehen

`website/index.html` im Browser öffnen. Für die über Google Fonts geladene Schrift ist eine Internetverbindung erforderlich; die Canterbury-Schrift liegt lokal bei.

Alternativ im Repository-Ordner mit installiertem Python:

```bash
python3 -m http.server 8000 --directory website
```

Anschließend http://localhost:8000 aufrufen.

## Einordnung

Dies ist eine studentische Demonstration, keine produktive Restaurant-Website. Die enthaltenen Impressums- und Datenschutztexte sind Bestandteil der ursprünglichen Abgabe und keine Vorlage für einen realen Betrieb.

## Materialien und Rechte

Das Lastenheft stammt von der anderen Projektgruppe. Bilder und weitere Materialien wurden aus der Projektabgabe übernommen; das Pflichtenheft beschreibt Bilder als vom Auftraggeber bereitgestellt. Dieses Repository enthält keine pauschale Lizenz für die Weiterverwendung aller Inhalte. Die mitgelieferte Schriftlizenz steht unter `website/fonts/1001fonts-canterbury-eula.txt`.
