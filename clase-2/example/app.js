/* 
variables
condicionles
mostrarlo en pantalla
operadores aritmeticos
operadores logicos
*/

console.log("vendo algo en una subasta, escucho ofertas")

let precioBase = 2000;
let ofertaDelUsuario = parseInt(prompt("ingresa tu oferta"));


if (ofertaDelUsuario <= 1000)  {
    console.log(`Tu oferta es demasiado baja`)}
    else if(ofertaDelUsuario <= 2000 &&ofertaDelUsuario > 1000){
        console.log('estirate un poco más')
    } else if(ofertaDelUsuario > precioBase){
        console.log("oferta aceptada, te enviare unmensaje")
    } else {
        console.log("por favor escribe un número")
    }
