/*
fetch('', {
    method: 'POST',
    body: JSON.stringify(
        {
            title: 'Mi primer post',
            body: 'Esto es un posteo de prueba',
            userId: 1,
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then((response) => response.json())
    .then((data) => console.log(data));
*/

const contenedor = document.querySelector('#contenedorTarjetas'),
    container = document.querySelector('#cardContainer'),
    selectFormaDeOnda = document.querySelector('#onda'),
    //  btnBuscar = document.querySelector('#buscar'),
    searchBtn = document.querySelector('#search');

// buscar: hace referencia al API 1)
// search: hace referencia alta catalogo.json 2)

//2) 
function waveFormFilter(array) {
    let waveForm = selectFormaDeOnda.value;
    if (!waveForm) {
        return array;
    } else {
        return array.filter((e) => e.waveForm == waveForm);
    }
}

function createHTML(array) {
    contenedor.innerHTML = ''
    container.innerHTML = ''
    array.forEach((plants) => {
        const card = `
            <div class="col">
                <div class="card h-100 colClass">
                    <img src="${plants.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title"> ${plants.subSpecies}</h5>
                        <ul class="card-list">
                            <li class="card-text">Especie: ${plants.species}</li>
                            <li class="card-text">Planta: ${plants.plant}</li>
                            <li class="card-text">Forma de onda: ${plants.waveForm}</li>
                            <li class="card-text">Filotaxis: ${plants.filotaxis}</li>
                        </ul>
                    </div>
                </div>
            </div>`
        container.innerHTML += card
    })
}

// Sintaxis altenrativa para usar los .then
async function bringData() {
    const response = await fetch('../js/catalog.json');
    const data = await response.json();
    createHTML(waveFormFilter(data));
}

window.onload = bringData();

searchBtn.addEventListener('click', () => {
    bringData();
})