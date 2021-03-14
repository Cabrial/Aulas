var carros = [ "Gol", "Palio", "Uno", "Sandero"];
var carro = carros.pop();

//pop remove o último elemento do array e retorna o elemento removido
/*console.log(carro);
console.log(carros);*/

//push insere um novo elemento ao fim do array e retorna seu novo tamanho
var x = carros.push("Ford Ka");
/*console.log(carros);
console.log(x);*/

//Shift remove o primeiro elemento do array e retorna ele e atualiza os outros índices (não deixa um undefined no lugar do elemento removido)
var carro = carros.shift();
/*console.log(carro);
console.log(carros)*/

//Unshift adiciona um elemento no início do array, atualiza os outros índices (não deixa um undefined no lugar do elemento removido) e retorna o novo tamanho do array
x = carros.unshift("Onix");
/*console.log(carros);
console.log(x);*/

//atualiza elemento no índice informado
carros[2] = "Novo Uno";
//console.log(carros);

//Remove elemento do índice informado, deixando um undefined no lugar
/*delete carros[2];
console.log(carros[2]);*/

/*
    primeiro parâmetro: posição inicial
    segundo parâmetro: quantos elementos serão removidos a partir da posição inicial
    terceiro parâmetro: elementos que serão inseridos a partir da posição indicada
*/
carros.splice(2, 0, "HRV", "Creta");
//console.log(carros);
//splice apaga sem deixar undefined
carros.splice(2,1)
//console.log(carros);

var carrosAntigos = ["Brasília", "Monza","Fusca"];
var carrosAntigos2 = ["Corcel","Chevette"];
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);
//console.log(todosCarros);

/*Slice cria um novo array sem alterar o array original
    primeiro parâmetro: posição inicial
    segundo parâmetro (opcional): posição finçal (não incluso)
*/
var novoArray = todosCarros.slice(1);
//console.log(todosCarros);
//console.log(novoArray);

var novoArray2 = todosCarros.slice(2,5);
//console.log(todosCarros);
//console.log(novoArray2);