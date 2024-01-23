document.getElementById("submitRegistro").addEventListener("click", function (event) {
    // Get the values of the password fields
    var password = document.getElementById("pass").value;
    var repeatPassword = document.getElementById("pass2").value;

    if (password !== repeatPassword) {
        alert("Passwords do not match");
        event.preventDefault(); 
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        event.preventDefault(); 
    }
    
});