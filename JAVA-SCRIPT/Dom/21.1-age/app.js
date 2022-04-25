const btn = document.querySelector("button");
const newH2 = document.querySelector("h2");

btn.addEventListener("click", function () {
  const input = document.querySelector("input");

  if (input.value > 18) newH2.innerText = "you can drink appear";
  else if (input.value < 18) newH2.innerText = "you’re too young";
});
