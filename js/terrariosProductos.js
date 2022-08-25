//const mostrarProductos = await fetch ('./js/catalogo.json') => {
const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('producto-contenedor')
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class = "card">
                            <img src = "${producto.img}" class="card-img-top" alt="...">
                            <div class = "card-body">
                                <h5 class = "card-title">${producto.nombre}</h5>
                                <div class = "card-text">
                                     <li class = "card-text-tipo">Tipo: ${producto.tipo}</li>
                                     <li class = "card-text-plantas">Plantas: ${producto.plantas}</li>
                                     <li class = "card-text-precio">Precio: $${producto.precio}</li>
                                </div>
                                <div class = "btn-card">
                                    <button class = "btn" id = boton${producto.id}>Comprar</button>
                                </div>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener('click', () => {
            carritoIndex(producto.id)
            Swal.fire({
                title: `Se agrego ${producto.nombre} al carrito`,
                text: `Precio: $${producto.precio}`,
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
            })
            /*
            Toastify ({
                text: `Se agrego ${producto.nombre} al carrito`,
                duration:1500
                style:{
                    color: 'lightgrey',
                    width: '20vw',
                    height: '5vh',
                    background: "#a1d5a299",
                }
            }).showToast ();
            */
        })
    })
}
mostrarProductos(productos)

async function bringData () {
    const response = await fetch ('./js/catalogo.json');
    const data = await response.json ();
    mostrarProductos (data);
}

// la funcion mostrarProductos va a tener un parametro (productos) para agarrar los productos del terrarios.js
// cuando quiero pasarlo a HTML lo tengo que vinuclar con document.getElementById para plasmar el JS en el contenedor que arme en el HTML ('producto-contenedor')
// tomamos nuestros productos de terrarios.js y aplicamos un forEach para tomar el archivo array y hacer un recorrido por cada uno de los objetos. Recorre el array y por cada itegrador nos devuelve algo. Nos devuelve el renderizado dentro del HTML. Por cada producto nos devuelve un renderizado, a ese renderizado le vamos a pasar una variable div que va a estar creando un elemento dentro del contenedor del HTML. RENDERIADO de FOREACH
// Creo un nodo hijo para poder pasarle eso mimso al HTML document.createElement ('div) : de esta manera creo el div para poder pasarlo en el HTML
// Creo un classList para recorrer todas las clases que tiene el div. Creo una clase llamada 'card' a traves del add
// A ese div le paso un InnerHTML y le pongo que voy a pasar, armo todos los elementos HTML
// el += srive para agregar por cada producto que se agregue en terrarios.js
// ${producto.nombre} sirve para hacer referencia al nombre del producto que se encuentra en terrarios.js
// el boton lo voy a manejar por ID para manejarlo luego con los eventos
//ya teniendo el renderizado le paso el producto al contenedor-producto que se encuentra en el HTML. Le paso un appendChil, es decir, un nodo hijo  dentro de ese nodo div llamado contenedor-producto. 
// las comillas invertidas sirve para concatenar codigo HTML con el codigo JS de una manera mas organizada
// llamo a mostrarProductos y en el parametro pongo el array

// ---- CarritoIndex ---- //
// agrego el carritoIndex con producto.id como parametro


// ---- Boton ---- //
// creo un document.getElementById con el parametro de boton id. Para que cada uno de los botones sea tratado por separado
// al boton ya creado le tengo que pasar un evento
// es conveninete usar ID en los componentes como los botones porque tiene que ser siosi unico
// agrego el evento addEventListener ('click')
// ese evento tiene que tener una respuesta a traves de una funcion flecha