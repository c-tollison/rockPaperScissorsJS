let computerPlay = () => {
	let choices = ["Rock", "Paper", "Scissors"];
	return choices[Math.floor(Math.random() * 3)];
};

let playRound = (playerSelection, computerSelection) => {
	if (playerSelection == "Rock" && computerSelection == "Paper") {
		return false;
	} else if (playerSelection == "Rock" && computerSelection == "Scissors") {
		return true;
	} else if (playerSelection == "Scissors" && computerSelection == "Paper") {
		return true;
	} else if (playerSelection == "Scissors" && computerSelection == "Rock") {
		return false;
	} else if (playerSelection == "Paper" && computerSelection == "Rock") {
		return true;
	} else if (playerSelection == "Paper" && computerSelection == "Scissors") {
		return false;
	}
};

function winner(result, playerSelection, computerSelection) {
	if (result) {
		return `You Win this round! ${playerSelection} beats ${computerSelection}!`;
	} else {
		return `You Lose this round! ${computerSelection} beats ${playerSelection}!`;
	}
}

function getUserInput() {
	let gatherChoice = true;
	while (gatherChoice) {
		let userChoice = prompt("Choice rock, paper, or scissors");
		userChoice =
			userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
		if (
			userChoice == "Rock" ||
			userChoice == "Paper" ||
			userChoice == "Scissors"
		) {
			gatherChoice = false;
		}
	}
}

let userScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
	let playerSelection = getUserInput();
	let computerSelection = computerPlay();
	if (playerSelection == computerSelection) {
		console.log("There was a tie!");
	} else {
		let result = playRound(playerSelection, computerSelection);
		console.log(winner(result, playerSelection, computerSelection));
		if (result) userScore++;
		else computerScore++;
	}
}

if (userScore > computerScore) {
	console.log("You win the game!");
} else {
	console.log("You lost the game!");
}
