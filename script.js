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

let pScoreboard = document.getElementById("player-score");
let cpuScoreboard = document.getElementById("computer-score");
let desc = document.getElementById("game-desc");

let playerWins = 0;
let computerWins = 0;

function resetGame() {
    playerWins = 0, computerWins = 0;
    pScoreboard.textContent = `${playerWins}`;
    cpuScoreboard.textContent = `${computerWins}`;
};

function announceWinner() {

    if (pScoreboard.textContent === '5') {
        desc.textContent = `Player Won!`;
        resetGame();
    };

    if (cpuScoreboard.textContent === '5') {
        desc.textContent = `Computer Won!`;
        resetGame();
    };
}
// Function that plays the game
function playRound(player, computer) {

    if (player === computer) {
        desc.textContent = `Both selected ${computer}. It's a Draw!`;
    }
    if (player === 'rock') {
        switch (computer) {
            case 'scissors':
                playerWins++;
                pScoreboard.textContent = `${playerWins}`;
                desc.textContent = `Rock beats Scissors. Player Wins!`;
                break;
            case 'paper':
                computerWins++;
                cpuScoreboard.textContent = `${computerWins}`;
                desc.textContent = `Paper beats Rock. Computer Wins.`;
                break;
        }
    }

    if (player === 'paper') {
        switch (computer) {
            case 'rock':
                playerWins++;
                pScoreboard.textContent = `${playerWins}`;
                desc.textContent = 'Paper beats Rock. Player Wins!';
                break;
            case 'scissors':
                computerWins++;
                cpuScoreboard.textContent = `${computerWins}`;
                desc.textContent = 'Scissors beats Paper. Computer Wins.';
                break;

        }
    }

    if (player === 'scissors') {
        switch (computer) {
            case 'rock':
                computerWins++;
                cpuScoreboard.textContent = `${computerWins}`;
                desc.textContent = 'Rock beats Scissors. Computer Wins.';
                break;
            case 'paper':
                playerWins++;
                pScoreboard.textContent = `${playerWins}`;
                desc.textContent = 'Scissors beats Paper. Player Wins!';
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

function play(e) {
    playRound(e.target.id, computerPlay());
    announceWinner();
}


let playerRock = document.getElementById("rock");
playerRock.addEventListener("click", play);
let playerPaper = document.getElementById("paper");
playerPaper.addEventListener("click", play);
let playerScissors = document.getElementById("scissors");
playerScissors.addEventListener("click", play);