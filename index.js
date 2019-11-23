var Word = require("./word.js");
var inquirer = require("inquirer");

wordsToGuess = ["dinosaur", "popeye", "smurf", "obey", "sarcastic"]
var missed = 0
var wins = 0

// var guessAWord = function () {
//     if (missed < 10) {
//         inquirer.prompt([
//             {
//                 name: "letter",
//                 message: "Guess a letter"
//             }
//         ]).then(function (answer) {

//         })
//     }
//     else {
//         console.log("You lost!")
//     }
// }
var tryOut = new Word()
tryOut.toString("dinosaur");