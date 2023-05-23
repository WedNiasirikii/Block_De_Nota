function manejarTecla(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        guardarNota();
    }
}
var limiteElementos = 5;

function guardarNota() {

    var nota = document.getElementById("editor").value;
    var notasGuardadas = document.getElementById("notasGuardadas");
    var limiteElementos = 5
    // Verificar el lÃ­mite de elementos
    if (notasGuardadas.children.length >= limiteElementos) {

        // Desactivar el campo de entrada
        document.getElementById("editor").disabled = true;

        return; // Detener la ejecuciÃ³n de la funciÃ³n
    }

    var contenedorNota = document.createElement("div");
    contenedorNota.classList.add("contenedor-nota");

    var nuevaNota = document.createElement("div");
    nuevaNota.textContent = nota;

    // Agregar un botÃ³n para eliminar la nota
    var eliminarNotaBtn = document.createElement("button");
    eliminarNotaBtn.classList.add("btn-eliminar");
    var eliminarIcono = document.createElement("i");
    eliminarIcono.classList.add("material-icons");
    eliminarIcono.textContent = "delete";
    eliminarNotaBtn.appendChild(eliminarIcono);
    eliminarNotaBtn.addEventListener("click", function () {
        notasGuardadas.removeChild(contenedorNota);

        // Restablecer el campo de entrada si el lÃ­mite no se ha alcanzado
        if (notasGuardadas.children.length < limiteElementos) {
            document.getElementById("editor").disabled = false;
        }
    });

    contenedorNota.appendChild(nuevaNota);
    contenedorNota.appendChild(eliminarNotaBtn);
    notasGuardadas.appendChild(contenedorNota);
    document.getElementById("editor").value = ""; // Limpiar el textarea despuÃ©s de guardar la nota

    // Desactivar el campo de entrada si se alcanzÃ³ el lÃ­mite despuÃ©s de guardar la nota
    if (notasGuardadas.children.length >= limiteElementos) {
        document.getElementById("editor").disabled = true;
    }


}
function eliminarUltimaNota() {
    var notasGuardadas = document.getElementById("notasGuardadas");
    var ultimaNota = notasGuardadas.lastElementChild;
    if (ultimaNota) {
        var contenedorNota = ultimaNota; // Definir contenedorNota como la última nota antes de eliminarla
        contenedorNota.classList.add("fade-out"); // Agregar la clase de animación

        setTimeout(function () {
            notasGuardadas.removeChild(contenedorNota); // Eliminar el contenedor después de la duración de la animación
            // Restablecer el campo de entrada si el límite no se ha alcanzado
            if (notasGuardadas.children.length < limiteElementos) {
                document.getElementById("editor").disabled = false;
            }
        }, 500); // Duración de la animación en milisegundos (0.5 segundos en este ejemplo)
    }
}

function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundImage;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = b;
}
function reiniciarLista() {
    var notasGuardadas = document.getElementById("notasGuardadas");
    notasGuardadas.innerHTML = "";

    // Habilitar el campo de entrada
    document.getElementById("editor").disabled = false;
}
