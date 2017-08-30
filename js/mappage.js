var player2;
var trainingGame;

$(document).ready(function(){    

        $(".map-quit-btn").on("click", function(){
            $(".map-section").css("display", "none");
            $(".first-section").css("display", "block");
            document.querySelector(".fear-and-blood").play();
        });

        $(".map-instructions-hide-btn").on("click", function(){
            $(".map-display").css("display", "none");
            $(".map-event").css("display", "block");
            $(".map-event-wall").css("display", "none");
            $(".display-stats-btn").css("display", "block");
            $(".map-train-btn").css("display", "block");
        });

        $(".display-stats-btn").on("click", function() {
            $(".stats-screen").css("display", "block");
            $(".display-stats-btn").css("display", "none");
        });

        $(".map-train-btn").on("click", function() {
            $(".map-section").css("display", "none");
            $(".training-section").css("display", "block");
            $(".training-instructions-container").css("display", "block");
            $(".map-train-btn").css("display", "none");
            player1.timesTrained++;
            statsFiller();
            trainingGame = new TrainingGame();
        });

        $(".return-to-map-btn").on("click", function() {
            $(".stats-screen").css("display", "none");
            $(".display-stats-btn").css("display", "block");
        });

        $(".map-event").on("click", function(){
            document.querySelector(".i-choose-violence").play()
            $(".map-section").css("display", "none");
            $(".battle-section").css("display", "block");
            $(".player-one").css("display", "block");
            $(".player-two").css("display", "block");
            $(this).css("display", "none");
            setTimeout( function () {
                AI();
            }, 1000);
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
            mapOpener("Winterfell");
        }, function() {
            mapCloser();
        });

        $(".map-event-casterley").hover(function() {
            mapOpener("Casterley Rock");
        }, function() {
            mapCloser();
        });

        $(".map-event-kings-landing").hover(function() {
            mapOpener("King's Landing");
        }, function() {
            mapCloser();
        });

        $(".map-event-dragonstone").hover(function() {
            mapOpener("Dragonstone");
        }, function() {
            mapCloser();
        });

        $(".map-event-wall").hover(function() {
            mapOpener("Beyond The Wall");
        }, function() {
            mapCloser();
        });
    });
 
function battleRestarter(){
    $(".player-one-name").text(player1.name + " " + player1.surname); 
    $(".player-one-image").css("background-image", player1.image);
    $(".player-one-health-number").text(player1.health);
    $(".player-two-name").text(player2.name + " " + player2.surname);
    $(".player-two-image").css("background-image", "url(" + player2.image + ")");
    $(".player-two-health-number").text(player2.health); 
    $(".player-one-abilities .ability-one .ability-name").text(player1.abilityOne.name);
    $(".player-one-abilities .ability-two .ability-name").text(player1.abilityTwo.name);
    $(".player-one-abilities .ability-three .ability-name").text(player1.abilityThree.name);
    $(".player-one-abilities .special-ability .ability-name").text(player1.specialAttack.name);
    $(".player-two-abilities .ability-one").text(player2.abilityOne.name);
    $(".player-two-abilities .ability-two").text(player2.abilityTwo.name);
    $(".player-two-abilities .ability-three").text(player2.abilityThree.name);
    $(".player-two-abilities .special-ability").text(player2.specialAttack.name);
    
    battleOpen = true;   
}

function mapOpener(location){
    $(".map-hints").css("display", "block");
    $(".map-hints").text(EVENT_TEXTS[location]);
}

function mapCloser() {
    $(".map-hints").css("display", "none");
    $(".map-hints").text("");
}