const btn = document.querySelector("button");

async function gitHubProfile(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    if (response.ok) {
      const data = await response.json();

      const box = createNewDiv(data);
      buildAvatarImg(box, data);
      buildName(box, data);
      buildNumRepo(box, data);
      linkToGitHub();
    }
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
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const input = document.querySelector("input");
    gitHubProfile(input.value);
    input.value = "";
  });
}

function buildAvatarImg(box, data) {
  const avatarImg = box.querySelector(".avatarImg");
  avatarImg.style.backgroundImage = `url('https://avatars.githubusercontent.com/u/${data.id}?v=4.png')`;
  avatarImg.style.postion = "no-repeat center center/cover";
  avatarImg.style.cursor = "pointer";
}
function buildName(box, data) {
  const name = box.querySelector(".userName");
  name.innerText = "My name:   " + data.name;
}
function buildNumRepo(box, data) {
  const numRepo = box.querySelector(".numRepo");
  numRepo.innerText = "My repo's:  " + data.public_repos;
}
function linkToGitHub() {
  const gitHubBox = document.querySelector(".gitHubBox");
  gitHubBox.addEventListener("click", function (e) {
    console.log(e.target.closest(".box"));
    const gitHubLink = e.target.closest(".box").getAttribute("url-data");
    window.location.href = gitHubLink;
    console.log(gitHubLink);
  });
}

function buildError(error) {
  const errorMessage = document.querySelector(".error");
  if (error === "1") errorMessage.innerText = "User Not Found";
}
checkUser();
