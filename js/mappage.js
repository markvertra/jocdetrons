$(document).ready(function(){
    
        $(".map-quit-btn").on("click", function(){
            $(".map-section").css("display", "none");
            $(".first-section").css("display", "block");
        });

        $(".map-instructions-hide-btn").on("click", function(){
            $(".map-display").css("display", "none");
            $(".map-event").css("display", "block");
        });

        $(".map-event").on("click", function(){
            $(".map-section").css("display", "none");
            $(".battle-section").css("display", "block");
            $(this).css("display", "none");
        });
    });