const Btn = document.querySelector("button");
const smileys = document.querySelector(".smileys");
const h2 = document.querySelector("h2");

Btn.addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.querySelector("input");
  const smileyImg = document.querySelectorAll(".smileImg");

  smileyImg.forEach((element) => smileys.removeChild(element));

  if (isNaN(input.value)) {
    h2.innerText = `Your must enter a number`;
  } else {
    h2.innerText = "";
    for (let i = 0; i < input.value; i++) {
      const newDiv = document.createElement("div");
      smileys.appendChild(newDiv);
      newDiv.classList.add("smileImg");
    }
  }
});
