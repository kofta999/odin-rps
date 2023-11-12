function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return items[index];
}

/**
 *
 * @param {string} playerSelection
 * @param {string} computerSelection
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        result = "Deuce!";
        break;
      case "paper":
        result = "You lose! Paper beats Rock";
        break;
      case "scissors":
        result = "You win! Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        result = "You win! Paper beats rock";
        break;
      case "paper":
        result = "Deuce!";
        break;
      case "scissors":
        result = "You lose! Scissors beats paper";
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        result = "You lose! Rock beats Scissors";
        break;
      case "paper":
        result = "You win! Scissors beats paper";
        break;
      case "scissors":
        result = "Deuce!";
    }
  } else {
    result = "Invalid Input";
  }
  console.log(result);
  return result;
}
