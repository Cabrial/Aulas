//console.log(process.argv);
//Para pegar as informações de posição

var operacao = process.argv[2];
var num1 = parseInt(process.argv[3]); //parseInt transforma em número inteiro
var num2 = parseInt(process.argv[4]);
var resultado

if (operacao === "soma"){
    resultado = num1 + num2;
}else if (operacao === "subtracao"){
    resultado = num1 - num2;
}else if (operacao === "multiplicacao"){
    resultado = num1 * num2;
}else if (operacao === "divisao"){
    resultado = num1 / num2;
}else if (operacao === "resto"){
    resultado = num1 % num2;
}else if (operacao === "porcentagem"){
    resultado = num1 * num2 / 100;
}


console.log(resultado);