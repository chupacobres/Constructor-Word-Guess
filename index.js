var Word = require("./word.js");
var inquirer = require("inquirer");

wordsToGuess = ["dinosaur", "popeye", "smurf", "obey", "sarcastic"]
var missed = 0
var wins = 0

var generateWord = function () {
    wordRandom = wordsToGuess[Math.floor(Math.random() * 4)];
    var wordToGuess = new Word()
    wordToGuess.toString(wordRandom);
    var guessAWord = function () {

        if (missed < 10) {
            inquirer.prompt([
                {
                    name: "letterGuessed",
                    message: "Guess a letter"
                }
            ]).then(function (answer) {
                wordToGuess.checkLetter(answer.letterGuessed);
                // for (i = 0; i < wordRandom.length; i++) {
                //     Word.LetterArray.guessCheck();
                // }
                
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




// var wordToGuess = new Word()
// wordToGuess.toString("dinosaur");
// wordToGuess.checkLetter("d");