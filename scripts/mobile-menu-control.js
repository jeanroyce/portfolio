const mobileMenu = document.getElementById('mobile-menu');

// Fecha o menu quando a navegação precisa voltar ao estado recolhido
function closeMobileMenu() {
    mobileMenu.open = false;
}

function handleDocumentClick(event) {
    // Ignora cliques internos e fecha apenas quando a interação acontece fora do menu
    if (!mobileMenu.contains(event.target)) {
        closeMobileMenu();
    }
}

function init() {
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('scroll', closeMobileMenu, { passive: true });
    document.addEventListener('touchmove', closeMobileMenu, { passive: true });
}

init();