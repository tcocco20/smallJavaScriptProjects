const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let step = 1;

const nextClickHandler = () => {
  updateStep("next");
  updateProgress();
  updateCircles("next");
  updateButtons();
}

const prevClickHandler = () => {
  updateStep("prev");
  updateProgress();
  updateCircles("prev");
  updateButtons();
}

const disable = (el) => {
  el.disabled = true;
}

const enable = (el) => {
  el.disabled = false;
}

const addActive = (el) => {
  el.classList.add("active");
}

const removeActive = (el) => {
  el.classList.remove("active");
}

const updateStep = (type) => {
  if (type === "next") {
    step = increment(step);
  }
  
  if (type === "prev") {
    step = decrement(step);
  }
}

const updateCircles = (type) => {
  if (type === "next") {
    addActive(circles[step - 1]);
  }
  
  if (type === "prev") {
    removeActive(circles[step]);
  }
}

const updateProgress = () => {
  if (step === 1) {
    progress.style.width = "0%";
  }
  
  if (step === 2) {
    progress.style.width = "33%";
  }
  
  if (step === 3) {
    progress.style.width = "66%";
  }
  
  if (step === 4) {
    progress.style.width = "100%";
  }
}

const updateButtons = () => {
  if (step === 1) {
    disable(prevBtn);
  } else {
    enable(prevBtn);
  }
  
  if (step === 4) {
    disable(nextBtn);
  } else {
    enable(nextBtn);
  }
}

const increment = (num) => ++num;
const decrement = (num) => --num;

nextBtn.addEventListener("click", nextClickHandler);
prevBtn.addEventListener("click", prevClickHandler);