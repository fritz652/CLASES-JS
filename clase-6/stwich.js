// primero declaramos variables que pueden ser usadas como tal o como funciones

//ejemplo 1
let pedido; 
let plato;
let menu;

menu = function (plato){
    //let pedido;
    switch(plato){
        case `seviche`:
            pedido = "el seviche cuesta S/15.00";
            break;
        case `estofado`:
            pedido ="el estofado cuesta S/10.00";
            break;
    }
    return pedido;
}
console.log(menu("seviche")) // el seviche cuesta S/ 150.00



//ejemplo 2

let producto = "hamburguesa";
switch(producto) {
    case "pizza":
        console.log(`${producto} ......S/ 10.50`);
        break;
    case "hamburguesa":
        console.log(`${producto} ...... S/ 7.5`) // hamburguesa ...... S/ 7.5
        break
    case "helado":
        caches.log(`${producto} ......S/5.50`)
}


//ejemplo 3
// dias de la semana con stwich

let dia;
let diaFavorito;
let diaX;

diaFavorito = function(dia){
    //diaX; variable delarada
    switch(dia){
        case 1:
            diaX = "lunes";
            break;
        case 2:
            diaX = "martes";
            break;
        case 3:
            diaX = "miercoles";
            break
    }
    return diaX; //variable retornada;
}

console.log(diaFavorito(2)); //martes


// ejemplo mas interactivo con promp y alert


// declaramos variables globales:

let fruta;
let frutaFavorita; // apra la funcion anonima
let miFruta;


frutaFavorita = function(fruta){
    // let miFruta
    fruta = prompt(`¿cuál de estas tres frutas es tu favorita: platano, naranja o fresa. `)
    switch(fruta){
        case `platano`:
            miFruta = `mi fruta favorita es el platano`;
            breack;
        case `naranja`:
            miFruta = `mifruta favorita es la naraja`;
            break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        case `fresa`:
            miFruta = `mi fruta favorita es la fresa`;
            break;
    }
    return miFruta; // se aconseja poner aqui return no alert, pero si va alert entonces abajo se invoca con console
    //alert(miFruta); // alert() o return no juntos.
}
alert(frutaFavorita())

//console.log(frutaFavorita());

