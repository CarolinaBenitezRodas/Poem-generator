function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user_instructions");
  let apiKey = "obcc5d4b0bc4t336609c2f30ba544fa3";
  let context =
    "You are a poetry enthusiast and skilled in crafting short poems. Your task is to create a 4-line poem in basic HTML, ensuring each line is separated by a <br />. Do NOT include a title or the author";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> Fetching a poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem_generator_form");
poemFormElement.addEventListener("submit", generatePoem);
