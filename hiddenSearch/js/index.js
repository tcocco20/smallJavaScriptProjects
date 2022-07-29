const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const searchDiv = document.querySelector(".search");
  const input = searchDiv.querySelector(".input");
  searchDiv.classList.toggle("active");
  input.focus();
});
