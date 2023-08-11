:::::::FORMAS DE ACCEDER A UN NODO::::::::::::::::

getElementById() ::::::::::::::::::::: mas usado
getElementByClassName()
getElementByTagName()

querySelector()  ::::::::::::::::::::: mas usado

:::::::FORMAS DE AGREGAR NODOS:::::::::::

// primero se crea un nodo de tipo Elemento, etiqueta p (para el ejemplo se escoge la etiqueta p)

let parrafo = document.createElement ("p");

//depues insertamos HTML interno

parrafo.innerHTML="<h2>Estoy aprendiendo a crear párrafos</h2>";

// añadimos el nodo Element como hijo del body

document.body.append(parrado);



