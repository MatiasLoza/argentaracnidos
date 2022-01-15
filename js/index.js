import { usuarioDTO } from "./DTOUsuario.js";
import { Usuario } from "./Usuario.js";
import { Usuarios } from "./Usuarios.js";
const LOCAL_URL = "../db/data.json"

let id;
const usuarios = new Usuarios();

const formUsuarios = $("#form__usuarios");
const formNombre = $("#form__inputNombre");
const formEmail = $("#form__inputEmail");
const formUsuario = $("#form__inputUsuario");
const formContraseña = $("#form__inputContraseña");
const formEdad = $("#form__inputEdad");
const formTelefono = $("#form__inputTelefono");
const formMostrarResultados = $("#user__container__buscar");
const userEliminar = $("#user__container__eliminar");
const userSelect = $("#user__container__buscador__select");
const userInput = $("#user__buscador");



/*Se obtiene datos de la base de datos simulada,
Solo la primera vez, luego quedara guardada en el local storage.
*/
$(document).ready(function () {
    const list = JSON.parse(localStorage.getItem("usuarios"));
    if (list == null || list == 0) {
        fetch(LOCAL_URL)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("usuarios", JSON.stringify(data));
            })
    }

});


//Se obtienen del dom los valores, y se guarda el usuario.
formUsuarios.submit(() => {
    try {
        id = getIDFromStorage() + 1;
        var nuevoUsuario = new Usuario();
        nuevoUsuario.setNombre(formNombre.val());
        nuevoUsuario.setUsuario(formUsuario.val());
        nuevoUsuario.setContraseña(formContraseña.val());
        nuevoUsuario.setEdad(formEdad.val());
        nuevoUsuario.setEmail(formEmail.val());
        nuevoUsuario.setTelefono(formTelefono.val());
        nuevoUsuario.setID(id);
        var DTOUsuario = new usuarioDTO(nuevoUsuario);
        usuarios.save(DTOUsuario);
    } catch {
        throw new Error("por favor complete los campos correctamente");
    }
})

//muestra los valores en pantalla
formMostrarResultados.click(() => {
    cleanUp();
    if (userSelect.val() == "id" && userInput.val() !== "") {
        usuarios.findByID(userInput.val());
    } else if (userSelect.val() == "userName" && userInput.val() !== "") {
        usuarios.findByUserName(userInput.val());
    } else if (userSelect.val() == "all") {
        usuarios.findAll();
    }
    else {
        usuarios.emptySearch();
    }
})
//funcion para limpiar el dom
function cleanUp() {
    $(".div__muestra__resultados").remove();
}

//evento para eliminar un usuario
userEliminar.click(() => {
    usuarios.deleteUser(userInput.val());
})


//Se obtiene el id de los usuarios creados de la LS
function getIDFromStorage() {
    let list = JSON.parse(localStorage.getItem("usuarios"));
    if (list == null) {
        id = 0;
    } else {
        id = list.length;
    }
    return id;
}
