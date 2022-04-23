function bienvenido(){
    alert ("Hola " + nombre + ", bienvenido al sistema de reserva del resort 'Altos de Simic', a continuación elijá la fecha en la que desee hospedarse")
}

function elegirFecha(v1,v2,v3) {
    fecha = prompt("Estas son nuestras fechas disponibles. Elija la que desee: \n 1: Primera quincena de enero \n 2: Primera quincena de febrero \n 3: Segunda quincena de marzo");

    if (fecha==="1"){
        alert("Elegiste la primera quincena de enero. Tiene un valor de " + v1 );
    } else if (fecha==="2"){
        alert("Elegiste la primera quincena de febrero. Tiene un valor de " + v2 );
    } else if (fecha==="3"){
            alert("Elegiste la segunda quincena de marzo. Tiene un valor de " + v3);
        }
     else if ((fecha!=="1") && (fecha!=="2") && (fecha!=="3")) {
        alert("No es una opción válida")
        elegirFecha(v1,v2,v3);
    }
}

function elegirActividad(ac1,ac2,ac3,ac4,ac5){
    alert("Como parte de una promoción le ofrecemos una de las siguientes actividades para que realize de manera gratuita junto a su familia");
    actividad=prompt("Elija una de las siguientes opciones: Spa, Natacion, Baile, Cabalgata o Senderismo").toUpperCase();
    switch(actividad){
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
            elegirActividad(ac1,ac2,ac3,ac4,ac5)
         }
}



nombre = prompt("Escriba su nombre y apellido")
bienvenido();
elegirFecha("30.000 pesos","20.000 pesos","12.000 pesos");
elegirActividad("SPA", "NATACION", "BAILE", "CABALGATA", "SENDERISMO");




