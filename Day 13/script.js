let generateBtn = document.querySelector("#generate");
let setup = document.querySelector("#setup");
let punchline = document.querySelector("#punchline");

generateBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();

  setup.innerText = data.setup;
  punchline.innerText = data.punchline;
}

// var promise = new Promise((res, rej) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     res();
//   } else {
//     rej();
//   }
// });

// promise
//   .then(() => console.log("Promise resolved"))
//   .catch(() => console.log("not resolved"));
