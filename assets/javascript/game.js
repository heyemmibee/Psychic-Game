//my javascript file isn't working.... help...
//step 1, define le variables & array
var wins = 0;
var losses = 0;
var guessRemain = 10;
var guessLetters = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//step 2, variables that hold references to places defined in HTML//
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var GuessRemainText = document.getElementById("guess-remain-text");
var GuessLetterText = document.getElementById("guess-letter-text");

// step 3, key pressing function for determining key pressed //
document.onkeypress = function(event) {
var userChoice = event.key.toLowerCase();

//BONUS-THE LIMIT EXISTS//
var LimitExists = /[a-z]/gi;
if (!LimitExists.test(userChoice)) {
  alert("That's not a letter...")
  guessRemain++;
}

// step 4, math equation for le randomization//
var randomization = [Math.floor(Math.random() * alphabet.length)];
var computerSelection = alphabet[randomization];

//step 5, main process logic to determine result of key presses: wins/losses/guesses/remaining
if (computerSelection === userChoice) {
    wins++;
    guessLetters = [];
    //restart the game without refreshing//
    randomization = [Math.floor(Math.random() * alphabet.length)];
    computerSelection = alphabet[randomization];
    guessRemain = 10; 
    console.log("You guessed it! Wow, you must be psychic!");
    alert (userChoice + " is CORRECT! You must be psychic!");
}

if (guessRemain <= 0) {
    losses++;
    guessLetters = [];
    //restart the game without refreshing//
    randomization = [Math.floor(Math.random() * alphabet.length)];
    computerSelection = alphabet[randomization];
    guessRemain = 10; 
    console.log("Sorry you lost, you're definitely not psychic...");
    alert ("You're out of guesses, try again!");
}

else {
    guessLetters.push(userChoice);
    guessRemain--;
    console.log ("it's not " + userChoice + " guess again?");
}

if (userChoice === false) {
  alert ("That's not a letter.. try again!")
}

// Display the user and computer guesses, wins and losses //
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
GuessRemainText.textContent = "Guesses Left: " + guessRemain;
GuessLetterText.textContent = "Your Guesses So Far: " + guessLetters;
}