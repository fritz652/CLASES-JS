/* 
    La propiedad innerText d eun nodo, nos permite modificar su nodo de texto.
    Es decir acceder y/o modificar textualmente un elemento del DOM
*/

//mostramos el contenido de texto con js en la consola
let titulo = document.getElementById("titulo"); // con get... se consigue, esto se puede hacer tambien con el querySelector
console.log( titulo.innerText ); //"Hola mundo"

// cambio de contenido texto con js en la consola y en la vista para el usuario
titulo.innerText = "Hola Cofer!!!";
console.log(titulo.innerText);// "Hola Coder"