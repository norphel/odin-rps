function getComputerChoice() {
    const choice = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let randNum = Math.floor(Math.random() * choice.length);
    let computerChoice = choice[randNum];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        return 'You Won! Rock beats Scissors';
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        return 'You Won! Paper beats Rock'
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        return 'You Won! Scissors beats paper';
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let playerSelection = prompt('Enter your choice (Rock, Paper, Scissors). In case there is a typo your choice will default to Rock: ');
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
        return playerSelection;
    } else {
        return 'Rock';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        if (result.indexOf('Tie') >= 0) {
            playerScore++;
            computerScore++;
        } else if (result.indexOf('Won') >= 0) {
            playerScore++;
        } else if (result.indexOf('Lose') >= 0) {
            computerScore++
        }
    }

    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${playerScore}`);
    if (playerScore === computerScore) {
        console.log('FINAL RESULT:  TIE!');
    } else if (playerScore > computerScore) {
        console.log('FINAL RESULT:  YOU WON!')
    } else if (computerScore > playerScore) {
        console.log('FINAL RESULT:  YOU LOSE!')
    }
}

game();