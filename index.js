function computerSelection() {
  let play = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (play) {
    case 0:
      return (computerChoice = "ROCK");

    case 1:
      return (computerChoice = "PAPER");

    case 2:
      return (computerChoice = "SCISSORS");

    default:
      break;
  }
}

const btns = document.querySelectorAll(".rps");
let playerCounter = 0;
let computerCounter = 0;
const winner = document.querySelector(".winner");
const player = document.querySelector(".playerPoints");
const computer = document.querySelector(".computerPoints");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    winner.textContent = playRound(button.id, computerSelection());
    computer.textContent = computerCounter;
    player.textContent = playerCounter;
    game();
  });
});

function playerSelection(choice) {
  return choice;
}
function plusPlayerPoint() {
  ++playerCounter;
}

function plusComputerPoint() {
  ++computerCounter;
}

function playRound(playerSelection, computerSelection) {
  let roundWon = "Undecided";

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    roundWon = "Round Winner: Player";
    plusPlayerPoint();
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    roundWon = "Round Winner: Computer";
    plusComputerPoint();
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    roundWon = "Round Winner: Computer";
    plusComputerPoint();
  } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
    roundWon = "Round Winner: Player";
    plusPlayerPoint();
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    roundWon = "Round Winner: Player";
    plusPlayerPoint();
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    roundWon = "Round Winner: Computer";
    plusComputerPoint();
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
  return roundWon;
}

function game() {
  if (playerCounter === 5) {
    playerCounter = 0;
    computerCounter = 0;
    winner.setAttribute("style", "font-size: 50px");
    winner.textContent = "THE PLAYER HAS WON";
  } else if (computerCounter === 5) {
    playerCounter = 0;
    computerCounter = 0;
    winner.setAttribute("style", "font-size: 50px");
    winner.textContent = "THE COMPUTER HAS WON";
  }
}
