'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/
const randomNumber = function () {
  const number = Math.trunc(Math.random() * 20) + 1;
  return number;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const displayWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

let secretNumber = randomNumber();
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No number! ⛔');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    displayNumber(secretNumber);
    displayBackgroundColor('#60b347');
    displayWidth('30rem');

    //Apply High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high !📈' : 'Too low !📉');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!💥');
      displayScore(0);
    }
  }
});

//Again button
document.querySelector('.again').addEventListener('click', function () {
  //reset secret number
  secretNumber = randomNumber();
  //reset message
  displayMessage('Start guessing...');
  //reset score
  displayScore('20');
  score = 20;
  //reset background
  displayBackgroundColor('#222');

  //reset guess nubmer
  displayNumber('?');
  displayWidth('15rem');
  //clear value in input box
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});

// //When guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high !📈';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game! 💥';
//       document.querySelector('.score').textContent = 0;
//     }
//     //When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low !📉';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game! 💥';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
