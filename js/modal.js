const modalContenedor = document.querySelector('.modal-container')
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')
const modalCarrito = document.querySelector('.modal-carrito')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
})

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
})

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()
})



// el boton 'open' esta en el navbar en el icono del carrito
// le doy evento a abrirCarrito .addEventListener ('click')
// classList: recorre todas las clases dentro del nodo que hagamos referencia, puede ser un div. 
// toggle: es agregar o cambiar. Agregar una clase si no la tengo o quitar esa clase is ya la tengo. En este caso cuando apreto el carrito se activa el modal (modal-active)
// e.stopPropagation: lo hago para que se evite el evento por defecto. Que el carrito se cierre solo si apreto el boton cerrar o afuera del modal.