let targetNumber, attempts;


function startGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById('result').innerHTML = '';
  document.getElementById('guess').value = '';
  document.getElementById('guess').disabled = false;
  document.querySelector('button').disabled = false;
}


startGame();

function checkGuess() {
  const userGuess = document.getElementById('guess').value;
  attempts++;

  if (userGuess == targetNumber) {
    document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`;
    disableInput();
  } else {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = userGuess > targetNumber
      ? `Too high! Try again. Attempts: ${attempts}`
      : `Too low! Try again. Attempts: ${attempts}`;
  }
}

function disableInput() {
  document.getElementById('guess').disabled = true;
  document.querySelector('button').disabled = true;
}

function restartGame() {
  startGame();
}