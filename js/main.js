window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const hamburger_menu = document.querySelector('.hamburger-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        hamburger_menu.classList.toggle('is-active');
    });
}