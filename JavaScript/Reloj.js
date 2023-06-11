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
            "Sabado"
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
        var zonaHoraria = document.getElementById("timezone-select").value;
        var fechaActual = moment().tz(zonaHoraria);
        var hora = fechaActual.format("hh:mm:ss A");

        var reloj = document.getElementById("reloj");
        reloj.innerHTML = hora;

        var minutos = fechaActual.minutes();
        var segundos = fechaActual.seconds();
        var diaSemana = fechaActual.day();
        var dia = fechaActual.date();
        var mes = fechaActual.month();
        var anio = fechaActual.year();

        var nombreDia = obtenerNombreDia(diaSemana);
        var nombreMes = obtenerNombreMes(mes);

        var fecha = document.getElementById("fecha");
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

    document.getElementById("timezone-select").addEventListener("change", function () {
        actualizarReloj();
    });
};