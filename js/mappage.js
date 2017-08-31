var player2;
var trainingGame;

$(document).ready(function(){    

        $(".map-quit-btn").on("click", function(){
            $(".map-section").css("display", "none");
            $(".first-section").css("display", "block");
            document.querySelector(".fear-and-blood").play();
        });

        $(".map-instructions-hide-btn").on("click", function(){
            $(".map-overlay").css("display", "block");
            $(".map-display").css("display", "none");
            setTimeout(function() {
                $(".map-advice-text-one").css("display", "block");
            }, 1000);
            setTimeout(function() {
                $(".map-advice-text-two").css("display", "block");
                $(".map-event-training").css("display", "block");
            }, 2000);
            setTimeout(function() {
                $(".map-advice-text-three").css("display", "block");
                $(".map-event-special").css("display", "block");
            }, 3000);
            });

        $(".map-overlay").on("click", function() {
            $(".map-event").css("display", "block");
            $(".map-event-wall").css("display", "none");
            $(".display-stats-btn").css("display", "block");
            $(".map-overlay").css("display", "none");
        });

        $(".display-stats-btn").on("click", function() {
            $(".stats-screen").css("display", "block");
            $(".display-stats-btn").css("display", "none");
        });

        $(".return-to-map-btn").on("click", function() {
            $(".stats-screen").css("display", "none");
            $(".display-stats-btn").css("display", "block");
        });

        $(".map-event").on("click", function(){
            if ($(this).hasClass("map-event-winterfell")) {
                document.querySelector(".i-choose-violence").play();
                $(".map-section").css("display", "none");
                $(".battle-section").css("display", "block");
                $(".battle-section").css("background-image", "url('img/winterfellBackground.jpg')");
                $(".player-one").css("display", "block");
                $(".player-two").css("display", "block");
                $(this).css("display", "none");
                setTimeout( function () {
                    AI();
                }, 1000);
                player2 = ramseyBolton;
                battleRestarter();
                $(".location-title").text("Winterfell");
            } else if ($(this).hasClass("map-event-riverlands")) {
                document.querySelector(".i-choose-violence").play();
                $(".map-section").css("display", "none");
                $(".battle-section").css("display", "block");
                $(".player-one").css("display", "block");
                $(".player-two").css("display", "block");
                $(".battle-section").css("background-image", "url('img/riverrunBackground.png')");
                $(this).css("display", "none");
                setTimeout( function () {
                    AI();
                }, 1000);
                player2 = gregorClegane;
                battleRestarter();
                $(".location-title").text("Riverlands");
            } else if ($(this).hasClass("map-event-casterley")) {
                document.querySelector(".i-choose-violence").play();
                $(".map-section").css("display", "none");
                $(".battle-section").css("display", "block");
                $(".player-one").css("display", "block");
                $(".player-two").css("display", "block");
                $(".battle-section").css("background-image", "url('img/casterleyrockBackground.jpg')");
                $(this).css("display", "none");
                setTimeout( function () {
                    AI();
                }, 1000);
                player2 = tywinLannister;
                battleRestarter();
                $(".location-title").text("Casterley Rock");
            } else if ($(this).hasClass("map-event-dragonstone")) {
                document.querySelector(".i-choose-violence").play();
                $(".map-section").css("display", "none");
                $(".battle-section").css("display", "block");
                $(".player-one").css("display", "block");
                $(".player-two").css("display", "block");
                $(".battle-section").css("background-image", "url('img/dragonstoneBackground.jpg')");
                $(this).css("display", "none");
                setTimeout( function () {
                    AI();
                }, 1000);
                player2 = stannisBaratheon;
                battleRestarter();
                $(".location-title").text("Dragonstone");
            } else if ($(this).hasClass("map-event-training")) {
                $(".map-section").css("display", "none");
                $(".training-section").css("display", "block");
                $(".training-instructions-container").css("display", "block");
                $(this).css("display", "none");
                player1.timesTrained++;
                statsFiller();
                trainingGame = new TrainingGame();
            } else if ($(this).hasClass("map-event-special")) {
                $(".map-section").css("display", "none");
                $(".upgrade-section").css("display", "block");
                $(this).css("display", "none");
            } else if ($(this).hasClass("map-event-wall")) {
                document.querySelector(".i-choose-violence").play();
                $(".map-section").css("display", "none");
                $(".battle-section").css("display", "block");
                $(".player-one").css("display", "block");
                $(".player-two").css("display", "block");
                $(".battle-section").css("background-image", "url('img/beyondthewallBackground.jpg')");
                $(this).css("display", "none");
                setTimeout( function () {
                    AI();
                }, 1000);
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

        $(".map-event-riverlands").hover(function() {
            mapOpener("Riverlands");
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

        $(".map-event-training").hover(function() {
            mapOpener("King's Landing");
        }, function() {
            mapCloser();
        });

        $(".map-event-special").hover(function() {
            mapOpener("Old Town");
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