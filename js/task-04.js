const value = document.querySelector("#value");
let counterValue = value.textContent;
counterValue = 0;

console.log(counterValue);

buttonDec = counter.firstElementChild;
buttonInc = counter.lastElementChild;

console.log(buttonDec);
console.log(buttonInc);

buttonDec.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});

buttonInc.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
