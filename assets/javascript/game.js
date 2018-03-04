
// ---------------------------------------------- CREATE VARIABLES ----------------------------------------------

// Set the win & loss counts to zero.
let wins = 0;
document.getElementById("wins").innerHTML = wins;
let losses = 0;
document.getElementById("losses").innerHTML = losses;

// Set total guess count to 10.
let guessesRemaining = 10;
// Go to the DOM and the get the guesses-remaining id and set it to guessRemaining.
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
// Array of possible words in the game.
let words = ["apples", "bananas", "oranges", "kiwis", "watermelons", "new york", "rhode island"];
// Create a variable called lettersGuessed that is an empty array to hold guessed letters that weren't correct.
let lettersGuessed = [];
// Create a variable and set it to the reference in the HTML id of already-guessed.
let guessedLetters = document.getElementById("already-guessed");
// Generate a random number based on the length of the array.
let randomNumber = Math.floor((Math.random() * words.length));
// Create a variable called 'computerChoice' and set it to a random word from our words array.
let computerChoice = words[randomNumber];
// Create a variable called computerArray and use Array.from to split the computer's word into an array of its letters.
let computerArray = Array.from(computerChoice);
//  Create a variable called blanksGuess and set it to an empty array - this will hold our blanks for the computer word.
let blanksGuess = [];
// Set the number of blanks equal to the length of the word.
for (var i=0; i < computerChoice.length; i++) {
        blanksGuess.push("_");
}
// Create a string from the blank guess array and join them together with a white space in between.
blanksGuessStr = blanksGuess.join(" ");
// Go get the HTML element with the id of blanks and set it to that blanksGuessStr.
document.getElementById("blanks").innerHTML = blanksGuessStr; 

function init() {
    guessesRemaining = 10;
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    lettersGuessed = [];
    // guessedLetters = document.getElementById("already-guessed");
    document.getElementById("already-guessed").innerHTML = lettersGuessed;
    randomNumber = Math.floor((Math.random() * words.length));
    computerChoice = words[randomNumber];
    computerArray = Array.from(computerChoice);
    blanksGuess = [];
    for (var i=0; i < computerChoice.length; i++) {
            blanksGuess.push("_");
    }
    blanksGuessStr = blanksGuess.join(" ");
    document.getElementById("blanks").innerHTML = blanksGuessStr;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}

// ---------------------------------------------- CREATE FUNCTIONS ----------------------------------------------------

document.onkeyup = function(event) {
    // On the key up, set the variable userText to the key content of the event.
    userText = event.key.toLowerCase();
        if (lettersGuessed.includes(userText)) {
            alert("Please choose another letter!");
        }
        else {
            if (computerArray.includes(userText) === false) {
                guessesRemaining--;
                document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
                lettersGuessed.push(userText);
                // document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
                document.getElementById("already-guessed").innerHTML = lettersGuessed;
            } 
            else { 
                for (var i=0; i < computerChoice.length; i++) {
                    if (computerChoice[i] === userText) {
                        blanksGuess[i] = userText;
                        blanksGuessStr = blanksGuess.join(" ");
                        document.getElementById("blanks").innerHTML = blanksGuessStr;
                    }
                }
            }          
        }
    if (guessesRemaining === 0) {
        losses++;
        // alert("You lose");
        init();
    }
    else if (computerArray.toString() === blanksGuess.toString()) {
        wins++;
        // alert("You win!");
        init();
    }
}