'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('div.number').textContent = secretNumber;

let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('button.btn.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('input.guess').value);
    
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    } else if (guess === secretNumber) {
        // player wins
        document.querySelector('.message').textContent = '🎉 Correct number!'
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
