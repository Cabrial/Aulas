var carros = ["Gol", "Palio", "Uno"];
console.log(carros);

console.log("Primeira posição: " + carros[0]); //Sempre começa no zero, não no um.
console.log("Segunda posição: " + carros[1]);
console.log("Terceira posição: " + carros[2]);

carros[2] = "Argo";

console.log(carros[2]);

console.log("Tamanho do array: " + carros.length);
console.log("Último elemento do array: " + carros[carros.length - 1]);

carros[3] = "Sandero";

console.log("Último elemento do array: " + carros[carros.length - 1]);

carros[carros.length] = "Honda Fit";

console.log("Último elemento do array: " + carros[carros.length - 1]);
console.log("Tamanho do array: " + carros.length);

carros.push("Polo");
console.log(carros);

carros.push(123);
console.log(carros);