const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

input.addEventListener("input", (event) => {
  const choosedValue = event.currentTarget.value.toString();
  text.style.fontSize = choosedValue;
});
