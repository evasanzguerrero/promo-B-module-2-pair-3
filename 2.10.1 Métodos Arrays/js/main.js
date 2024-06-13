'use strict';


//------------------1. Numeritos---------------------------------------------------------

function get100Numbers() {
    let numbers = [];
    for (let i = 1; i <= 100; i++) {
        numbers.push(i)
    }
    return numbers;
}

let resultados= get100Numbers();
console.log(resultados)


function getReversed100Numbers() {
    let numbers = get100Numbers();
    numbers.reverse();
    return numbers;
}

let resultado = getReversed100Numbers();
console.log(resultado);

//----------------------2. The numbers----------------------------------------------------

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            array.push(arr[i]);
        }
    }
    return array;
}
let resultado1 = bestLostNomber(lostNumbers);
console.log(resultado1);

