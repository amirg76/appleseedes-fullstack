const startHereLi = document.querySelector(".start-here");

// 1.
startHereLi.innerText = "main title";
// 2.
const subUl = document.querySelectorAll("ul");
const newLi = document.createElement("li");
newLi.innerText = "sub title 4";
subUl[1].appendChild(newLi);

// 3.
const lastUl = subUl[0];
const allLi = lastUl.querySelectorAll("li");
lastUl.removeChild(allLi[7]);

// 4.
allLi[0].innerText = "Master Of The Dom";

// 5.
const pElement = document.querySelector("p");
pElement.style.color = "blue";
