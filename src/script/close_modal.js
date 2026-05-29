// Seleciona o botão de fechar (X) dentro do modal
const btnFechar = document.querySelector('.btn-fechar');

btnFechar.addEventListener('click', () => {
    modal.classList.remove('active'); // Fecha o modal removendo a classe
});