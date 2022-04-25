const Btn = document.querySelector("button");

Btn.addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.querySelector("input");
  const smileyImg = document.querySelectorAll(".smileImg");
  const smileys = document.querySelector(".smileys");
  smileyImg.forEach((element) => smileys.removeChild(element));

  if (isNaN(input.value)) {
    const h2 = document.querySelector("h2");
    h2.innerText = `Your must enter a number`;
  } else {
    const h2 = document.querySelector("h2");
    h2.innerText = "";
    for (let i = 0; i < input.value; i++) {
      const newDiv = document.createElement("div");
      const smileys = document.querySelector(".smileys");

      smileys.appendChild(newDiv);
      newDiv.classList.add("smileImg");
    }
  }
});
