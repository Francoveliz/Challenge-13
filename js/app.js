const menuBtn = document.querySelector(".menu-btn");
const navBar = document.getElementById("nav-bar");
const headerBar = document.querySelector("body");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    /* nav animation */
    navBar.classList.toggle("nav-active");
    /* hamburger button animation */
    if (!menuOpen) {
        menuBtn.classList.add("open");
        headerBar.style.position = "fixed";
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        headerBar.style.position = "static";
        menuOpen = false;
    }
});