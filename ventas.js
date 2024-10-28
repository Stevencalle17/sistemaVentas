function iniciarSesion() {
    let usuarioPredefinido = "admin";
    let contrasenaPredefinida = "1234";
    let intentos = 0;
    let maxIntentos = 3;

    while (intentos < maxIntentos) {
        let usuario = prompt("Ingrese su usuario:");
        let contrasena = prompt("Ingrese su contraseña:");

        if (usuario === usuarioPredefinido && contrasena === contrasenaPredefinida) {
            alert("Inicio de sesión exitoso");
            return true;
        } else {
            intentos++;
            alert("Usuario o contraseña incorrectos. Intentos restantes: " + (maxIntentos - intentos));
        }
    }

    alert("Demasiados intentos fallidos. El sistema se cerrará.");
    return false;
}