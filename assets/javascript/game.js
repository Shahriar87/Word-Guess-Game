
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
// var losses = 0;
var listOfChoices = [];
var dash = [];
var computerGuess = [];


  
function compGuess(){
    computerGuess = computerWords[Math.floor(Math.random()* computerWords.length)];

    console.log(computerGuess)

    for (var i=0; i < computerGuess.length; i++){
        
        if (computerGuess[i] == ' ') {
            dash.push(' ');
        } else {
            dash.push('-');
        }
    }

    document.getElementById("word").textContent = dash;
  
};

compGuess()





document.onkeyup = function hangman(event) {
    var userChoice = event.key;

    function checkGame() {

        if (computerGuess.indexOf(userChoice) > -1){
            replaceDash()
        } else {
            guessesLeft --;
            listOfChoices.push(userChoice);

        }

    }

    function replaceDash(){
        for (var i = 0; i < computerGuess.length; i++) {
            
            if (userChoice === computerGuess.charAt(i)) {
                
                dash[i] = userChoice;
               
                document.getElementById("word").innerHTML = dash.join('');

                
                // Check to see if the player has won or lost
                // hangman.checkWinLose();
            }
        }
    }


    

    document.getElementById("win").textContent = wins;
    // document.getElementById("word").textContent = losses;
    document.getElementById("guess").textContent = guessesLeft;
    document.getElementById("user-text").textContent = listOfChoices;

};

    



    







    




// if (guessesLeft === 0){
//         losses ++;
//         guessesLeft = 13; 
//         listOfChoices = [];
//         compGuess();

//     } if (userChoice === computerGuess){
//         wins ++;
//         guessesLeft = 13; 
//         listOfChoices = [];
//         compGuess();
//     } 

  

        





