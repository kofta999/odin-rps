function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return items[index];
}
