//Sirve para ordenar los elementos de un []


const numeros = [40, 1, 5,200];
numeros.sort((a,b) => a - b); //Ordena el array en forma ascendente
console.log(numeros); // [1, 5, 40, 200]


const numeros2 = [40, 1, 5,200];
numeros.sort((a,b) => b - a); //Ordena el array en forma descendente
console.log(numeros2); // [200, 40, 5, 1]
//NOTA:  Es un método destructivo