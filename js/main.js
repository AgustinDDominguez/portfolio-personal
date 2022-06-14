let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});