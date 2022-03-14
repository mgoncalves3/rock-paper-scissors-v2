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
// Function that plays the game
function playRound(player, computer) {
    let winner = undefined;
    if (player === computer) {
        return (`Both selected ${computer}. It's a Draw!`);
    }
    if (player === 'rock') {
        switch (computer) {
            case 'scissors':
                return (`Rock beats Scissors. Player Wins!`);
                break;
            case 'paper':
                return (`Paper beats Rock. Computer Wins.`);
                break;
        }
    }

    if (player === 'paper') {
        switch (computer) {
            case 'rock':
                return ('Paper beats Rock. Player Wins!');
                break;
            case 'scissors':
                return ('Scissors beats Paper. Computer Wins.');
                break;

        }
    }

    if (player === 'scissors') {
        switch (computer) {
            case 'rock':
                return ('Rock beats Scissors. Computer Wins.');
                break;
            case 'paper':
                return ('Scissors beats Paper. Player Wins!');
                break;
        }
    }
};

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = playerPlay();
//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game();