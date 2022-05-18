// Mediante el siguiente formulario el cliente realiza su reserva para el cuarto de un hotel familiar.

class datos{
    constructor(nacionalidad,edad,profesion){
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.profesion = profesion;
    }
}


let titulo = document.getElementById("encabezado");
titulo.innerHTML = "<h1 style='color:red; font-family:helvetica;'>Bienvenidos al Resort Altos de Simic</h1>";

let persona1 = new datos ();
let fechaelegida = "";
let actividadelegida = "";
let habitacionelegida = "";
const extras = ["Servicio de limpieza - Ropa blanca - Desayuno"];

// En los siguientes tres campos almacenos los datos de los mismos en una Sessions Storage
let nombre = document.getElementById("valor1");   
nombre.onchange = () => {console.log("Tu nombre es " + nombre.value);
sessionStorage.setItem("nombre", nombre.value)};

let apellido = document.getElementById("valor2");
apellido.onchange = () => {console.log("Tu apellido es " + apellido.value);
sessionStorage.setItem("apellido", apellido.value)};


let email = document.getElementById("valor3");
email.onchange = () => {console.log("Tu email es " + email.value)
sessionStorage.setItem("email", email.value)};

let nacionalidad = document.getElementById("valor4");
let edad = document.getElementById("valor5");
let profesion = document.getElementById("valor6");

// Los siguientes tres campos apareceran en forma de objeto previamente creado
nacionalidad.onchange = () => { persona1.nacionalidad = nacionalidad.value};
edad.onchange = () => { persona1.edad = edad.value};
profesion.onchange = () => { 
    persona1.profesion = profesion.value;
    console.log(persona1)
};


function elegirfecha(fecha) {
    fechaelegida = fecha.value;
    console.log(fecha.value)    
}

function elegiractividad(actividad){
    actividadelegida = actividad.value;
    console.log("La actividad elegida es " + actividad.value)

}

// En la siguiente funcion a la opcion elegida por el usuario le concateno otras opciones ya establecidas
function elegirhabitacion(habitacion){
    habitacionelegida = habitacion.value;
    console.log("La Habitacion elegida es " + (habitacion.value).concat(extras));

}

function validarFormulario(event){
    event.preventDefault();
    if (nombre.value.length>0 && apellido.value.length>0 && email.value.length>0 ){
        for (let i = 3; i <= 3; i--) {
            console.log("Confirmando su reserva, espere " + i + "seg");
            if (i === 1) {
                break;
            }
        }
    
        alert("Su reserva a sido confirmada. Muchas gracias por confiar en nosotros.");
    }
    else{
        alert("Complete todos los datos");
    }
}


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener('submit',validarFormulario);

