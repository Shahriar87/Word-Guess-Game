
var wordBandName1 = "METALLICA".split('');          
var wordBandName2 = "MEGADETH".split('');
var wordBandName3 = "BLACK SABBATH".split('');
var wordBandName4 = "IRON MAIDEN".split('');
var wordBandName5 = "SLAYER".split('');
var wordBandName6 = "ANTHRAX".split('');
var wordBandName7 = "EXODUS".split('');
var wordBandName8 = "PANTERA".split('');
var wordBandName9 = "SEPULTURA".split('');
var wordBandName10 = "DREAM THEATER".split('');

var computerWords = [wordBandName1, wordBandName2, wordBandName3, wordBandName4, wordBandName5, wordBandName6, wordBandName7, wordBandName8, wordBandName9, wordBandName10];

var guessesLeft = 9;
var wins = 0;
var listOfChoices = [];
var dash = [];
var computerGuess = [];
var keyInputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');

var getStart = document.getElementById("start");
var getGuess = document.getElementById("guess");
var getUserText = document.getElementById("user-text");
var getLeftGuesses = document.getElementById("leftGuesses")
var getWord = document.getElementById("word");
var getResult = document.getElementById("result");
var getWin = document.getElementById("win");
var getImg = document.getElementById("hangmanImg");
var getFooter = document.getElementById("currentSong");

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
var audio10 = new Audio("http://articfox.free.fr/mp3/Dream%20Theater/dreamtheater%20-%20Images_and_Words/01%20Pull%20me%20under.mp3");



getGuess.textContent = guessesLeft;
// getUserText.textContent = ":";

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

var userChoice 


   

document.addEventListener('keyup', function startGame(event) {             //Press any key to start the game (once)!
    getStart.style.display = "none";
    compGuess();
}, {once: true});


    
document.onkeyup = function hangman(event) {

    getResult.textContent = "";
    userChoice = event.key.toUpperCase();     // Makes inputs Case insensitive
    
    // userChoice = getUserText.value.slice(-1).toUpperCase(); 
    getUserText.value = "";
    
    console.log(userChoice) ;  

    if (keyInputs.indexOf(userChoice) > -1){         // This limits the keys into Letters and Space from "keyInputs" array

        checkGame();

        function checkGame() {

           // if (listOfChoices.indexOf(userChoice) > -1){       // This will activate pressing the same incorrect letter only once. But I dont want this activated. I want user to press same letter as many times as user wanrs to miss chances.

          //  } else {

                
            if (computerGuess.indexOf(userChoice) > -1){        // If user input exists in word, it replace dashes with letters
                replaceDash()
                changeImg();

            } else if (guessesLeft > 0){                        // Else, reduce guess by 1
                guessesLeft --;
                changeImg();
                listOfChoices.push(userChoice);             
            }    
            // getUserText.textContent = listOfChoices;   
            getLeftGuesses.textContent = listOfChoices;

          //  }




         
            
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
            switch (computerGuess.join("")){     //Function to play audios & show current song name
                case "METALLICA":
                    stopAudios();
                    audio1.play();
                    getFooter.innerHTML = "Now Playing: Master Of Puppets - Metallica";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://images-na.ssl-images-amazon.com/images/I/91pHIsMbZpL._SY355_.jpg style=width:130px; height:130px;/>";
                    break;
                case "MEGADETH":
                    stopAudios();
                    audio2.play();
                    getFooter.innerHTML = "Now Playing: Trust - Megadeth";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://s3.amazonaws.com/images.sheetmusicdirect.com/Album/b2d4c16d-7b7a-4365-ad0e-9f24d32c8378/large.jpg style=width:130px; height:130px;/>";
                    break;
                case "BLACK SABBATH":
                    stopAudios();
                    audio3.play();
                    getFooter.innerHTML = "Now Playing: Paranoid - Black Sabbath ";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://images-na.ssl-images-amazon.com/images/I/712nD2NH-zL._SL1425_.jpg style=width:130px; height:130px;/>";
                    break;
                case "IRON MAIDEN":
                    stopAudios();
                    audio4.play();
                    getFooter.innerHTML = "Now Playing: Fear Of The Dark - Iron Maiden";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = http://musicfearsatan.com/wp-content/uploads/2017/06/ironmaiden_fear.jpg style=width:130px; height:130px;/>";
                    break;
                case "SLAYER":
                    stopAudios();
                    audio5.play();
                    getFooter.innerHTML = "Now Playing: Raining Blood - Slayer";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://i.ytimg.com/vi/z8ZqFlw6hYg/hqdefault.jpg style=width:130px; height:130px;/>";
                    break;
                case "ANTHRAX":
                    stopAudios();
                    audio6.play();
                    getFooter.innerHTML = "Now Playing: Evil Twins - Anthrax";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://tshirtslayer.com/files-tshirt/styles/shirtviewbottom/public/user-14692/ee34c4eaf47b0daef9ebc722a5440ae3.jpg?itok=okOiBRtF style=width:130px; height:130px;/>";
                    break;
                case "EXODUS":
                    stopAudios();
                    audio7.play();
                    getFooter.innerHTML = "Now Playing: Blacklist- Exodus";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://images.genius.com/433d812894472fa5e77ab4ed566f1a28.1000x1000x1.jpg style=width:130px; height:130px;/>";
                    break;
                case "PANTERA":
                    stopAudios();
                    audio8.play();
                    getFooter.innerHTML = "Now Playing: Cowboys From Hell - Pantera";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://images-na.ssl-images-amazon.com/images/I/91gDINDQ7sL._SL1425_.jpg style=width:130px; height:130px;/>";
                    break;
                case "SEPULTURA":
                    stopAudios();
                    audio9.play();
                    getFooter.innerHTML = "Now Playing: Arise - Sepultura";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://img.discogs.com/gP6kZNqJZdms3hqbyYZP_01HDQs=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1887496-1308953876.jpeg.jpg style=width:130px; height:130px;/>";
                    break;
                case "DREAM THEATER":
                    stopAudios();
                    audio10.play();
                    getFooter.innerHTML = "Now Playing: Pull Me Under - Dream Theater";
                    getResult.innerHTML = "You Win! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src = https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Cover_of_the_single_Pull_me_under_from_Dream_Theater.jpeg/220px-Cover_of_the_single_Pull_me_under_from_Dream_Theater.jpeg style=width:130px; height:130px;/>";
                    break;
            }

        };



        if (dash.indexOf('-')===-1){                            // Winning! 
            wins ++;   
            playAudios();
            getImg.src="https://media.giphy.com/media/nydq4W7ymEzr4InzHv/giphy.gif";   
            compGuess();
        }
        
        if (guessesLeft===0){
            getResult.innerHTML = "You Lose! <br/> Game Reset. <br/> Correct Band Name was: " + computerGuess.join("");                // Losing!
            wins = 0;       
            compGuess();
        }

        getWin.textContent = wins;
        getGuess.textContent = guessesLeft;
        
    }
};





