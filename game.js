console.log('Welcome to Rock, Paper, Scissors')

// Playable Hands Array 

const playableHands = ["rock", "paper", "scissors"];


// Getting the PC choice randomly 

function getComputerChoice() {
    let computerChoice = playableHands[Math.floor(Math.random() * playableHands.length)]
    return computerChoice; 
}

let computerChoice = getComputerChoice();


// Getting the Player choice through prompt 

let playerHand; 

while (true) {
    playerHand = prompt("Enter the hand you want to play: ").toLowerCase(); 

    if (playableHands.includes(playerHand)) {
        console.log("Your choice: ", playerHand);
        console.log("Computer choice: ", computerChoice);
        break;
    } else {
        console.log("Invalid entry. Choose from rock, paper or scissors");
    }
}


function playRound() {
    if (playerHand == 'rock' & computerChoice == 'rock') {
        console.log('Result: Tie')
    }
    if (playerHand == 'rock' & computerChoice == 'paper') {
        console.log('Result: You lost to paper')
    }
    if (playerHand == 'rock' & computerChoice == 'scissors') {
        console.log('Result: You won against scissors')
    }
    if (playerHand == 'paper' & computerChoice == 'paper') {
        console.log('Result: Tie')
    }
    if (playerHand == 'paper' & computerChoice == 'scissors') {
        console.log('Result: You lost to scissors')
    }
    if (playerHand == 'paper' & computerChoice == 'rock') {
        console.log('Result: You won against rock')
    }
    if (playerHand == 'scissors' & computerChoice == 'scissors') {
        console.log('Result: Tie')
    }
    if (playerHand == 'scissors' & computerChoice == 'rock') {
        console.log('Result: You lost to rock')
    }
    if (playerHand == 'scissors' & computerChoice == 'paper') {
        console.log('Result: You won against paper')
    }
}

playRound(computerChoice, playerHand); 









