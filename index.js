document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("bar");
    const menu = document.getElementById("hamburger-menu");

    bar.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !bar.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});