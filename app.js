let getComputerPlay = () => {
	let choices = ["Rock", "Paper", "Scissors"];
	return choices[Math.floor(Math.random() * 3)];
};

let checkWinner = (playerSelection, computerPlay) => {
	if (playerSelection == "Rock" && computerPlay == "Paper") {
		computerScore++;
		return false;
	} else if (playerSelection == "Rock" && computerPlay == "Scissors") {
		playerScore++;
		return true;
	} else if (playerSelection == "Scissors" && computerPlay == "Paper") {
		playerScore++;
		return true;
	} else if (playerSelection == "Scissors" && computerPlay == "Rock") {
		computerScore++;
		return false;
	} else if (playerSelection == "Paper" && computerPlay == "Rock") {
		playerScore++;
		return true;
	} else if (playerSelection == "Paper" && computerPlay == "Scissors") {
		computerScore++;
		return false;
	}
	return;
};

function displayMessage(result, playerSelection, computerSelection) {
	if (playerScore == SCORE_TO_WIN) {
		displayBoard.innerHTML = `You WON the game!`;
		playAgainButton.classList.remove("visible");
		return;
	} else if (computerScore == SCORE_TO_WIN) {
		displayBoard.innerHTML = `The Computer won the game...`;
		playAgainButton.classList.remove("visible");
		return;
	} else if (result) {
		displayBoard.innerHTML = `You Win this round! ${playerSelection} beats ${computerSelection}!`;
		return;
	} else if (result == false) {
		displayBoard.innerHTML = `You Lose this round! ${computerSelection} beats ${playerSelection}!`;
		return;
	} else {
		displayBoard.innerHTML = `Tie Game!`;
		return;
	}
}

function updateScore(winner) {
	if (winner) {
		playerScoreBoard.innerHTML = `${playerScore}`;
	} else {
		computerScoreBoard.innerHTML = `${computerScore}`;
	}
}

function playRound(playerSelection) {
	let computerPlay = getComputerPlay();
	let winner = checkWinner(playerSelection, computerPlay);
	//update score
	updateScore(winner);
	displayMessage(winner, playerSelection, computerPlay);
}

let playerScore = 0;
let computerScore = 0;
const SCORE_TO_WIN = 5;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreBoard = document.querySelector("#playerScoreBoard");
const computerScoreBoard = document.querySelector("#computerScoreBoard");
const displayBoard = document.querySelector(".displayBoard");
const playAgainButton = document.querySelector(".playAgain");
rock.addEventListener("click", () => {
	if (playerScore < SCORE_TO_WIN && computerScore < SCORE_TO_WIN) {
		playRound("Rock");
	}
});
paper.addEventListener("click", () => {
	if (playerScore < SCORE_TO_WIN && computerScore < SCORE_TO_WIN) {
		playRound("Paper");
	}
});
scissors.addEventListener("click", () => {
	if (playerScore < SCORE_TO_WIN && computerScore < SCORE_TO_WIN) {
		playRound("Scissors");
	}
});
playAgainButton.addEventListener("click", () => {
	playerScore = 0;
	computerScore = 0;
	playerScoreBoard.innerHTML = `${playerScore}`;
	computerScoreBoard.innerHTML = `${computerScore}`;
	playAgainButton.classList.add("visible");
	displayBoard.innerHTML = "";
});
