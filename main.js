const listaDeInvitados = {
    invitados: [],

    agregarInvitado(nombre) {
    this.invitados.push({ nombre, enLista: true });
    },

    accesoAFiesta(nombre) {
    const invitado = this.invitados.find(inv => inv.nombre === nombre);
    if (invitado) {
        if (invitado.enLista) {
        alert(nombre + " se encuentra en la lista, puede acceder a la fiesta.");
        } else {
        alert(nombre + " está en la lista, pero no tiene acceso a la fiesta.");
        }
    } else {
        alert(nombre + " no se encuentra en la lista, por ende, no puede acceder a la fiesta.");
    }
    },
};

let nombre = prompt("Ingrese un nombre para agregar a la lista de la fiesta");

while (nombre !== "EXIT") {
    listaDeInvitados.agregarInvitado(nombre);
    nombre = prompt("Inscriba otros nombres para agregar a la lista y escriba 'EXIT' cuando termine de agregar nombres:");
}

nombre = prompt("Escriba un nombre para verificar el ingreso a la fiesta o escriba 'EXIT' para concluir:");

while (nombre !== "EXIT") {
    listaDeInvitados.accesoAFiesta(nombre);
    nombre = prompt("Ingrese otro nombre para verificar si se encuentra en la lista o escriba 'EXIT' para acabar:");
}
