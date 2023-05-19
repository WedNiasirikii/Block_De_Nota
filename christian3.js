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
    // Verificar el límite de elementos
    if (notasGuardadas.children.length >= limiteElementos) {
        var mensajeLimite = document.createElement("div");
        mensajeLimite.textContent = "¡Límite alcanzado 9/9!";
        notasGuardadas.appendChild(mensajeLimite);

        // Desactivar el campo de entrada
        document.getElementById("editor").disabled = true;

        return; // Detener la ejecución de la función
    }

    var contenedorNota = document.createElement("div");
    contenedorNota.classList.add("contenedor-nota");

    var nuevaNota = document.createElement("div");
    nuevaNota.textContent = nota;

    // Agregar un botón para eliminar la nota
    var eliminarNotaBtn = document.createElement("button");
    eliminarNotaBtn.classList.add("btn-eliminar");
    var eliminarIcono = document.createElement("i");
    eliminarIcono.classList.add("material-icons");
    eliminarIcono.textContent = "delete";
    eliminarNotaBtn.appendChild(eliminarIcono);
    eliminarNotaBtn.addEventListener("click", function () {
        notasGuardadas.removeChild(contenedorNota);

        // Restablecer el campo de entrada si el límite no se ha alcanzado
        if (notasGuardadas.children.length < limiteElementos) {
            document.getElementById("editor").disabled = false;
        }
    });

    contenedorNota.appendChild(nuevaNota);
    contenedorNota.appendChild(eliminarNotaBtn);
    notasGuardadas.appendChild(contenedorNota);
    document.getElementById("editor").value = ""; // Limpiar el textarea después de guardar la nota

    // Desactivar el campo de entrada si se alcanzó el límite después de guardar la nota
    if (notasGuardadas.children.length >= limiteElementos) {
        document.getElementById("editor").disabled = true;
    }

}





function eliminarUltimaNota() {
    var notasGuardadas = document.getElementById("notasGuardadas");
    var ultimaNota = notasGuardadas.lastElementChild;
    if (ultimaNota) {
        notasGuardadas.removeChild(ultimaNota);
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
