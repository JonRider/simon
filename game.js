const buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

// Check for user keypress
$('.btn').on('click', function() {
  if (gameStarted) {
    var userChosenColor = this.id;
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    checkAnswer((userClickedPattern.length) - 1);
  }
});


// Start the game on keypress
$(document).keypress(function() {
  if (!gameStarted) {
    gameStarted = true;
    level = 0;
    nextSequence();
  }
});

// Grab the next color in the sequence and display it
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  level++;
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $('#' + randomChosenColor).animate({
    opacity: '0.5'
  }, "fast").fadeOut(50).fadeIn(50).animate({
    opacity: '1'
  }, "fast");
  playSound(randomChosenColor);
  $('#level-title').text("Level " + level);
}

// Check the answer
function checkAnswer(currentLevel) {
  // Check for wrong answer
  if (userClickedPattern[currentLevel] != gamePattern[currentLevel]) {
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $('body').addClass('game-over');
    setTimeout(function () {
      $('body').removeClass('game-over');
    }, 200);
    // Restart Game
    $('#level-title').text("Game Over! Press any key to restart");
    startOver();
  }
  // Answer is correct
  else {
    // Check to see if this is the final color in the sequence
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
}

// Play a game sound given the color
function playSound(color) {
  var sound = new Audio("sounds/" + color + ".mp3");
  sound.play();
}

// Restart game
function startOver() {
  gameStarted = false;
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
}
