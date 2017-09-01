
var justClickedJoffrey = false;
var justClickedGoodie = false;

$(document).ready(function(){

    $(".training-continue-btn").on("click", function() {
        $(".training-instructions-container").css("display", "none");
        $(".training-field").css("display", "block");
        $(".training-time-left").text(trainingGame.time);
        joffreyAutomated();
        goodieAutomated();
        trainingTimer();
    });

    $(".training-quit-btn").on("click", function() {
        statsFiller();
        if (!trainingGame._winChecker()) {
            $(".training-section").css("display", "none");
            $(".training-field").css("display", "none");
            $(".map-section").css("display", "block");
        } else {
            $(".stats-boost-screen").css("display", "flex");
        }});

    $(".joffrey-face").on("click", function() {
        if (justClickedJoffrey === false) {
            trainingGame._joffSlapped();
        }
        justClickedJoffrey = true;
        $(".joffrey-face").css("background-image", 'url("img/training/joffreySlappedFace.gif")');
        document.querySelector(".slap").play();
        $(".joffrey-slaps-text").text(trainingGame.joffreySlaps);
        if (trainingGame._winChecker()) {
            $(".training-quit-btn").text("Boost Stats");
            $(".training-time-left").text("You win!");
        }
        setTimeout( function() {
            document.querySelector(".i-am-the-king").play();
            justClickedJoffrey = false;
            $(".joffrey-face").css("display", "none");
            $(".joffrey-face").css("background-image", 'url("img/training/joffreyFace.gif")');
        } , 700);
        
    });

    $(".goodie-face").on("click", function() {
        if (justClickedGoodie === false) {
            trainingGame._goodieSlapped();
        }
        justClickedGoodie = true;
        $(".goodie-face").css("background-image", 'url("img/training/samCryingFace.gif")');
        document.querySelector(".slap").play();
        $(".goodie-slaps-text").text(trainingGame.goodieSlaps);
        if (trainingGame._lossChecker()) {
            $(".training-time-left").text("You Lose!");
        }
        setTimeout( function() {
            justClickedgoodie = false;
            document.querySelector(".oh-my").play();
            $(".goodie-face").css("display", "none");
            $(".goodie-face").css("background-image", 'url("img/training/samFace.gif")');
        } , 700);
    });

    $(".boost-button").on("click", function() {
        var buttonText = $(this).text();
        $(".stats-boost-screen").css("display", "none");
        $(".training-time-left").text("Boosted!");
        $(".training-quit-btn").text("Quit Training");
        document.querySelector(".dragon-roar").play();
        trainingGame.joffreySlaps++;
        if (buttonText.indexOf("Strength") != -1) {
            player1.strength += 2;
        } else if (buttonText.indexOf("Cunning") != -1) {
            player1.cunning += 2;
        } else if (buttonText.indexOf("Stamina") != -1) {
            player1.stamina += 2;
        } else if (buttonText.indexOf("Charisma") != -1) {
            player1.charisma += 2;
        }
    });
});

function joffreyTimer () {
    $(".joffrey-face").css("display", "block");
    setTimeout(function () {
        $(".joffrey-face").css("display", "none");
    }, 500 * trainingGame.difficulty);
}

function goodieTimer () {
        $(".goodie-face").css("display", "block");
        setTimeout(function() {
        $(".goodie-face").css("display", "none");
    }, 500 * trainingGame.difficulty);
}

function joffreyAutomated () {
    var joffreyAuto = setInterval(function () {
    if (trainingGame.time == 0 || trainingGame._winChecker()) {
        clearInterval(joffreyAuto);
    } else if ($(".joffrey-face").css("display") == "none") {
            if (Math.random() > 0.6) {
                positionRandomiser(".joffrey-face");
                joffreyTimer();
                
            } 
        }
    }, this.timePerJoffrey * 100);
}

function goodieAutomated () {
    var goodieAuto = setInterval(function () {
        if (trainingGame.time == 0 || trainingGame._winChecker()) {
            clearInterval(goodieAuto);
        } else if ($(".goodie-face").css("display") == "none") {
                if (Math.random() > 0.8) {
                    positionRandomiser (".goodie-face");
                    goodieTimer();
                } 
            }
    }, this.timePerGoodie * 100);
}

function positionRandomiser (item) {
   $(item).css("left", Math.random() * 90 + "%");
   $(item).css("top", Math.random() * 80 + "%");
}

function trainingTimer () {
    var timeLeft = setInterval( function() {
    if (trainingGame.time == 0) {
        $(".training-time-left").text("Time up");
        clearInterval(timeLeft);
    } else if (trainingGame._winChecker()) {
        $(".training-time-left").text("You win!");
        clearInterval(timeLeft);
    } else {
        trainingGame.time--;
        $(".training-time-left").text(trainingGame.time);
        }}, 1000);
}