/* const nombre = document.getElementById("nombre")

const edad = document.getElementById("edad")



function guardarFormulario(){
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("edad", edad.value)
} */




let carrito = []

function agregarAlCarrito(){

    const producto = document.getElementById("producto").value
    const cantidad = parseInt(document.getElementById("cantidad").value)

    if(!isNaN(cantidad) && cantidad >0){
        const item = {producto,cantidad};
        carrito.push(item)
        actualizarCarrito()
    }else{
        alert("por favor ingresa una cantidad valida")
    }
}  



 
function guardarCarrito(){
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carritoData", carritoJSON)
    alert("carrito guardado en el localstorage")
}


function actualizarCarrito(){
    const carritoElement = document.getElementById("carrito")
    carritoElement.innerHTML="";

    carrito.forEach((item)=>{
        const listItem = document.createElement("li")
        listItem.textContent= `${item.producto} - cantidad:  ${item.cantidad}`
        carritoElement.appendChild(listItem)
    })




}