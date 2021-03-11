/*Palavra que escrita de trás para frente é igual, ex.: Arara

Parte 1 - Receber uma palavra e guardar em uma variável
Parte 2 - Inverter a palavra e armazenar em outra variável
Parte 3 - Comparar a palavra original com a invertida. Se for
igual é palíndromo
*/


var palavra = "arara";
var palavraInvertida = "";

for(var i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida){
    console.log(palavraInvertida + " é um palindromo!");
}else{
    console.log(palavra + " não é um palindromo!");
}
