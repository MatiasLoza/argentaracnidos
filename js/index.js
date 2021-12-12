import { usuarioDTO } from "./DTOUsuario.js";
import { Usuario } from "./Usuario.js";
import { Usuarios } from "./Usuarios.js";
let id;
//variable temporal que se utiliza para el ciclo de crear Usuarios o ver los creados.
let creacion = "1";

const usuarios = new Usuarios();

/*funcion que se encarga de crear Usuarios, y asignarle valores, por intermedio de prompt, utilizando la transaccionalidad
 es decir que si en alguno de los campos el Usuario a registrar ingresa un dato no valido, el Usuario no se crearia, y arrojaria un error*/
 creacion = prompt("Por favor ingrese 1 para registrar otro Usuario, 2 para ver los usuarios creados");
 
while (creacion == "1" || creacion == "2") {
    switch (creacion) {
        case "1":
            crearUsuario();
            break;
        case "2":
            usuarios.mostrar();
            break;
    }
    creacion = prompt("Por favor ingrese 1 para registrar otro Usuario, 2 para ver que Usuarios hay registrados y cualquier otro digito para finalizar");
}
function getIDFromStorage() {
   let list = JSON.parse(localStorage.getItem("usuarios"));
   if (list == null){
       id = 0;
   } else {
   id = list.length;
   }
    return id;
}

function crearUsuario() {
     try {
    var nuevoUsuario = new Usuario();
    id = getIDFromStorage() + 1;
    nuevoUsuario.setUsuario(validateObject(prompt("Por favor ingrese su Usuario")));
    nuevoUsuario.setContraseña(validateObject(prompt("Por favor ingrese su contraseña")));
    nuevoUsuario.setNombre(validateString(validateObject(prompt("por favor ingrese su nombre (utilice solo letras)"))));
    nuevoUsuario.setApellido(validateString(validateObject(prompt("pro favor ingrtese su apellido (utilice solo letras)"))));
    nuevoUsuario.setEdad(prompt("Por favor ingrese su edad"));
    nuevoUsuario.setID(id);
    alert("Su Usuario fue creado correctamente");
    var DTOUsuario = new usuarioDTO(nuevoUsuario);
    usuarios.guardar(DTOUsuario);
       } catch {
         throw new Error("Ingrese los datos correctamente");
    }
}

//metodo que protege data sensible como contraseña, nombre y apellido



//funcion que valida que los datos ingresados sean validos.
function validateObject(objectToValidate) {
    if (objectToValidate == null || objectToValidate == undefined || objectToValidate == 0) {
        alert("Por favor complete los campos correctamente");
        throw console.error("por favor complete los campos correctamente");
    } else if (typeof objectToValidate == "string" && objectToValidate !== "") {
        return objectToValidate;
    } else if (typeof objectToValidate == "number" && !isNaN(validador) && validador !== 0) {
        return objectToValidate;
    } else alert("por favor complete los campos correctamente");
    throw new Error("ingrese los datos correctamente")
}

// funcion que valida datos como nombre y apellido, a los fines de que no puedan incluir numeros en  ese campo.
function validateString(objectToValidate) {
    if (objectToValidate.includes("1") || objectToValidate.includes("2") || objectToValidate.includes("3") || objectToValidate.includes("4") || objectToValidate.includes("5") || objectToValidate.includes("6") || objectToValidate.includes("7") || objectToValidate.includes("8") || objectToValidate.includes("9") || objectToValidate.includes("0")) {
        alert("Por favor ingrese los datos utilizando letras");
        throw console.error("Se espera una cadena de caracteres");
    }
    else {
        return objectToValidate;
    }
}




