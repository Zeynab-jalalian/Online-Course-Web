const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("open");
    menu.classList.toggle("bx-x");
})

window.onscroll = () => {
    navbar.classList.remove("open");
    menu.classList.remove("bx-x");
}