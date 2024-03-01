const form = document.getElementById('form-number');
const valorA = document.getElementById('valor-a');
const valorB = document.getElementById('valor-b');

function compareNumber(valorA, valorB){

    console.log('Comparando se ', valorA, ' é menor que ', valorB)
    return valorA < valorB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagemSucesso = `Correto, o valor de B está maior que o de valor A`;
    const mensagemError = `Errado, o valor de A está maior que o valor de B`;

    let formEValido = compareNumber(parseInt(valorA.value), parseInt(valorB.value))

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