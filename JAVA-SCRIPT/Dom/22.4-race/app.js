const p1 = {
  position: 0,
  curMove: "",
  last: 0,
  key: "a",
  color: "red",
};
const p2 = {
  position: 0,
  curMove: "",
  last: 0,
  key: "p",
  color: "yellow",
};

const player1 = document.querySelector("#player1-race");
p1.curMove = player1.querySelectorAll("td");
p1.last = p1.curMove[p1.curMove.length - 1];

const player2 = document.querySelector("#player2-race");
p2.curMove = player2.querySelectorAll("td");
p2.last = p2.curMove[p2.curMove.length - 1];

const btn = document.querySelector("button");
const playerWinnerMessage = document.querySelector(".playerWinner");

document.addEventListener("keyup", function (e) {
  if (e.key === p1.key) {
    checkMoveToFinal(p1);
    checkFinal(p1);
  } else if (e.key === p2.key) {
    checkMoveToFinal(p2);
    checkFinal(p2);
  }

  function checkMoveToFinal(player) {
    if (player.position < player.curMove.length - 1) {
      player.curMove[player.position].classList.remove("active");
      player.position++;
      player.curMove[player.position].classList.add("active");
    }
  }

  function checkFinal(player) {
    if (player.position === player.curMove.length - 1) {
      playerWinnerMessage.style.color = player.color;
      playerWinnerMessage.classList.add("showWinner");
      btn.classList.add("showWinner");
      document.removeEventListener("click", function () {});
    }
  }
});

btn.addEventListener("click", function () {
  location.reload();
});
