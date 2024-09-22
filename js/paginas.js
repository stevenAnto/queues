
function generarFormulario() {
    //genera formulario para crear una nueva oferta
    const mainContenedor = document.querySelector('main');
    const contenedorForm = document.createElement('div');
    contenedorForm.classList.add('formulario')
    mainContenedor.innerHTML = '';
    mainContenedor.appendChild(contenedorForm);

    for (let key in formu) {
        container = document.createElement('div');
        container.classList.add('entradas');
        contenedorForm.appendChild(container);
        label = document.createElement('label');
        label.textContent = key;
        input = document.createElement('input');
        input.setAttribute('required', true)
        container.appendChild(label)
        container.appendChild(input);
    }
    const botonEnviarFormulario = document.createElement('div');
    contenedorForm.appendChild(botonEnviarFormulario);
    botonEnviarFormulario.textContent = "Guardar Oferta";
    const nuevoRegistro = {};


    botonEnviarFormulario.addEventListener('click', () => {
        elementos = document.querySelectorAll('.entradas');
        console.log(elementos);
        let validador = validarInputs(elementos);
        if(validador==true){
            elementos.forEach(element => {
                console.log(element.children[0].textContent);
                console.log(element.children[1].value);
                const valorInput = element.children[1].value.trim();
                    nuevoRegistro[element.children[0].textContent] = valorInput;
                /* formu[element.children[0].textContent]= element.children[1].value;
                 localStorage.setItem(element.children[0].textContent,element.children[1].value)*/
            });
            myOfer = nuevoRegistro;
            ofertasDatos.push(nuevoRegistro);
            renderMain();
        }
        else{
            alert('no se permite campos vacios')        }
    })
}
function validarInputs(coleccion){
    for (let c of coleccion){
        console.log('validadno')
        console.log(c);
        const valorInput = c.children[1].value.trim();
        if(valorInput==''){
            return false;
        }
    }
    return true;
}
//Refactorizar y usar closures
function generarFormularioDemanda() {
    //genera formulario para crear una nueva demanda
    const mainContenedor = document.querySelector('main');
    const contenedorForm = document.createElement('div');
    contenedorForm.classList.add('formulario')
    mainContenedor.innerHTML = '';
    mainContenedor.appendChild(contenedorForm);

    for (let key in formu) {
        container = document.createElement('div');
        container.classList.add('entradas');
        contenedorForm.appendChild(container);
        label = document.createElement('label');
        label.textContent = key;
        input = document.createElement('input');
        container.appendChild(label)
        container.appendChild(input);
    }
    const botonEnviarFormulario = document.createElement('div');
    contenedorForm.appendChild(botonEnviarFormulario);
    botonEnviarFormulario.textContent = "Guardar Demanda";
    const nuevoRegistro = {};
    botonEnviarFormulario.addEventListener('click', () => {
        elementos = document.querySelectorAll('.entradas');
        elementos.forEach(element => {
            console.log(element.children[0].textContent);
            console.log(element.children[1].value);
            nuevoRegistro[element.children[0].textContent] = element.children[1].value;
            /* formu[element.children[0].textContent]= element.children[1].value;
             localStorage.setItem(element.children[0].textContent,element.children[1].value)*/
        });
        myDemanda =nuevoRegistro;
        console.log(formu);
        renderMain();
    })
    demandanteDatos.push(nuevoRegistro);

}