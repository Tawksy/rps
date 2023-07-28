console.log('Welcome to Rock, Paper, Scissors');

const playableHands = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return playableHands[Math.floor(Math.random() * playableHands.length)];
}

let playerHand;
let computerChoice;

function playRound(playerHand, computerChoice) {
    playerHand = playerHand.trim().toLowerCase();

    if (
        (playerHand === 'rock' && computerChoice === 'scissors') ||
        (playerHand === 'paper' && computerChoice === 'rock') ||
        (playerHand === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You won';
    } else if (playerHand === computerChoice) {
        return 'Tie';
    } else {
        return 'You lost';
    }
}

let playerScore = 0;
let computerScore = 0;

for (let round = 1; round <= 5; round++) {
    computerChoice = getComputerChoice();

    while (true) {
        playerHand = prompt("Enter the hand you want to play: ").toLowerCase();

        if (playableHands.includes(playerHand)) {
            console.log("Round", round);
            console.log("Your choice: ", playerHand);
            console.log("Computer choice: ", computerChoice);
            break;
        } else {
            console.log("Invalid entry. Choose from rock, paper, or scissors");
        }
    }

    const roundResult = playRound(playerHand, computerChoice);

    // Update gamescore 
    if (roundResult === 'You won') {
        playerScore++;
    } else if (roundResult === 'You lost') {
        computerScore++;
    }

    console.log('Round result: ', roundResult);
    console.log('Current Score - You:', playerScore, " Computer: ", computerScore);
}

// Determine endgame winner
if (playerScore > computerScore) {
    console.log('You win the game');
} else if (playerScore < computerScore) {
    console.log('You lost the game');
} else {
    console.log('It\'s a tie');
}
