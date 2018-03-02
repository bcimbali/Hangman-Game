
// ---------------------------------------------- CREATE VARIABLES ----------------------------------------------

// Set guess to 10.
let guessesRemaining = 10;
// Empty array to hold guessed letters that weren't correct.
let lettersGuessed = [];

// Array of possible words in the game.
let words = ["apples", "bananas", "oranges", "kiwis", "watermelons"];

// Generate a random number based on the length of the array.
let randomNumber = Math.floor((Math.random() * words.length));
// Create a variable called 'computerChoice' and set it to a random word from our words array.
let computerChoice = words[randomNumber];
// Create a variable and set it to the reference in the HTML id of already-guessed.
let guessedLetters = document.getElementById("already-guessed");
// Create a variable called computerArray and use Array.from to split the computer's word into an array of its letters.
let computerArray = Array.from(computerChoice);

// document.getElementById("wins").innerHTML = guesses_remaining;
// let letterBlanks = document.getElementById("blanks");
// document.getElementById("blanks").innerHTML = "Test";

// ---------------------------------------------- CREATE FUNCTIONS ----------------------------------------------------

window.onload = function() {
    let numberSpaces = computerArray.fill("_");
    document.getElementById("blanks").innerHTML = numberSpaces;
}


document.onkeyup = function(event) {
    userText = event.key;
    lettersGuessed.push(userText);
    document.getElementById("already-guessed").innerHTML = lettersGuessed;    

    if (computerArray.includes(userText)) {
        document.getElementById("blanks").innerHTML = userText;
    }

}

// Left off where we need to replace the blanks in array with correct letters. Loop necessary to make sure all of
// the letters are accounted for.

// Log the computer array and then log the word with blanks inserted.
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
