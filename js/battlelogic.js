
function attack(attacker, defender){
    attackPower = attacker.attack - defender.defence;
    document.querySelector(".sword-attack").play();
    if (attackPower > 0) {
        defender.currentHealth -= attackPower;
        healthCheck();
        $(".battle-text").append("<li>" + attacker.name + " " + attacker.surname + " has damaged " + defender.name + " " + defender.surname + " for " + attackPower + " points of damage.</li>");
    } else {
        $(".battle-text").append("<li>" + attacker.name + " " + attacker.surname + " did no damage.<li>");
    }
}

function defenceBoost(attacker){
    document.querySelector(".shields").play();
    attacker.defence *= 1.5;
    setTimeout(function(){
        attacker.defence *= (2 / 3);
    }, attacker.cooldownTime);
    $(".battle-text").append("<li>" + attacker.name + " " + attacker.surname + " has increased defence by 50% for " + parseFloat(attacker.cooldownTime / 1000) + " seconds.</li>");
}

function prayer(attacker){
    document.querySelector(".night-is-dark").play();
    attacker.attack *= 1.5;
    setTimeout(function(){
        attacker.attack *= (2 / 3);
    }, attacker.cooldownTime);
    $(".battle-text").append("<li>" + attacker.name + " " + attacker.surname + " has increased attack by 50% for " + parseFloat(attacker.cooldownTime / 1000) + " seconds.</li>");
}

function specialAttack(attacker, defender){
    attacker.specialsUsed++;
    attackPower = attacker.special - defender.defence; 
    document.querySelector(attacker.specialAttack["soundEffect"]).play();
    if (attackPower > 0) {
        defender.currentHealth -= attackPower;
        $(".battle-text").append("<li>" + attacker.name + " " + attacker.surname + " has damaged " + defender.name + " " + defender.surname + " for " + attackPower + " points of special damage.</li>");
        healthCheck();
    } else {
        $(".battle-text").append("<li>" + attacker.name + " " + attacker.surname + " did no damage.</li>");
    }
    
}

function healthCheck(attacker){
    $(".player-one-health-number").text(player1.currentHealth);
    $(".player-two-health-number").text(player2.currentHealth);
    updateScroll();
    if (player1.currentHealth <= 0) {
        $(".battle-section").css("display", "none");
        $(".game-over").css("display", "block");
        document.querySelector(".my-watch-has-ended").play();
        setTimeout(function() {
            $(".battle-quit-btn").trigger("click");
        }, 5000);
        return false;
    } else if (player2.currentHealth <= 0) {
        $(".battle-section").css("display", "none");
        $(".battle-won").css("display", "none");
        setTimeout( function(){
            $(".battle-win-btn").trigger("click");
        }, 5000);
        return false;
    }
    return true;
}

function randomMoveSelector() {
   return Math.floor(Math.random() * 4);
}

function AI() {
    var mover = setInterval( function() {
        num = randomMoveSelector();
        switch (num) {
            case (0):
                attack(player2, player1);
                if (!healthCheck() || !battleOpen) {
                    clearInterval(mover);
                }
                break;
            case (1):
                defenceBoost(player2);
                if (!healthCheck() || !battleOpen) {
                    clearInterval(mover);
                }
                break;
            case (2):
                prayer(player2);
                if (!healthCheck() || !battleOpen) {
                    clearInterval(mover);
                }
                break;
            case (3):
                specialAttack(player2, player1);
                if (!healthCheck() || !battleOpen) {
                    clearInterval(mover);
                }
                break;
        }
    }, 3500);
    

}
