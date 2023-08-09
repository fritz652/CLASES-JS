//Sirve para ordenar los elementos de un []


const numeros = [40, 1, 5,200];
numeros.sort((a,b) => a - b); //Ordena el array en forma ascendente
console.log(numeros); // [1, 5, 40, 200]


const numeros2 = [40, 1, 5,200];
numeros2.sort((a,b) => b - a); //Ordena el array en forma descendente
console.log(numeros2); // [200, 40, 5, 1]
//NOTA:  Es un método destructivo


/* ::: Ejemplo 2 ::: */

const numbers = [7,9,5,3,2,1];

numbers.sort(
    function (a,b){
        return a-b;
    }
)

console.log(numbers); // [1, 2, 3, 5, 7, 9]


/* ::::Ejemplo3::::: */
// Aqui veremos un ejemplo con strings

const nombres = ["martin", "brian", "sebas", "leo", "camilo"];

nombres.sort();

console.log(nombres);// [ 'briam', 'camilo', 'leo', 'martin', 'sebas']

