function renderMain() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const contenedor = document.createElement('div');
    contenedor.classList.add('contenedor');
    let ofertas = document.createElement('div');
    let title = document.createDocumentFragment('p');
    title.textContent = 'Todas las ofertas ';
    ofertas.appendChild(title);
    ofertas.classList.add('ofertas')

    const lista = document.createElement('ul');
    ofertasDatos.forEach((ofert)=>{
        const il = document.createElement('li');
        il.textContent = ofert.lugar+" "+"S/ "+ofert.precio;
        lista.appendChild(il);
    })
    /*console.log(localStorage.getItem("nombre"));
    Object.keys(localStorage).forEach((key) => {
        console.log("Entro a cargar del local Storage")
        console.log(key, localStorage.getItem(key));
        const il = document.createElement('li');
        il.textContent = localStorage.getItem(key);
        lista.appendChild(il);
    })*/
    ofertas.appendChild(lista);

    let demanda = document.createElement('div');
    let titleD = document.createDocumentFragment('p');
    titleD.textContent = 'Todas las demandas';
    demanda.appendChild(titleD);
    demanda.classList.add('demandas');
    const listaDemanda = document.createElement('ul');
    demandanteDatos.forEach((demanda)=>{
        const il = document.createElement('li');
        il.textContent = demanda.lugar+" "+"S/ "+demanda.precio;
        listaDemanda.appendChild(il);
    })
    demanda.appendChild(listaDemanda);
    let carOferta =card(myOfer,'My Oferta');
    let cardDemanda =card(myDemanda,'My Demanda');

    contenedor.appendChild(carOferta);
    contenedor.appendChild(ofertas);
    contenedor.appendChild(demanda);
    contenedor.appendChild(cardDemanda);
    main.appendChild(contenedor);
}
function renderPorBuscar(){
    const main = document.querySelector('main');
    main.innerHTML='';
    const contedor = document.createElement('div');
    contedor.classList.add("resultadosBusqued");
    let busqueda = document.querySelector("#search");
    let titleResultados = document.createElement("div");
    let cuerpoResultados = document.createElement("div");
    const seleccionTipoOferta = document.querySelector('input[name="tipo"]:checked');
    const seleccionUserOrLugar = document.querySelector('input[name="filtro"]:checked');
    console.log(busqueda.value);
    console.log(seleccionTipoOferta.value);
    console.log(seleccionUserOrLugar.value);

    const listaFiltrada = filtrarPorNombre(seleccionTipoOferta.value,
        seleccionUserOrLugar.value,
        busqueda.value
    );
    titleResultados.textContent = "Resultados de la Busqueda"
    let lista = document.createElement('lu');
    listaFiltrada.forEach((r)=>{
        let item = document.createElement('li');
        item.textContent = r.nombre+" "+r.lugar+" "+r.posicionCola
        " "+r.precio;
        lista.appendChild(item);
    })
    cuerpoResultados.appendChild(lista);
    contedor.appendChild(titleResultados);
    contedor.appendChild(cuerpoResultados);
    main.appendChild(contedor);
    console.log(listaFiltrada);

}
function card(objetoO,title){
    const card = document.createElement('div');
    const titleCard = document.createElement('div');
    titleCard.textContent = title;
    card.appendChild(titleCard);

    if (objetoO != null) {
        card.classList.add('card');

        // Añadir contenido a la card
        const nombre = document.createElement('h2');
        nombre.textContent = objetoO.nombre;

        const lugar = document.createElement('p');
        lugar.textContent = `Lugar: ${objetoO.lugar}`;

        const posicionCola = document.createElement('p');
        posicionCola.textContent = `Posición en cola: ${objetoO.posicionCola}`;

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${objetoO.precio}`;

        // Agregar los elementos al contenedor de la card
        card.appendChild(nombre);
        card.appendChild(lugar);
        card.appendChild(posicionCola);
        card.appendChild(precio);

        return card;
    }
    return card;
}
function renderPorMatch() {
    const busquedaMatch = matcheando(myOfer.precio,ofertasDatos);
    if(busquedaMatch!=null){
        const contenedorResultado = document.createElement('div');
        const label = document.createElement('p');
        label.textContent = "Transaccion exitosa";
    }
}