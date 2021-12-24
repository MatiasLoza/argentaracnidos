import { usuarioDTO } from "./DTOUsuario.js";
import { Usuario } from "./Usuario.js";
import { Usuarios } from "./Usuarios.js";
let id;
const usuarios = new Usuarios();


const formUsuarios = document.getElementById("form__usuarios");
const formNombre = document.getElementById("form__inputNombre");
const formEmail = document.getElementById("form__inputEmail");
const formUsuario = document.getElementById("form__inputUsuario");
const formContraseña = document.getElementById("form__inputContraseña");
const formEdad = document.getElementById("form__inputEdad");
const formTelefono = document.getElementById("form__inputTelefono");

const formMostrarResultados = document.getElementById("btn__mostrarResultados");



formUsuarios.addEventListener('submit', () => {
    try{
    id = getIDFromStorage() + 1;
    var nuevoUsuario = new Usuario();
    nuevoUsuario.setNombre(formNombre.value);
    nuevoUsuario.setUsuario(formUsuario.value);
    nuevoUsuario.setContraseña(formContraseña.value);
    nuevoUsuario.setEdad(formEdad.value);
    nuevoUsuario.setEmail(formEmail.value);
    nuevoUsuario.setTelefono(formTelefono.value);
    nuevoUsuario.setID(id);
    var DTOUsuario = new usuarioDTO(nuevoUsuario);
    usuarios.guardar(DTOUsuario);
    }catch {
        throw new Error("por favor complete los campos correctamente");
    }
})

formMostrarResultados.addEventListener("click", () => {
    usuarios.mostrar();
})




function getIDFromStorage() {
    let list = JSON.parse(localStorage.getItem("usuarios"));
    if (list == null){
        id = 0;
    } else {
    id = list.length;
    }
     return id;
 }



//funcion que valida que los datos ingresados sean validos.
function validateObject(objectToValidate) {
    if (objectToValidate == null || objectToValidate == undefined || objectToValidate == 0) {
        alert("Por favor complete los campos correctamente");
        throw console.error("por favor complete los campos correctamente");
    } else if (typeof objectToValidate == "string" && objectToValidate !== "") {
        return objectToValidate;
    } else if (typeof objectToValidate == "number" && !isNaN(validador) && validador !== 0) {
        return objectToValidate;
    } else alert("por favor complete los campos correctamente");
    throw new Error("ingrese los datos correctamente");
}

// funcion que valida datos como nombre y apellido, a los fines de que no puedan incluir numeros en  ese campo.
function validateString(objectToValidate) {
    if (objectToValidate.includes("1") || objectToValidate.includes("2") || objectToValidate.includes("3") || objectToValidate.includes("4") || objectToValidate.includes("5") || objectToValidate.includes("6") || objectToValidate.includes("7") || objectToValidate.includes("8") || objectToValidate.includes("9") || objectToValidate.includes("0")) {
        alert("Por favor ingrese los datos utilizando letras");
        throw console.error("Se espera una cadena de caracteres");
    }
    else {
        return objectToValidate;
    }
}