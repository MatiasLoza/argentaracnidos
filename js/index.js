import { usuarioDTO } from "./DTOUsuario.js";
import { Usuario } from "./Usuario.js";
import { Usuarios } from "./Usuarios.js";
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



formUsuarios.submit( () => {
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
        usuarios.guardar(DTOUsuario);
    } catch {
        throw new Error("por favor complete los campos correctamente");
    }
})

formMostrarResultados.click( () => {
    usuarios.mostrarPorID();
})


function getIDFromStorage() {
    let list = JSON.parse(localStorage.getItem("usuarios"));
    if (list == null) {
        id = 0;
    } else {
        id = list.length;
    }
    return id;
}
