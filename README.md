TentaPluggGenerator-Content
===========================

Innehåller kurser, prov och frågor till http://tenta.antjans.se

###Lägga till/ändra fråga###
Alla frågor och svar skrivs med markup språket "BB tags" ([tag][/tag]).
De mest instressanta taggarna är:

| Namn          | Beskriving                                | Exempel                                   |
| ------------- | ----------------------------------------- | ------------------------------------------|
| b             | Gör texten fett markerad.                 | `[b]text[/b]` ger **text**                |
| i             | Gör texten kursiv markerad.               | `[i]text[/i]` ger _text_                  |
| math          | Tolkar texten som en matematsik formel    | Se nedan.                                 |
| latex         | Tolkar texten som en matematsik LaTeX     | Se nedan. I de flesta fallen duger `math` |

Den notation som används för att tolka matematisk notation är [ASCIIMath](http://www1.chapman.edu/~jipsen/mathml/asciimath.html). Se andra frågor för förslag hur det ska användas.

###Testa lokalt###
Alla ändringar bör testas lokalt. Dettas gör enklast med "testViewer.html" där du kan ladda in test filerna. För att använda i Chrome, se: http://robspangler.com/blog/jquery-load-doesnt-work-in-chrome/.
