let editedPlayerId = 0;
let activePlayer = 0;
let gameisOver = false;

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let currentRound = 0;

const players = [
    {
        name: '',
        symbol: 'X',
    },
    {
        name: '',
        symbol: 'O',
    }
];

let winnerId = checkGameOver();


const playerConfigOverlay = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-error');

const btnPlayerOne = document.getElementById("btn-player-one");
const btnPlayerTwo = document.getElementById("btn-player-two");
const btnCancelConfig = document.getElementById("btn-cancle-config");

const activePlayerNameElement = document.getElementById('active-player-name');
const btnGameStart = document.getElementById('btn-start-game');
const GameAreaElement = document.getElementById('active-game');

const gameField = document.getElementById('game-board');
const gameOverElement = document.getElementById('game-over');


btnPlayerOne.addEventListener("click",openPlayerConfig);
btnPlayerTwo.addEventListener("click",openPlayerConfig);
btnCancelConfig.addEventListener("click",closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener('submit',submitPlayerConfig);
btnGameStart.addEventListener('click',startNewGame);
gameField.addEventListener('click',selectGameField);


