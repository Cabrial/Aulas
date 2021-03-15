/*
    Criar um jogo  no qual o jogador tenha que adivinha um número. O jogo deve gerar um número aleatório entre 1 e 100, e depois desafiar o jogador a adivinha o número em no 
    máximo 10 tentativas. A cada tentativa caso o jogador não tenha acertado o número, o jogo dever informar se o número informado é maior ou menor que o sorteado. O jogo termina
    se o jogador acertar o número ou acabarem o número de tentativas.

    1) Gerar um número aleatório entre 1 e 100
    2) Inicializar o número de tentativas como 10
    3) Pediro o jogador para tentar adivinhar o número
    4) Decrementar o número de tentativas
    5) Verificar se a tentativa está correta
    6) Se a tentativa estiver correta:
        - Informar que acertou o número
        - Encerrar o jogo
    7) Se estiver incorreta e acabaram as tentativas:
        - Informar que ele não venceu
        - Encerrar o jogo
    8) Se estiver incorreta e ainda existirem tentativas:
        - Informar se a tentativa é maior ou menor que o número sorteado
        - Pedir outra tentativa ao jogador
*/
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//math.roun serve para arredondar um número
//math.random serve para gerar um número aleatório
var numeroAleatorio = Math.round(Math.random() * 100);
if (numeroAleatorio === 0){
    numeroAleatorio = 1;
}

var numertoTentativas = 10;
//console.log(numeroAleatorio)

pergunta();

function pergunta() {
rl.question("Digite um número de 1 a 100: ", function(numero){
    numero = parseInt(numero);
    console.log(numero)
    numertoTentativas--;
    if(numero === numeroAleatorio){
        console.log("Parabéns, você acertou o número!");
        rl.close();
    }else if (numertoTentativas === 0){
        console.log("Que pena, você não descobriu o número em 10 tentativas!");
        rl.close();
    }else if (numero > numeroAleatorio) {
        console.log("Número errado, você ainda tem " + numertoTentativas + " tentativas. " + "O número informado é maior que o sorteado.");
        pergunta();
    }else if (numero < numeroAleatorio) {
        console.log("Número errado, você ainda tem " + numertoTentativas + " tentativas. " + "O número informado é menor que o sorteado.");
        pergunta();
    }
})
};