function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper';
    } else {
        return "It's a Draw!";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Rock, Paper or Scissors?');
        let result = playRound(playerChoice, getComputerChoice());
        console.log(result)
        if (result.includes('Win')) {
            playerWins++;
        } else if (result.includes('Lose')) {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log('PLAYER WON');
    } else if (playerWins < computerWins) {
        console.log('COMPUTER WON');
    } else {
        console.log("IT'S A DRAW");
    }
}