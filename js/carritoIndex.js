const carritoDeCompras = []

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
}


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