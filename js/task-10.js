function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createDiv = document.querySelector("[data-create]");
const destroyDiv = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

input.addEventListener("change", (event) => {
  const amount = event.currentTarget.value;
});

function createBoxes(amount) {
  for (i = 1; i <= amount; i++) {
    const newElement = document.createElement("div");
    newElement.style.width = "30px";
    newElement.style.height = "30px";
    newElement.style.backgroundColor = getRandomHexColor();
    boxes.append(newElement);
  }
}

createDiv.addEventListener("click", createBoxes(amount));
