const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const eventInput = textInput.addEventListener("input", (event) => {
  const textCont = event.currentTarget.value.trim();
  output.textContent = textCont || "Anonymous";
});
