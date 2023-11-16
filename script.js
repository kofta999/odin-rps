function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return items[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        result = ["Deuce!", 0];
        break;
      case "paper":
        result = ["You lose! Paper beats Rock", -1];
        break;
      case "scissors":
        result = ["You win! Rock beats Scissors", 1];
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        result = ["You win! Paper beats rock", 1];
        break;
      case "paper":
        result = ["Deuce!", 0];
        break;
      case "scissors":
        result = ["You lose! Scissors beats paper", -1];
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        result = ["You lose! Rock beats Scissors", -1];
        break;
      case "paper":
        result = ["You win! Scissors beats paper", 1];
        break;
      case "scissors":
        result = ["Deuce!", 0];
    }
  } else {
    result = ["Invalid Input", 99];
  }
  return result;
}

function game() {
  let userInput, result;
  let [win, lose] = [0, 0];

  for (let i = 0; i < 5; i++) {
    userInput = prompt("Enter Rock, Paper or Scissors!");
    result = playRound(userInput, getComputerChoice());
    alert(result[0]);
    if (result[1] === 99) {
      i--;
      continue;
    }
    if (result[1] === 1) {
      win++;
    }
    if (result[1] === -1) {
      lose++;
    }
  }

  if (win > lose) alert("You win!");
  else if (lose > win) alert("You lose!");
  else alert("Deuce!");
}
