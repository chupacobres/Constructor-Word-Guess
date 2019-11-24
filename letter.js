function Letter(underlyingCharacter) {
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
        console.log("Underlying character: " + this.underlyingCharacter)
        console.log(userGuess);
        console.log(this.guess);
    }

}
// var firstLetter = new Letter("b");
// firstLetter.compare("a");
// firstLetter.guessCheck();

module.exports = Letter;