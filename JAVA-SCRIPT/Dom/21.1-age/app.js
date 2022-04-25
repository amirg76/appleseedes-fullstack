const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const input = document.querySelector("input");
  const newH2 = document.querySelector("h2");

  if (input.value > 18) newH2.innerText = "you can drink appear";
  else if (input.value < 18) newH2.innerText = "you’re too young";
});
