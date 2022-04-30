const btnPlayerOne = document.querySelector("#btnPlayerOne");
const btnPlayerTwo = document.querySelector("#btnPlayerTwo");
const btnReset = document.querySelector("#btnReset");
const spanPlayerOne = document.querySelector("#playerOneScore");
const spanPlayerTwo = document.querySelector("#playerTwoScore");
const scoreLimit = document.querySelector("#scoreLimit");

btnPlayerOne.disabled = true;
btnPlayerTwo.disabled = true;

btnPlayerOne.addEventListener("click", () => {
  updateScore(spanPlayerOne);
});

btnPlayerTwo.addEventListener("click", () => {
  updateScore(spanPlayerTwo);
});

btnReset.addEventListener("click", () => {
  resetGame();
});

scoreLimit.addEventListener("change", () => {
  if (scoreLimit.value) {
    scoreLimit.disabled = true;
    btnPlayerOne.disabled = false;
    btnPlayerTwo.disabled = false;
  }
});

function updateScore(player) {
  let currentScore = parseInt(player.innerText);
  let updateScore = currentScore + 1;
  player.innerText = updateScore;
  didPlayerWin(updateScore, player);
}

function didPlayerWin(playerScore, player) {
  let winningScore = parseInt(scoreLimit.value);
  if (playerScore === winningScore) {
    btnPlayerOne.disabled = true;
    btnPlayerTwo.disabled = true;
    player.style.color = "green";

    if (player.id === "playerOneScore") {
      spanPlayerTwo.style.color = "red";
    } else {
      spanPlayerOne.style.color = "red";
    }
    return true;
  }
  return false;
}

function resetGame() {
  spanPlayerOne.innerText = "0";
  spanPlayerTwo.innerText = "0";
  scoreLimit.disabled = false;
  scoreLimit.value = "";
  btnPlayerOne.disabled = true;
  btnPlayerTwo.disabled = true;
  spanPlayerOne.style.color = "black";
  spanPlayerTwo.style.color = "black";
}
