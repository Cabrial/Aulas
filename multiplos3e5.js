/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

var total = 0;

// Meu jeito
for (var num = 0; num < 1000; num++){
    if ((num % 3 === 0) || (num % 5 === 0)){
        total += num
    }
}
console.log(total)

//Do professor
var multiplos = [];
for (var i = 0; i < 1000; i++){
    if ((i % 3 === 0) || (i % 5 === 0)){
        multiplos.push(i);
    }
}
var sum = 0;
for (var i = 0; i < multiplos.length; i++){
    sum += multiplos[i];
}
console.log(sum);