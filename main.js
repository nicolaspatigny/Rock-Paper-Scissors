let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "Rock";
  } else if (choice == 1) {
    return "Paper";
  } else if (choice == 2) {
    return "Scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("Choose Rock, Paper or Scissors?");
  if (choice.toLowerCase() == "rock") {
    return "Rock";
  } else if (choice.toLowerCase() == "paper") {
    return "Paper";
  } else if (choice.toLowerCase() == "scissors") {
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Rock" && computerChoice == "Scissors") {
    return console.log("You Win");
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    return console.log("You Lose");
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    return console.log("You Win");
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    return console.log("You Lose");
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    return console.log("You Win");
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    return console.log("You Win");
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    return console.log("You Lose");
  } else {
    return console.log("Its a Tie");
  }
}

const humanSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
