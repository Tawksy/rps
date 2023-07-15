console.log('Welcome to Rock, Paper, Scissors')

const playableHands = ["rock", "paper", "scissors"];
let computerChoice = playableHands[Math.floor(Math.random() * playableHands.length)]



let playerHand = prompt("Enter your hand: ").toLowerCase();

if (playableHands.includes(playerHand)) {
    console.log("Your choice: ", playerHand)
    console.log("Computer choice: ", computerChoice)
} else {
    console.log("Invalid entry. Choose from rock, paper or scissors")
}






function getComputerChoice() { 
}

getComputerChoice() 
