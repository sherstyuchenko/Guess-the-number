'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '👎🏽Не схоже на число';
    score--;
    document.querySelector('.score').textContent = score;

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '💃🏼 Йоу, ти вгадав! Нічого собі, я просто в шоці!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.backgroundColor = 'chartreuse';
    document.querySelector('.message').style.color = 'chartreuse';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //WHEN GUESS IS WROONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '🙄 Щось це забагато...'
          : '🙄 Хмм, спробуй якесь більше число...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.number').style.width = '60rem';
      document.querySelector('.number').textContent = 'Мдаа...';
      document.querySelector('.message').textContent =
        'Ти дуже тупий🥲. Ти програв';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//ЩЕ РАЗ
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  document.querySelector('.message').textContent = 'Удачі, лопух 😘';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').style.backgroundColor = '#e675cf';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.color = '#e675cf';
  document.querySelector('.number').style.width = '15rem';
});
