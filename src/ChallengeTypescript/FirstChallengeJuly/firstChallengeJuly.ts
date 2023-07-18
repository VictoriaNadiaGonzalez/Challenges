// Dadas dos matrices no vacías de números enteros,
// escribe una función que determine si la segunda matriz es una subsecuencia de la primera.
// Una subsecuencia de una matriz es un conjunto de números que no necesariamente son adyacentes en la matriz
// pero que están en el mismo orden en que aparecen en la matriz.

// Por ejemplo, los números [1, 3, 4] forman una subsecuencia de la matriz [1, 2, 3, 4], al igual que los números [2, 4].
// Ten en cuenta que un solo número en una matriz y la matriz misma son ambas subsecuencias válidas de la matriz.
// Entrada de ejemplo:
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]
// Salida de ejemplo:
// true

function isSubsequence(array: number[], sequence: number[]): boolean {
  const remainingArray = [...array];

  return sequence.every((num) => {
    const index = remainingArray.indexOf(num);
    if (index === -1) {
      return false;
    }
    remainingArray.splice(0, index + 1);
    return true;
  });
}

const arrayOfNumbers = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [5, 1];
console.log(isSubsequence(arrayOfNumbers, sequence)); // true
