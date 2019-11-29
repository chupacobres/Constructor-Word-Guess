# Constructor-Word-Guess
A Word Guess command-line game using constructor functions.

### How it works
This game is a classic Hang Man Node.JS command line program that takes input from the user with Inquirer package. If user fails to guess the word after a number of guesses, he looses the game, but if the word is guessed, he will win.

This game was coded using 2 java script files, each with a constructor (letter.js and word.js respectively), and an index.js file containing the game logic:

The letter.js file contains a constructor (Letter) defining if the word is guessed or not, returning either the guessed letter or an underscore. This constructor is exported to word.js.

The word.js file, through a constructor (Word) creates an object with the letters of the word and uses the Letter constructor to create an array with words and underscores (in case the letter is not guessed).

index.js is in charge of bringing the logic, concatenating the word object and displaying it to the screen, as well as the code to aloud user input through npm inquire package. You need to install all necessary packages to run tha game on the command line.

### The App in action

![](prototype.gif)


