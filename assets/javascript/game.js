
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
var blanks = [];
var computerGuess ;


  
function compGuess(){
    computerGuess = computerWords[Math.floor(Math.random()* computerWords.length)];

    // console.log(computerGuess)

    for (var i=0; i < computerGuess.length; i++){
        
        if (computerGuess[i] == ' ') {
            blanks.push(' ');
        } else {
            blanks.push('-');
        }
    }

        // console.log(blanks)

    
};

compGuess()





document.onkeyup = function hangman(event) {
    
    var userChoice = event.key;
     
    guessesLeft --
    listOfChoices.push(userChoice);

    // console.log(listOfChoices);

    function replaceDash(){
        for (var i = 0; i < computerGuess.length; i++) {
            
            if (userChoice === computerGuess.charAt(i)) {
                
                blanks[i] = userChoice;
               
                document.getElementById("word").innerHTML = blanks.join('');

                console.log()
                
                // Check to see if the player has won or lost
                // hangman.checkWinLose();
            }
        }
    };




      
    for (var i=0; i < computerGuess.length; i++){

        if (userChoice !== computerGuess[i]){
            var flag = false;
        } else if (userChoice === computerGuess[i]){
            flag = true;
        }

    } 

    if (flag === false){
        guessesLeft --;
        listOfChoices.push(userChoice);
    } if (flag === true){
        replaceDash()
    }





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

    document.getElementById("win").textContent = wins;
    document.getElementById("word").textContent = losses;
    document.getElementById("guess").textContent = guessesLeft;
    document.getElementById("user-text").textContent = listOfChoices;

        




};
