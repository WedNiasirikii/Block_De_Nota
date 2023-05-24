function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearLastDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

window.onload = function () {
    // Función para obtener el nombre del día de la semana
    function obtenerNombreDia(diaSemana) {
        var dias = [
            "Domingo", "Lunes", "Martes", "Mi&eacute;rcoles",
            "Jueves", "Viernes", "Sábado"
        ];
        return dias[diaSemana];
    }

    // Función para obtener el nombre del mes
    function obtenerNombreMes(mes) {
        var meses = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
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

        // Agregar un cero delante si los minutos o segundos son menores a 10
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        var reloj = document.getElementById("reloj");
        reloj.innerHTML = hora + ":" + minutos + ":" + segundos;

        var fecha = document.getElementById("fecha");
        var nombreDia = obtenerNombreDia(diaSemana);
        var nombreMes = obtenerNombreMes(mes);
        fecha.innerHTML = nombreDia + ", " + dia + " de " + nombreMes + " del " + anio;
    }

    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);
};
// Función para verificar la posición de desplazamiento y mostrar u ocultar el botón
function verificarDesplazamiento() {
    var btnVolverArriba = document.getElementById("btnVolverArriba");
    if (window.scrollY > 0) {
        btnVolverArriba.style.display = "block";
    } else {
        btnVolverArriba.style.display = "none";
    }
}

// Función para volver arriba
function volverArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Evento para verificar el desplazamiento cuando se hace scroll
window.addEventListener("scroll", verificarDesplazamiento);