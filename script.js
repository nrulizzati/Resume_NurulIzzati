document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll("footer i");

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", function () {
            icon.style.color = "#02A6A6";
        });
        icon.addEventListener("mouseout", function () {
            icon.style.color = "";
        });
    });
});