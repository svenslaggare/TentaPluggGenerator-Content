TentaPluggGenerator-Content
===========================

Innehåller kurser, prov och frågor till http://tenta.antjans.se

###Lägga till/ändra fråga###
Alla frågor och svar skrivs med markup språket "BB tags" ([tag][/tag]).
De mest instressanta taggarna är:

| Namn          | Beskriving                                | Exempel                                   |
| ------------- | ----------------------------------------- | ------------------------------------------|
| b             | Gör texten fett markerad.                 | `[b]text[/b]` ger **text**                |
| i             | Gör texten kursivt markerad.              | `[i]text[/i]` ger _text_                  |
| math          | Tolkar texten som en matematisk formel.   | Se nedan.                                 |
| latex         | Tolkar texten som LaTeX.                  | Se nedan. I de flesta fallen duger `math` |

Den notation som används för att tolka matematiska formler är [ASCIIMath](http://www1.chapman.edu/~jipsen/mathml/asciimath.html). Se andra frågor för förslag hur det skall användas.

###Testa lokalt###
Alla ändringar bör testas lokalt. Detta görs enklast med "testViewer.html" (som finns i repo:t) där du kan ladda in ett prov fil. För att använda programmet i Chrome, se: http://robspangler.com/blog/jquery-load-doesnt-work-in-chrome/.
