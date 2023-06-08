function generarContrasena() {
    var longitud = document.getElementById("longitud").value;

    if (isNaN(longitud) || longitud < 1 || longitud > 16) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un número entre 1 y 16.',
        });
    } else {
        var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=ñÑ';
        var contrasena = '';

        for (var i = 0; i < longitud; i++) {
            var indice = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres.charAt(indice);
        }

        document.getElementById("contrasena-generada").textContent = contrasena;
    }
}

function copyText() {
    var contrasena = document.getElementById("contrasena-generada").textContent;

    // Copiar la contraseña al portapapeles
    var auxiliar = document.createElement("input");
    auxiliar.setAttribute("value", contrasena);
    document.body.appendChild(auxiliar);
    auxiliar.select();
    document.execCommand("copy");
    document.body.removeChild(auxiliar);

    Swal.fire({
        icon: 'success',
        title: 'contrase' + String.fromCharCode(241) + 'a copiada',
        text: 'La contrase' + String.fromCharCode(241) + 'a ha sido copiada al portapapeles.',
    });
}
