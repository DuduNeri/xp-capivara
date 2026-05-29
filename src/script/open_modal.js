const btnAbrir = document.getElementById('btn-entrar');
const modal = document.getElementById('modal-contato');

btnAbrir.addEventListener('click', (e) => {
    e.preventDefault(); // Evita qualquer comportamento padrão inesperado do botão
    modal.classList.add('active'); // Abre o modal adicionando a classe do CSS
});