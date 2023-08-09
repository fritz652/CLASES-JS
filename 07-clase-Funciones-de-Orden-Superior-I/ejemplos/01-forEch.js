
//EJECUTA UNA FUNCION PARA CADA ELEMENTO DEL ARRAY

/* :::::EL FORECH ES DESTRUCTIVO::::::: */

const frutas = ["manzana", "pera", "naranja"];

frutas.forEach(
    function(fruta){
        console.log(fruta.toLocaleUpperCase() + " BARATA")    //convierte a mayuscula cada fruta
    }
)

//ejemplo 2

const numeros= [1,2,3,4,5,6];

numeros.forEach(
    function(num){
        console.log(num*2)
    }
)