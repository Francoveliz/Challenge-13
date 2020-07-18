const menuBtn = document.querySelector(".menu-btn");
const navBar = document.getElementById("nav-bar");
let menuOpen = false;

/* disable body scroll function */
function noScroll() {
  window.scrollTo(0, 0);
}

menuBtn.addEventListener("click", () => {
  /* nav animation */
  navBar.classList.toggle("nav-active");
  /* hamburger button animation */
  if (!menuOpen) {
    // listener to disable scroll
    window.addEventListener("scroll", noScroll);
    menuBtn.classList.add("open");

    menuOpen = true;
  } else {
    /* close hamburger menu */
    menuBtn.classList.remove("open");
    menuOpen = false;
    // enable scroll
    window.removeEventListener("scroll", noScroll);
  }
});
