function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Caminito escondido -Josefina Plá",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem_generator_form");
poemFormElement.addEventListener("submit", generatePoem);
