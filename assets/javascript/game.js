
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

var guessesLeft = 9;
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
var getImg = document.getElementById("hangmanImg");

var img8 = "assets/images/Hangman miss1.jpg";
var img7 = "assets/images/Hangman miss2.jpg";
var img6 = "assets/images/Hangman miss3.jpg";
var img5 = "assets/images/Hangman miss4.jpg";
var img4 = "assets/images/Hangman miss5.jpg";
var img3 = "assets/images/Hangman miss6.jpg";
var img2 = "assets/images/Hangman miss7.jpg";
var img1 = "assets/images/Hangman miss8.jpg";
var img0 = "assets/images/Hangman miss9.jpg";

var img = [img0, img1, img2, img3, img4, img5, img6, img7, img8];

var audio1 = new Audio("http://sd-1.archive-host.com/membres/playlist/20775449874745885/02-Masterofpuppets.mp3");
var audio2 = new Audio("http://crovaxx.free.fr/Megadeth%20-%20Trust.mp3");
var audio3 = new Audio("http://cthulhu22.free.fr/Black%20Sabbath-Iron%20Man%20The%20Best%20of%20Black%20Sabbath-2012-GRAVEWISH/01-black_sabbath-paranoid.mp3");
var audio4 = new Audio("http://digidownload.libero.it/solohtml/musica/fear%20of.mp3");
var audio5 = new Audio("http://mp3serveur66.free.fr/Musique/Death%20Metal/Slayer/1996/Reign%20in%20Blood/Raining%20Blood.mp3");
var audio6 = new Audio("http://s1.faz-dl3.ir/Ali/music/aban/Anthrax%20-%20Evil%20Twin%28320%29.mp3");
var audio7 = new Audio("https://a.tumblr.com/tumblr_magdmmZHrP1qdg6sho1.mp3");
var audio8 = new Audio("http://www.deanguitars.tv/mp3s/deanradio/8.%20Dean%20Artist%20-%20Dimebag%20Darrell%20of%20Pantera%20-%20%20Cowboys%20From%20Hell.mp3");
var audio9 = new Audio("http://metaaaal.free.fr/Divers/Sepultura%20-%20Arise.mp3");
var audio10 = new Audio("http://www.deanguitars.tv/mp3s/deanradio/4.%20Michael%20Angelo%20Batio%20-%20BURN%20-%20Deep%20Purple.mp3");



getGuess.textContent = guessesLeft;
getUserText.textContent = ":";

getImg.src="assets/images/Hangman Empty.jpg";




function compGuess(){            // Reset the Game

    guessesLeft = 9;
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

// document.onkeyup = function startGame(event){
//     var keyStart = event.keyCode;
//     if (ketStart === 32){
//         compGuess(); 
//     }
    
// }

compGuess(); 



document.onkeyup = function hangman(event) {

    getResult.textContent = ":";
    var userChoice = event.key.toUpperCase();     // Makes inputs Case insensitive
    

    if (keyInputs.indexOf(userChoice) > -1){         // This limits the keys into Letters and Space from "keyInputs" array

        checkGame();

        function checkGame() {
     
            if (computerGuess.indexOf(userChoice) > -1){        // If user input exists in word, it replace dashes with letters
                replaceDash()
                changeImg();

            } else if (guessesLeft > 0){                        // Else, reduce guess by 1
                guessesLeft --;
                changeImg();
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

        function changeImg(){                                   // Hangman Image
            var j = guessesLeft;

            if (guessesLeft ===9){
                getImg.src="assets/images/Hangman Empty.jpg";
            } else {
                getImg.src=img[j];
            }
        }

        function stopAudios(){              // Function to stop audios
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            audio9.pause();
            audio10.pause();
        }

        function playAudios(){
            switch (computerGuess.join("")){     //Function to play audios
                case "METALLICA":
                    stopAudios();
                    audio1.play();
                    break;
                case "MEGADETH":
                    stopAudios();
                    audio2.play();
                    break;
                case "BLACK SABBATH":
                    stopAudios();
                    audio3.play();
                    break;
                case "IRON MAIDEN":
                    stopAudios();
                    audio4.play();
                    break;
                case "SLAYER":
                    stopAudios();
                    audio5.play();
                    break;
                case "ANTHRAX":
                    stopAudios();
                    audio6.play();
                    break;
                case "EXODUS":
                    stopAudios();
                    audio7.play();
                    break;
                case "PANTERA":
                    stopAudios();
                    audio8.play();
                    break;
                case "SEPULTURA":
                    stopAudios();
                    audio9.play();
                    break;
                case "DEEP PURPLE":
                    stopAudios();
                    audio10.play();
                    break;
            }

        };

        if (dash.indexOf('-')===-1){                            // Winning!
            getResult.innerHTML = "You Win!"; 
            wins ++;   
            playAudios();
            getImg.src="https://media.giphy.com/media/nydq4W7ymEzr4InzHv/giphy.gif";   
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





