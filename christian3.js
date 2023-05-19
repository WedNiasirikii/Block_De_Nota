function manejarTecla(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        guardarNota();
    }
}

function guardarNota() {
    var nota = document.getElementById("editor").value;
    var notasGuardadas = document.getElementById("notasGuardadas");
    var nuevaNota = document.createElement("div");
    nuevaNota.textContent = nota;
    notasGuardadas.appendChild(nuevaNota);
    document.getElementById("editor").value = ""; // Limpiar el textarea después de guardar la nota
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