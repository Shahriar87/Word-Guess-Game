
var wordBandName1 = "METALLICA".split('');          
var wordBandName2 = "MEGADETH".split('');
var wordBandName3 = "BLACK SABBATH".split('');
var wordBandName4 = "IRON MAIDEN".split('');
var wordBandName5 = "SLAYER".split('');
var wordBandName6 = "ANTHRAX".split('');
var wordBandName7 = "EXODUS".split('');
var wordBandName8 = "PANTERA".split('');
var wordBandName9 = "SEPULTURA".split('');
var wordBandName10 = "DEEP PURPLE".split('');

var computerWords = [wordBandName1, wordBandName2, wordBandName3, wordBandName4, wordBandName5, wordBandName6, wordBandName7, wordBandName8, wordBandName9, wordBandName10];

var guessesLeft = 13;
var wins = 0;
var listOfChoices = [];
var dash = [];
var computerGuess = [];
var keyInputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ".split('');

var getGuess = document.getElementById("guess");
var getUserText = document.getElementById("user-text");
var getWord = document.getElementById("word");
var getResult = document.getElementById("result");
var getWin = document.getElementById("win");

getGuess.textContent = guessesLeft;
getUserText.textContent = ":";





function compGuess(){            // Reset the Game
    
    guessesLeft = 13;
    listOfChoices = []; 
    dash = [];
    computerGuess = computerWords[Math.floor(Math.random()* computerWords.length)];

    console.log(computerGuess)

    for (var i=0; i < computerGuess.length; i++){           // Replace word letters with Dashes
        
        if (computerGuess[i] == ' ') {
            dash.push(' ');
        } else {
            dash.push('-');
        }
    }

    getWord.textContent = dash.join('');
  
};


compGuess(); 




document.onkeyup = function hangman(event) {
    getResult.textContent = ":";
    var userChoice = event.key.toUpperCase();     // Makes inputs Case insensitive
    

    if (keyInputs.indexOf(userChoice) > -1){         // This limits the keys into Letters and Space from "keyInputs" array

        checkGame();

        function checkGame() {
     
            if (computerGuess.indexOf(userChoice) > -1){        // If user input exists in word, it replace dashes with letters
                replaceDash()


            } else if (guessesLeft > 0){                        // Else, reduce guess by 1
                guessesLeft --;
                listOfChoices.push(userChoice);             
            }    
            getUserText.textContent = listOfChoices;       
            
        }
   

        function replaceDash(){                                 // reduce dashes with letters
            for (var i = 0; i < computerGuess.length; i++) {
                
                if (userChoice === computerGuess[i]) {
                    
                    dash[i] = userChoice;
                
                    getWord.textContent = dash.join('');

                    
                }
            }
        }

        if (dash.indexOf('-')===-1){                            // Winning!
            getResult.innerHTML = "You Win!"; 
            wins ++;        
            compGuess();
        }
        
        if (guessesLeft===0){
            getResult.innerHTML = "You Lose! <br/> Game Reset.";                // Losing!
            wins = 0;       
            compGuess();
        }


        getWin.textContent = wins;
        getGuess.textContent = guessesLeft;
        
    }
};


