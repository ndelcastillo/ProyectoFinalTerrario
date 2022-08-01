/*
let savedContraseña = 'Perlas';
let ingresar = false;

// login

for (let i = 2; i >= 0; i--) {
    let userContraseña = prompt('Ingresa tu contraseña. Tenés ' + (i + 1) + ' intentos. ');
    if (userContraseña === savedContraseña) {
        alert('Login exitoso');
        ingresar = true;
        break;
    } else {
        alert('Error. Te quedan ' + i + ' intentos. ');
    }
}

if (ingresar) {
    //const saldoCarrito = prompt("Cual es el precio del producto?")
    let saldoCarrito = 5500;
    // let descuentoOFF = 0.15;
    const division = function (numeroA, numeroB) {
        return numeroA / numeroB
    }
    const resta = (a, b) => a - b;
    alert('Carrito a pagar: $' + saldoCarrito);
    let opcion = prompt('Elegí una opción de pago: \n1- Efectivo [15% off] \n2- Tarjeta de Crédito [2 cuotas] \n3- Tarjeta de Débito [4 cuotas] \n4- Transferencia \nX para finalizar ');
    while (opcion != 'X' && opcion != 'x') {
        switch (opcion) {
            case '1':
                alert ('Carrito a pagar: $' + (resta(saldoCarrito,(saldoCarrito*0.15))))
                break;
            case '2':
                alert('Carrito a pagar: 2 cuotas de $' + (division(saldoCarrito,2)));
                break;
            case '3':
                alert('Carrito a pagar: 4 cuotas de $' + (division(saldoCarrito,4)));
                break;
            case '4':
                alert('Carrito a pagar: $' + saldoCarrito);
                break;
            default:
                alert('Elegiste una opción incorrecta');
                break;
        }
        opcion = prompt('Elegí una opción de entrega: \n1- Con Envío \n2- Retiro en Local ');
        opcion = prompt('Finalizar compra: \nX para finalizar ');
    }

} else {
    alert('La contraseña no es correcta. Compruébela. ')
}
alert('Adios!');


// NO VA
/* case 1
let descuento = saldoCarrito * descuentoOFF;
saldoCarrito = saldoCarrito - descuento;
alert('Carrito a pagar: $' + saldoCarrito);


// precios son distintos si se hace con envio o se retira por el local
// cuotas
// 1) efectivo - intereses 0%
// 2) tarjeta de debito - interes 0%
// 3) tajeta de credito:
// 3 cuotas - interes 5%
// 6 cuotas - interes 8%
//iva 21%

/*
function mensajeCuotas(cuotas, interes) {
    alert("bien! te quedan " + cuotas + " cuotas con " + interes + "% de interes")
    const precioConIva = (precio*0.21)
    const extraIntereses = ((precioConIva*interes) - precio);
    alert (precioConIva + extraIntereses);
}

const precio = prompt("Cual es el precio del producto?")
if (precio < 10000) {
    let numCuotas = prompt("En cuantas cuotas vas a pagarlo?")
    switch (numCuotas) {
        case 3:
            mensajeCuotas(3, 0)
            break;
        case 6:
            mensajeCuotas(6, 0.05)
            break;
        case 12:
            mensajeCuotas(12, 0.10)
            break;
    }
} else {
    let numCuotas = prompt("En cuantas cuotas vas a pagarlo?")
    switch (numCuotas) {
        case 3:
            mensajeCuotas(3, 0.05)
            break;
        case 6:
            mensajeCuotas(6, 0.10)
            break;
        case 12:
            mensajeCuotas(12, 0.15)
            break;
    }
}

// alert("serían " + numCuotas + " cuotas de " + (precio / numCuotas))

*/