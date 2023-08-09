// MAP crea un nuevo array con el resultado de llamar a una funcion para casa elemento del array

const numeros = [1,2,3,4,5,6];

// declaro const doble y guardo el nuevo array:

const doble = numeros.map (
    function(numero){ // recorre cada elemento
        return numero * 2
    }
)

console.log(doble); // [2, 4, 6, 8, 10, 12]



