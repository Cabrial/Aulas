/*Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?*/

//Parte 1 - Realizar a leitura do arquivo e armazenar em memória
//Parte 2 - Ordenar os nomes em ordem alfabética
//Parte 3 - Calcular o score do nome
//Parte 4 - Somar todos os Scores

var nomes = [];
var fs = require("fs");

fs.readFile("names.txt", "utf-8", function(err, data){
    if (err) {
        console.log(err);
    }else {
        nomes = data.split(",");//Para configurar o arquivo como array. A vírgula é o delimitador das palavras
        nomes.sort()
        console.log(nomes);
    }
})
