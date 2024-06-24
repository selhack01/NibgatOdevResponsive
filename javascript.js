document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menuContainer = document.querySelector(".menuContainer");

    burgerMenu.addEventListener("click", function () {
        menuContainer.classList.toggle("show");
    });
});
