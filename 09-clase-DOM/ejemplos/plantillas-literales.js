/* 
Las plantillas si un medio para incluir variables en la estructura HTML
de nodos nuevos existentes, modificando el innerHTML.
*/

let producto = {
    id      :   123,
    nombre  :   "Arroz blanco",
    precio  :    4.20
};

let contenedor = document.createElement("div");

// Definidmos el InnnerHTML del elemento con una plantilla de texto.

contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Prodcuto: ${producto.nombre}  </p>
                        <b>  $ ${producto.precio}</b>`;

//Agregamos el cntenedor creado al body:

document.body.append(contenedor);


/* Ejemplo 2: creando elementos desde objetos */

const productos = [ { id:1111, nombre: "Arroz", precio:4.5 },
                    { id:2222, nombre: "Fideo", precio:7   },
                    { id:3333, nombre: "Flan" , precio:5   },
                    { id:4444, nombre: "pan"  , precio:0.20}];

for (const producto of productos){
    let contenedor = document.createElement("div");
    //Definimos el innertHTML del elemento con una plantilla literal
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Prodcuto: ${producto.nombre}</p>
                            <b>  $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}

