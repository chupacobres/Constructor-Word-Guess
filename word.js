var Letter = require("./letter.js");

function Word() {
    this.letterArray = [];
    this.displayLetter = [];
    this.toString = function (wordChosen) {
        for (i = 0; i < wordChosen.length; i++) {
            var letterObject = new Letter(wordChosen[i]);
            this.letterArray.push(letterObject);
        }
        // console.log(this.letterArray)

    }
    this.checkLetter = function (character) {
        for (i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].compare(character);
            this.displayLetter.push(this.letterArray[i].guessCheck());
            // function handleWord(){
            //     var wordArr = []
            //     var pushLetters = this.letterArray[i].guessCheck();
            //     wordArr.push(pushLetters);
            //     console.log(wordArr);
            // }
            // handleWord();
        }
        console.log(this.displayLetter.join(" "));

    }

}


module.exports = Word;