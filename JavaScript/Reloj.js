window.onload = function () {
    // Función para obtener el nombre del día de la semana
    function obtenerNombreDia(diaSemana) {
        var dias = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado"
        ];
        return dias[diaSemana];
    }

    // Función para obtener el nombre del mes
    function obtenerNombreMes(mes) {
        var meses = [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre"
        ];
        return meses[mes];
    }

    // Función para actualizar el reloj
    function actualizarReloj() {
        var fechaActual = new Date();
        var hora = fechaActual.getHours();
        var minutos = fechaActual.getMinutes();
        var segundos = fechaActual.getSeconds();
        var diaSemana = fechaActual.getDay();
        var dia = fechaActual.getDate();
        var mes = fechaActual.getMonth();
        var anio = fechaActual.getFullYear();

        // Convertir la hora al formato de 12 horas y agregar AM o PM
        var periodo = hora >= 12 ? "PM" : "AM";
        hora = hora % 12 || 12;

        // Agregar un cero delante si los minutos o segundos son menores a 10
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        var reloj = document.getElementById("reloj");
        reloj.innerHTML = hora + ":" + minutos + ":" + segundos + " " + periodo;

        var fecha = document.getElementById("fecha");
        var nombreDia = obtenerNombreDia(diaSemana);
        var nombreMes = obtenerNombreMes(mes);
        fecha.innerHTML =
            nombreDia +
            ", " +
            dia +
            " de " +
            nombreMes +
            " del " +
            anio;
    }

    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);
};
