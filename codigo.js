// Atraves del siguiente simulador, el usuario hara el proceso par registrase en un hotel.

class datos {
    constructor(edad, dni, domicilio, profesion) {
        this.edad = edad;
        this.dni = dni;
        this.domicilio = domicilio;
        this.profesion = profesion;
    }
}


// Utilizacion de DOM para llamar al titulo por su ID y mostrarlo en console.log. Modifico su color de fuente desde el codigo.

let titulo = document.getElementById("resort");
titulo.innerHTML = "<h1 style='color:red; font-family:helvetica;'>Bienvenidos al Resort Altos de Simic</h1>"
console.log(titulo.innerHTML);



// En esta primera función el usuario se registra con su nombre y apellido.


function bienvenido() {
    let nombre = document.getElementById("nombre").value;
    let boton = document.getElementById("btn1");
    boton.onclick = () => {console.log("Hola " + nombre + ", bienvenido al sistema de reserva del resort 'Altos de Simic', a continuación elijá la fecha en la que desee hospedarse")}
    nombre.onkeydown = () => {console.log("keydown")};
} 

// Ingreso objetos mediante una clase para luego crear una variable atraves del molde datos. La finalidad del mismo es obtener mas datos del usuario

function ingresaDatos() {
    
    }
    alert("Ingrese los siguientes datos para completar su ficha personal");
    const edad = prompt("Ingrese su edad aquí");
    const dni = prompt("Ingrese su DNI sin utilizar puntos");
    const domicilio = prompt("Ingrese su domicilio");
    const profesion = prompt("Ingrese su profesión aquí");

    const persona1 = new datos(edad, dni, domicilio, profesion);
    alert("Sus datos son: edad: " + persona1.edad + ", dni: " + persona1.dni + ", domicilio: " + persona1.domicilio + " y su profesión es " + persona1.profesion + ".");



// Aquí elegirá la fecha deseada para vacionar
function elegirFecha(v1, v2, v3, v4, v5, v6) {
    fecha = prompt("Estas son nuestras fechas disponibles. Elija la que desee: primera quincena de enero, primera quincena de febrero  o segunda quincena de marzo . Escriba solo el mes deseado.").toUpperCase();

    if (fecha === v4) {
        alert("Elegiste la primera quincena de enero. Tiene un valor de " + v1);
    } else if (fecha === v5) {
        alert("Elegiste la primera quincena de febrero. Tiene un valor de " + v2);
    } else if (fecha === v6) {
        alert("Elegiste la segunda quincena de marzo. Tiene un valor de " + v3);
    }
    else if ((fecha !== v4) && (fecha !== v5) && (fecha !== v6)) {
        alert("No es una opción válida")
        elegirFecha(v1, v2, v3, v4, v5, v6);
    }
}


// Ingreso array y utilizo el metodo "Concat" para unir dos arrays en uno solo. En esta función el usuario elige el tipo de cuarto deseado

// Creo una lista de elementos para mostrar las habitaciones disponibles.
let cuartos = document.createElement("ul");
cuartos.innerHTML = "<h3>Lista de habitaciones disponible</h3> <p>Habitacion Classic</p>  <p>Habitacion Premium</p> <p>Habitacion Deluxe</p>";
document.body.append(cuartos);



function habitaciones(c1, c2, c3) {
    alert("A continuación le mostramos los tres tipos de habitaciones que nos quedan disponible con sus características");
    const habitacion1 = ["HABITACIÓN CLASSIC - VALOR (15.000): \nCapacidad: tres personas \nCaja de seguridad \nBalcón \nDucha escocesa"];
    const habitacion2 = ["HABITACIÓN PREMIUM - VALOR (25.000): \nCapacidad: cuatro personas \nCaja de seguridad \nBalcón \nHidromasaje"];
    const habitacion3 = ["HABITACIÓN DELUXE - VALOR (45.000): \nCapacidad: cinco personas \nCaja de seguridad \nBalcón \nHidromasaje y yacuzzi \nFrigobar"];
    alert(habitacion1);
    alert(habitacion2);
    alert(habitacion3);

    reserva = prompt("Elija cualquiera de las tres opciones disponibles (CLASSIC - PREMIUM - DELUXE). Sepa usted que a la habitación reservada se le sumara el servicio de limpieza, ropa blanca y desayuno.").toUpperCase();
    const extras = ["\nServicio de limpieza \nRopa blanca \nDesayuno"];

    if (reserva === c1) {
        alert("Tu reserva es:" + habitacion1.concat(extras));
    } else if (reserva === c2) {
        alert("Tu reserva es:" + habitacion2.concat(extras));
    } else if (reserva === c3) {
        alert("Tu reserva es:" + habitacion1.concat(extras));
    }
    else if ((reserva !== c1) && (reserva !== c2) && (reserva !== c3)) {
        alert("No es una opción válida")
        habitaciones(c1, c2, c3);
    }
}

// Aquí elige la actividad gratuita que desea realizar

function elegirActividad(ac1, ac2, ac3, ac4, ac5) {
    alert("Como parte de una promoción le ofrecemos una de las siguientes actividades para que realize de manera gratuita junto a su familia");
    actividad = prompt("Elija una de las siguientes opciones: Spa, Natacion, Baile, Cabalgata o Senderismo").toUpperCase();
    switch (actividad) {
        case ac1:
            alert("Usted eligió " + ac1);
            break;
        case ac2:
            alert("Usted eligió " + ac2);
            break;
        case ac3:
            alert("Usted eligió " + ac3);
            break;
        case ac4:
            alert("Usted eligió " + ac4);
            break;
        case ac5:
            alert("Usted eligió " + ac5);
            break;
        default:
            alert("Opcion inválida");
            elegirActividad(ac1, ac2, ac3, ac4, ac5)
    }
}

// En esta función la forma de pago. Utilizo el metodo find para que al ingresar el nombre de la tarjeta ya lo vincule con la cantidad de cuotas que le ofrece.

function formaDepago() {
    const credito = [
        { tarjeta: 'VISA', cuotas: "6 sin interes" },
        { tarjeta: 'MASTERCARD', cuotas: "12 sin interes" },
        { tarjeta: 'CABAL', cuotas: "18 sin interes" },
    ]
    pagoElegido = prompt("En estos momentos solo aceptamos pagos con tarjeta de crédito. Estas son nuestras opciones: \nVisa - 6 cuotas sin interes \nMastercard - 12 cuotas sin interes \nCabal - 12 cuotas sin interes").toUpperCase();

    const tarjeta1 = credito.find(elemento => elemento.tarjeta.toUpperCase() == pagoElegido);

    if (tarjeta1) {
        alert("Tarjeta elegida: " + tarjeta1.tarjeta + " Cantidad de cuotas: " + tarjeta1.cuotas);
        console.log(tarjeta1);
    } else {
        alert("OPCIÓN INCORRECTA")
        formaDepago();
    }
}


// En este paso el usuario valida sus datos para finalizar el proceso o reiniciarlo


function confirmar(c1, c2) {
    alert("Estimado/a " + nombre + ", su reserva hecha para el mes de " + fecha + " incluye " + actividad + " de manera gratuita para toda su familia.");
    validar = prompt("Si los datos son correctos escriba si, de lo contrario escriba no y sera redirigido al primer paso").toUpperCase();

    if (validar === c1) {
        alert("Su reserva sera confirmada en cuestión de segundos");
    }
    else if (validar === c2) {
        alert("Complete sus datos nuevamente");
        return 'error';
    }
    else if ((validar !== c1) && (validar !== c2)) {
        alert("Opción inválida");
        confirmar(c1, c2);
    }
}

function cargando() {
    for (let i = 3; i <= 3; i--) {
        alert("Confirmando su reserva, espere " + i + "seg");
        if (i === 1) {
            break;
        }
    }

    alert("Su reserva a sido confirmada. Muchas gracias por confiar en nosotros.");
}


// Función que engloba todas las demas y determina si el proceso de repite o no, en base a la ultima respuesta del usuario a la hora de validar su formulario.

function registrarse() {
    bienvenido();
    ingresaDatos();
    elegirFecha("30.000 pesos", "20.000 pesos", "12.000 pesos", "ENERO", "FEBRERO", "MARZO");

    
    habitaciones("CLASSIC", "PREMIUM", "DELUXE");
    elegirActividad("SPA", "NATACION", "BAILE", "CABALGATA", "SENDERISMO");
    formaDepago();

    if (confirmar("SI", "NO") === 'error') {
        return 'error';
    };
    cargando();
    return 'OK';
}

let registro = '';

while (registro !== 'OK') {
    registro = registrarse();
}


