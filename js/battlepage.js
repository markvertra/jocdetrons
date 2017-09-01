
$(document).ready(function(){


    $(document).on("keyup", function(e) {
        if (playerOneTimer == 0 && battleOpen) {
            switch (e.keyCode) {
                case 83:
                    if (playerOneAbilityOne) {
                        timerReset();
                        cooldownBarOne(player1.cooldownTime - 2000);
                        attack(player1, player2);
                    }
                    break; 
                case 65:
                    if (playerOneAbilityTwo) {
                        timerReset();
                        cooldownBarTwo(player1.cooldownTime - 1000);
                        defenceBoost(player1);
                    }
                    break;
                case 68:
                    if (playerOneAbilityThree) {
                        timerReset();
                        cooldownBarThree(player1.cooldownTime);
                        prayer(player1);
                    }   
                    break;
                case 87:
                    if (playerOneAbilityFour) {
                        timerReset();
                        cooldownBarFour(player1.cooldownTime * 2);
                        specialAttack(player1, player2);
                    }
                    break;
            }
        }

    });

    $(".battle-quit-btn").on("click", function(){
        // $(".battle-section").css("display", "none");
        // $(".first-section").css("display", "block");
        // $(".game-over").css("display", "none");
        // battleOpen = false;
        // document.querySelector(".death").play();
        // healthResetter();
        document.location.reload();
    });

    $(".begin-battle-btn").on("click", function(){
        $(".battle-instructions-overview").css("display", "none");
        $(".battlefield").css("display", "flex");
        player1.battleInstructionsRead = true;
        setTimeout( function () {
            AI();
        }, 1000);
    });

    $(".battle-win-btn").on("click", function(){
        battleOpen = false;
        player1.battlesWon++;
        player1.enemiesDefeated++;
        healthResetter();
        $(".battle-won").css("display", "block");
        $(".map-event-training").css("display", "block");

        statsFiller();
        setTimeout(function() {
            $(".battle-won").css("display", "none");
            if (player1.battlesWon < 10) {
                $(".battle-section").css("display", "none");
                $(".map-section").css("display", "block");
                document.querySelector(".we-have-won").play();
            } else if (player1.battlesWon === 15) {
                document.querySelector(".drink").play();
                $(".battle-section").css("display", "none");
                $(".game-won").css("display", "block");
            } else {
                $(".battle-section").css("display", "none");
                $(".map-section").css("display", "block");
                $(".map-event-wall").css("display", "block");
                document.querySelector(".we-have-won").play();
            } 
        }, 5000);
    });

});

function timerReset() {
    $(".timer-box-player-one").css("color", "red");
    $(".timer-box-player-one").css("border-color", "red");
    playerOneTimer = 3;
    $(".timer-box-player-one").text(playerOneTimer);
    var countdown = setInterval(function () {
        playerOneTimer--;
        $(".timer-box-player-one").text(playerOneTimer);
        if (playerOneTimer == 0) {
            clearInterval(countdown);
        }
        }, 1000);
    var colorChange = setTimeout(function () {
        $(".timer-box-player-one").css("color", "white");
        $(".timer-box-player-one").css("border-color", "white");
    }, 3000);
    
}

function cooldownBarOne(cooldownTime = DEFAULT_COOLDOWN) {
    playerOneAbilityOne = false;
    $(".cooldown-bar-one-pone").css("background-color", "red");
    $(".cooldown-bar-one-pone").css("width", "0px");
    $(".cooldown-bar-one-pone").animate({width: 220}, cooldownTime);
    
    var barLoad = setTimeout(function() {
    $(".cooldown-bar-one-pone").css("background-color", "blue");
    playerOneAbilityOne = true;
    }, cooldownTime);
}

function cooldownBarTwo(cooldownTime = DEFAULT_COOLDOWN) {
    playerOneAbilityTwo = false;
    $(".cooldown-bar-two-pone").css("background-color", "red");
    $(".cooldown-bar-two-pone").css("width", "0px");
    $(".cooldown-bar-two-pone").animate({width: 220}, cooldownTime);
    
    var barLoad = setTimeout(function() {
    $(".cooldown-bar-two-pone").css("background-color", "blue");
    playerOneAbilityTwo = true;
    }, cooldownTime);
}

function cooldownBarThree(cooldownTime = DEFAULT_COOLDOWN) {
    playerOneAbilityThree = false;
    $(".cooldown-bar-three-pone").css("background-color", "red");
    $(".cooldown-bar-three-pone").css("width", "0px");
    $(".cooldown-bar-three-pone").animate({width: 220}, cooldownTime);
    
    var barLoad = setTimeout(function() {
    $(".cooldown-bar-three-pone").css("background-color", "blue");
    playerOneAbilityThree = true;
    }, cooldownTime);
}

function cooldownBarFour(cooldownTime = DEFAULT_COOLDOWN) {
    playerOneAbilityFour = false;
    $(".cooldown-bar-four-pone").css("background-color", "red");
    $(".cooldown-bar-four-pone").css("width", "0px");
    $(".cooldown-bar-four-pone").animate({width: 220}, cooldownTime);
    
    var barLoad = setTimeout(function() {
        $(".cooldown-bar-four-pone").css("background-color", "blue");
        playerOneAbilityFour = true;
    }, cooldownTime);
}

function healthResetter() {
    player1.currentHealth = player1.health;
    player2.currentHealth = player2.health;
    $(".battle-text").text("");
}

function updateScroll(){
    var element = document.querySelector(".battle-info-box");
    element.scrollTop = element.scrollHeight;
}