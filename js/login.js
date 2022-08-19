//1) Datos
const usuarios = [{
    nombre: 'Nicolas',
    mail: 'delcastillonico95@mail.com',
    pass: 'riverplate1995'
},
{
    nombre: 'Julio',
    mail: 'julioperez@mail.com',
    pass: 'standonbien123'
},
{
    nombre: 'Julia',
    mail: 'juliarizzo@mail.com',
    pass: 'perlasojalasean21'
}]


//2) Elementos del DOM
const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    nombreUsuario = document.getElementById('nombreUsuario'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');


// 2 parametros (X, Y)
// X: usuario de la base de datos. Y: donde guardamos esa infromacion
function guardarDatos(usuarioDB, storage) {

    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
    //en este objeto usuario se guarda lo que recupero de la base de datos
}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}

/*
function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}
*/

//el metodo Toggle va y se fija, este elemento en su lista de clases tiene el parametro (clase)? si lo tiene se lo saca. Va con otro  elemento, en su lista de clase tiene este paramtro (clase)? si no lo tiene lo agrega. 
function intercambiarClases(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    })
}

//La función de validar se aprovecha del tipo de return que hace el método find (el objeto si lo encuentra, o undefined si no encuentra ninguno que cumpla con la condición)
function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        //si estoy en este punto, quiere decir que el mail existe, sólo queda comparar la contraseña
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    //Validamos que ambos campos estén completos
    if (!mailLogin.value || !passLogin.value) {
        // AGREGAR ALERT
        Swal.fire(
            {
                title: "ERROR",
                text: "Todos los campos son requeridos",
                icon: "warning",
                confirmButtonText: "Reintentar",
                backdrop: "#b3b3b399",
                position: 'top',
                timer: 4000,
            }
        )
    } else {
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
        //Revisamos si el return de la función validate es un objeto o un boolean. Si es un objeto, fue una validación exitosa y usamos los datos. Si no, informamos por alert.
        if (!data) {
            // AGREGAR ALERT
            Swal.fire(
                {
                    title: "ERROR!",
                    text: "Usuario y/o contraseña incorrectos",
                    icon: "error",
                    confirmButtonText: "Reintentar",
                    backdrop: "#b3b3b399",
                    position: 'top',
                    timer: 4000,
                }
            )
        } else {
            //Revisamos si elige persistir la info aunque se cierre el navegador o no
            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }

            //Recién ahora cierro el cuadrito de login
            modal.hide();

            //Muestro la info para usuarios logueados
            intercambiarClases(toggles, 'd-none');
        }
    }


})

btnLogout.addEventListener('click', () => {
    borrarDatos();
    intercambiarClases(toggles, 'd-none');
});

//Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita todo el proceso de login 
function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarInfoMascota(mascotas);
        intercambiarClases(toggles, 'd-none');
    }
}

estaLogueado(recuperarUsuario(localStorage));