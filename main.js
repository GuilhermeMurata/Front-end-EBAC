const form = document.getElementById('form-number');

function compareNumber(valorA, valorB){
    if (valorA < valorB) {
        return mensagemSucesso;
    } else (valorA > valorB); {
        return mensagemError;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const valorA = document.getElementById('valor-a');
    const valorB = document.getElementById('valor-b');
    const mensagemSucesso = `Correto, o valor de B está maior que o de valor A`;
    const mensagemError = `Errado, o valor de A está maior que o valor de B`;

    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    } else {
        valorA.style.border = '1px solid red'
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
    }
})

valorA, valorB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = compareNumber(e.target.value);

    if (!formEValido) {
        valorA, valorB.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorA, valorB.classList.remove = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})
