const ttInput = document.getElementById("ttdevre");
ttInput.addEventListener("input", function (e) {
  validateLength(e, 3, false);
});

function validateLength(e, maxLength, allowNegative = true) {
  const input = e.target;
  let { value } = input;

  if (!allowNegative && value.includes("-")) {
    value = value.replace("-", "");
  }

  if (value.length > maxLength) {
    input.value = value.slice(0, maxLength);
  }

  input.value = value;
}
