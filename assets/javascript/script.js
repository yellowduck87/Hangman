var wordBank = ["mallard", "crested", "webbed", "bill", "waterproof"];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var usedWords = [];
var guessedLetters = [];
var selectedWord = [];


var onlyDashes = 0;
var livesVar = 10;
var winsVar = 0;
var lossesVar = 0;

//random choice from wordBank array
var selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
usedWords.push(selectedWord);
 var userGuess;

console.log(selectedWord);




var arrayedBlanks = [];
for (var i = 0; i < selectedWord.length; i++) {
    arrayedBlanks[i] = "_ ";
    var guesses = arrayedBlanks.join("");
    document.getElementById("current-word").innerHTML = "<p>Current Word: </p>" + guesses;

}


console.log(arrayedBlanks);




function gameReset() {
    arrayedWord = [];
    selectedWord = [];
    guessedLetters = [];
    guessed = [];
    arrayedBlanks = [];

    selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    usedWords.push(selectedWord);

    // while (selectedWord === usedWords) {
    //     selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    // }
    for (var g = 0; g < selectedWord.length; g++) {

        if (selectedWord[g] === userGuess) {
            arrayedBlanks[g] = userGuess;
            guesses = arrayedBlanks.join("");

        }

    }
    guesses = arrayedBlanks.join("");

}



document.onkeyup = function () {
    //user input

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);




    if (!letters.includes(userGuess)) {
        alert("Please select a letter from the alphabet.");
    } else {
        guessedLetters.push(userGuess);


        for (var g = 0; g < selectedWord.length; g++) {

        
            if (guesses === selectedWord) {
                winsVar++;

                console.log(guesses)
                alert("good job! the word was " + selectedWord + "!");
                gameReset();
                //random word generator.
            }

            // if (selectedWord[g]) {
            //     livesVar--;
            // }


            if (lives < 1) {
                lossesVar++;
                gameReset();
            }
            
            if (selectedWord[g] === userGuess) {
                arrayedBlanks[g] = userGuess;
                guesses = arrayedBlanks.join("");

            } else {
                livesVar--;
            }




        }


        document.querySelector("#wins").innerHTML = "<p>Wins: </p>" + " " + winsVar;
        document.getElementById("losses").innerHTML = "<p>Losses: </p>" + " " + lossesVar;
        document.getElementById("lives").innerHTML = "<p>Lives: </p>" + livesVar;
        document.getElementById("letters-guessed").innerHTML = "<p>Letters Guessed: </p>" + guessedLetters;
        document.getElementById("current-word").innerHTML = "<p>Current Word: </p>" + guesses;
    }
}