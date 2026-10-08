
const menuButton = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });
}
