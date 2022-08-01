
/*
// Paso 1: Seleccion del producto

let opcion = prompt('Terrarios: \n1 - Arwen [$4000] \n2 - Maggot [$4500] \n3 - Sombraverde [$5000] \n4 - Hoja de vientos [$6000]')

// Paso 2: Informacion del producto

switch (opcion) {
    case '1':
        alert('\nNombre: Arwen \nTipo: Abierto \nPlantas: Suculentas [Rosa del desierto, Piedra lunar y Aloe vera] \nPrecio: $4000 \nDetalle: Su adaptación les permite mantener reservas de agua durante periodo prolongados, y sobreviven a los largos periodos de sequía en climas áridos.')
        break;
    case '2':
        alert('\nNombre: Maggot \nTipo: Abierto \nPlantas: Suculentas [Praeger, Corona de espina y Pie de oso] \nPrecio: $4500 \nDetalle: Su adaptación les permite mantener reservas de agua durante periodo prolongados, y sobreviven a los largos periodos de sequía en climas áridos.')
        break;
    case '3':
        alert('\nNombre: Sombraverde \nTipo: Abierto \nPlantas: Cactus [Haworthia, Cereus y Ferocactus] \nPrecio: $5000 \nDetalle: Se caracterizan por acumular agua y nutrientes en sus tejidos, adaptándose sin problema a terrenos áridos y secos. Son plantas ancestrales.')
        break;
    case '4':
        alert('\nNombre: Sindarin \nTipo: Abierto \nPlantas: Cactus [Clestocactus y Crasulas] \nPrecio: $6000 \nDetalle: Los cactus se caracterizan por acumular agua y nutrientes en sus tejidos, adaptándose sin problema a terrenos áridos y secos. Mientras que las suculentas, su adaptación les permite mantener reservas de agua durante periodo prolongados.')
        break;
    default:
        alert('Elegiste una opcion invalida')
        break;
}
*/

/*
function saludar () {
    alert ('Buen día');          // entre {} van las instrucciones o pasos para realizar la tarea
}
saludar ();


function saludarConNombre (nombre, momento) {
    alert ('Buenas '+momento +', '+ nombre); 
}
let nombreUsuario = prompt ('Ingresa tu nombre para que te saludemos');
let momentoDelDia = prompt ('Ingresa el momento del dia')
// saludarConNommbre (nombreUsuario);
saludarConNombre (nombreUsuario, momentoDelDia);
// la funcion sabe que va a recibir un parametro en el llamado y que ese parametro lo tiene que concatenar con esta cadena de caracteres adentro del valor
*/

/*
// OBJETOS
let nombre = 'Arwen';
let terrario = 'abierto';
let plantas = 'suculentas';
let precio = 4000;

const terrario1 = {
    nombre: 'Arwen',
    tipo: 'abierto',
    plantas: 'suculentas',
    suculentas:{
        suculenta1: 'Rosa del desierto',
        suculenta1: 'Piedra lunar',
        suculenta1: 'Aloe vera'
    },
    precio: 4000,
    cantidad:1
}

const terrario2 = {
    nombre: 'Maggot',
    tipo: 'abierto',
    plantas: 'suculentas',
    suculentas:{
        suculenta1: 'Praeger',
        suculenta1: 'Corona de espina',
        suculenta1: 'Pie de oso'
    },
    precio: 4500,
    cantidad:1
}

const terrario3 = {
    nombre: 'Sombraverde',
    tipo: 'abierto',
    plantas: 'cactus',
    cactus:{
        cactus1: 'Haworthia',
        cactus2: 'Cereus',
        cactus3: 'Ferocactus'
    },
    precio: 5000,
    cantidad:1
}

const terrario4 = {
    nombre: 'Sindarin',
    tipo: 'abierto',
    plantas: 'cactus',
    cactus:{
        cactus1: 'Clestocactus',
        cactus2: 'Crasulas',
    },
    precio: 6000,
    cantidad:1
}

// Actualizar precio del terrario4
alert('El terrario Sindarin cuesta '+ terrario4.precio);
terrario4.precio = 8000;
alert('El terrario Sindarin cuesta '+ terrario4.precio);

// Aumentar cantidad de carrito de compra
alert('Carrito de compra '+ terrario4.cantidad);
terrario4.cantidad+=1;
alert('Carrito de compra '+ terrario4.cantidad);
*/


///// LOGIN
let savedContraseña = 'Perlas';
let ingresar = false;

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

    ///// OPCION 1
    // Metodo date
    let fechaSimple = new Date(2022, 7, 28);
    alert(fechaSimple);

    //Array: Terrarios + Precios
    const todosPreciosTerrarios = [
        {
            nombre: 'Arwen',
            precio: 4000
        },
        {
            nombre: 'Maggot',
            precio: 4500
        },
        {
            nombre: 'Sombraverde',
            precio: 5000
        },
        {
            nombre: 'Sindarin',
            precio: 6000
        }
    ]

    //Metodo find
    const encontrado = todosPreciosTerrarios.find((todosPreciosTerrarios) => todosPreciosTerrarios.precio > 4000 && todosPreciosTerrarios.precio < 5000)
    console.log(encontrado)

    //Metodo map + return
    const todosPreciosTerrariosDescuento = todosPreciosTerrarios.map((todosPreciosTerrarios) => {
        return {
            nombre: todosPreciosTerrarios.nombre, precio: todosPreciosTerrarios.precio * 1.15
        }
    })
    console.log(todosPreciosTerrarios);
    console.log(todosPreciosTerrariosDescuento);

    //Metodo Reduce
    const totalArray = todosPreciosTerrarios.reduce((acumulador, numero) => acumulador + numero, 0)

    //Metodo Math
    console.log(Math.floor(todosPreciosTerrariosDescuento)); //Por que no me redondea?!

    //Metodo Concat
    const suculentasTodas = ['SUCULENTAS Y CACTUS: ', 'Rosa del desierto', 'Piedra lunar', 'Praeger', 'Kalanchoe', 'Aloe vera', 'Corona de espina']
    const cactusTodos = ['Haworthia', 'Echeveria', 'Cereus', 'Crasulas', 'Clestocactus', 'NottoCactus', 'Ferocactus']

    const plantasTodas = suculentasTodas.concat(cactusTodos);
    console.log(plantasTodas);

    //Metodo Join
    const plantasTodasLista = plantasTodas.join(' # ');
    alert(plantasTodas.join('\n'));


    // OBJETOS CONSTRUCTORES
    function Terrario(nombre, tipo, plantas, envase, tamaño, precio, cantidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.plantas = plantas;
        this.envase = envase;
        this.tamaño = tamaño;
        this.precio = precio;
        this.cantidad = cantidad;
        this.hablar = function (mensaje) {
            alert(mensaje)
        }
    }

    const terrario1 = new Terrario('Arwen', 'abierto', 'suculentas', 'cilindro', 'chico', 4000, 1);
    const terrario2 = new Terrario('Maggot', 'abierto', 'suculentas', 'jarron', 'mediano', 4500, 1);
    const terrario3 = new Terrario('Sombraverde', 'abierto', 'cactus', 'pecera', 'mediano', 5000, 1);
    const terrario4 = new Terrario('Sindarin', 'abierto', 'cactus', 'florero', 'grande', 6000, 1);

    alert('\nNombre: ' + terrario1.nombre + '\nTipo: ' + terrario1.tipo + '\nPlantas: ' + terrario1.plantas + '\nEnvase: ' + terrario1.envase + '\nTamaño: ' + terrario1.tamaño + '\nPrecio: ' + terrario1.precio + '\nCantidad: ' + terrario1.cantidad);

    alert('\nNombre: ' + terrario2.nombre + '\nTipo: ' + terrario2.tipo + '\nPlantas: ' + terrario2.plantas + '\nEnvase: ' + terrario2.envase + '\nTamaño: ' + terrario2.tamaño + '\nPrecio: ' + terrario2.precio + '\nCantidad: ' + terrario2.cantidad);

    alert('\nNombre: ' + terrario3.nombre + '\nTipo: ' + terrario3.tipo + '\nPlantas: ' + terrario3.plantas + '\nEnvase: ' + terrario3.envase + '\nTamaño: ' + terrario3.tamaño + '\nPrecio: ' + terrario3.precio + '\nCantidad: ' + terrario3.cantidad);

    alert('\nNombre: ' + terrario4.nombre + '\nTipo: ' + terrario4.tipo + '\nPlantas: ' + terrario4.plantas + '\nEnvase: ' + terrario4.envase + '\nTamaño: ' + terrario4.tamaño + '\nPrecio: ' + terrario4.precio + '\nCantidad: ' + terrario4.cantidad);


    // OBJETO CONSTRUCTOR USUARIO
    let nombreTerrario = prompt('Ingresa el nombre de tu terrario:');
    let tipoTerrario = prompt('Ingresa el tipo de terrario: \n1 - Abierto \n2 - Cerrado');
    let plantasTerrario = prompt('Ingresa el nombre de tu terrario: \n1 - Suculentas \n2 - Cactus \n3 - Ambos');
    let envaseTerrario = prompt('Ingresa el envase de tu terrario: \n1 - Cilindro \n2 - Pecera \n3 - Jarron \n4 - Florero');
    let tamañoTerrario = prompt('Ingresa el tamaño de tu terrario: \n1 - Chico \n2 - Mediano \n3 - Grande');
    let precioTerrario = prompt('Ingresa cupon de descuento:');
    let cantidadTerrario = prompt('Ingresa la cantidad de terrarios:');

    const terrarioUsuario = new Terrario(nombreTerrario, tipoTerrario, plantasTerrario, envaseTerrario, tamañoTerrario, precioTerrario, cantidadTerrario);

    alert('\nNombre: ' + terrarioUsuario.nombre + '\nTipo: ' + terrarioUsuario.tipo + '\nPlantas: ' + terrarioUsuario.plantas + '\nEnvase: ' + terrarioUsuario.envase + '\nTamaño: ' + terrarioUsuario.tamaño + '\nPrecio: ' + terrarioUsuario.precio + '\nCantidad: ' + terrarioUsuario.cantidad);

    // OBJETO CONSTRUCTOR USUARIO FOR...IN
    for (const propiedad in terrarioUsuario) {
        console.log(terrarioUsuario[propiedad]);
    }


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
                alert('Carrito a pagar: $' + (resta(saldoCarrito, (saldoCarrito * 0.15))))
                break;
            case '2':
                alert('Carrito a pagar: 2 cuotas de $' + (division(saldoCarrito, 2)));
                break;
            case '3':
                alert('Carrito a pagar: 4 cuotas de $' + (division(saldoCarrito, 4)));
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

        terrarioUsuario.hablar('GRACIAS! ' + terrarioUsuario.nombre + ' llegara a tu domicilio en los proximos días')
    }
} else {
    alert('La contraseña no es correcta. Compruébela. ')
}
alert('Adios.');


/*
///// OPCION 2
// CLASES
class Terrario {
    constructor(nombre, tipo, plantas, envase, tamaño, precio, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo;
        this.plantas = plantas;
        this.envase = envase;
        this.tamaño = tamaño;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.vendido = false;
    }
    sumarIVA(iva) {
        this.precio = this.precio * iva;
    }

    vender() {
        this.vendido = true;
    }
}

const terrario1 = new Terrario('Arwen', 'abierto', 'suculentas', 'cilindro', 'chico', 4000, 1);
console.log(terrario1);

terrario1.precio
console.log('El precio sin IVA es ' + terrario1.precio);
terrario1.sumarIVA(1.21)
console.log('El precio con IVA es ' + terrario1.precio);

terrario1.vender();
console.log(terrario1.vendido)
*/


/*
//// OPCION 3
// ARRAYS
const terrarios = [
    { nombre: 'Arwen', tipo: 'abierto', plantas: 'suculentas', tipoDePlantas: ['Rosa del desierto, Piedra lunar, Aloe vera.'], humedad: true, envase: 'cilindro', precio: 4000, cantidad: 1 },
    { nombre: 'Maggot', tipo: 'abierto', plantas: 'suculentas', tipoDePlantas: ['Praeger, Corona de espina, Pie de oso.'], humedad: true, envase: 'jarron', precio: 4500, cantidad: 1 },
    { nombre: 'Sombraverde', tipo: 'abierto', plantas: 'cactus', tipoDePlantas: ['Haworthia, Cereus, Ferocactus.'], humedad: false, envase: 'pecera', precio: 5000, cantidad: 1 },
    { nombre: 'Sindarin', tipo: 'abierto', plantas: 'cactus', tipoDePlantas: ['Clestocactus, Crasulas.'], humedad: false, envase: 'florero', precio: 6000, cantidad: 1 }
]

/*
for (nombre of terrarios) {
    if(nombre.humedad){
        console.log(nombre.nombre + ':' + " " + nombre.tipoDePlantas)
    }
}

for (i of terrarios){
    alert('\nNombre: ' + i.nombre + " " + '\nTipo: ' + i.tipo + " " + '\nPlantas: ' + i.plantas + " " + '\nTipo de Plantas: ' + i.tipoDePlantas+ " " + '\nHumedad: ' + i.humedad + " " + '\nEnvase: ' + i.envase + " " + '\nPrecio: ' + i.precio + " " + '\nCantidad: ' + i.cantidad + " ");
}
*/

// alert(terrarios.join(' \n'));
