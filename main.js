import { formulario } from "./componentes/formulario/formulario.js";


function app(){
    let contenedor = document.createElement('section');
    contenedor.className = "main";

    //formulario
    contenedor.appendChild(formulario());

    return contenedor;
}

document.body.appendChild(app());