let id = 0;
let creacion = "1";
const usuarios = [];
let objectToValidate;

class Persona {

    constructor() {
        this.usuario;
        this.contraseña;
        this.nombre;
        this.apellido;
        this.edad;
        this.id;
        id++;
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


function crearUsuario() {
    try {
        const nuevoUsuario = new Persona();
        nuevoUsuario.setUsuario(validateObject(prompt("Por favor ingrese su usuario")));
        nuevoUsuario.setContraseña(validateObject(prompt("Por favor ingrese su contraseña")));
        nuevoUsuario.setNombre(validateString(validateObject(prompt("por favor ingrese su nombre (utilice solo letras)"))));
        nuevoUsuario.setApellido(validateString(validateObject(prompt("pro favor ingrtese su apellido (utilice solo letras)"))));
        nuevoUsuario.setEdad(prompt("Por favor ingrese su edad"));
        nuevoUsuario.setID(id);
        alert("Su usuario fue creado correctamente");
        usuarios.push(nuevoUsuario);
    } catch {
        throw new Error("Ingrese los datos correctamente");
    }
}



while (creacion == "1" || creacion == "2") {
    switch (creacion) {
        case "1":
            crearUsuario();
            break;
        case "2":
            for (i = 0; i < usuarios.length; i++) {
                alert(`[ ` + usuarios[i].toString() + " ]\n");
            }
            break;
    }
    creacion = prompt("Por favor ingrese 1 para registrar otro usuario, 2 para ver que usuarios hay registrados y cualquier otro digito para finalizar");
}




function validateObject(objectToValidate) {
    if (objectToValidate == null || objectToValidate == undefined || objectToValidate == 0) {
        console.log(objectToValidate);
        alert("Por favor complete los campos correctamente");
        throw console.error("por favor complete los campos correctamente");
    } else if (typeof objectToValidate == "string" && objectToValidate !== "") {
        return objectToValidate;
    } else if (typeof objectToValidate == "number" && !isNaN(validador) && validador !== 0) {
        return objectToValidate;
    } else alert("por favor complete los campos correctamente");
    throw new Error("ingrese los datos correctamente")
}


function validateString(objectToValidate) {
    if (objectToValidate.includes("1") || objectToValidate.includes("2") || objectToValidate.includes("3") || objectToValidate.includes("4") || objectToValidate.includes("5") || objectToValidate.includes("6") || objectToValidate.includes("7") || objectToValidate.includes("8") || objectToValidate.includes("9") || objectToValidate.includes("0")) {
        alert("Por favor ingrese los datos utilizando letras");
        throw console.error("Se espera una cadena de caracteres");
    }
    else {
        return objectToValidate;
    }
}