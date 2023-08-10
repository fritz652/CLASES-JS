/* libreria para poner fechas */
/* https://moment.github.io/luxon/#/?id=luxon */

let DateTime = luxon.DateTime;

const now = DateTime.now();
console.log(now.year); //  en la consola saldra: 2023