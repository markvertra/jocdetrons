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
                battleRestarter();
                $(".location-title").text("Winterfell");
            } else if ($(this).hasClass("map-event-kings-landing")) {
                player2 = gregorClegane;
                battleRestarter();
                $(".location-title").text("King's Landing");
            } else if ($(this).hasClass("map-event-casterley")) {
                player2 = tywinLannister;
                battleRestarter();
                $(".location-title").text("Casterley Rock");
            } else if ($(this).hasClass("map-event-dragonstone")) {
                player2 = stannisBaratheon;
                battleRestarter();
                $(".location-title").text("Dragonstone");
            }
        });
    });
 
function battleRestarter(){
    $(".player-one-name").text(player1.name + " " + player1.surname); 
    $(".player-one-image").css("background-image", player1.image);
    $(".player-one-health-number").text(player1.health);
    $(".player-two-name").text(player2.name + " " + player2.surname);
    $(".player-two-image").css("background-image", "url(" + player2.image + ")");
    $(".player-two-health-number").text(player2.health);    
}
