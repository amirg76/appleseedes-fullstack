const checkBox = document.querySelector(".checkBox");
const showImg = document.querySelector(".imgDiv");

checkBox.addEventListener("click", function () {
  if (checkBox.checked) showImg.classList.add("lightbulb");
  else showImg.classList.remove("lightbulb");
});
