//  Cómo definir eventos: son acciones que se hace en una pagina web,como hacer  clic en un boton de una paguina web, es lo que hace que el usuario interactue con la web

// Existen tres formas de definirlas, pero solo veremos las 2 que se usan:


//Opcion 1:   addEventListener

let boton = document.getElementById("btnPrincipal");
boton.addEventListener('click', respuestaClick);
function respuestaClick(){
    console.log("Respuesta al evento");          //.......Se visualista en la console
    
    let nuevoDiv = document.createElement(`div`);//.......creo un nuevo div
    nuevoDiv.innerHTML=`<h2>Mi respuesta</h2>`;  //.......le agrego un h2 al nuevo div
    document.body.append(nuevoDiv);              //.......lanzo el nuevo componente a la web
}


//Opcion 2





