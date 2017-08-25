
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
        } else {
            alert("You win!");
        } 
        
    });

});