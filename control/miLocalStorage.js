const TAREA = 'tarea';

function guardarTarea(tareas){
    localStorage.setItem(TAREA, JSON.stringify(producto));
}

function obtenerTarea(){
    return JSON.parse(localStorage.getItem(TAREA)) || [];
}

function agregarTarea(nombre){
    const productos = obtenerTarea();
    productos.push({nombre});
    guardarTarea(productos);
}

export {agregarTarea, guardarTarea, obtenerTarea};