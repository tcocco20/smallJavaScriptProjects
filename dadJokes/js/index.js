const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await (await fetch("https://icanhazdadjoke.com/", config)).json();
  // .then(res => res.json())
  // .then(data => {
  //   jokeEl.innerHTML = data.joke;
  // });

  jokeEl.innerHTML = res.joke;
}

jokeBtn.addEventListener("click", generateJoke);
