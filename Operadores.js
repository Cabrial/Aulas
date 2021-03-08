var soma = 4 + 2;
var subtracao = 5 - 3;
var multiplicacao = 5 * 4;
var divisao = 20 / 4;
var resto = 20 % 3;

console.log("Soma: " + soma);
console.log("Subtracao: " + subtracao);
console.log("Multiplicacao: " + multiplicacao);
console.log("Sivisao: " + divisao);
console.log("Resto: " + resto);

var num1 = 10;
var num2 = 50;
var resultado = (num2 + num1) / (8 + 2);
console.log("Precedencia: " + resultado);

var incremento = 1;
incremento = incremento + 1
incremento++
console.log("Incremento: " + incremento)

var atribuicaoComAdicao = 5;
atribuicaoComAdicao += 6; // O mesmo que atribuicaoComAdicao = atribuicaoComAdicao + 6
console.log("Atribuição com Adição: " + atribuicaoComAdicao);

var decremento = 5;
decremento --;
console.log("Decremento: " + decremento);

var atribuicaoComSubtracao = 10;
atribuicaoComSubtracao -= 4; // O mesmo que atribuicaoComSubtracao = atribuicaoComSubtracao - 4;
console.log("Atribuição com Subtração: " + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 4;
atribuicaoComMultiplicacao *= 5; // o Mesmo queatribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 5;
console.log("Atribuição com Multiplicação: " + atribuicaoComMultiplicacao);

var atribuicaoComDivisao = 20;
atribuicaoComDivisao /= 4; // O mesmo atribuicaoComDivisao = atribuicaoComDivisao / 4;
console.log("Atribuição com Divisão: " + atribuicaoComDivisao);

var a = 4;
var b = 3;
var adicaoIncrementoPosterior = a + b++;
console.log("Adição com Incremento Posterior: " + adicaoIncrementoPosterior);

var adicaoIncrementeAnterior = a + ++b;
console.log("Adição com Incremento Anterior: " + adicaoIncrementeAnterior);

var c = 5;
var d = 6;
var subtracaoIncrementoPosterior = c + d--;
console.log("Subtração com decremento Posterior: " + subtracaoIncrementoPosterior);

var subtracaoIncrementeAnterior = c + --d;
console.log("Subtração com decremento Anterior: " + subtracaoIncrementeAnterior);