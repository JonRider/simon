const buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];

// Check for user keypress
$('.btn').on('click', function () {
  var userChosenColor = this.id;
  playSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
});


// Start the game on keypress
$(document).keypress(function() {
  gameStart();
});

// Main Game Loop
function gameStart() {
  var randomChosenColor = buttonColors[nextSequence()];
  gamePattern.push(randomChosenColor);
  $('#' + randomChosenColor).animate({opacity: '0.5'}, "fast").fadeOut(50).fadeIn(50).animate({opacity: '1'}, "fast");
  playSound(randomChosenColor);
}

// Grab the next color in the sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

// Play a game sound given the color
function playSound(color) {
  var sound = new Audio("sounds/" + color + ".mp3");
  sound.play();
}
