const incBtn = document.querySelector(".inc");
const decBtn = document.querySelector(".dec");

incBtn.addEventListener("click", function () {
  const paragraph = document.querySelector("p");
  const currentStyle = getComputedStyle(paragraph);
  let integer = parseInt(currentStyle.fontSize, 10);

  if (integer < 100) {
    integer += 5;
    integer = integer.toString() + "px";
    paragraph.style.fontSize = integer;
  }
});

decBtn.addEventListener("click", function () {
  const paragraph = document.querySelector("p");
  const currentStyle = getComputedStyle(paragraph);
  let integer = parseInt(currentStyle.fontSize, 10);

  if (integer > 6) {
    integer -= 5;
    integer = integer.toString() + "px";
    paragraph.style.fontSize = integer;
  }
});
