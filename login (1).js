function login() {
    const userElement = document.getElementById("usuariologin");
    const passElement = document.getElementById("passlogin");

    if (!userElement || !passElement) {
        alert("Error: No se encuentran los campos en el HTML.");
        return;
    }

    const usuario = userElement.value.trim();
    const contraseña = passElement.value.trim();

    if (usuario === "" || contraseña === "") {
        alert("Por favor, llena todos los campos");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    const encontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (encontrado) {
        alert("¡Acceso concedido!");
        window.location.href = "crud.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}