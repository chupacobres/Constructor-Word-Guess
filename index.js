var Word = require("./word.js");
var inquirer = require("inquirer");

wordsToGuess = ["dinosaur", "popeye", "smurf", "obey", "sarcastic"]
var count = 0
var generateWord = function () {
    wordRandom = wordsToGuess[Math.floor(Math.random() * 4)];
    var wordToGuess = new Word()
    wordToGuess.toString(wordRandom);
    
    var guessAWord = function () {

        if (count < (wordRandom.length + 8)) {
            inquirer.prompt([
                {
                    name: "letterGuessed",
                    message: "Guess a letter"
                }
            ]).then(function (answer) {
                wordToGuess.checkLetter(answer.letterGuessed);   
                count++;             
                guessAWord();
            })

            
        }
        else {
            console.log("You lost!")
        }

    }
    guessAWord();

}
generateWord();