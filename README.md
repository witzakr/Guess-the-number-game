Guess-the-number-game explanation:
  -----------------------
  1. establishing variables:
      https://github.com/witzakr/Guess-the-number-game/blob/c6ff31c1ad8ce4d9661f2c315ccab0941684f658/script.js#L1
  --------------------------
  2. startGame function:
       https://github.com/witzakr/Guess-the-number-game/blob/c6ff31c1ad8ce4d9661f2c315ccab0941684f658/script.js#L4-L12
         It firstly assigns the value to the targetnumber variable using the mathfloor, which generates a random number (integer) from 1-100, since I don't want to make the game impossible to beat, the +1 shifts the number range from 0-99 to 1-100.
         Then it assigns the base value to attempts, which is 0.
         After that, it sets empty values to HTML elements.
         Lastly, it sets the input and a guess button to enabled, this will help with error prevention in later stages
  ------------------------
  3. checkGuess function:
       https://github.com/witzakr/Guess-the-number-game/blob/c6ff31c1ad8ce4d9661f2c315ccab0941684f658/script.js#L17-L30
       It first creates the userGuess variable, which will get its values from the HTML guess input
       It adds +1 attempt to the attempts variable, which will be added each time until the guess is right.
        - If statements:
        https://github.com/witzakr/Guess-the-number-game/blob/c6ff31c1ad8ce4d9661f2c315ccab0941684f658/script.js#L21-L29
          - The first statement is a scenario, where the user guesses the number right and it changes the result value from HTML to the congratulations message. After that, it disables the buttons.
          - The second scenario is where the user exceeds the number of guesses, the statements disable input, print the ending message and the correct number
          - The third scenario is when the guess is wrong, it changes the result value to the message that depends on the number guess, either if the number was too high or low
  ------------------------------------------
  4. disableInput function
     https://github.com/witzakr/Guess-the-number-game/blob/c6ff31c1ad8ce4d9661f2c315ccab0941684f658/script.js#L32-L35
     it disables the input and guess button.
  ----------------------------------------
  5. restartGame function
     https://github.com/witzakr/Guess-the-number-game/blob/c6ff31c1ad8ce4d9661f2c315ccab0941684f658/script.js#L37-L39
     this function restarts the game so that the user can play it multiple times, instead of once.
