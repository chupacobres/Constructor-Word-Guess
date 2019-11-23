function letter(underlyingCharacter) {
    this.underlyingCharacter = underlyingCharacter;
    this.guess = false;
    this.guessCheck = function () {
        if (this.guess === true) {
            console.log(this.underlyingCharacter)
        }
        else {
            console.log("_");
        }
    }
    this.compare = function (userGuess) {
        if (userGuess === this.underlyingCharacter) {
            this.guess = true;
        }
    }

}
var firstLetter = new letter("a");
firstLetter.compare("a");
firstLetter.guessCheck();

// module.exports = letter;