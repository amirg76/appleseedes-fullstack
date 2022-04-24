const form = document.querySelector(".form");
const inputs = form.querySelectorAll(".inputs input");

inputs[0].addEventListener("paste", handlePaste);
form.addEventListener("input", handleInput);

function handleInput(e) {
  const input = e.target;

  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData("text");

  inputs.forEach((input, i) => (input.value = paste[i] || ""));
}

////654321
