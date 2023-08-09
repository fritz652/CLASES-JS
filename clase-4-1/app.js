//creamos un funcion costructora

const IVA = 1.21

function Producto(id,nombre,importe,stock){

    this.id = id
    this.nombre = nombre
    this.impote =importe
    this.stock =stock
    //definimos un metodo
    this.importe = function(){//funcion anonima
        return this.importe * IVA //retornar el valor del importe multiplicado por el IVA
    }

    this.ajustarStock = function(unidadesVendidas){ // funcion anonima con un parametro
            if(typeof unidadesVendidas === "number" && this.stock >= unidadesVendidas && stock > 0){
                return this.stock = this.stock - parseInt(unidadesVendidas) //retorno el valor de unidades vendidas
            }else{
            console.error(`error al descontar las unidades, ` + unidadesVendidas)
        }
    }
}

const Producto1 = new Producto (1, "teclado", 50000, 15)
const producto2 = new Producto (2, "mouse", 50000, 35)
const producto3 = new Producto (3, "monitor", 12000, 6)
