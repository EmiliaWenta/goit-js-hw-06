function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body");

const handleClick = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  nameOfColor.textContent = getRandomHexColor();
};

button.addEventListener("click", handleClick);
