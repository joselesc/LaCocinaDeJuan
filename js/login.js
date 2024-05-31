document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log("--------- 🔥🔥🔥🔥🔥🔥🔥🔥 -----------");
    let emailInput = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let passInput = document.getElementById('password');
    
    let email = emailInput.value.trim();
    let password = passInput.value.trim();
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validEmail = false;
    let validPassword = false;

    // Validación del email
    if (!emailRegex.test(email)) {
        emailError.textContent = "Ingrese un correo valido.";
        emailInput.focus();
        login = false;
        //return;
    } else {
        validEmail = true;
        emailError.textContent = "";
    }

    // Validación de la contraseña
    if (password === "") {
        passwordError.textContent = "La contraseña no puede estar vacía.";
        passInput.focus();
        //return;
    } else {
        validPassword = true;
        passwordError.textContent = "";
    }

    if (validEmail && validPassword) {
        // Mostrar mensaje de bienvenida
        alert("Bienvenido, " + emailInput.value + "!");

        // Limpiar los inputs
        emailInput.value = "";
        passInput.value = "";

        // Opcional: Mostrar el mensaje de logueo en la consola
        console.log("Logueado" + " email --> " + emailInput.value + " Id --> " + passInput.value);
    } else {
        return;
    }

});

