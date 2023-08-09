let myVariable;
let variableDeclarada;

myVariable = function(parametro){
    //let variableDeclarada
    variableDeclarada = `variable inicializada en ${parametro}`
    return variableDeclarada;
}

console.log(myVariable("esta linea"));