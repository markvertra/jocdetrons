$(document).ready(function(){

    $(".play-button").on("click", function(){
        $(".first-section").css("display", "none");
        $(".create-section").css("display", "block");
    });

    $(".multi-play-button").on("click", function(){
        alert('Multi-player still in testing');
    });

    $(".instructions-button").on("click", function(){
        var popUp = $(".instructions");
        popUp.css("display", "block");
    });

    $(".instructions-killer").on("click", function(){
        var popUp = $(".instructions");
        popUp.css("display", "none");
    });

});