// 1. Seleciona todos os links do menu
const menuItems = document.querySelectorAll('.nav-links li a');

// 2. Adiciona um evento de clique para cada um deles
menuItems.forEach((item) => {
    item.addEventListener('click', function(e) {
        // Impede o link de recarregar a página (opcional)
        e.preventDefault();

        // 3. Remove a classe 'active' de todos os itens
        menuItems.forEach(el => el.classList.remove('active'));

        // 4. Adiciona a classe 'active' apenas no que você clicou
        this.classList.add('active');
    });
});