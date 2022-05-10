const avatarImg = document.querySelector(".avatarImg");
const name = document.querySelector(".userName");

const numRepo = document.querySelector(".numRepo");
const btn = document.querySelector("button");

// const joke = fetch("https://api.jokes.one/jod")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     btn.addEventListener("click", function () {
//       title.innerText = data.contents.jokes[0].joke.title;
//       content.innerText = data.contents.jokes[0].joke.text;
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function gitHubProfile(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);
    const box = createNewDiv(data);

    // box.setAttribute("url-data", data.html_url);

    const avatarImg = box.querySelector(".avatarImg");
    const name = box.querySelector(".userName");
    const numRepo = box.querySelector(".numRepo");
    console.log(numRepo);

    avatarImg.style.backgroundImage = `url('https://avatars.githubusercontent.com/u/${data.id}?v=4.png')`;
    avatarImg.style.postion = "no-repeat center center/cover";
    name.innerText = "My name:   " + data.name;
    numRepo.innerText = "My repo's:  " + data.public_repos;
    const gitHubBox = document.querySelector(".gitHubBox");
    gitHubBox.addEventListener("click", function (e) {
      console.log(e.target);
      // const gitHubLink = data.html_url;
      const gitHubLink = e.target.getAttribute("url-data");
      console.log(gitHubLink);
    });
  } catch (error) {
    console.log(error);
  }
}
function createNewDiv(data) {
  const gitHubBox = document.querySelector(".gitHubBox");
  const box = document.createElement("div");
  box.classList.add("box");
  const att = document.createAttribute("url-data");
  att.value = data.html_url;
  box.setAttributeNode(att);
  gitHubBox.appendChild(box);
  const avatarImg = document.createElement("div");
  avatarImg.classList.add("avatarImg");
  box.appendChild(avatarImg);
  const userName = document.createElement("div");
  userName.classList.add("userName");
  box.appendChild(userName);
  const numRepo = document.createElement("div");
  numRepo.classList.add("numRepo");
  box.appendChild(numRepo);
  return box;
}

function checkUser() {
  btn.addEventListener("click", function () {
    const input = document.querySelector("input");
    gitHubProfile(input.value);
  });
}

// function goUserGitHuB(e) {
//   console.log(e.target);
// }

checkUser();
