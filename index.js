const navbar = document.querySelector(".header .nav-bar nav");
const ham = document.querySelector(".header .nav-bar .ham");

ham.addEventListener("click", function () {
    navbar.classList.toggle("nav-toggle");
    ham.classList.toggle("close");
});