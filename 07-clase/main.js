const Producto =  function(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto ("lenovo", 350000, 5)
let producto2 = new Producto ("lenovo pad", 35000, 6)
let producto3 = new Producto ("macbook", 350000, 5)
let producto4 = new Producto ("smartwatch", 3000, 46)
let producto5 = new Producto ("apple pad", 456500, 5)

let lista = [producto1,producto2,producto3,producto4,producto5]


function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que deseas buscar").trim().toUpperCase()
    let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con: "+ palabraClave)
    }

}


filtrarProductos()




function agregarProducto(){
    let nombre = prompt("ingresa el nombre del producto").trim()
    let precio = parseFloat(prompt("ingrese el precio del producto: "))
    let stock = parseInt(prompt("ingrese el stock del producto"))

    if(isNaN(precio) || isNaN(stock) || nombre === ""){ //si los datos estan vacios, salta un alert
        alert("por favor ingresa datos validos")
    return;
    }

    let producto = new Producto (nombre,precio,stock)

    if(lista.some((p)=> p.nombre === producto.nombre)){
        alert("el producto ya existe")
        return;
    }

    lista.push(producto) // si el producto no existe en la lista, haces push

    console.table(lista)
    




}
