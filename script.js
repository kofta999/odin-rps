const buttons = document.querySelectorAll(".selection");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selection = e.target.value;
    playRound(selection, getComputerChoice());
  });
});

function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return items[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result = {
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
  } else {
    result.message = "Invalid Input";
    result.points = null;
  }
  
  console.log(result);
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
