const buttons = document.querySelectorAll(".selection");
const roundResult = document.querySelector(".round-result");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selection = e.target.value;
    const result = playRound(selection, getComputerChoice());
    addResult(result);
    checkResult();
  });
});

function addResult(result) {
  roundResult.textContent = result.message;
  if (result.points === 1) {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (result.points === -1) {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  }
}

function checkResult() {
  if (playerScore.textContent === "5") {
    roundResult.textContent = "Player Won!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else if (computerScore.textContent === "5") {
    roundResult.textContent = "Player Lost!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return items[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection;
  computerSelection = computerSelection;
  const result = {
    message: "",
    points: 0,
  };

  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    result.message = "It's a Tie!";
    result.points = 0;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result.message = `You Win!, ${playerSelection} beats ${computerSelection}`;
    result.points = 1;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result.message = `You Lose!, ${computerSelection} beats ${playerSelection}`;
    result.points = -1;
  }

  return result;
}
