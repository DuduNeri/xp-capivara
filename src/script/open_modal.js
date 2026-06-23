const btnAbrir = document.getElementById('btn-entrar');
const modal = document.getElementById('modal-contato');

btnAbrir.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active'); 
});