"use strict";
//Dado un array de enteros positivos
//que representan los valores de monedas en tu posesión,
//escribe una función que devuelva la cantidad mínima de cambio (la suma mínima de dinero)
//que **no puedes** crear. Las monedas dadas pueden tener cualquier valor entero positivo
//y no necesariamente son únicas (es decir, puedes tener múltiples monedas del mismo valor).
Object.defineProperty(exports, "__esModule", { value: true });
// Por ejemplo, si se te da monedas = [1, 2, 5], la cantidad mínima de cambio que no puedes crear es 4. Si no se te da ninguna moneda, la cantidad mínima de cambio que no puedes crear es 1.
// Entrada Ejemplo
// monedas = [5, 7, 1, 1, 2, 3, 22]
// Salida Ejemplo
// 20
function minCoinsToMakeChange(coins) {
    if (coins.length === 0) {
        return 1;
    }
    coins.sort((a, b) => a - b);
    let minChange = 1;
    coins.forEach((coin) => {
        if (coin <= minChange) {
            minChange += coin;
        }
    });
    return minChange;
}
exports.default = minCoinsToMakeChange;
const coins = [5, 7, 1];
const minAmount = minCoinsToMakeChange(coins);
console.log(`La cantidad mínima de cambio que no puedes crear es: ${minAmount}`);
