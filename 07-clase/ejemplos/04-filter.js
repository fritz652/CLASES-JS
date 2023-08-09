
//FILTER CREA UN NUEVO ARRAY CON LOS ELEMENTOS QUE PASAN UNA PRUEBA ESPECIFICA

numeros = [1,2,3,4,5,69,52,69,48,23]

const numerosPares = numeros.filter(function(num){
    return num % 2===0; // si lo divido por dos y el resto da cero (es par)
});
console.log(numerosPares); //[2,4,52,48]


//ejmeplo 2

const cursos = [
    {nombre: 'JavaScript', precio:150},
    {nombre:'CSS',precio:70},
    {nombre:"HTML",precio:30},
    {nombre:"ReactJS",precio:100},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS')); 
const resultado2 = cursos.filter((el) => el.precio < 80); //

console.log(resultado);// {nombre:'ReactJS', precio: 100}
console.log(resultado2);// {nombre: 'CSS',precio:70}
                        // {nombre: 'HTML', precio:30}