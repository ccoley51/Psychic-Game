var letters=["a","b","c","d","e","f","g","h","i"];

var wins=0;

var loses=0;

var left=10;

var totalGuesses=0;

var letterToguess=null;

var guessLetter=[];

//letter to guess to a random letter from the letters array//

window.onload = function(){
    var compGuess = letters[Math.floor(Math.random()* letters.length)];
    guessLetter.push(compGuess);
    

}

//prompt user to guess letter//
document.onkeyup = function(event){
    var playerGuess =event.key;
    letterToguess.push(playerGuess);
    
}

//compare user guessed letter to random letter selected//
if ((playerGuess === letterToguess[0]) && (totalGuesses > 0)){
    wins++;
    left = 9;
    letters.length = 0;
    compGuess.length = 0;
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    guessLetter.push(compGuess);


}

//if its a win, increase win count by 1 alert do you want to play again//
else if ((playerGuess !== compGuess[0]) && (totalGuesses > 0)){
    totalGuesses = totalGuesses-1;
}

//if its a loss, decrease guesses left by 1//
else{
    loses++;
    totalGuesses = 10;
    letterToguess.length = 0;
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    guessLetter.push(compGuess);

}

//take guessed letter and add to guessLetter//

//if guesses left equals 0 it tallies a loss//

//restart function generate new random letter, alert a user to choose new letter and reset guesses left//





