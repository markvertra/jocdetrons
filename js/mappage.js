var player2;

$(document).ready(function(){    

        $(".map-quit-btn").on("click", function(){
            $(".map-section").css("display", "none");
            $(".first-section").css("display", "block");
        });

        $(".map-instructions-hide-btn").on("click", function(){
            $(".map-display").css("display", "none");
            $(".map-event").css("display", "block");
            $(".map-event-wall").css("display", "none");
        });

        $(".map-event").on("click", function(){
            $(".map-section").css("display", "none");
            $(".battle-section").css("display", "block");
            $(".ability-one .ability-name").text(player1.abilityOne.name);
            $(".ability-two .ability-name").text(player1.abilityTwo.name);
            $(".ability-three .ability-name").text(player1.abilityThree.name);
            $(".special-ability .ability-name").text(player1.specialAttack.name);
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
            } else if ($(this).hasClass("map-event-wall")) {
                player2 = nightKing;
                battleRestarter();
                $(".location-title").text("Far Beyond The Wall");
            }
        });

        $(".map-event-winterfell").hover(function() {
            $(".map-hints").css("display", "block");
            $(".map-hints").text("Qyburn has resurrected the wicked Ramsey Bolton outside the gates of Winterfell. Bolton has made a cloak out of the Maester's skin and kidnapped the Master-at-Arms. Slay this vile beast.");
        }, function() {
            $(".map-hints").css("display", "none");
            $(".map-hints").text("");
        });

        $(".map-event-casterley").hover(function() {
            $(".map-hints").css("display", "block");
            $(".map-hints").text("Qyburn has resurrected the dastardly Tywin Lannister inside Casterley Rock. Lannister has summoned an army of zombie soliders and plans to conquer the 7 Kingdoms. Kill him before it is too late.");
        }, function() {
            $(".map-hints").css("display", "none");
            $(".map-hints").text("");
        });

        $(".map-event-kings-landing").hover(function() {
            $(".map-hints").css("display", "block");
            $(".map-hints").text("Qyburn has resurrected the Mountain-That-Rides (again). Gregor Clegane is slaying the peasants in the streets, burning houses down and wreaking chaos. Can you defeat this monster?");
        }, function() {
            $(".map-hints").css("display", "none");
            $(".map-hints").text("");
        });

        $(".map-event-dragonstone").hover(function() {
            $(".map-hints").css("display", "block");
            $(".map-hints").text("Qyburn has resurrected Stannis Baratheon. Baratheon is convinced he is the true ruler of Westeros and working alongside Melisandre, has cursed all his rivals. Stop him, now!");
        }, function() {
            $(".map-hints").css("display", "none");
            $(".map-hints").text("");
        });

        $(".map-event-wall").hover(function() {
            $(".map-hints").css("display", "block");
            $(".map-hints").text("Qyburn has resurrected the Night King, the greatest ever threat to Westeros. Before he leads his army of undead south, you must stop him in his tracks and secure peace, forever.");
        }, function() {
            $(".map-hints").css("display", "none");
            $(".map-hints").text("");
        });
    });
 
function battleRestarter(){
    $(".player-one-name").text(player1.name + " " + player1.surname); 
    $(".player-one-image").css("background-image", player1.image);
    $(".player-one-health-number").text(player1.health);
    $(".player-two-name").text(player2.name + " " + player2.surname);
    $(".player-two-image").css("background-image", "url(" + player2.image + ")");
    $(".player-two-health-number").text(player2.health); 
    battleOpen = true;   
}
