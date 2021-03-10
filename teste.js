/*console.log("Hello World");
console.log("Teste V2!");
var igti = 2
igti += 3
console.log(igti)*/

exibirNumerosPrimos(999);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        let ehprimo = true;

        for (let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0){
                ehprimo = false;
                break;
            }
        }

        if (ehprimo) console.log(numero);
    }    
}