var Letter = require("./letter.js");

function Word() {
    this.letterArray = [];
    this.displayLetter = [];
    this.toString = function (wordChosen) {
        for (i = 0; i < wordChosen.length; i++) {
            var letterObject = new Letter(wordChosen[i]);
            this.letterArray.push(letterObject);
        }

    }
    this.checkLetter = function (character) {
        for (i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].compare(character);
            this.displayLetter.push(this.letterArray[i].guessCheck());
        }
        console.log(this.displayLetter.join(" "));

    }

}


module.exports = Word;