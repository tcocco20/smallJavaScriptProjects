const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  const faq = buttons[i].parentElement;
  buttons[i].addEventListener("click", () => {
    faq.classList.toggle("activ");
  });
}
