const form = document.getElementById('formContainer');
const userName = document.getElementById('userName');
const adressEmail = document.getElementById('adressEmail');
const userMessage = document.getElementById('message');
const btnEnviar = document.getElementById('btn');

form.addEventListener('submit', submit => {
    userName.value.toLowerCase();
    adressEmail.value.toLowerCase();
    userMessage.value.toLowerCase();

    console.log(userName.value.toLowerCase());
    console.log(adressEmail.value.toLowerCase());
    console.log(userMessage.value.toLowerCase());

    if (userName.value.length === 0 || adressEmail.value.length === 0 || userMessage.value.length === 0) {
        submit.preventDefault();
        form.action = '';
    }
    if (userName.value.length >= 25 || adressEmail.value.length >= 50 || userMessage.value.length >= 500) {
        form.action = '';
        submit.preventDefault();
    }
})
