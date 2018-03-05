

//GLOBAL VARIABLES
var wordArray = ['Earnhardt', 'Talladega', 'Daytona', 'Bristol', 'Petty', 'Gordon'];
var answerArray = [];
var userArray = [];
var guessLeft = 8;
var blankWord = [];
var win = 0;
var lose = 0;
//-------------------------------------------------------------

//select random word from array
var playedWord = wordArray[(Math.floor(Math.random() * wordArray.length))];
        console.log('playedWord: ', playedWord);

//displays blanks for letters
for (var i=0; i < playedWord.length; i++) {

    // answerArray.push(playedWord[i]);
    blankWord.push("__");
    }   console.log('blankWord: ', blankWord);
    
    //------------------------------------------------------------
    
    //GAME PLAY
    
    //User guesses a letter
    document.onkeydown = function(event) {
        // userGuess = event.key;
        userGuess = event.key.toUpperCase();
        console.log('userGuess:', userGuess);
        userArray.push(userGuess);
        console.log('userArray', userArray); 

    //evaluate if letter is inside answer. 
        if (event.keycode >= 65 && event.keycode <= 90) {
            for (i = 0; i < userArray.length; i++) {

    //If yes, display letter in blankWord
                if (keycode.indexOf(playedWord) > -1) {
                    answerArray.push(userGuess);
                    blankWord[playedWord.indexOf(userGuess)] = userGuess;

                    if (blankWord.join(' ') == playedWord) {
                        alert('Win!');
                    }
                    

    //If no, display letter in userGuess.
                } else {
                    (userArray.push(userGuess)); 
                }
            }
        }
        
    };
        
        // display 
        // document.getElementById('blankWord').innerHTML = blankWord.join(" ");
        document.getElementById("blankWord").innerText = blankWord.join(" ");
        document.getElementById("guessLeft").innerHTML= guessLeft;
        document.getElementById("userArray").innerHTML = userArray;
        document.getElementById("win").innerHTML= win;
        document.getElementById("lose").innerHTML= lose;




    // if (randWord.includes(userGuess)) {
        //     evalGuess = true;
        
        //     for (i=0; i < randWord.length; i++) {        
            //         console.log(i);
            
            //         if (userGuess === randWord) {
                //             randWord = userGuess;
                
                //         } else {
                    //             console.log ('loop exit');
                    //         }
                    //     };
                    
                    //if letter is not inside answer, display letter in guesses section, decrease number of guesses
                    // } else {
                        //     userGuess = false; 
                        //     userArray.push(userGuess);
                        //     guessLeft--;
                        // };
                        // };
                        
                        



// var html= 
// "<p>Guess the Word: " + blankWord + "</p>" +
// "<p>Guesses Left: " + guessLeft + "</p>" +
// "<p>Letters Used: " + userArray + "</p>";
// document.querySelector("#gamePlay").innerHTML = html;


//if list word is completed, show win, play cheering sound
// function checkWin() {
//     if (output.indexOf('__') < 0) {
//         console.log('You Won!');
//     }
// };
//if list word is not completed, play crashing sound, or boos

//show play again alert

//Answer Images


//Junk Pile
// for (var ltr = 0; ltr < randWord; ltr++ ){
    
    // while (blankWord >= 0 && userArray.length < guessLeft) {
        //     randWord += userGuess;
        