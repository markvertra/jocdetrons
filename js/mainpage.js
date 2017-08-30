$(document).ready(function(){

    document.querySelector(".reins").play();
    document.querySelector(".reins").volume = 0.5;

    $(".play-button").on("click", function(){
        $(".first-section").css("display", "none");
        $(".create-section").css("display", "block");
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

    $(".quit-btn").on("click", function() {
        battlesWon = 0;
    });
});