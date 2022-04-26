const btn = document.querySelector("button");
const form = document.querySelector("form");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const age = document.querySelector(".age").value;
  const email = document.querySelector(".email").value;
  if (
    confirm(`Is This Data Ok?
  name:${name}
  age:${age}
  email:${email}`)
  ) {
    confirm("congratulations you successfully sent this form");
    form.reset();
  }
});
