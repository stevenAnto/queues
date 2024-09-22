function filtrarPorNombre(tipoOfertDemanda, tipoUsuarioLugar, buscado) {
    let listaFiltrada = [];
    console.log("buscamos")
    console.log(tipoOfertDemanda,tipoUsuarioLugar,buscado);
    if (tipoOfertDemanda == "oferta") {
        if(tipoUsuarioLugar == "usuario"){
            listaFiltrada = ofertasDatos.filter((oferta)=>{
                return oferta.nombre == buscado;
            })
        }
        if(tipoUsuarioLugar=="lugar"){
            console.log('oferta y lugar')
            listaFiltrada = ofertasDatos.filter((oferta)=>{
               return  oferta.lugar == buscado;
            })
        }
    }
    else{
        if(tipoUsuarioLugar == "usuario"){
            listaFiltrada = demandanteDatos.filter((d)=>{
               return d.nombre == buscado;
            })
        }
        if(tipoUsuarioLugar=="lugar"){
            listaFiltrada = demandanteDatos.filter((d)=>{
                return d.lugar == buscado;
            })
        }
    }
    return listaFiltrada;
}
function matcheando(target,coleccion){
    const resultado = coleccion.find(c => c.precio == target);
    coleccion = coleccion.filter(c => c.precio !== target);
    console.log(resultado);
    return resultado;
}