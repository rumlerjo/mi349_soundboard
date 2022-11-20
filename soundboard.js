var buttons = document.querySelectorAll("button");
var currentlyPlaying = null;

buttons.forEach(function(button) {
    var audio = button.querySelector("audio");
    button.addEventListener("click", function() {
        if (currentlyPlaying == null) {
            currentlyPlaying = audio;
            audio.play();
        } else if (currentlyPlaying.paused) {
            currentlyPlaying = audio;
            audio.play();
        }
    });
});