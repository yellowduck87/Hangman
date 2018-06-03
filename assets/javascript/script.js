var wordBank = ["mallard", "crested", "webbed", "bill", "waterproof"];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var usedWords = [];
var selectedWord = [];
var guessedLetters = [];
var dashedWord = [];


var onlyDashes = 0;
var livesVar = 10;
var winsVar = 0;
var lossesVar = 0;

//random choice from wordBank array
var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(computerChoice);

var computerAnswer = computerChoice;


// computer chooses word from array XX
// that word is converted into dhases based on length xx
// the word is also stored so that it wont be used again
// if the user guesses a letter in the word, the dash(s) turns into the letter
// if the user guesses a letter not in the word, one life is lost
// when lives == 0, losses goes up
// when the word is guessed correctly, wins goes up

selectedWord.push(computerAnswer);
dashedWord.push(selectedWord);
usedWords.push(computerAnswer);
dashedWord = computerAnswer.split("");
var dash = "_ "
console.log(selectedWord);
console.log(dashedWord);


var numberOfDashes = dashedWord.length;
console.log(numberOfDashes);

function dashesByLength(dash, num) {
    if (num > 0) {
        return dash.repeat(num);
    }
}

document.getElementById("current-word").innerHTML = "<p>Current Word:   </p>" + "<p>" + dashesByLength(dash, numberOfDashes) + "</p>";



function gameReset() {
    dashedWord = [];
    selectedWord = [];
    guessedLetters = [];
}


document.onkeyup = function () {
    //user input
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);


    guessedLetters.push(userGuess);

    if (!letters.includes(userGuess)) {
        alert("Please selec a letter from the alphabet.");
    } else {
        var pos = dashedWord.indexOf(userGuess);
        // if (pos > -1) {
        // for (var pos=0; pos < selectedWord.length; pos++){
        // selectedWord[pos].replace(/_ /g, userGuess);
    }
    // guessedLetters.push(userGuess);
    for (var i = 0; i < dashedWord.length; i++) {
        if (userGuess === dashedWord[i]) {

        }
        console.log()
    }
// } else {
    // guessedLetters.push(userGuess);

    lives--;
// }
console.log(pos);
// }

if (lives == 0) {
    losses++;
    gameReset();
}
document.querySelector("#wins").innerHTML = "<p>Wins: </p>" + winsVar;
document.getElementById("losses").innerHTML = "<p>Losses: </p>" + lossesVar;
document.getElementById("lives").innerHTML = "<p>Lives: </p>" + livesVar;
}