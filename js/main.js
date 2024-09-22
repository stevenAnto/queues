document.addEventListener("DOMContentLoaded",()=>{
    renderMain();
    const btnCreate = document.querySelector('.create');
    btnCreate.addEventListener("click",generarFormulario);
    const btnCreateD = document.querySelector('.createD')
    btnCreateD.addEventListener("click",generarFormularioDemanda);
    const buscar = document.querySelector('#btnBuscar');
    buscar.addEventListener('click',renderPorBuscar)
    const inicio = document.querySelector('.colaVenta');
    inicio.addEventListener("click",renderMain);
})
