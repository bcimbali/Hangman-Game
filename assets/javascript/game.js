
// Set guess to 10
let guessesRemaining = 10;
let lettersGuessed = [];

let words = ["apples", "bananas", "oranges", "kiwis", "watermelons"];

// document.getElementById("wins").innerHTML = guesses_remaining;
// Letters already guessed is cleared

let randomNumber = Math.floor((Math.random() * 5));
let computerChoice = words[randomNumber];
let guessedLetters = document.getElementById("already-guessed");
let computerArray = Array.from(computerChoice);

// let letterBlanks = document.getElementById("blanks");
// document.getElementById("blanks").innerHTML = "Test";

window.onload = function() {
    let numberSpaces = computerArray.fill("_");
    document.getElementById("blanks").innerHTML = numberSpaces;
}

// console.log(Array.from(computerChoice));
// On page load, computer chooses a random word from array

document.onkeyup = function(event) {
    userText = event.key;
    lettersGuessed.push(userText);
    // console.log(computerArray); 
    document.getElementById("already-guessed").innerHTML = lettersGuessed;    

    if (computerArray.includes(userText)) {
        document.getElementById("blanks").innerHTML = userText;
    }

}

// Left off where we need to replace the blanks in array with correct letters. Loop necessary to make sure all of
// the letters are accounted for.

    console.log(computerArray);
    console.log(computerArray.fill("_"));


// Method that breaks the word/string into an array of its letters
// Underscores that show the letters from the word


// Presses a letter and onkey event is listening
// Letter pressed is saved in a variable
// Computer checks if letter is in array
// If true, get the array position of the letter, and display letter in right blank space
// If false, add the letter to the already guessed area.
// Number of guesses decreases by 1
// If guessed array is complete, game starts again
// If guesses = 0, display "you lose"
