const paciente = {
    nombre:"John Doe",
    edad: 32,
    ciudad: "mendoza",
    direccion: {
        calle:"av siempre viva",
        numero:1234,
        ciudad:"mendoza",
    }
}

/* const {nombre,edad,ciudad} = paciente; */

//const {ciudad} = paciente;

const {nombre, edad, direccion:{calle,numero,ciudad}}= paciente;

console.log(ciudad);//mendoza