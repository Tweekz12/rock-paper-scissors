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

let playerWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
    const resultsDiv = document.querySelector('.results');
    if (playerWins == 5 || computerWins == 5) {
        resultsDiv.innerText += 'Refresh the page to play again\n';
        return;
    }

    const result = playRound(e.target.value, getComputerChoice());
    if (result.includes('Win')) {
        playerWins++;
    } else if (result.includes('Lose')) {
        computerWins++;
    }
    resultsDiv.innerText += `${result}\n`;

    if (playerWins >= 5) {
        resultsDiv.innerText += 'PLAYER WON\n';
    } 
    if (computerWins >= 5) {
        resultsDiv.innerText += 'COMPUTER WON\n';
    }
}));