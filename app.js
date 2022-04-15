let computerPlay = () => {
	let choices = ["Rock", "Paper", "Scissors"];
	return choices[Math.floor(Math.random() * 3)];
};

let playRound = (playerSelection, computerSelection) => {
	playerSelection =
		playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

	if (playerSelection == computerSelection) {
		return "No winner!";
	} else if (playerSelection == "Rock" && computerSelection == "Paper") {
		return "You Lose! Paper beats Rock!";
	} else if (playerSelection == "Rock" && computerSelection == "Scissors") {
		return "You Win! Rock beats Scissors!";
	} else if (playerSelection == "Scissors" && computerSelection == "Paper") {
		return "You Win! Scissors beats Paper!";
	} else if (playerSelection == "Scissors" && computerSelection == "Rock") {
		return "You Lose! Rock beats Scissors!";
	} else if (playerSelection == "Paper" && computerSelection == "Rock") {
		return "You Win! Paper beats Rock!";
	} else if (playerSelection == "Paper" && computerSelection == "Scissors") {
		return "You Lose! Scissors beats Paper!";
	}
};

const playerSelection = prompt("Choice rock, paper, or scissors");
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
