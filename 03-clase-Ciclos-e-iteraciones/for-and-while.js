// Ejemplo con for en incremento:
for ( let i =0; i <= 10; i++){  //-------------> desde, hasta, incremento // declaracion;condicion, incremento
    console.log("El valor de i es : " +i); // ----> sentencia
}

// Ejemplo con while en decremento:
let index = 0; // la declaracion se hace fuera del while

while(index <= 10) { // la condicion se hace dentro del parentesis
    console.log("El valor index es:" + index); // la sentencia si se hace dentro de las llaves
    index ++; //el incremento o decremento se hace dentro de las llaves
}


// ejemplo con for en decremento

for (let x = 10; x > 0 ; x--) {
    console.log(`EL valor de x es: ${x}`);
}

// ejemplo con while en decremento

let y = 10;

while ( y > 0){
    console.log(`El valor de y es: ${y}` );
    y--;
}