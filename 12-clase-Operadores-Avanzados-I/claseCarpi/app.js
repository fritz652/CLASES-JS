/* 
    VALORES FALSY
    0, null, undefined, NaN, false, string vacio

    VALORES NULLISH
    null, undefined

*/


// Operadores +=   y   ++

let numero = 10;

numero = numero + 1; // esto se puede resumir así:  numero += 1;

console.log(numero);// 11

         //veamos un ejemplo donde se simplifica:
            let numero1 = 10;
            numero1 += 1;
            console.log(numero1);// 11

         //nota:  el  n +=i; permite que se pueda ingrementar diferentes cantidades
         //       como por ejemplo:  n += 2 ; n += 3 ; etc.
         // sin embargo el  n +=1 se que ingrementa de a uno se pude simplificar como n++;

         //n++: incrementa en una cantidad del valor actualmente almacenado en la variable.
            let numero3 = 10;
            numero3 ++;
            console.log(numero3);// 11

/* :::::::::::::::::::::::::::::::::::::::::::::::::::::: */
/* :::::::::::::::::OPERADOR TERNARIO:::::::::::::::::::: */
/* :::::::::::::::::::::::::::::::::::::::::::::::::::::: */    

let edad = 21;

if (edad >=18){
    console.log("Puedes ingresar"); // "Puedes ingresar"
}else{
    console.log("No puedes ingresar");
}

// veamos el mismo ejemplo con operador ternario:

// Sintaxis:      condicional ? : resultado1: resultado2;

let edad2 = 21;

edad2 >=18 ? console.log("puedes ingresar"): console.log("no puedes ingresar");// "puedes ingresar"
// se puede sintetisar aun mas, de la diguiente manera:

console.log( edad3 > 18 ? "puedes ingresar" : "no puedes ingresar");// puedes ingresar


