

//GLOBAL VARIABLES
var wordArray = ['Earnhardt', 'Talladega', 'Daytona', 'Bristol', 'Petty', 'Elliott', 'Gordon', 'Bootlegger'];
var answerArray = [];
var userArray = [];
var guessLeft = 12;
var win = 0;
var lose = 0;
//-------------------------------------------------------------

//select random word from array
var randWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(randWord);
//array that splits words 
var splitWord = randWord.split('');
//displays blanks for letters
var blankWord = [];
for (var i=0; i < randWord.length; i++){
    blankWord.push("__");
} console.log(blankWord);

//------------------------------------------------------------

//GAME PLAY

//create function to call a random word


//user guesses a letter

//if letter is inside answer, display position of letter, decrease number of guesses

//if letter is not inside answer, display letter in guesses section, decrease number of guesses

//if list word is completed, show win, play cheering sound

//if list word is not completed, play crashing sound, or boos

//show play again alert
