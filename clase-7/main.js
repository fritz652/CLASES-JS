




                    //FOREACH


//EJECUTA UNA FUNCION PARA CADA ELEMENTO DEL ARRAY
/* 
const frutas = ["manzana", "pera", "naranja"]
const num= [1,2,3,4,5,6]

frutas.forEach(
    function(fruta){
        console.log(fruta.toUperCasse())    //convierte a matuscula cada fruta
    }
)

 */


/*

                        FIND

//EL METODO FIND SE USA PARA BUSCAR UN ELEMENTO EN EL ARRAY QUE CUMPLA CON CIERTA CONDICION.
(DEVUELVE EL PRIMER ELEMENTO QUE COINCIDE)

const num= [1,2,3,4,5,6,6,5]

const encontrado = num.find( (numero)=> numero>=5)

console.log(encontrado)


 */





                                //MAP

//MAP Crea un nuevo array con el resultado de llamar a una funcion para cada elemento del array


/* 
const numeros = [1,2,3,4,5,6]

//declaro const doble y guardo el nuevo array

const doble = numeros.map( 
    function(numero){   //recorro cada elemento
        return numero * 2
    }
)

console.log(doble) */



                            //FILTER

//FILTER CREA UN NUEVO ARRAY CON LOS ELEMENTOS QUE PASAN UNA PRUEBA ESPECIFICA

/* numeros = [1,2,3,4,5,69,52,69,48,23]

const numerosPares = numeros.filter(function(num){
    return num % 2===0; // si lo divido por dos y el resto da cero (es par)
});
console.log(numerosPares) */





//REDUCE


//el metodo reduce se usa para reducir un array a un unico valor.



/* const precioDePrendas= [2500,7000+25000+9000+5000]


const sumaDeTodo = precioDePrendas.reduce((acumulador, valorActual)=> acumulador + valorActual)

console.log(sumaDeTodo) */




                        //SORT


/* const nombres = ["Martin","brian","sebas","leo","CAamilo"]



nombres.sort()


console.log(nombres) */




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
