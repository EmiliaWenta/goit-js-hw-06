const slider = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

const sliderStartValueInPx = slider.value + "px";
text.style.fontSize = sliderStartValueInPx;

slider.addEventListener("input", (event) => {
  const choosedValue = slider.value;
  const choosedValueInPx = choosedValue + "px";
  text.style.fontSize = choosedValueInPx;
});
