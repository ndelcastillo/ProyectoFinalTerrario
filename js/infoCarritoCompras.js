/*
// modificar texto en el HTML
let infoContacto = document.getElementById("formNombre")
infoContacto.innerText = "HOLAAAA"
console.log(infoContacto.innerText )

// modificar elemento en el HTML
let contenedorMain = document.querySelector("#contenedorContacto")
contenedorMain.innerHTML = `<h1> Hola que tal mi nombre es JUAN </h1>`

// crear elemento nuevo
let nuevoDiv = document.createElement ("div")
nuevoDiv.innerHTML = "<h1 class = aquaBG >Soy una ONOOO personaa</h1>"
document.body.append(nuevoDiv)



let infoNombre = document.getElementById("formNombre")
infoNombre.innerText = "Nuevo HOLA"
console.log(infoNombre.innerText)
*/


/*
let entrada = prompt("ingresa tu nombre");
let formNombreNuevo = document.getElementById ("inputNombre")
formNombreNuevo.innerHTML = `<h1>Bienvenido ${entrada}</h1>`
console.log(formNombreNuevo.innerHTML)
*/

/* 
let producto = {
    id: 1,
    nombre: "SMART TV SAMSUNG 32 PULGADAS HD UN32T4300AGCZB",
    precio: 87000,
    imagen: './img/TV32.jpg',
    descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
};

let concatenado = "ID: " + producto.id + " - Producto: " + producto.nombre + " - $ " + producto.precio;
console.log(concatenado);

let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} - $${producto.precio}`
console.log(plantilla);

let contenedorTarjeta = document.createElement('div');
document.body.append(contenedorTarjeta);

let entrada = prompt('Ingresa tu nombre');
let tarjeta = document.createElement('div');
tarjeta.className = 'card';
tarjeta.innerHTML = `<h1>Bienvenido/a, ${entrada}</h1>
<h2>${producto.nombre}</h2>
<img src="${producto.imagen}" class="imagen" alt="Smart 32"> <br>
<p> ${producto.descripcion} </p>
<p> Precio: <span class="resaltado"> $ ${producto.precio} </span></p>
`
contenedorTarjeta.append(tarjeta) */