document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.button');
    
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Esta funcionalidade estará disponível em breve!');
            });
        });
    } else {
        console.warn('Nenhum botão encontrado com a classe .button');
    }
});
