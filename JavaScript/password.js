function incrementarNumero() {
    var pElement = document.getElementById("numero-caracteres");
    var numero = parseInt(pElement.innerHTML);
  
    if (numero < 17) {
      numero++;
      pElement.innerHTML = numero;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'El valor maximo permitido es 17',
            position: 'top-end',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
    }
}
  
function disminuirNumero() {  
    var pElement = document.getElementById("numero-caracteres");
    var numero = parseInt(pElement.innerHTML);
  
    if (numero > 5) {
      numero--;
      pElement.innerHTML = numero;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'El valor minimo permitido es 5',
            position: 'top-end',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
    }
}
function generarContrasena() {
  var longitudElement = document.getElementById("numero-caracteres");
  var longitud = parseInt(longitudElement.textContent);
  var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*@^ñÑ-_';
  var contrasena = '';

  for (var i = 0; i < longitud; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indice);
  }

  var passwordElement = document.getElementById("password");
  passwordElement.textContent = contrasena;
}
function copiarPassword() {
  var passwordElement = document.getElementById("password");
  var passwordText = passwordElement.textContent;

  if (passwordText.trim() !== "") {
    navigator.clipboard.writeText(passwordText).then(function() {
      // Copiado exitoso
      Swal.fire({
        icon: 'success',
        title: 'Contrase&ntildea copiada al portapapeles',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }, function() {
      // Error al copiar
      Swal.fire({
        icon: 'error',
        title: 'No se pudo copiar la contrase&ntildea',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    });
  } else {
    // No hay contraseña generada
    Swal.fire({
      icon: 'error',
      title: 'No se ha generado ninguna contrase&ntildea',
      position: 'top-end',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  }
}

function reproducirSonido() {
  var clickSound = document.getElementById("clickSound1");
  clickSound.play();
}
function reproducirSonido2() {
  var clickSound = document.getElementById("clickSound2");
  clickSound.play();
}
function reproducirSonido3() {
  var clickSound = document.getElementById("clickSound3");
  clickSound.play();
}








