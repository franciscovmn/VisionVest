document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden"); // Mostra/oculta o menu
        });
    }
});
