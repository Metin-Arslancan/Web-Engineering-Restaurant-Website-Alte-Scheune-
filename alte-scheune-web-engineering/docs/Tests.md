# Testbericht zur Webseite "alte Scheune"

- Betriebssystem: Windows 11
- Testdatum 25.11.25
- Tester: Gruppe 47 


## Einleitung

Das Dokument dient dazu, um einige Tests an der Webseite "alte Scheune" durchzuführen, um anhanddessen festzustellen, ob die 
Anforderungen erfolgreich implementiert wurden. Die Tests werden wie folgt dokumentiert. Zuerst wird das **Ziel** verfasst, also
was man mit dem Test überprüfen / erzielen möchte. Im zweiten Schritt soll der **Ablauf**, und im letzten dann das **Ergebnis** 
dokumentiert werden. 
Im folgenden werden 6 Tests durchgeführt. 

## 1. Test

- **Ziel**: Hervorhebung des aktuellen Reiters in der Navigationsleiste in der Farbe Gold. Alle anderen Reiter sollen kleiner in hellgrau dargestellt werden

- **Ablauf**:

    1. Webseite aufrufen
    2. Oben rechts auf Navigationsleiste schauen
    3. "Home" gold hervorgehoben? 
    4. auf andere Reiter klicken 
    5. schauen ob diese hervorgehoben werden und andere hellgrau werden

- **Ergebnis**:
    - "Home" ist gold hervorgehoben. 
    - andere Reiter sind grau
    - sobald man wechselt, wird der aktuelle Reiter gold, die anderen grau
    - _**Test bestanden**_

## 2. Test

- **Ziel**: Ausfüllen des Formulars zum Reservieren mit einer Bestätigung nach dem Absenden.

- **Ablauf**: 
    1. Webseite aufrufen 
    2. auf den Button "Reservierung per E-Mail" klicken
    3. Erscheint Formular zum ausfüllen?
    4. alle Felder ausfüllen, währenddessen auf gültige Daten achten
    5. auf "Reservierung abschicken" klicken
    6. Wird Meldung "Reservierung erfolgreich" angezeigt? 
 

- **Ergebnis**
    - Formular Erscheint
    - ungültiges Email-Format wird nicht akzeptiert 
    - abschicken erfolgreich
    - Meldung erscheint 
    - **_Test bestanden_**

## 3. Test

- **Ziel**: Bei der Speisekarte unten auf eine Kategorie klicken, sodass
man zum jeweiligen Abschnitt kommt.

- **Ablauf**
    1. Webseite aufrufen
    2. Runterscrollen zum Abschnitt "Unsere Speisekarte"
    3. nach der Reihe von links nach rechts auf einen Button klicken, bis Getränke.
    4. Springt man nach unten zu dem jeweiligen Abschnitt?

- **Ergebnis**
    - bei jedem Button springt man zu dem zugehörigen Abschnitt 
    - _**Test bestanden**_

## 4. Test

- **Ziel**: Weiterleitung im Footer zu Impressum / Datenschutzerklärung

- **Ablauf**
    1. Webseite aufrufen 
    2. Runterscrollen bis der dunkelblaue Footer erscheint 
    3. Auf Impressum oder Datenschutzerklärung klicken 
    4. Schauen, ob man auf die jeweilige Seite kommt

- **Ergebnis**
    - man wird automatisch bei einem Klick auf die jeweilige Seite weitergeleitet
    - _**Test bestanden**_


## 5. Test

- **Ziel**: Weiterleitung auf der Impressungsseite, wenn man auf die Email klickt, dass man mit einem mailto Link die Mail-App öffnet mit einem Fenster, wo man der Email direkt eine Nachricht schicken kann. 


- **Ablauf**
    1. Webseite aufrufen 
    2. Auf der Navigationsleiste "Impressum" auswählen
    3. Unter dem Punkt "Kontakt" auf die E-Mail klicken
    4. Schauen, ob die eigene E-Mail-App geöffnet wird

- **Ergebnis**
    - man wird direkt auf die Email-App weitergeleitet und ein Fenster erscheint um eine Nachricht direkt zu versenden
    - _**Test bestanden**_

## 6. Test

- **Ziel**: Suchfunktion, soll wie Strg+ F funktionieren

- **Ablauf**
    1. Webseite aufrufen 
    2. Auf der Navigationsleiste auf die Lupe klicken
    3. einige Buchstaben eintippen, zb "Des"
    4. Schauen, ob mehrere, in dem Fall 4 Treffer existieren

- **Ergebnis**
    - es gibt mehrere Treffer, funktioniert genau wie die Strg + F - Funktion
    - _**Test bestanden**_


## Schlussfolgerung 

Die Testfälle haben ergeben, dass die Anforderungen aus dem Lastenheft erfolgreich umgesetzt wurden. Alle Tests zeigen, dass die 
Funktionalität und die Benutzerfreundlichkeit gegeben ist. Zudem wurden auch die Design-Vorgaben eingehalten, wie man beispielsweise vom ersten Test entnehmen kann.

