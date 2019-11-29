var Letter = require("./letter.js");

function Word() {
    this.letterArray = [];
    this.toString = function (wordChosen) {
        for (i = 0; i < wordChosen.length; i++) {
            var letterObject = new Letter(wordChosen[i]);
            this.letterArray.push(letterObject);
        }

    }
    this.checkLetter = function (character) {
        this.displayLetter = [];
        for (i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].compare(character);
            this.displayLetter.push(this.letterArray[i].guessCheck());
            
        }
        if (!this.displayLetter.includes("_")){
            console.log("You win!");
        }
        console.log(this.displayLetter.join(" "));


    }
}

module.exports = Word;