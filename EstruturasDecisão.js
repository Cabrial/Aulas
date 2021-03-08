var a = 50;
var b = 60;
if ( a> b){
    //Condição a ser executada
    console.log("A maior do que B.");
    
}else if (a < b) {
    //Senão executa código abaixo
    console.log("B maior do que a.");

}else{
    console.log("A e B são iguais!");
}

if (a > b){
    console.log("Executar somente se A maior que B.");
}
console.log("Sempre executar!");

var c = 30;
var d = 30;

if (c >= d){
    console.log("C maior ou igual a D!");

}
if (d <= c){
    console.log("D menor ou igual a C!");

}

var e = 10;
var f = "10";

if (e == f){ 
    console.log("E é igual a F!");//Com dois == faz a conversão para comparar, com três iguais não faz conversão.
    
}

var g = 10;
var h = "10";

if (g != h){
    console.log("G diferente de H!");

}

var i = 4;
var j = 3;
var k = 5;
var l = 5;
if ((i > j) && (l > k)){ // && Significa E
    console.log("I maior do que J!");
}
if ((i === j) || k === l){ // || significa OU
    console.log("Um dos dois eram válidos!");
    if (k === 5 ){
        console.log("K igual a 5!")
    }
}

if (!(1 > 2)){ // ! serve para negar a afirmação.
    console.log("Execute!");
}

var fruta = ""
var valor = 0
if (fruta === "Banana"){
    valor = 2;
}else if (fruta === "Maçã"){
    valor = 3;
}else if (fruta === "Abacaxi"){
    valor = 4;
}else if (fruta === "Melão"){
    valor = 5;
}else if (fruta === "Mamão"){
    valor = 5.50;
}else{
    valor = 10;
}
//console.log("Valor: " + valor);

switch(fruta){
    case "Banana":
        valor = 2;
        break;
    case "Maçã":
        valor = 3;
        break;
    case "Abacaxi":
        valor = 4;
        break;
    case "Melão":
        valor = 5;
        break;
    case "Mamão":
        valor = 5.50;
        break;
    default:
        valor = 10;
}
console.log("Valor: " + valor);

var x = 3;
var y = 2;
var resultado = "";

if (x > y){
    resultado = "X maior do que Y!";
}else{
    resultado = "Senão";
}
console.log(resultado);

resultado = x > y ? "X maior do que Y!" : "Senão";
console.log(resultado);