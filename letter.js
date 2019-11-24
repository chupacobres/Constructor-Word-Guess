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
    }
    
}

module.exports = Letter;