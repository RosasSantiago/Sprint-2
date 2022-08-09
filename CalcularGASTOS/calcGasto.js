var amigo = [];
var gasto = [];
const personas = document.getElementById('amigos');
const gastos = document.getElementById('montos');
const totals = document.getElementById('total');
const listado = document.getElementById('listaDeGastos');


function agregarALista() {
    agregarDatos();
    lista();
}

function mostrarTot() {
    mostrarRes();
}

function agregarDatos() {

    amigo.push(personas.value);
    gasto.push(montos.value);
}

function lista() {
    const li = document.createElement('li')
    li.classList.add('listaDeGastos');
    const text = document.createTextNode(
        `${amigo[amigo.length - 1]} $${gasto[gasto.length - 1]}`
    );

    li.appendChild(text);
    listado.appendChild(li);
}


function mostrarRes() {
    const total = sumarElTotal(gasto).toFixed();
    totals.innerText = `En total gastaron ${total} $ cada uno debe pagar: ${total / gasto.length}$`;
}

function sumarElTotal(tot) {
    let total = 0;
    for (var i = 0; i < tot.length; i++) {
        total += parseInt(tot[i]);
    }
    return total;
}