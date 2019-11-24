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
    this.checkLetter = function (character){
        for (i=0;i<this.letterArray.length;i++){
            this.letterArray[i].compare(character);
        }
        console.log(this.letterArray)
    }
    
}


module.exports = Word;