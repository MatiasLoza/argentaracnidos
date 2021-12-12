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
        
        for (let i = 0; i < this.userList.length; i++) {
            const itemList = document.createElement('li');
            itemList.innerHTML = `<span>

                                         ${JSON.stringify(this.userList[i])} 

                                  </span>`;
         listContainer.appendChild(itemList);
        }


    }
}