console.log('Welcome to Rock, Paper, Scissors')

const playableHands = ["rock", "paper", "scissors"];

let playerHand = prompt("Enter your hand: ").toLowerCase(); 
console.log(playerHand);



function getComputerChoice() { 
    playableHands[(Math.floor(Math.random() * playableHands.3))];
}

getComputerChoice() 
console.log(playableHands);