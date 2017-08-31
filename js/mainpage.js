$(document).ready(function(){

    document.querySelector(".reins").play();
    document.querySelector(".reins").volume = 0.5;

    $(".play-button").on("click", function(){
        $(".first-section").css("display", "none");
        $(".create-section").css("display", "block");
        $(".create-overlay").css("display", "block");
        document.querySelector(".win-or-die").play();
    });

    $(".instructions-button").on("click", function(){
        var popUp = $(".instructions");
        popUp.css("display", "block");
    });

    $(".instructions-killer").on("click", function(){
        var popUp = $(".instructions");
        popUp.css("display", "none");
    });

    $(".music-up-btn").on("click", function() {
        if (document.querySelector(".reins").volume.toFixed(1) != 1.0) {
            document.querySelector(".reins").volume += 0.1;
            var musicStarterNext = musicStarter.prev();
            musicStarterNext.css("background", "green");
            musicStarter = musicStarterNext;
          }  else {
            
          }
    });

    $(".music-down-btn").on("click", function() {
        if (document.querySelector(".reins").volume.toFixed(1) != 0.1) {
            document.querySelector(".reins").volume -= 0.1;
            musicStarter.css("background", "black");
            musicStarter = musicStarter.next();
        } else {
        }
    });

    $(".options-button").on("click", function() {
        $(".options").css("display", "block");
    });

    $(".options-quit-btn").on("click", function() {
        $(".options").css("display", "none");
    });

    $(".quit-btn").on("click", function() {
        battlesWon = 0;
    });
});

var musicStarter = $(".volume6");