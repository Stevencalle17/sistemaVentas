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

function capturarProductos() {
    let totalProductos = 0;
    let totalPrecio = 0;
    let continuar = true;

    while (continuar) {
        let precio = prompt("Ingrese el precio del producto:");
        precio = parseFloat(precio);

        totalProductos += 1; // Incrementamos la cantidad de productos
        totalPrecio += precio; // Sumamos el precio del producto al total

        let agregarOtro = prompt("¿Desea agregar otro producto? (si/no):");
        if (agregarOtro !== "si") {
            continuar = false;
        }
    }

    return { totalProductos: totalProductos, totalPrecio: totalPrecio };
}
