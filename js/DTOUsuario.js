export class usuarioDTO {


    constructor(usuario) {
        this.nombre = usuario.getNombre();
        this.usuario = usuario.getUsuario();
        this.contraseña = usuario.getContraseña();
        this.telefono = usuario.getTelefono();
        this.id = usuario.getID();
    }


    getID(){
        return this.id;
    }

    toString(){
        return `[usuario = ${this.usuario} \nID = ${this.id}]`
    }
}