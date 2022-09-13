/*
let timeout = 4000

setTimeout (()=>{
    console.log('Hola puchula')
}, timeout);
*/

// Automatizar entrada y salida de elementos
//function setTimeout: sirve para eliminar un elemento\

let tiempo = 7000;
// const { value: email } = await

setTimeout(() => {
    Swal.fire({

        title: 'Recibí todas las ofertas',
        text: '¿Queres recibir nuestras ofertas? ¡Registrate ya mismo y comenzá a disfrutarlas!',
        input: 'email',
        inputPlaceholder: 'Ingresá tu correo electrónico',
        showDenyButton:true,
        denyButtonText: 'No, gracias!',
        showConfirmButton:true,
        confirmButtonText: 'Registrarme',
        backdrop: "#a1d5a299"
    })
    if (email) {
        Swal.fire(`Entered email: ${email}`)
    }
}, tiempo)


/*    
//function setInterval:
setInterval(() => {
    console.log("Tic")
}, 2000)
*/

/*
/////Promise
let hamburguesa = true;
let noHayHamburguesa = false;


const pedirHamburguesa = (respuesta) => {
    return new Promise((resolve, reject) => {
        if (respuesta) {
            resolve('Veni a buscar tu hamburguesa')
        } else {
            reject('No tenemos tu hamburguesa');
        }
    })
}
*/

/*
console.log(pedirHamburguesa(hamburguesa));
//Cuando hago una peticion a una baseDeDatos > THEN
pedirHamburguesa(hamburguesa).then((respuesta) => {
    sentarseALaMesa();
}).catch((error) => {
    cosnole.log(error)
})
// Si me dan la hamburguesa (.then) me puedo sentar en la mesa. Si no me dan la hamburguesa (.catch) hubo un error.


console.log(pedirHamburguesa(noHayHamburguesa));
//Cuando hago una peticion a una baseDeDatos > CATCH
pedirHamburguesa(hamburguesa)
    .then((respuesta) => {
        console.log(respuesta);
    }).catch((respuesta) => {
        cosnole.log(respuesta)
    }).finally (() => {
        console.log ('Gracias, vuelva pronto')
    })
*/