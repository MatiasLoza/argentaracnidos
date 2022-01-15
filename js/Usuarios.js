export class Usuarios {
    constructor() {
        this.userList = JSON.parse(localStorage.getItem("usuarios"));
    }
    //Metodo para guardar un usuario en el LS
    save(DTOUsuario) {
        for (let usuario of this.userList) {
            if (DTOUsuario.usuario == usuario.usuario) {
                alert("el usuario ya esta registrado");
                throw new console.error("el usuario ya fue registrado");

            }
        }
        this.userList.push(DTOUsuario);
        localStorage.setItem("usuarios", JSON.stringify(this.userList));

    }
    //Metodo que busca por un id y luego lo renderiza en el DOM
    findByID(id) {
        let user;
        for (let usuario of this.userList) {
            if (id == usuario.id) {
                user = usuario.id;
                $('#user__mostrar_resultados').append(`<div class="div__muestra__resultados"><p class ="result-font">
                                             el usuario: ${usuario.usuario} tiene un id: ${usuario.id}

                                             </p> </div>`)
            }
        }
        if (typeof user == "undefined") {
            $('#user__mostrar_resultados').append(`<div class="div__muestra__resultados"><p class ="result-font">
                No se encontraron Resultados

                </p> </div>`)
        }
    }

    //Metodo que busca por un nombre de usuario y luego lo renderiza en el DOM
    findByUserName(userName) {
        let user;
        for (let usuario of this.userList) {
            if (userName.toLowerCase() == usuario.usuario.toLowerCase()) {
                $('#user__mostrar_resultados').append(`<div class="div__muestra__resultados"><p class ="result-font">
                                             el usuario: ${usuario.usuario} tiene un id: ${usuario.id}

                                             </p> </div>`)
            }
        }
        if (typeof userName == "undefined") {
            $('#user__mostrar_resultados').append(`<div class="div__muestra__resultados"><p class ="result-font">
            No se encontraron Resultados

            </p> </div>`)
        }

    }
    //Metodo que busca todos los usuarios creados, y los renderiza en la pantalla
    findAll() {
        for (let usuario of this.userList) {
            $('#user__mostrar_resultados').append(`<div class="div__muestra__resultados"><p class ="result-font">
                                             el usuario: ${usuario.usuario} tiene un id: ${usuario.id}

                                             </p> </div>`)
        }
    }

    //Metodo que elimina un usuario, por id o por nombre de usuario
    deleteUser(user) {
        for (let usuario of this.userList) {
            if (user == usuario.id) {
                if (user !== -1) {
                    this.userList.splice(usuario, user);
                    localStorage.setItem("usuarios", JSON.stringify(this.userList));
                    break;
                }
            } else if (user.toLowerCase == usuario.usuario.toLowerCase()) {
                this.userList.splice(usuario, user);
                localStorage.setItem("usuarios", JSON.stringify(this.userList));
                break;
            }
        }
    }


    //envia una alerta cuando se intenta enviar parametros erroneos
    emptySearch() {
        alert("Eliga una opcion por la que buscar o escriba correctamente el parametro de busqueda.");
    }


}