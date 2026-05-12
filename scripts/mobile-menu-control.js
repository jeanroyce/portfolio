const mobileMenu = document.getElementById('mobile-menu');


function closeMobileMenu() {
    mobileMenu.open = false;
}

function handleDocumentClick(event) {
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