

function validarInicioSesion() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    
        
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }
    
    window.location.href = 'Index.html';
    
    return false;
}
