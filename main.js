function estaEnLaLista(nombre, lista) {
    for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nombre) {
        return true;
    }
    }
    return false;
}

function accesoAFiesta(nombre) {
    if (estaEnLaLista(nombre, listaDeInvitados)) {
    alert(nombre + " se encuentra en la lista, puede acceder a la fiesta.");
    } else {
    alert(nombre + " no se encuentra en la lista, por ende, no puede acceder a la fiesta.");
    }
}

const listaDeInvitados = [];
let nombre = prompt("Ingrese un nombre para agregar a la lista de la fiesta");

while (nombre !== "EXIT") {
    listaDeInvitados.push(nombre);
    nombre = prompt("Inscriba otros nombres para agregar a la lista y escriba 'EXIT' cuando termine de agregar nombres:");
}


nombre = prompt("Escriba un nombre para verificar el ingreso a la fiesta o escriba 'EXIT' para concluir:");

while (nombre !== "EXIT") {
    accesoAFiesta(nombre);
    nombre = prompt("Ingrese otro nombre para verificar si se encuentra en la lista o escriba 'EXIT' para acabar:");
}
