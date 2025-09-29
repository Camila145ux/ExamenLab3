import { guardarTarea, obtenerTarea } from "../../control/miLocalStorage.js";

function formulario(){
    let contenedorFormulario = document.createElement('section');
    contenedorFormulario.className = "formulario"

    //inputs
    const buscador = document.createElement('input');
    buscador.placeholder = "tarea";
    buscador.className = "tarea";

    const BotonAgregar = document.createElement('button');
    BotonAgregar.innerText = "Agregar";
    BotonAgregar.className = "BotonAgregar";

    contenedorFormulario.appendChild(buscador);
    contenedorFormulario.appendChild(BotonAgregar);

    const listaTareas = document.createElement('div');
    listaTareas.className = "listaTareas";
    contenedorFormulario.appendChild(listaTareas);

     function mostrarTarea(nombre) {
        const tareaElemento = document.createElement('p');
        tareaElemento.innerText = nombre;
        tareaElemento.className = "tareaItem";
        listaTareas.appendChild(tareaElemento);
    }

    BotonAgregar.addEventListener('click', () => {
       const nombre = buscador.value.trim();
        if (nombre !== "") {
            guardarTarea(nombre);     
            mostrarTarea(nombre);     
            buscador.value = "";      
        }
    });

    const tareasGuardadas = obtenerTarea();
    tareasGuardadas.forEach(mostrarTarea);





    return contenedorFormulario;
}



export {formulario};