const title = document.querySelector(".title");
const content = document.querySelector(".content");
const btn = document.querySelector("button");
const joke = fetch("https://api.jokes.one/jod")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    btn.addEventListener("click", function () {
      title.innerText = data.contents.jokes[0].joke.title;
      content.innerText = data.contents.jokes[0].joke.text;
    });
  })
  .catch((error) => {
    console.log(error);
  });
