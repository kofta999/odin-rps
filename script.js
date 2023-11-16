const buttons = document.querySelectorAll(".selection");
const roundResult = document.querySelector(".round-result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selection = e.target.value;
    const result = playRound(selection, getComputerChoice());
    addResult(result);
  });
});

function addResult(result) {
  roundResult.textContent = result.message;
  if (result.points === 1) {
    const playerScore = document.querySelector("#player-score");
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (result.points === -1) {
    const computerScore = document.querySelector("#computer-score");
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
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

// function game() {
//   let userInput, result;
//   let [win, lose] = [0, 0];

//   for (let i = 0; i < 5; i++) {
//     userInput = prompt("Enter Rock, Paper or Scissors!");
//     result = playRound(userInput, getComputerChoice());
//     alert(result[0]);
//     if (result[1] === 99) {
//       i--;
//       continue;
//     }
//     if (result[1] === 1) {
//       win++;
//     }
//     if (result[1] === -1) {
//       lose++;
//     }
//   }

//   if (win > lose) alert("You win!");
//   else if (lose > win) alert("You lose!");
//   else alert("Deuce!");
// }
