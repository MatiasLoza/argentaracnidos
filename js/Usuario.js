export class Usuario {
    constructor() {
        this.usuario;
        this.contraseña;
        this.nombre;
        this.apellido;
        this.edad;
        this.id;
    }

    getUsuario() {
        return this.usuario;
    }

    setUsuario(usuario) {
        this.usuario = usuario;
    }

    setContraseña(contraseña) {
        this.contraseña = contraseña;
    }
    getContraseña() {
        return this.contraseña;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }

    setID(id) {
        this.id = id;
    }

    getID() {
        return this.id;

    }
    toString() {
        return `Usuario= ${this.usuario} \nid= ${this.id} \nnombre= ${this.nombre} \napellido= ${this.apellido} \nedad= ${this.edad} años `
    }
}