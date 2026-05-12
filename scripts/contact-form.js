const form = document.getElementById('contact');

// Intercepta e simula um envio de submit do formulário
function logSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form)
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Feedback temporário para simular uma saida real
    window.alert('Nome: ' + name + '\nEmail: ' + email + '\nMensagem: ' + message + '\n\nMensagem enviada');
}

function init() {
    form.addEventListener('submit', logSubmit);
}

init();