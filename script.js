document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('disabled')) {
                alert('Esta funcionalidade estará disponível em breve!');
            } else {
                alert('Botão clicado!');
            }
        });
    });
});
