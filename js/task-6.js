function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const numberInpt = document.querySelector("input");

let inptVal;

btnCreate.addEventListener("click", () => {
  numberInpt.focus();
  if (numberInpt.value > 0 && numberInpt.value <= 100) {
    createBoxes(numberInpt.value);
    numberInpt.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

btnDestroy.addEventListener("click", () => {
  numberInpt.value = "";
  boxes.innerHTML = "";
});

let boxsize;
let newContainer;

function createBoxes(amount) {
  boxes.innerHTML = "";
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newContainer = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newContainer);
    boxsize += 10;
  }
}
