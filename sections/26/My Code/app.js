const btnPlayerOne = document.querySelector("#btnPlayerOne");
const btnPlayerTwo = document.querySelector("#btnPlayerTwo");
const btnReset = document.querySelector("#btnReset");
const spanPlayerOne = document.querySelector("#playerOneScore");
const spanPlayerTwo = document.querySelector("#playerTwoScore");
const scoreLimit = document.querySelector("#scoreLimit");

btnPlayerOne.disabled = true;
btnPlayerTwo.disabled = true;

btnPlayerOne.addEventListener("click", () => {
  updatePlayerOneScore();
});

btnPlayerTwo.addEventListener("click", () => {
  updatePlayerTwoScore();
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

function updatePlayerOneScore() {
  let currentScore = parseInt(spanPlayerOne.innerText);
  let updateScore = currentScore + 1;
  spanPlayerOne.innerText = updateScore;

  if (didPlayerWin(updateScore)) {
    spanPlayerOne.style.color = "green";
    spanPlayerTwo.style.color = "red";
  }
}

function updatePlayerTwoScore() {
  let currentScore = parseInt(spanPlayerTwo.innerText);
  let updateScore = currentScore + 1;
  spanPlayerTwo.innerText = updateScore;

  if (didPlayerWin(updateScore)) {
    spanPlayerOne.style.color = "red";
    spanPlayerTwo.style.color = "green";
  }
}

function didPlayerWin(playerScore) {
  let winningScore = parseInt(scoreLimit.value);
  if (playerScore === winningScore) {
    btnPlayerOne.disabled = true;
    btnPlayerTwo.disabled = true;
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
