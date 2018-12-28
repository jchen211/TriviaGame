$(document).ready(function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var timerCount;

// start game-button -- on click function (there will be a button)
$("#button").on("click", startGame);

setTimeout(thirtySeconds, 1000 * 30);

funtion thirtySeconds() {
    timerCount = setInterval(count, 1000);
    $('#timer').text('00:30');
}

// what happens when button is clicked?
//question # appears, question appears, and answer choices appear
function startGame() {
    thirtySeconds();
} 

    
// once game starts. timer starts, question comes up.

// hovering over the answer -- border shows

// click on userChoice or timeOut
    // wrong choice = shows correct choice
    // right choice = correct screen

// after 2 second. move on to next question

// keeps going until all questions answered

//end screen- shows # of correct and # of wrongs
//reset game with a button.

});