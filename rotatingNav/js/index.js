const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

const toggleNav = nav => {
  nav.classList.toggle("show-nav");
}

const clickHandler = () => {
  toggleNav(container);
}

open.addEventListener("click", clickHandler);

close.addEventListener("click", clickHandler);