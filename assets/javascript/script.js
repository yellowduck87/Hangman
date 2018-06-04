

var wordBank = ["mallard", "crested", "webbed", "bill", "waterproof"];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var usedWords = [];
var selectedWord = [];
var guessedLetters = [];
var dashedWord = [];
var blankWordString = "";


var onlyDashes = 0;
var livesVar = 10;
var winsVar = 0;
var lossesVar = 0;

//random choice from wordBank array

var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(computerChoice);


var computerAnswer = computerChoice;

selectedWord.push(computerAnswer);
dashedWord.push(selectedWord);
usedWords.push(computerAnswer);
dashedWord = computerAnswer.split("");
console.log(selectedWord);
console.log(dashedWord);



function createDashedString() {
    var dash = "_ ";
    var numberOfDashes = dashedWord.length;

    function dashesByLength(dash, num) {
        if (num > 0) {
            return dash.repeat(num);
        }
    }
    blankWordString = dashesByLength(dash, numberOfDashes);
    document.getElementById("current-word").innerHTML = "<p>Current Word:   </p>" + "<p>" + blankWordString + "</p>";
    console.log(blankWordString);
}

function createDashedArray() {

    var dashedArray = blankWordString.split(" ");
    dashedArray.pop();
    console.log(dashedArray);
}

function gameReset() {
    dashedWord = [];
    selectedWord = [];
    guessedLetters = [];
}

createDashedString();
createDashedArray();


document.onkeyup = function () {
    //user input
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);


    guessedLetters.push(userGuess);

    if (!letters.includes(userGuess)) {
        alert("Please selec a letter from the alphabet.");
    } else {
        var where = dashedWord.indexOf(userGuess);
        // if (pos > -1) {
        // for (var pos=0; pos < selectedWord.length; pos++){

        // guessedLetters.push(userGuess);



        function cycleThroughWord() {
            for (var pos = 0; pos < dashedArray.length; pos++) {
                if (userGuess === dashedArray[i]) {
                    return pos;
                    // dashedWord[pos] = userGuess;
                    console.log(dashedArray)
                    console.log(pos);
                    //    blankWordString = blankWordString[pos].replace(/_ /g, userGuess);
                    // console.log(blankWordString)
                    // blankWordString.replaceAt(pos, userGuess);
                    console.log(blankWordString);
                }
            }
        }
    }




    function posReplace(pos, userGuess) {
        if (userGuess != repl) {
            while (selectedWord.indexOf(userGuess) !== -1) {
                var newBlankWordString = blankWordString.replace(userGuess, repl);
            }
        }
        return str.toString();
    }
    //take the position from cycle trhough word funcion of the letter in the dashedWord array, replace the charat that possition in the blankwordstring then print to the page


    // } else {
    // guessedLetters.push(userGuess);

    // lives--;
    // // }
    // // console.log(pos);
    // // }

    // if (lives == 0) {
    //     losses++;
    //     gameReset();
    // }
    document.querySelector("#wins").innerHTML = "<p>Wins: </p>" + winsVar;
    document.getElementById("losses").innerHTML = "<p>Losses: </p>" + lossesVar;
    document.getElementById("lives").innerHTML = "<p>Lives: </p>" + livesVar;
}