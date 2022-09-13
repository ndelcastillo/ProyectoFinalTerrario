const btnPago1 = document.getElementById('pagoBoton1');
btnPago1.onclick = ()=>{
    Swal.fire(
        {
            title: "¡Compra Realizada!",
            text: "Recibiras detalle de envío en tu email",
            imageUrl: "../images/carritoCompra/carritoCompras.jpg",
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: "Custom image",
            confirmButtonText: "GRACIAS",
            confirmButtonColor: "#a1d5a2",
            // showCancelButton: true,
            // cancelButtonText: "Denada",
            backdrop: "#a1d5a299"
            // timer:5000,
        }
    )
}

/*
let productos = {
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

const mostrarTarjeta = (productos) => {
    const contenedorTarjeta = document.getElementById('producto-contenedor')
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += ` <div class = "card">
            <h1>Bienvenido/a, ${entrada}</h1>
            <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" class="imagen" alt="Smart 32"> <br>
            <p> ${producto.descripcion} </p>
            <p> Precio: <span class="resaltado"> $ ${producto.precio} </span></p>
            </div>`
        contenedorTarjeta.appendChild(div)
    })
}
mostrarTarjeta(productos)
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

let entrada = "HOLA";
let tarjeta = document.createElement('div');
tarjeta.className = 'card';
tarjeta.innerHTML = `<h1>Bienvenido/a, ${entrada}</h1>
<h2>${producto.nombre}</h2>
<img src="${producto.imagen}" class="imagen" alt="Smart 32"> <br>
<p> ${producto.descripcion} </p>
<p> Precio: <span class="resaltado"> $ ${producto.precio} </span></p>
`
contenedorTarjeta.append(tarjeta)
*/

/*
// .Filter : me devuelve todos los elementos que cumplen con una conidicon
const filtradoPrecio = carritoDeCompras.filter ((producto) => producto.precio == 4000)
console.log(filtradoPrecio)
*/

/*
const sumar = (A,B) => {return A+B}
alert (sumar(10, 30))
*/

/*
//EJEMPLO CALCULAR PRECIO EN 3 FORMAS
//A)
const suma = (a,b) => a + b
const resta = (c,d) => c - d
const iva = x => x * 0.21
let precioProducto = 500
let descuento = 50
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)),descuento)
alert(nuevoPrecio)
// let nuevoPrecio = resta(c,d) // c = suma(a,b)
*/

/*
//B) 
const sumar = (a,b) => a + b
const restar = (c,d) => c - d
const impuesto = x => x * 0.21
let precioProd = 500
let desc = 50
alert (restar(sumar(precioProd,impuesto(precioProd)),desc));
// alert  ((500+(500*0.21) - 50)
// alert  ((c) - d) donde c = (a+(b)) donde b = x*(a)
/*

/*
//C)
const sumar = (a,b) => a + b
const restar = (c,d) => c - d
let precioProd = 500
let desc = 50
let impuesto = 0.21
alert (restar(sumar(precioProd,impuesto*precioProd),desc));
*/