const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");
const newGame = document.getElementById("newGame");

let currentPlayer = 1;
let currentScore = 0;

function switchPlayer() {
  currentScore = 0;
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById(`player${currentPlayer}`).classList.add("active");
  document.getElementById(`player${3 - currentPlayer}`).classList.remove("active");
}

roll1.addEventListener("click", () => {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  if (diceValue === 1) {
    switchPlayer();
  } else {
    currentScore += diceValue;
    score1.textContent = currentScore;
  }
});

roll2.addEventListener("click", () => {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  if (diceValue === 1) {
    switchPlayer();
  } else {
    currentScore += diceValue;
    score2.textContent = currentScore;
  }
});

newGame.addEventListener("click", () => {
  currentPlayer = 1;
  currentScore = 0;
  score1.textContent = "0";
  score2.textContent = "0";
  document.getElementById("player1").classList.add("active");
  document.getElementById("player2").classList.remove("active");
});

document.getElementById("player1").classList.add("active");
