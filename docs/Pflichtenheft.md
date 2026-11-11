# Pflichtenheft: alte Scheune


## Gruppe: *47*

## Teilnehmer 1: *Arslancan, Metin*

## Teilnehmer 2: *Karadag, Merve*

## 1. Einführung
	
- Projektbezeichnung: Website "alte Scheune"
- Erstellungsdatum: 13.11.2025 
- Zustand des Dokuments: fertig
- Auftragnehmer: Metin Arslancan, Merve Karadag

### 1.1 Zielsetzung des Pflichtenhefts

Das Pflichtenheft dient als Grundlage dazu, einen möglichst umfangreichen Überblick über die Implementierung der Website 
für das Restaurant "alte Scheune" zu schaffen. Die im Lastenheft verfassten
Anforderungen wurden, wie gefordert, erfüllt.

### 1.2 Projektbeschreibung

Die geforderte Website soll dazu dienen, dass Kunden 
online die Möglichkeit besitzen, die Speisekarte, anstehende
Events und Informationen über das Restaurant einzusehen. 
Wichtig ist, dass die Seite optisch möglichst hochwertig aussieht.
Dazu wurden alle Anforderungen aus dem Lastenheft übernommen 
und umgesetzt.

## 2. Übersicht über das System

### 2.1 Technologien

- HTML5
- JavaScript: zum Suchen und Reservieren
- CSS: für gestalterische Aspekte

### 2.2 Hauptfunktionen

- Hauptnavigation: Home, Impressum, Datenschutzerklärung
- Impressum-Seite: Kontakt, Haftung, Urheberrecht
- Datenschutzerklärung: Informationen gemäß DSGVO 
- Startseite: Begrüßung, Informationen, Reservierung, Speisekarte, Events
- Reservierung: ausfüllbar mit Formular


## 3. Umsetzung der Anforderungen aus dem Lastenheft

### 3.1 Anforderungen, die für alle Seite gelten sollen

- **Hauptnavigation mit den Menüpunkten**: fixiert am oberen Rand, weißer Hintergrund, Logo links,
 altdeutsche Schrift „Alte Scheune“, Menüpunkte rechts, „Home“ in Gold, Suchfunktion über Lupensymbol.
    - Implementierung mit HTML-Struktur, mit dem `<nav>` Block.
    - Lupensymbol per `<img>` eingebunden
    - Suchfunktion wird über eigenen JS-Code implementiert
- **Design**: linker dunkelblauer balken, farbschema, Schriftart
    - Sidebar wird per Css dunkelblau gefärbt
    - Schriftart per Link in html

## 3.2 Startseite

### 3.2.1 Hero Sektion

- **Hintergrundbild**: erstreckt sich horizontal und hat ein dunkelgraues, 
halbtransparentes Overlay
    - Overlay wird in CSS mit halbtransparentem grau umgesetzt
- **Logo-Schriften**: Herzlich-Willkommen in gold, Alte Scheune in dunkelblau 
    - Farbe in Css festlegen
- **Aktions- & Informationskasten**: 
    - zusätzliche HTML-Datei für die Reservierung,wo das Formular zum Ausfüllen gemacht wird. Nach Absenden erscheint ein Dummy. Dies wurde abgesprochen mit dem Auftraggeber, da es nicht direkt so im Lastenheft stand. 
    - Informationskasten mit Textelementen

### 3.2.2 Über-uns-Sektion

- **Abtrennung mit Goldlinie**: mit div-Block in html, Farbe in Css
- **Überschrift und Text**: einfacher Textblock

### 3.2.3 Speisekarte

Hier fanden ebenso Absprachen statt. Sobald man auf einen Kategorien-kasten klickt, 
soll man auf den jeweiligen Abschnitt in der Speisekarte springen. Zudem soll es jeweils 1 Bild pro Kategorie rechts geben, und nicht nach jeder 3. .

- **Kartennavigation und Gerichte**: wie oben beschrieben, nicht links, sondern über die Speisekarte, dunkelblauer Kasten mit weißer Schrift. Preis soll in der Farbe Gold sein und ein Bild folgt rechts nach jedem 3. Element. 
    - Vom Auftraggeber übergebene Bilder verwendet. (Per `<img>`- Block)
    - Farbe Gold in Css festlegen
    - 2-Spalten Layout verwenden

### 3.2.4 Informationen für Reisegruppen 

- **Text und Icon**: Informationsbox hellblau, Trennung Goldlinie, Rechts Icon von einem Bus, Überschrift dunkelblau 
    - Farben in Css, 
    - Bus-Icon mit einem Emoji 

### 3.2.5 Events

- **Eventflyer-Buttons**: rufen PDF vom Event auf, dunkelblaue Buttons mit weißer Schrift
- **Design**: Abschnitt ebenso mit Goldlinie getrennt

### 3.2.6 Footer

- **Link zur Datenschutzerklärung und Impressum**: ruft per Link andere Seiten auf, datenschutzerklärung.html oder impressum.html
- **Farben per Css**
- **Social-Media-Icons**: Bilder einfügen in Gold  

## 3.3 Impressum-Seite 

Dies wurde mit einer seperaten HTML-Datei erstellt.

### 3.3.1 Optische Gestaltung

- Farben mit Css eingestellt
- Im Hintergrund leicht sichtbares Holzmuster 
- Absprache: Wasserzeichen des Logos ebenso im Hintergrund

### 3.3.2 Inhaltliche Anforderungen
Pflichtangaben wurden eingehalten:
– Anschrift
– Kontakt: nach Absprache soll es möglich sein, auf die E-Mail zu klicken, um eine Nachricht zu senden. Dies wurde per mailto-Link ermöglicht.
– Vertreter
– Umsatzsteuer-ID
– Verantwortlicher
– Haftungstexte


## 3.4 Datenschutzseite

### 3.4.1 Optische Gestaltung 

- **Css**: Hintergrund weiß, Überschrift Dunkelblau, schwarze Standard-Schrift eingehaltn.

### 3.4.2 Inhaltliche Anforderungen

- Die Texte wurden DSGVO-konform verfasst.

## 4. Testkonzept
Die durchgeführten Funktions-, Layout- und Navigationstests sind im separaten Dokument
"Tests.md" vollständig dokumentiert. Dort werden für jeden Test das Testziel, der Ablauf und das Testergebnis aufgeführt.
Die Tests überprüfen u. a.:
- Navigation
- Suchfunktion
- Reservierungsformular
- Weiterleitungen
- Speisekartenfunktion
- mailto-Link
- Designvorgaben und Responsivität

## 5. Abnahmekriterien

Die Seite wurde gemäß den Anforderungen aus dem Lastenheft erstellt. Einige Absprachen wurden gemacht, diese werden an den jeweiligen Stellen im Pflichtenheft erwähnt.
Zudem funktionieren alle Buttons fehlerfrei mit einer Schnellen Ladezeit (<2 Sekunden). Dies wurde im Testbericht nochmal verdeutlicht. 








