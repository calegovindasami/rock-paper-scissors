function computerPlay() {
  let play = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (play) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
    default:
      break;
  }
  return computerChoice.toUpperCase;
}

function playerSelection() {
  let playerChoice = prompt("Enter ROCK - PAPER - SCISSORS").toUpperCase();

  while (
    !(
      playerChoice === "ROCK" ||
      playerChoice === "PAPER" ||
      playerChoice === "SCISSORS"
    )
  ) {
    alert("INVALID CHOICE " + playerChoice);
    playerChoice = prompt("Enter ROCK - PAPER - SCISSORS").toUpperCase();
  }

  return playerChoice;
}

function playRound() {}
