const inputVal = document.querySelector("#validation-input");

const validationLength = inputVal.dataset.length;

function validate() {
  if (inputVal.value.length == validationLength) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  } else {
    inputVal.classList.remove("valid");
    inputVal.classList.add("invalid");
  }
}

inputVal.addEventListener("blur", validate);
