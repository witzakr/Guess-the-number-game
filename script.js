// Initialize global variables for the target number and the number of attempts
let targetNumber, attempts;

// Function to start the game, called at the beginning and when restarting
function startGame() {
  // Generate a random number between 1 and 100 (inclusive) as the target number
  targetNumber = Math.floor(Math.random() * 100) + 1;
  
  // Reset the attempts counter
  attempts = 0;

  // Clear the result display, reset the input field, and enable input elements
  document.getElementById('result').innerHTML = '';
  document.getElementById('guess').value = '';
  document.getElementById('guess').disabled = false;
  document.querySelector('button').disabled = false;
}

// Call the startGame function to initialize the game
startGame();

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = document.getElementById('guess').value;
  
  // Increment the attempts counter
  attempts++;

  // Check if the user's guess is correct
  if (userGuess == targetNumber) {
    // Display a congratulatory message with the correct number and attempts
    document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`;
    
    // Disable input elements to end the game
    disableInput();
  } else {
    // Get the result display element
    const resultElement = document.getElementById('result');

    // Check if the user has exceeded the maximum allowed attempts (10)
    if (attempts > 10) {
      // Display a message indicating the game is over and reveal the correct number
      resultElement.innerHTML = `Sorry, you've exceeded 10 attempts. The correct number was ${targetNumber}. Game over.`;
      
      // Disable input elements to end the game
      disableInput();
    } else {
      // Display a hint based on whether the guess was too high or too low
      resultElement.innerHTML = userGuess > targetNumber
        ? `Too high! Try again. Attempts: ${attempts}`
        : `Too low! Try again. Attempts: ${attempts}`;
    }
  }
}

// Function to disable input elements at the end of the game
function disableInput() {
  document.getElementById('guess').disabled = true;
  document.querySelector('button').disabled = true;
}

// Function to restart the game by calling the startGame function
function restartGame() {
  startGame();
}
