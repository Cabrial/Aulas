//console.log(process.argv); 
//Para pegar as informações de posição

var operacao = process.argv[2];
var num1 = parseInt(process.argv[3]); //parseInt transforma em número inteiro
var num2 = parseInt(process.argv[4]);
var resultado

switch (operacao) {
    case "soma":
        resultado = num1 + num2;
        break;
    case "subtracao":
        resultado = num1 - num2;
        break;
    case "multiplicacao":
        resultado = num1 * num2;
        break;
    case "divisao":
        resultado = num1 / num2;
        break;
    case "resto":
        resultado = num1 % num2;
        break;
    case "porcentagem":
        resultado = num1 * num2 / 100;
        break;
    default:
        resultado = 0
        break;
}

console.log(resultado);