'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

document.querySelector('button.btn.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('input.guess').value);
    
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    } else if (guess === secretNumber) {
        // player wins
        document.querySelector('.message').textContent = '🎉 Correct number!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('div.number').textContent = secretNumber;
        highScore = Math.max(highScore, score);
        document.querySelector('.highscore').textContent = highScore;
    } else if (guess > secretNumber) {
        // guess is too high, lower score
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    } else if (guess < secretNumber) {
        // guess is too low, lower score
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
});

document.querySelector('button.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('div.number').textContent = '?';
    document.querySelector('input.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('input.guess').focus();
});

document.querySelector('input.guess').focus();
