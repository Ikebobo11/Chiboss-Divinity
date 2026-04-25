document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }
});