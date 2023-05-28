function login() {
    var users = {
        "usuario1": "contraseña1",
        "usuario2": "contraseña2",
        "usuario3": "contraseña3"
    };

    var usuario = document.getElementById("usuario").value;
    var passWord = document.getElementById("passWord").value;

    if (users.hasOwnProperty(usuario) && users[usuario] === passWord) {
        if (usuario === "usuario1") {
            location.href = "./operation/index1.html";
        } else if (usuario === "usuario2") {
            location.href = "./operation/index2.html";
        } else if (usuario === "usuario3") {
            location.href = "./operation/index1.html";
        }
    } else {
        alert("Datos Incorrectos. Inténtelo nuevamente.");
    }
}



