var trainingGame; // DELETE AFTER TESTING

var justClickedJoffrey = false;
var justClickedGoodie = false;

$(document).ready(function(){

    trainingGame = new TrainingGame(); // DELETE AFTER TESTING

    $(".training-continue-btn").on("click", function() {
        $(".training-instructions-container").css("display", "none");
        $(".training-field").css("display", "block");
        $(".training-time-left").text(trainingGame.time);
        joffreyAutomated();
        goodieAutomated();
    });

    $(".training-quit-btn").on("click", function() {
        $(".training-section").css("display", "none");
        $(".training-field").css("display", "none");
        $(".map-section").css("display", "block");
    });

    $(".joffrey-face").on("click", function() {
        if (justClickedJoffrey === false) {
            trainingGame._joffSlapped();
        }
        justClickedJoffrey = true;
        $(".joffrey-face").css("background-image", 'url("img/training/joffreySlappedFace.gif")');
        document.querySelector(".slap").play();
        $(".joffrey-slaps-text").text(trainingGame.joffreySlaps);
        if (trainingGame._winChecker()) {

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
            
        }
        setTimeout( function() {
            justClickedgoodie = false;
            document.querySelector(".oh-my").play();
            $(".goodie-face").css("display", "none");
            $(".goodie-face").css("background-image", 'url("img/training/samFace.gif")');
        } , 700);
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
    if (trainingGame.timeLeft == 0) {
        clearInterval(joffreyAuto);
    } else if ($(".joffrey-face").css("display") == "none") {
            if (Math.random() > 0.8) {
                positionRandomiser(".joffrey-face");
                joffreyTimer();
                
            } 
        }
}, ((trainingGame.timePerJoffrey - trainingGame.difficulty / 2 + (Math.random() * trainingGame.difficulty)) * 300));
}

function goodieAutomated () {
    var goodieAuto = setInterval(function () {
        if (trainingGame.timeLeft == 0) {
            clearInterval(goodieAuto);
        } else if ($(".goodie-face").css("display") == "none") {
                if (Math.random() > 0.8) {
                    positionRandomiser (".goodie-face");
                    goodieTimer();
                } 
            }
    }, ((trainingGame.timePerGoodie - trainingGame.difficulty / 2 + (Math.random() * trainingGame.difficulty)) * 300));
}

function positionRandomiser (item) {
   $(item).css("left", Math.random() * 90 + "%");
   $(item).css("top", Math.random() * 80 + "%");
}
