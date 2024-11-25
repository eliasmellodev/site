document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Esta funcionalidade estará disponível em breve!');
        });
    });
});
