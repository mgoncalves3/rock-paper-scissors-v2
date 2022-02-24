// List of possible selections
const playOptions = ["rock", "paper", "scissors"];

// Helper function to get a random play by the computer
function getRandomInt(min = 0, max = 3) {
    return Math.floor(Math.random() * (max - min) + min);
};

// Computer selects a random option from the list of possible selections
function computerPlay() {
    return playOptions[getRandomInt()];
}

// Makes sure player inputs a valid selection
function playerPlay() {
    let player = prompt("Let's play Rock, Paper, Scissors. Please make your choice.").toLowerCase();
    while (!playOptions.includes(player)) {
        player = prompt("Let's play Rock, Paper, Scissors. Please make your choice.").toLowerCase();
    }
    return player;
}

// Variables to hold both selections
let playerSelection = playerPlay();
let computerSelection = computerPlay();

// Function that 
function game(playerSelection, computerSelection) {
    let winner;
    if (playerSelection === computerSelection) {
        return (`Both selected ${computerSelection}. It's a Draw!`);
    }
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'scissors':
                return `Rock beats Scissors. Player Wins!`;
                break;
            case 'paper':
                return  `Paper beats Rock. Computer Wins.`;
                break;
        }
    }
};