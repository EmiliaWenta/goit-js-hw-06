function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const quantityInput = document.querySelector("input");
const createDiv = document.querySelector("[data-create]");
const destroyDiv = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createDiv.addEventListener("click", () => {
  createBoxes(quantityInput.value);
});

destroyDiv.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const items = [];
  for (let i = 1; i <= amount; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("div");
    const dimensionsOfItem = 20 + i * 10 + "px";
    item.style.backgroundColor = color;
    item.style.width = dimensionsOfItem;
    item.style.height = dimensionsOfItem;
    items.push(item);
  }
  boxes.append(...items);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
