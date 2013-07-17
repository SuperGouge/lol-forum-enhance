[b]Hallo ForumCommunity![/b]


Nach all der "Schimpferei" �ber fehlende Avatare hier im Forum und nachdem mir selbst die ein oder andere Verbesserungsm�glichkeit auffiel, habe ich mich rangesetzt ein kleines Plug-In zu programmieren was das Forum etwas angenehmer gestalten sollte.

Dabei kam heraus: [i]LoL Forum Enhance[/i]
Ein Plug-In, dass �ber das Add-On [i]Greasemonkey[/i] im Firefox-Browser (bzw. �ber [i]Tampermonkey[/i] in Chrome) ohne Probleme l�uft.

Ohne Anmeldung und schon nach dem installieren (& aktualisieren der Seite) zeigt es im Forum die ausgew�hlten Beschw�rer-Icons aus dem Spiel an.
Nicht nur bei sich selbst, sondern auch bei allen anderen Spielern.



[u][b]Dies funktioniert folgenderma�en:[/b][/u]

Die Daten (ausschlie�lich �ffentlich zug�ngliche nat�rlich) werden durch ein API von der Seite Elophant.com (vergleichbar mit Lolking.com) ermittelt, tempor�r zwischengespeichert und direkt in den Avatar-Feldern des Forums angezeigt.
Verwendet wird nur das Beschw�rer-Icon (nun als Forum-Avatar) und das Beschw�rer-Level, dass den Platz in dem Kreis mit den Fragezeichen f�llt.

[u]Wenn ein Avatar nicht geladen wird, kann das an Folgendem liegen:[/u]
� der Beschw�rer existiert nicht mehr. -- [i]Das l�sst sich leider nicht �ndern.[/i]
� die Informations-Server sind �berlastet. -- [i]Da l�sst sich auch nicht viel machen, au�er abwarten. Sobald es wieder m�glich ist Daten abzufragen wird das auch sofort passieren.[/i]
� das Beschw�rer-Icon ist noch nicht in der Datenbank bekannt. -- [i]Das �u�ert sich durch einen leicht goldeneren Fragezeichen-Platzhalter als Avatar. Wenn das vorkommt w�re es hilfreich, ihr w�rdet mir das mitteilen.[/i]

Diese �nderungen betreffen absichtlich [b]keine[/b] [i]Riotler[/i], [i]Wrenchmen[/i], [i]Emissaries[/i] und andere, die standardm��ig ein anderes Avatar haben.

Im �brigen wird die Schnell-Antworten-Leiste am unteren Seitenende etwas �berarbeitet (nun etwas gr��er und das eigene Beschw�rer-Icon wird vor der Leiste angezeigt).



[u][b]Installations-Anleitung[/b][/u]

1. Je nachdem welchen Brower ihr verwendet, m�sstet ihr zuerst folgendes Add-On herunterladen und installieren:
In Firefox: [url="https://addons.mozilla.org/de/firefox/addon/greasemonkey/"]Greasemonkey auf addons.mozilla.org[/url].
In Google Chrome: [url="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"]Tampermonkey auf chrome.google.com[/url].
[I]Greasemonkey und Tampermonkey sind bekannte AddOns f�r Firefox/Chrome, die das Verwenden von Benutzerscripten erm�glicht.[/I]

2. Nun k�nnt ihr [URL="https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.user.js"]LoL Forum Enhance herunterladen und installieren[/URL].

Beim n�chsten Aktualisieren der Forum-Seite sollte das Plug-In laufen.


Wer m�chte, der kann sich auch gern den Programmcode auf dieser Seite ansehen, dar�ber diskutieren und gegebenenfalls Verbesserungen vorschlagen:
[url]https://github.com/philippwiddra/lol-forum-enhance[/url]



Hoffentlich k�nnen einige Forum-Nutzer hierf�r Verwendung finden. �ber konstruktives Feedback w�rde ich mich nat�rlich sehr freuen.
Ich plane �brigens, dieses Add-On (sei es als natives Add-On, oder als Benutzerscript) auch weiterhin zu aktualisieren und zu erweitern, wenn das Forum die quasi-angek�ndigte �berarbeitung bekommt.

Liebe Gr��e,
ButWhyMe


[u][b]Vorschau:[/b][/u]