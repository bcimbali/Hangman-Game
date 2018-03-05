
// ---------------------------------------------- CREATE VARIABLES ----------------------------------------------

// Set the win & loss counts to zero.
let wins = 0;
document.getElementById("wins").innerHTML = wins;
let losses = 0;
document.getElementById("losses").innerHTML = losses;

// Set total guess count to 10.
let guessesRemaining = 5;
// Go to the DOM and the get the guesses-remaining id and set it to guessRemaining.
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
// Create a list of states
let states = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
              'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois',
              'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland',
              'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana',
              'nebraska', 'nevada', 'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
              'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode-island',
              'south-carolina', 'south-dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
              'wisconsin', 'wyoming'];
// Generate a random number based on the length of the array.
let randomNumber = Math.floor((Math.random() * states.length));
// Chose a state for the game.
let chosenState = states[randomNumber];
// Create a variable called lettersGuessed that is an empty array to hold guessed letters that weren't correct.
let lettersGuessed = [];
// Create a variable and set it to the reference in the HTML id of already-guessed.
let guessedLetters = document.getElementById("already-guessed");
// Create a variable called 'computerChoice' and set it to a random word from our states array.
let computerChoice = chosenState;
// Create a variable called computerArray and use Array.from to split the computer's word into an array of its letters.
let computerArray = Array.from(computerChoice);
//  Create a variable called blanksGuess and set it to an empty array - this will hold our blanks for the computer word.
let blanksGuess = [];
// Set the number of blanks equal to the length of the word.
for (var i=0; i < computerChoice.length; i++) {
    if (computerChoice[i] === "-") {
        blanksGuess.push("-");
    }
    else {
        blanksGuess.push("_");
    }
}
// Create a string from the blank guess array and join them together with a white space in between.
blanksGuessStr = blanksGuess.join(" ");
// Go get the HTML element with the id of blanks and set it to that blanksGuessStr.
document.getElementById("blanks").innerHTML = blanksGuessStr; 
let getHint = document.getElementById("hint");
let clue = document.getElementById("clue");

hints = ['This state introduced the Mardi Gras to the western world. The celebration is held on Shrove Tuesday, the day before Lent begins.',
            'This state motto is North to the Future.',
            'This state leads the nation in copper production.',
            'The pine tree is the official state tree.',
            'The highest and lowest points in the continental United States are actually within this state.',
            'This is the only state in history to turn down the Olympics.',
            'PEZ Candy is made within this state',
            'This was the first state to ratify the United States constitution',
            'May 20, 1970, lawmakers here passed and sent to the Governor a bill adopting the moonstone as the official state gem. Ironically, the moonstone is not found naturally in this state...nor was it found on the moon.',
            'This is the largest state east of the Mississippi River',
            'This state has the southernmost point in the United States.',
            'This state has the deepest gorge in America.',
            'The worlds first Skyscraper was built here.',
            'The first long-distance auto race in the U. S. was held in this state',
            'The highest double track railroad bridge in the world, the Kate Shelley Bridge, is located in this state.',
            'This state has the windiest city, based on average wind speeds recorded here.',
            'The worlds longest known cave system is located in this state',
            'This is the only state in the union that does not have counties. Its political subdivisions are called parishes.',
            'This state is the only state that shares its border with only one other state.',
            'This state contains the sailing capital of the world',
            'This state built the first subway system in the United States',
            'This state is home to the worlds largest manufacture of magic supplies',
            'This state has the oldest continuously running theater (Old Log Theater) and the largest dinner theater (Chanhassan Dinner Theater) in the country.',
            'Root beer was invented in this state',
            'The tallest man in documented medical history was Robert Pershing Wadlow from this state. He was 8 feet, 11.1 inches tall',
            'This state is the only state with a triple divide allowing water to flow into the Pacific, Atlantic, and Hudson Bay.',
            'This state has more miles of river than any other state.',
            'This state takes its name from a Spanish word meaning snow-clad.',
            'This state  adopted the first legal lottery in the twentieth century United States.',
            'This state has the highest capital city in the United States at 7,000 feet above sea level.',
            'This was the first state to require license plates on cars.',
            'This state has the most diners in the world and is sometimes referred to as the diner capital of the world.',
            'This state leads the nation in furniture, tobacco, brick, and textile production.',
            'This state has the geographical center of North America',
            'This state installed the first traffic light in America.',
            'This state is one of only two states whose capital cities name includes the state name.',
            'This state has more ghost towns than any other state.',
            'This state the first state of the fifty United States to list their web site URL on a license plate.',
            'The first circus in the United States was held in this state',
            'This state has The Upper Whitewater Falls - the highest cascade in eastern America; it descends for nearly 411 feet.',
            'This state has the worlds largest petrified wood park.',
            'This state lays claim to the Birthplace of Country Music',
            'This state has a county that has more species of birds than any other comparable area in North America.',
            'This state is the site of the nations first department store. Zions Co-operative Mercantile Institution was established in the late 1800s. It is still in operation today as ZCMI.',
            'This state is the only U.S. state capital without a McDonalds.',
            'This state is also known as - the birthplace of a nation',
            'This state has more glaciers than the other 47 contiguous states combined.',
            '75% of this state is covered by forests.',
            'This state has the Toilet Paper Capital of the World.',
            'This state had the first official National Park.'];

getHint.onclick = function() {
    clue.innerHTML = hints[states.indexOf(chosenState)];
};

function init() {
    guessesRemaining = 5;
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    lettersGuessed = [];
    // guessedLetters = document.getElementById("already-guessed");
    document.getElementById("already-guessed").innerHTML = lettersGuessed;
    randomNumber = Math.floor((Math.random() * states.length));
    chosenState = states[randomNumber];
    computerChoice = chosenState;
    computerArray = Array.from(computerChoice);
    blanksGuess = [];
    for (var i=0; i < computerChoice.length; i++) {
        if (computerChoice[i] === "-") {
            blanksGuess.push("-");
        }
        else {
            blanksGuess.push("_");
        }
    }
    blanksGuessStr = blanksGuess.join(" ");
    clue.innerHTML = "";
    document.getElementById("blanks").innerHTML = blanksGuessStr;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}

// ---------------------------------------------- CREATE FUNCTIONS ----------------------------------------------------

document.onkeyup = function(event) {
    // On the key up, set the variable userText to the key content of the event.
    console.log("State" + states.indexOf(chosenState));
    console.log(chosenState);
    console.log("Hint" + hints.indexOf(chosenState));
    userText = event.key.toLowerCase();
        if (lettersGuessed.includes(userText)) {
            alert("Please choose another letter!");
        }
        else {
            if (computerChoice.includes(userText) === false) {
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