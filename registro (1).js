function registrar() {
    let nuevousuario = document.getElementById("nuevousuario").value;
    let nuevacontraseña = document.getElementById("nuevacontraseña").value;

    if (nuevousuario === "" || nuevacontraseña === "") {
        alert("Todos los campos deben estar llenos");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let nuevosusuario = {
        usuario: nuevousuario,
        contraseña: nuevacontraseña
    };

    usuarios.push(nuevosusuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado con éxito");
    window.location.href = "index.html";
}
 