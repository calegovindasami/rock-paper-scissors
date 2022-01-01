function computerSelection() {
  let play = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (play) {
    case 0:
      return (computerChoice = "ROCK");
      break;
    case 1:
      return (computerChoice = "PAPER");
      break;
    case 2:
      return (computerChoice = "SCISSORS");
      break;
    default:
      break;
  }
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

function playRound(playerSelection, computerSelection) {
  let roundWon = "Undecided";

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    roundWon = "Player";
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    roundWon = "Computer Won";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    roundWon = "Computer Won";
  } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
    roundWon = "Player Won";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    roundWon = "Player Won";
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    roundWon = "Computer Won";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    roundWon = "Tie";
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    roundWon = "Tie";
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    roundWon = "Tie";
  }
  return alert(roundWon);
}

function game() {
  playRound(playerSelection(), computerSelection());
}
