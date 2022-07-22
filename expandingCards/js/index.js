const container = document.querySelector(".container-sm");

const addActive = (el) => {
  el.classList.toggle("active");
}

const removeCurrentActive = () => {
  const currentActiveEl = document.querySelector(".active");
  currentActiveEl.classList.toggle("active");
}

const clickHandler = (clickedEl) => {
  if (clickedEl.nodeName !== "DIV" || clickedEl.className.includes("active")) {
    return;
  }
  
  removeCurrentActive();
  addActive(clickedEl);
}

container.addEventListener("click", event => {
  clickHandler(event.target);
});