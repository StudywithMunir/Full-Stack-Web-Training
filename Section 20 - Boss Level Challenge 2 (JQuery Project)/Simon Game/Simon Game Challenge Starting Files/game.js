// Colors used in the game
var buttonColours = ["red", "blue", "green", "yellow"];

// Game pattern and user's clicked pattern
var gamePattern = [];
var userClickedPattern = [];

// Track game state
var started = false;
var level = 0;

// Start the game when any key is pressed
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();  // Start the first sequence
        started = true;
    }
});

// Handle button click
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");  // Get the ID (color) of clicked button
    userClickedPattern.push(userChosenColour);  // Add to user's pattern

    playSound(userChosenColour);       // Play button sound
    animatePress(userChosenColour);    // Animate the press effect

    checkAnswer(userClickedPattern.length - 1); // Check if the answer is correct
});

// Check user's answer at the current level
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // If user has finished the sequence, go to next
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence(); // Move to next level
            }, 1000);
        }
    } else {
        // Wrong answer
        playSound("wrong");  // Play wrong sound
        $("body").addClass("game-over");  // Flash screen
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // Remove game-over effect after 200ms
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();  // Reset the game
    }
}

// Create the next color in the sequence
function nextSequence() {
    userClickedPattern = []; // Reset user's pattern
    level++; // Increase level
    $("#level-title").text("Level " + level);

    // Choose a random color
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour); // Add to game pattern

    // Flash the button
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Play sound for the chosen color
    playSound(randomChosenColour);
}

// Animate button press
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed"); // Add pressed class
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed"); // Remove it after 100ms
    }, 100);
}

// Play sound for a given color
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Reset game state
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
