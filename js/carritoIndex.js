const preciosProductos = []
const carritoDeCompras = []
const precioTotalCarritoDeCompras = []

const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById('carrito-contenedor');
    const renderProductoCarrito = () => {
        let producto = productos.find(producto => producto.id == productoId);
        carritoDeCompras.push(producto)

        producto.cantidad = 1;
        producto.cantidad = +1;

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p>${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                <button id = "eliminar${producto.id}" class = "boton-eliminar"><i class = "fa-solid fa-trash-can"></i></button>`;

        contenedorCarrito.appendChild(div)
    }
    renderProductoCarrito()

    // console.log(contenedorCarrito)
}
console.log(carritoDeCompras)

// declarar un array vacio para ir agregando los productos que voy agregando al carrito
// creo funcion carritoIndex y le paso productoID que va a ser el parametro que voy a usar para hacer un filtro y ver que producto tengo que agregar
// creo document.getElementById y como parametro ('carrito-contenedor') que se va a encontrar en el modal
// hago el render carrito: le paso una funcion donde declaro el producto. Tomamos nuestro array de productos y le aplico el metodo .find para que recorra el array y nos encuentre el primer producto que coincida con el paramtro que elijo, en este caso el producto.id que se encuentra en terrarios.js. Lo va a comparar con el productoId del parametro carritoIndex. Cuando coincide el producto.id con el paranetro productoId nos devuelve el producto entero. Hago un metodo .push para agregar el elemento producto al array vacio carritoDeCompras
// producto.cantidad va agregar mas uno por cada producto igual que se agregue
// Renderizo: document.createElement ('div). 
// Hago una classList.add para darle forma en el modal
// Hago innerHTML a nuestro div (nodo hijo) que le vamos a estar pusheando a nuestro nodo padre (contendorCarrito)
// Si existe el producto dentro del carrito que no renderice sino que agregue un cantidad
// Agrego el nodo hijo al nodo padre


/*
//Sirve para recorrer todo el array carritoDeCompras
for (let index = 0; index < carritoDeCompras.length; index++) {
    console.log (carritoDeCompras [i])
}
*/
/*
// Podria hacer:
for (const producto.precio in carritoDeCompras)
*/


//.Push : Pushear precios de productos a CarritoDeCompras. Estamos declarando que por cada producto del array productos tenemos que hacer algo. En terrario puedo poner lo que quiera.
//A)
for (terrario of carritoDeCompras){
    preciosProductos.push(terrario.precio)
}
console.log(preciosProductos)
//B)
for (terrario of productos){
    preciosProductos.push(terrario.precio)
}
console.log(preciosProductos)

// forEach : para ver los precios con iva
preciosProductos.forEach((elemento) => {
    elemento = elemento * 1.21;
    precioTotalCarritoDeCompras.push(elemento)
})
console.log(precioTotalCarritoDeCompras)

// .Some : me dice si hay o no
const ninguno = productos.some ((producto) => producto.nombre == "Sindarin");
console.log(ninguno)


// .Filter : me devuelve todos los elementos que cumplen con una conidicon
const filtradoPrecio = productos.filter ((producto) => producto.precio < 5000)
console.log(filtradoPrecio)
console.log (filtradoPrecio[0].precio)

/*
// .Filter : filtrar por palabra clave
let keyword = prompt("Ingresa el termino de busqueda")
const filtradoBusqueda = productos.filter((curso) => curso.nombre.includes(keyword))
console.log(filtradoBusqueda)
console.log (filtradoBusqueda[0].nombre)
*/

// .Map : 21% IVA
const preciosConIva = productos.map ((producto) => {
    return {nombre: producto.nombre, precio: producto.precio*1.21}
})
console.log(preciosConIva)

// .Map : 15% OFF
const preciosConDescuento = productos.map ((producto) => {
    return {nombre: producto.nombre, precio: producto.precio*.85}
})
console.log(preciosConDescuento)

// .Reduce : sirve para calcular el Valor Total de un carrito. ES ESTE METODO
const totalCarrito = carritoDeCompras.reduce((acumulador,numero) => acumulador + numero,0)
console.log(totalCarrito)

// .Sort : ordenar de menor a mayor
const despordenados = productos.sort((a,b) =>a-b);
console.log(despordenados)

// .Date
let fechaActual = new Date ()
console.log (fechaActual)