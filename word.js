var Letter = require("./letter.js");

function Word() {
    this.letterArray = [];
    this.toString = function (wordChosen) {
        for (i = 0; i < wordChosen.length; i++) {
            var letterObject = new Letter(wordChosen[i]);
            this.letterArray.push(letterObject);
        }
        console.log(this.letterArray)
    }
    
}


module.exports = Word;