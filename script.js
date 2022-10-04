let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

function playRound(e) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;

    if (playerSelection === computerSelection) {
        // return "Tie!";
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        // return 'You Won! Rock beats Scissors';
        playerScore++;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        // return 'You Won! Paper beats Rock';
        playerScore++;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        // return 'You Won! Scissors beats paper';
        playerScore++;
    } else {
        // return `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
}

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

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let round = 1; round <= 5; round++) {
//         let result = playRound(getPlayerChoice(), getComputerChoice());
//         console.log(result);
//         if (result.indexOf('Tie') >= 0) {
//             playerScore++;
//             computerScore++;
//         } else if (result.indexOf('Won') >= 0) {
//             playerScore++;
//         } else if (result.indexOf('Lose') >= 0) {
//             computerScore++
//         }
//     }

//     console.log(`Your score: ${playerScore}`);
//     console.log(`Computer score: ${playerScore}`);
//     if (playerScore === computerScore) {
//         console.log('FINAL RESULT:  TIE!');
//     } else if (playerScore > computerScore) {
//         console.log('FINAL RESULT:  YOU WON!')
//     } else if (computerScore > playerScore) {
//         console.log('FINAL RESULT:  YOU LOSE!')
//     }
// }

// game();