/* 
Escribe un código en JavaScript  que le pregunte a alos ususarios
cuánto es `2 +2`. Si responde bien, mostramos un mensaje de felicitaciones, pero
si responde mal, volvemos a empezar.
*/

let respuesta;

while(respuesta !== "4"){   // mientras x sea diferente que 4
    let pregunta = prompt(`¿Cuánto es 2 mas 2?`); // ejecutar este codigo
    respuesta = pregunta;
}