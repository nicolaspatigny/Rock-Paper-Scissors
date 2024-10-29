let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

let button = document.querySelector(".buttons");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanScore < 5 && computerScore < 5) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
      results.textContent = "You Win";
      humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      results.textContent = "You Lose";
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      results.textContent = "You Lose";
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      results.textContent = "You Win";
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      results.textContent = "You Win";
      humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      results.textContent = "You Lose";
      computerScore++;
    } else {
      results.textContent = "Its a Tie";
    }
  }

  score.textContent =
    "You: " + humanScore + "  " + "Computer: " + computerScore;

  if (humanScore == 5 && computerScore < 5) {
    winner.textContent = "You Won the Game";
  } else if (humanScore < 5 && computerScore == 5) {
    winner.textContent = "You Lost the Game";
  }
}

button.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    const pick = e.target.className;
    playRound(pick, getComputerChoice());
  }
});
