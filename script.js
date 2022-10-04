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
        displayResultOfRound('Tie!');
        updateScore(playerScore, computerScore);
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        displayResultOfRound('You Won! Rock beats Scissors');
        updateScore(++playerScore, computerScore);
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        displayResultOfRound('You Won! Paper beats Rock');
        updateScore(++playerScore, computerScore);
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        displayResultOfRound('You Won! Scissors beats paper');
        updateScore(++playerScore, computerScore);
    } else {
        displayResultOfRound(`You Lose! ${computerSelection} beats ${playerSelection}`);
        updateScore(playerScore, ++computerScore);
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
    const computerChose = document.querySelector('.computer-chose');
    computerChose.textContent = computerChoice;
    return computerChoice;
}

function displayResultOfRound(outcome) {
    const result = document.querySelector('.result');
    result.textContent = outcome;
}

function updateScore(playerScore, computerScore) {
    const pScore = document.querySelector('.your-score');
    const cScore = document.querySelector('.computer-score');
    pScore.textContent = `Score: ${playerScore}`;
    cScore.textContent = `Score: ${computerScore}`;
}