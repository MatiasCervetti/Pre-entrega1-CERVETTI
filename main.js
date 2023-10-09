function listaFiesta(nombre, nombreLista) {
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] === nombreLista) {
            console.log(nombreLista + " se encuentra en la lista, puede acceder a la fiesta.");
            return;
    }
}

console.log(nombreLista + " no se encuentra en la lista, por ende, no puede acceder a la fiesta.");
}


const nombresLista = ["Florencia", "Matias", "Francisco", "Tomas", "Facundo", "Ignacio"];


listaFiesta(nombresLista, "Matias");
listaFiesta(nombresLista, "Mikel");
listaFiesta(nombresLista, "Lucas");
listaFiesta(nombresLista, "Francisco");