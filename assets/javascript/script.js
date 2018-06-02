// make an array of duck related words
//make blank array
//make array for used words
// computer selects one word randomly
//if word has been used, pick another word
// based on length of word, make a blank template wwith _
// user should have 10 guesses
// when a letter is guess correctly, the corressponding __ is replaced with the letter
// when lives is 0, subtract one from losses
// if a word is guessed corectly, add one to wins
//reset word after win or loss
//show word after loss

var wordBank = ["mallard", "crested", "webbed", "bill", "waterproof"];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var usedWords = [];
var selectedWord = [];
var guessedLetters = [];
var dashedWord = [];
var livesVar = 10;
var winsVar = 0;
var lossesVar = 0;
var computerChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(computerChoice);
var computerAnswer = computerChoice;
console.log(computerChoice);
console.log(wordbank[0]);

document.onkeydown = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    // computerAnswer.push(selectedWord);
    // console.log(computerAnswer);
    // console.log(selectedWord).push(usedWords);
    // dashedWord = selectedWord.indexOf("userGuess");
    // console.log(userGuess);
    // console.log(computerAnswer);

    // if (!letter.includes(userGuess)) {
        // alert("Please selec a letter from the alphabet.");
    // } else {
    //     guessedLetters.push(userGuess);
    //     if (userGuess == selectedWord.indexOf("userGuess")){
    //     alert("you got a letter")
    //     }
    //     if (userGuess !== selectedWord.indexOf("userGuess")) {
    //         alert("noo")
    //         lives--;
    //     }

        
    
    // document.getElementById(wins).innerHTML = "Wins: " + winsVar;
    // document.getElementById(losses).innerHTML = "Losses: " + lossesVar;
    // document.getElementById(lives).innerHTML = "Lives: " + livesVar;
    // document.getElementById(letters-guessed).innerHTML = "Letters guessed: " + guessedLetters;
    // }
}