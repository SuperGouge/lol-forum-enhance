[b]Hallo ForumCommunity![/b]


Nach all der "Schimpferei" über fehlende Avatare hier im Forum und nachdem mir selbst die ein oder andere Verbesserungsmöglichkeit auffiel, habe ich mich rangesetzt ein kleines Plug-In zu programmieren was das Forum etwas angenehmer gestalten sollte.

Dabei kam heraus: [i]LoL Forum Enhance[/i]
Ein Plug-In, dass über das Add-On [i]Greasemonkey[/i] im Firefox-Browser (bzw. über [i]Tampermonkey[/i] in Chrome) ohne Probleme läuft.

Ohne Anmeldung und schon nach dem installieren (& aktualisieren der Seite) zeigt es im Forum die ausgewählten Beschwörer-Icons aus dem Spiel an.
Nicht nur bei sich selbst, sondern auch bei allen anderen Spielern.



[u][b]Dies funktioniert folgendermaßen:[/b][/u]

Die Daten (ausschließlich öffentlich zugängliche natürlich) werden durch ein API von der Seite Elophant.com (vergleichbar mit Lolking.com) ermittelt, temporär zwischengespeichert und direkt in den Avatar-Feldern des Forums angezeigt.
Verwendet wird nur das Beschwörer-Icon (nun als Forum-Avatar) und das Beschwörer-Level, dass den Platz in dem Kreis mit den Fragezeichen füllt.

[u]Wenn ein Avatar nicht geladen wird, kann das an Folgendem liegen:[/u]
• der Beschwörer existiert nicht mehr. -- [i]Das lässt sich leider nicht ändern.[/i]
• die Informations-Server sind überlastet. -- [i]Da lässt sich auch nicht viel machen, außer abwarten. Sobald es wieder möglich ist Daten abzufragen wird das auch sofort passieren.[/i]
• das Beschwörer-Icon ist noch nicht in der Datenbank bekannt. -- [i]Das äußert sich durch einen leicht goldeneren Fragezeichen-Platzhalter als Avatar. Wenn das vorkommt wäre es hilfreich, ihr würdet mir das mitteilen.[/i]

Diese Änderungen betreffen absichtlich [b]keine[/b] [i]Riotler[/i], [i]Wrenchmen[/i], [i]Emissaries[/i] und andere, die standardmäßig ein anderes Avatar haben.

Im Übrigen wird die Schnell-Antworten-Leiste am unteren Seitenende etwas überarbeitet (nun etwas größer und das eigene Beschwörer-Icon wird vor der Leiste angezeigt).



[u][b]Installations-Anleitung[/b][/u]

1. Je nachdem welchen Brower ihr verwendet, müsstet ihr zuerst folgendes Add-On herunterladen und installieren:
In Firefox: [url="https://addons.mozilla.org/de/firefox/addon/greasemonkey/"]Greasemonkey auf addons.mozilla.org[/url].
In Google Chrome: [url="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"]Tampermonkey auf chrome.google.com[/url].
[I]Greasemonkey und Tampermonkey sind bekannte AddOns für Firefox/Chrome, die das Verwenden von Benutzerscripten ermöglicht.[/I]

2. Nun könnt ihr [URL="https://raw.github.com/philippwiddra/lol-forum-enhance/master/client/main.user.js"]LoL Forum Enhance herunterladen und installieren[/URL].

Beim nächsten Aktualisieren der Forum-Seite sollte das Plug-In laufen.


Wer möchte, der kann sich auch gern den Programmcode auf dieser Seite ansehen, darüber diskutieren und gegebenenfalls Verbesserungen vorschlagen:
[url]https://github.com/philippwiddra/lol-forum-enhance[/url]



Hoffentlich können einige Forum-Nutzer hierfür Verwendung finden. Über konstruktives Feedback würde ich mich natürlich sehr freuen.
Ich plane übrigens, dieses Add-On (sei es als natives Add-On, oder als Benutzerscript) auch weiterhin zu aktualisieren und zu erweitern, wenn das Forum die quasi-angekündigte Überarbeitung bekommt.

Liebe Grüße,
ButWhyMe


[u][b]Vorschau:[/b][/u]