const nomeInput = document.getElementById('nome-input');
const cartaoNome = document.getElementById('cartao-nome');

nomeInput.addEventListener('input', () => {
    cartaoNome.textContent = nomeInput.value;
});

