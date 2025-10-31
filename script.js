const nomeInput = document.getElementById('nome-input');
const cartaoNome = document.getElementById('cartao-nome');

nomeInput.addEventListener('input', () => {
    cartaoNome.textContent = nomeInput.value;
});

const cartao = document.getElementById('cartao');
const btnAzul = document.getElementById('btn-azul');
const btnVerde = document.getElementById('btn-verde');

btnAzul.addEventListener('click', () => {
    cartao.classList.remove('fundo-verde');
    cartao.classList.add('fundo-azul');
});

btnVerde.addEventListener('click', () => {
    cartao.classList.remove('fundo-azul');
    cartao.classList.add('fundo-verde');
});

const btnFonte = document.getElementById('btn-fonte');

btnFonte.addEventListener('click', () => {
    cartao.classList.toggle('fonte-alternativa');
});

