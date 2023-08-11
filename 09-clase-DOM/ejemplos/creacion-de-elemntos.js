/* Creacion de elementos: */

/* 

Para crear elementos se usa la función:  

document.createElement(), 

y se debe indicar el nombre de etiqueta HTML que representará ese elemento.
Luego debe agregarsele como hijo el nodo creado con :  

appednd(),

al body o a otro nodo del coumento actual.

*/
let body = document.querySelector(".body");

let lista = document.createElement("ul");
lista.classList.add("lista"); // le asiganos una clase
lista.innerHTML = `<li class="lista-item">item-1</li>`; // creamos li con clase y contenido
lista.innerHTML += `<li class="lista-item">item-1</li>`;// creamos li con clase y contenido
lista.innerHTML += `<li class="lista-item">item-1</li>`;// creamos li con clase y contenido

document.body.append(lista); // agrega en la web en el nodo body

console.log(lista);// agrega en el console


// vemos un ejemplo de creacion de elememnto a otro nodo que no sea el body:

let nodoExistente = document.querySelector(".classContenido");

let newElement = document.createElement("p");
newElement.classList.add("newClassElement");
newElement.innerText = `soy un nuevo parrafo`;

nodoExistente.append(newElement); // agrega en la web en un nodo existente

console.log(newElement); // para visualisar en el console


