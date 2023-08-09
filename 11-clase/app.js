//localStorage
//sessionStorag

localStorage.setItem("igv", 18);  // localStorage.setItem() sirve para subir datos al local storage.
localStorage.setItem("nombre","Fritz");

let usuario = "Fritz";
localStorage.setItem("usuario", usuario);

let usuarioEnLocalStorage = localStorage.getItem("usuario"); // localStorage.getItem sirve para llamar datos del local Storage.
console.log(usuarioEnLocalStorage); //Fritz