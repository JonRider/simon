const buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];


$('.btn').on('click', function () {
  alert(this.id);
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
  var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
  sound.play();
}




// Grab the next color in the sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
