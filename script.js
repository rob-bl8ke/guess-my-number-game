'use strict';

// Windows + . to open emoji window...

// text element div, span uses 'textContent'
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Incorrect Number! 🎉';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = 13;
console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 10;

// input uses 'value'
document.querySelector('main section input.guess').value = 15;
console.log(document.querySelector('main section input.guess').value);
document.querySelector('input.guess').value = 22;
console.log(document.querySelector('input.guess').value);