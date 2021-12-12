export class usuarioDTO {


    constructor(usuario) {
        this.usuario = usuario.getUsuario();
        this.id = usuario.getID();
    }


    getID(){
        return this.id;
    }

    toString(){
        return `[usuario = ${this.usuario} \nID = ${this.id}]`
    }
}