var player2;

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
            if ($(this).hasClass("map-event-winterfell")) {
                player2 = ramseyBolton;
                $(".location-title").text("Winterfell");
            } else if ($(this).hasClass("map-event-kings-landing")) {
                player2 = gregorClegane;
                $(".location-title").text("King's Landing");
            } else if ($(this).hasClass("map-event-casterley")) {
                player2 = tywinLannister;
                $(".location-title").text("Casterley Rock");
            } else if ($(this).hasClass("map-event-dragonstone")) {
                player2 = stannisBaratheon;
                $(".location-title").text("Dragonstone");
            }
        });
    });