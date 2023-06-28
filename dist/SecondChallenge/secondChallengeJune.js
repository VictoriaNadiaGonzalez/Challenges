"use strict";
/* Escribe una función que reciba una matriz no vacía de enteros distintos
y un número entero que representa una suma objetivo.
Si cualquier par de números en la matriz de entrada suma la suma objetivo,
la función debe devolverlos en una matriz,
en cualquier orden.
Si no hay dos números que sumen la suma objetivo,
la función debe devolver una matriz vacía.
Ten en cuenta que la suma objetivo debe obtenerse sumando dos números diferentes en la matriz;
no puedes sumar un solo número consigo mismo para obtener la suma objetivo.
Puedes asumir que habrá a lo sumo un par de números cuya suma sea igual a la suma objetivo.*/
function findPairWithSum(array, targetSum) {
    if (array.length === 0) {
        throw new Error("El array de entrada no puede ser vacío");
    }
    else {
        const arrayWithoutDuplicates = new Set(array);
        const arrayConverted = [...arrayWithoutDuplicates];
        const foundPair = arrayConverted.find((num, index) => {
            const difference = targetSum - num; //calculates difference between actual number and target
            return arrayConverted
                .slice(index + 1)
                .some((otherNum) => otherNum === difference); //using some to find a number equal than the difference
        });
        // if u can find a pair of numbers return the pair, else return an empty array
        return foundPair ? [foundPair, targetSum - foundPair] : [];
    }
}
// Entrada de ejemplo:
const arrayEmpty = [];
const array = [2, 5, -15, 25];
const arrayWithoutPair = [2, 4, 5, 3];
const targetSum = 10;
// Salida de ejemplo: [-1, 11] // los números podrían estar en orden inversos
// console.log(findPairWithSum(arrayEmpty, targetSum)); //error
console.log(findPairWithSum(array, targetSum)); //  [ -15, 25 ]
console.log(findPairWithSum(arrayWithoutPair, targetSum)); // []
