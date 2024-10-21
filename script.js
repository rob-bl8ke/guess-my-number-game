'use strict';

const STATE_RESET = 0;
const STATE_WIN = 1;

let score = -1;
let highScore = -1;
let secretNumber = -1;

const guessInput = document.querySelector('input.guess');

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function(display) {
    const text = display ? secretNumber : '?';
    document.querySelector('div.number').textContent = text;
}

const changeScore = function(val) {
    score = val;
    document.querySelector('.score').textContent = score;
}

document.querySelector('button.btn.check').addEventListener('click', () => {
    const guess = Number(guessInput.value);
    
    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        guessRight('🎉 Correct number!');
    } else {
        guessWrong(guess);
    }
});

function setGameState(state) {
    if (state === STATE_RESET) {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        changeScore(20);
        displayNumber(false);
        displayMessage('Start guessing...');
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        guessInput.value = '';
        guessInput.focus();
    } else if (state === STATE_WIN) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
    }
}

function setHighScore() {
    highScore = Math.max(highScore, score);
    document.querySelector('.highscore').textContent = highScore;
}

function guessRight(guess) {
    displayMessage('🎉 Correct number!');
    setGameState(STATE_WIN);
    displayNumber(true);
    setHighScore();
}

function guessWrong(guess) {
    const warningText = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';

    if (score > 1) {
        displayMessage(warningText);
        changeScore(--score);
    } else {
        displayMessage('💥 You lost the game!');
        changeScore(0);
    }
}

document.querySelector('button.again').addEventListener('click', () => {    
    setGameState(STATE_RESET);
});

setGameState(STATE_RESET);

