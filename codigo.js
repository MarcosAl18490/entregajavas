function bienvenido(){
    alert ("Hola " + nombre + ", bienvenido al sistema de reserva del resort 'Altos de Simic', a continuación elijá la fecha en la que desee hospedarse")
}

function elegirFecha(v1,v2,v3,v4,v5,v6) {
    fecha = prompt("Estas son nuestras fechas disponibles. Elija la que desee: primera quincena de enero, primera quincena de febrero  o segunda quincena de marzo . Escriba solo el mes deseado.").toUpperCase();

    if (fecha===v4){
        alert("Elegiste la primera quincena de enero. Tiene un valor de " + v1 );
    } else if (fecha===v5){
        alert("Elegiste la primera quincena de febrero. Tiene un valor de " + v2 );
    } else if (fecha===v6){
            alert("Elegiste la segunda quincena de marzo. Tiene un valor de " + v3);
        }
     else if ((fecha!==v4) && (fecha!==v5) && (fecha!==v6)) {
        alert("No es una opción válida")
        elegirFecha(v1,v2,v3,v4,v5,v6);
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

    function confirmar(c1,c2){
        alert(datos);
        validar= prompt("Si los datos son correctos escriba si, de lo contrario escriba no y sera redirigido al primer paso").toUpperCase();

            if(validar===c1){
                alert("Su reserva sera confirmada en cuestión de segundos");
            }
            else if(validar===c2){
                alert("Complete sus datos nuevamente");
                bienvenido();
            }
            else if((validar!==c1)&&(validar!==c2)){
                alert("Opción inválida");
                confirmar(c1,c2);
            }
        }
    



    function cargando(){
        for(let i=3; i<=3; i--){
            alert("Confirmando su reserva, espere " + i + "seg");
            if(i===1){
                break;
            }
}
            alert("Su reserva a sido confirmada. Muchas gracias por confiar en nosotros.");
}




nombre = prompt("Escriba su nombre y apellido")
bienvenido();
elegirFecha("30.000 pesos","20.000 pesos","12.000 pesos","ENERO","FEBRERO", "MARZO");
elegirActividad("SPA", "NATACION", "BAILE", "CABALGATA", "SENDERISMO");
datos= alert("Estimado/a " + nombre + ", su reserva hecha para el mes de " + fecha + " incluye " + actividad + " de manera gratuita para toda su familia." );
confirmar("SI","NO");

cargando();
