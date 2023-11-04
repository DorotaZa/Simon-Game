var buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); //0-3 number range for index numbers
  var randomChosenColour = buttonColours[randomNumber]; //random color
  gamePattern.push(randomChosenColour); //actual gaame color pattern
}
