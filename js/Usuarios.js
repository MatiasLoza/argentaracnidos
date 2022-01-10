export class Usuarios {
    constructor() {
        this.userList = JSON.parse(localStorage.getItem("usuarios")) || [];


    }

    guardar(DTOUsuario) {
        this.userList.push(DTOUsuario);
        localStorage.setItem("usuarios", JSON.stringify(this.userList));
    }

    mostrarPorID() {
        for (let usuario of this.userList) {
            $('#user__mostrar_resultados').append(`<div class="div__muestra__resultados"><p class ="result-font">
                                             el usuario: ${usuario.usuario} tiene un id: ${usuario.id}

                                             </p> </div>`)
        }
    }
}