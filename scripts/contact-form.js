const form = document.getElementById('contact');

function logSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form)
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    window.alert('Nome: ' + name + '\nEmail: ' + email + '\nMensagem: ' + message + '\n\nMensagem enviada');
}

function init() {
    form.addEventListener('submit', logSubmit);
}

init();