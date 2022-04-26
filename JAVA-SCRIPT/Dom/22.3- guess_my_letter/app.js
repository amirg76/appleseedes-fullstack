const alphabet = [
  { char: "a", val: 0 },
  { char: "b", val: 0 },
  { char: "c", val: 0 },
  { char: "d", val: 0 },
  { char: "e", val: 0 },
  { char: "f", val: 0 },
  { char: "g", val: 0 },
  { char: "h", val: 0 },
  { char: "i", val: 0 },
  { char: "j", val: 0 },
  { char: "k", val: 0 },
  { char: "l", val: 0 },
  { char: "m", val: 0 },
  { char: "n", val: 0 },
  { char: "o", val: 0 },
  { char: "p", val: 0 },
  { char: "q", val: 0 },
  { char: "r", val: 0 },
  { char: "s", val: 0 },
  { char: "t", val: 0 },
  { char: "u", val: 0 },
  { char: "v", val: 0 },
  { char: "w", val: 0 },
  { char: "x", val: 0 },
  { char: "y", val: 0 },
  { char: "z", val: 0 },
];

const randomLetter = Math.floor(Math.random() * alphabet.length);
const myLetterChoise = alphabet[randomLetter].char;

let userChoise = document.querySelector("h3");
let message = document.querySelector("p");
let guessedMessage = document.querySelector("h2");
let myLetterShow = document.querySelector(".myLetter");
const btn = document.querySelector("button");
let newGame = true;
let newMessage = true;

console.log(myLetterChoise);
document.addEventListener("keypress", function (e) {
  const checkLetterInArr = alphabet.find((element) => element.char === e.key);
  if (newGame) {
    userChoise.style.display = "block";
  }
  if (!checkLetterInArr && newMessage) {
    message.innerText = "none alphabet valid letter";
    return;
  } else userChoise.innerText += `${e.key},`;

  if (e.key !== myLetterChoise && checkLetterInArr) {
    checkLetterInArr.val++;

    if (newMessage) {
      if (checkLetterInArr.val > 1)
        message.innerText = `${e.key} has already been guessed!`;
      //
      else message.innerText = "Nope, worng letter";
      message.style.color = "red";
    }
  } else if (e.key === myLetterChoise && newMessage) {
    message.innerText = "Right letter";
    message.style.color = "green";
    guessedMessage.innerText = "Would you like to play again?";
    btn.style.display = "block";
    myLetterShow.innerText = myLetterChoise;
    userChoise.innerText = "";
    userChoise.style.display = "none";
    newGame = false;
    newMessage = false;
  }
});
btn.addEventListener("click", function () {
  location.reload();
});
