//REDUCE


//el metodo reduce se usa para reducir un array a un unico valor.



const precioDePrendas= [4,3,2,1]


const sumaDeTodo = precioDePrendas.reduce((acumulador, valorActual)=> acumulador + valorActual)
const productoDeTodo = precioDePrendas.reduce((x,y)=> x*y)


console.log(sumaDeTodo); // 10
console.log(productoDeTodo); // 24