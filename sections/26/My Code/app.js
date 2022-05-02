const player1 = {
  button: document.querySelector("#btnPlayerOne"),
  display: document.querySelector("#playerOneScore"),
};

const player2 = {
  button: document.querySelector("#btnPlayerTwo"),
  display: document.querySelector("#playerTwoScore"),
};

const btnReset = document.querySelector("#btnReset");
const scoreLimit = document.querySelector("#scoreLimit");

btnPlayerOne.disabled = true;
btnPlayerTwo.disabled = true;

let winningScore = null;
scoreLimit.value = null;


btnPlayerOne.addEventListener("click", () => {
  updateScore(player1);
});

btnPlayerTwo.addEventListener("click", () => {
  updateScore(player2);
});

btnReset.addEventListener("click", () => {
  resetGame();
});

scoreLimit.addEventListener("change", () => {
  winningScore = parseInt(scoreLimit.value);
  scoreLimit.disabled = true;
  for (let player of [player1, player2]) {
    player.button.disabled = false;

  }

 
});

function updateScore(player) {
  let currentScore = parseInt(player.display.textContent);
  let updateScore = currentScore + 1;
  player.display.textContent = updateScore;
  didPlayerWin(updateScore, player);
}

function didPlayerWin(playerScore, player) {
  if (playerScore === winningScore) {
    btnPlayerOne.disabled = true;
    btnPlayerTwo.disabled = true;
    scoreLimit.disabled = true;
    player.display.classList.add("winner");
    console.dir(player.display);

    if (player.display.id === "playerOneScore") {
      // spanPlayerTwo.style.color = "red";
      player2.display.classList.add("loser");
    } else {
      player1.display.classList.add("loser");
    }
    return true;
  }
  return false;
}

function resetGame() {

  for (let player of [player1, player2]) {
    player.display.textContent = "0";
    player.button.disabled = true;
    player.display.classList.remove("winner", "loser");
  }
 
  scoreLimit.disabled = false;
  scoreLimit.value = "";
 
}

