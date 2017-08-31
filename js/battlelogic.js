
function attack(attacker, defender){
    attackPower = Math.floor((attacker.attack - defender.defence) * (Math.random() + 0.5));
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
    var defenceMultiplier = (1.5 + Math.random() - 0.5);
    attacker.defence *= defenceMultiplier;
    healthCheck();
    setTimeout(function(){
        attacker.defence *= (1 / defenceMultiplier);
        attacker.defence = Math.round(attacker.defence);
    }, 5000);
    $(".battle-text").append("<li>" + attacker.name + " " + attacker.surname + " has increased defence by 50% for 5 seconds.</li>");
}

function prayer(attacker){
    document.querySelector(".night-is-dark").play();
    var attackMultiplier = (1.5 + Math.random() - 0.5);
    attacker.attack *= attackMultiplier;
    healthCheck();
    setTimeout(function(){
        attacker.attack *= (1 / attackMultiplier);
        attacker.attack = Math.round(attacker.attack);
    }, 5000);
    $(".battle-text").append("<li>" + attacker.name + " " + attacker.surname + " has increased attack by 50% for 5 seconds.</li>");
}

function specialAttack(attacker, defender){
    attacker.specialsUsed++;
    attackPower = Math.floor((attacker.special - defender.defence) * attacker.specialAttack["power"]); 
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
        $(".battle-won").css("display", "block");
        setTimeout( function(){
            $(".battle-win-btn").trigger("click");
        }, 5000);
        return false;
    }
    return true;
}

function randomMoveSelector() {
   return Math.floor(Math.random() * 3.5);
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
