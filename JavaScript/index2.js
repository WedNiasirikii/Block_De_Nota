// Función para verificar la posición de desplazamiento y mostrar u ocultar el botón
function verificarDesplazamiento() {
    var btnVolverArriba = document.getElementById("btnVolverArriba");
    if (window.scrollY > 750) {
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