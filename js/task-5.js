function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundColor = document.querySelector("body");
const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
btn.addEventListener("click", () => {
  let randomColors = getRandomHexColor();
  backgroundColor.style.backgroundColor = randomColors;
  textColor.textContent = randomColors;
});
