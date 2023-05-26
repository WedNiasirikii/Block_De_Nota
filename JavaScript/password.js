function generarContrasena() {
    var longitud = document.getElementById("longitud").value;
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=ñÑ';
    var contrasena = '';

    for (var i = 0; i < longitud; i++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indice);
    }

    document.getElementById("contrasena-generada").textContent = contrasena;
}