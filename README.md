# Constructor-Word-Guess
A Word Guess command-line game using constructor functions.

### How it works
This game is a classic Hang Man Node.JS command line program that takes input from the user with Inquirer package. If user fails to guess the word after a number of guesses, he looses the game, but if the word is guessed, he will win.

This game was coded using 2 java script files, each with a constructor (letter.js and word.js) and an index.js file containing the game logic:

The letter.js file contains a constructor (Letter) defining if the word is guessed or not, returning either the guessed letter or an underscore. This constructor is exported to word.js

The word.js file creates an object with the letters of the word and uses the Letter constructor to create an array with words and underscores (in case the letter is not guessed)

### The App in action

![](prototype.gif)


