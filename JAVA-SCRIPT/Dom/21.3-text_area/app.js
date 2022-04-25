const Btn = document.querySelector("button");

Btn.addEventListener("click", function () {
  const textarea = document.querySelector("textarea");
  const textAreaArr = [...textarea.value].filter((e) => String(e).trim());

  if (textAreaArr.length < 100) {
    const h2 = document.querySelector("h2");
    h2.innerText = `Your must enter at least 100 characters`;
  } else {
    const h2 = document.querySelector("h2");
    h2.innerText = "";
  }
});
