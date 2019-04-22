//setting up the variables
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessLetters = [];
var guessRemain = 9;
var wins = 0;
var losses = 0;
var letter = null;

//defining 4 functions, last one is for reset
var updateguess = function() {
    letter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var updateguessesleft = function() {
    document.querySelector("#guess-remain-text").innerHTML = guessRemain;
};

var updatelettersguessed = function() {
    document.querySelector("#guess-letter-text").innerHTML = guessLetters.join(", ");
};

var reset = function () {
    guessRemain = 9;
    guessLetters = [];
    updateguess();
    updateguessesleft();
    updatelettersguessed();
};

//execute on page load
updateguess();
updateguessesleft();

// key pressing function for determining key pressed //
document.onkeypress = function(event) {
    guessRemain--;
    var userChoice = event.key.toLowerCase();
    guessLetters.push(userChoice);
    updatelettersguessed();
    updateguessesleft();

//what if... right or wrong
if (userChoice === letter) {
    wins++;
    document.querySelector("#wins-text").innerHTML = wins;
    console.log("You guessed it! Wow, you must be psychic!");
    alert (userChoice + " is CORRECT! You must be psychic!");
    reset();
}

//this doesn't seem to be working... giving up for now...?
if (guessRemain <=0) {
    losses++;
    document.querySelector("losses-text").innerHTML = losses;
    console.log("Sorry you lost, your mind feels a bit fuzzy...");
    alert ("You're out of guesses, try again?");
    reset();
}
    //BONUS-THE LIMIT EXISTS//
    var LimitExists = /[a-z]/gi;
    if (!LimitExists.test(userChoice)) {
      alert("That's not a letter...")
    }
    
};