var wordBank = ["mallard", "crested", "webbed", "bill", "waterproof"];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var usedWords = [];
var guessedLetters = [];
var selectedWord = [];

var onlyDashes = 0;
var livesVar = 10;
var winsVar = 0;
var lossesVar = 0;
var guesses;

//random choice from wordBank array

var selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
usedWords.push(selectedWord);

var userGuess;

console.log(selectedWord);

var arrayedBlanks = [];
for (var i = 0; i < selectedWord.length; i++) {
    arrayedBlanks[i] = "_ ";
    guesses = arrayedBlanks.join("");
    document.getElementById("current-word").innerHTML = "<p>Current Word: </p>" + guesses;

}
// console.log(arrayedBlanks);

function gameReset() {
    arrayedWord = [];
    selectedWord = [];
    guessedLetters = [];
    guessed = [];
    arrayedBlanks = [];
    livesVar = 10;

    selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    usedWords.push(selectedWord);
    
    for (var i = 0; i < selectedWord.length; i++) {
        arrayedBlanks[i] = "_ ";
    }

    guesses = arrayedBlanks.join("");

    writeToScreen();

    // console.log(selectedWord);
    // console.log(arrayedBlanks);
}

function writeToScreen() {
    document.querySelector("#wins").innerHTML = "<p>Wins: " + winsVar + "</p>";
    document.getElementById("losses").innerHTML = "<p>Losses: " + lossesVar + "</p>";
    document.getElementById("lives").innerHTML = "<p>Lives: " + livesVar + "</p>";
    document.getElementById("letters-guessed").innerHTML = "<p>Letters Guessed: " + guessedLetters + "</p>";
    document.getElementById("current-word").innerHTML = "<p>Current Word: " + guesses + "</p>";
}
//GAME CODE
//!
//!
//!
document.onkeyup = function () {
    //user input

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log(userGuess);




    if (!letters.includes(userGuess)) {
        alert("Please select a letter from the alphabet.");
    } else {
        guessedLetters.push(userGuess);

        if (selectedWord.indexOf(userGuess) === -1) {
            livesVar--;
            writeToScreen();
        } else {
            for (var g = 0; g < selectedWord.length; g++) {

                if (selectedWord[g] === userGuess) {
                    arrayedBlanks[g] = userGuess;
                    guesses = arrayedBlanks.join("");
                }

                if (guesses === selectedWord) {
                    winsVar++;

                    console.log(guesses)
                    alert("Good job! The word was " + selectedWord + "!");
                    gameReset();

                } else {
                    writeToScreen();
                }
            }
        }

        if (livesVar === 0) {
            lossesVar++;
            console.log("You lose.")
            gameReset();
        }
    }
}