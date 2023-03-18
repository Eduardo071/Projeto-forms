let campo = document.querySelector('.campo')

const campoNome = document.querySelector('#name')
let avisoNome = document.querySelector('.avisoNome')
const campoEmail = document.querySelector('#email')
let avisoEmail = document.querySelector('.avisoEmail')
const campoTelefone = document.querySelector('#number')
let avisoTelefone = document.querySelector('.avisoTelefone')
const campoMensagem = document.querySelector('#mensagem')
let avisoMensagem = document.querySelector('.avisoMensagem')

const botao = document.querySelector('.button')

botao.addEventListener('click', () => {
    if (campoNome.value == "") {
        campoNome.style.borderColor = '#F52E2E'
        campoNome.style.marginBottom = '0'
        avisoNome.classList.remove('hide')
    } else {
        campoNome.style.borderColor = '#00C22B'
        campoNome.style.marginBottom = '1.5rem'
        avisoNome.classList.add('hide')
    }
    
    if (campoEmail.value == "") {
        campoEmail.style.borderColor = '#F52E2E'
        campoEmail.style.marginBottom = '0'
        avisoEmail.classList.remove('hide')

    }  else {
        campoEmail.style.borderColor = '#00C22B'
        campoEmail.style.marginBottom = '1.5rem'
        avisoEmail.classList.add('hide')
    }
    
    if (campoTelefone.value == "") {
        campoTelefone.style.borderColor = '#F52E2E'
        campoTelefone.style.marginBottom = '0'
        avisoTelefone.classList.remove('hide')

    }  else {
        campoTelefone.style.borderColor = '#00C22B'
        campoTelefone.style.marginBottom = '1.5rem'
        avisoTelefone.classList.add('hide')
    }
    
    if (campoMensagem.value == "") {
        campoMensagem.style.borderColor = '#F52E2E'
        campoMensagem.style.marginBottom = '0'
        avisoMensagem.classList.remove('hide')
    } else {
        campoMensagem.style.borderColor = '#00C22B'
        campoMensagem.style.marginBottom = '1.5rem'
        avisoMensagem.classList.add('hide')
    }

})