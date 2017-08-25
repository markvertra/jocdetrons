
$(document).ready(function(){

    $(".battle-quit-btn").on("click", function(){
        $(".battle-section").css("display", "none");
        $(".first-section").css("display", "block");
    });

    $(".battle-win-btn").on("click", function(){
        battlesWon += 1;
        if (battlesWon < 4) {
            $(".battle-section").css("display", "none");
            $(".map-section").css("display", "block");
        } else if (battlesWon === 5) {
            alert("You won!");
        } else {
            $(".battle-section").css("display", "none");
            $(".map-section").css("display", "block");
            $(".map-event-wall").css("display", "block");
        } 
    });

});