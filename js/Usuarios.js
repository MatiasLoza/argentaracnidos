export class Usuarios {
    constructor(lista) {
        this.userList = JSON.parse(localStorage.getItem("usuarios")) || [];


    }

    guardar(DTOUsuario) {
        this.userList.push(DTOUsuario);
        localStorage.setItem("usuarios", JSON.stringify(this.userList));
    }

    mostrar() {
        const listContainer = document.getElementById("muestra__resultados");
        
        for (let usuario of this.userList) {
            const itemList = document.createElement('li');
            itemList.innerHTML = `<p>
                                     el usuario: ${usuario.usuario} tiene un id: ${usuario.id}

                                  </p>`;
         listContainer.appendChild(itemList);
        }


    }
}