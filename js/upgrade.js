var answer;

$(document).ready(function(){  

    $(".upgrade-map-return-btn").on("click", function() {
        $(".upgrade-section").css("display", "none");
        $(".map-section").css("display", "block");
    });

    $(".upgrade-instructions-quit-btn").on("click", function() {
        $(".upgrade-instructions").css("display", "none");
        $(".upgrade-question-area").css("display", "block");
        upgradeGame = new UpgradeGame();
        upgradeTimer();
        answer = newQuestion();
    });

    $(".upgrade-answer").on("click", function() {
        if (answer == $(this).text()) {
            upgradeGame.answersCorrect++;
            $(".upgrade-correct-text").text(upgradeGame.answersCorrect);
        } else {
            upgradeGame.answersWrong++;
            $(".upgrade-wrong-text").text(upgradeGame.answersWrong);
        }
        if (upgradeGame._winChecker() || upgradeGame._lossChecker()) {
            console.log("win");
        } else {
            answer = newQuestion();
            upgradeGame.time += 10;
        }
        
    });
});

function upgradeManaged () {
    player1.specialAttack = player1.specialAttackUpgrade;
}

function newQuestion() {
    question = selectQuestion(upgradeQuestions);
    $(".upgrade-question-bar").text(question.question1);
    $(".upgrade-answer-one").text(question.answer1A);
    $(".upgrade-answer-two").text(question.answer1B);
    $(".upgrade-answer-three").text(question.answer1C);
    $(".upgrade-answer-four").text(question.answer1D);
    $(".upgrade-picture-frame").css("background-image", "url(" + question.image + ")");
    return question.correctAnswer1;
}

function upgradeTimer () {
    var timeLeft = setInterval( function() {
    if (upgradeGame.time == 0) {
        $(".upgrade-time-left-text").text("Time up");
        clearInterval(timeLeft);
    } else if (upgradeGame._winChecker()) {
        $(".upgrade-time-left-text").text("You win!");
        clearInterval(timeLeft);
        upgradeManaged();
    } else if (upgradeGame._lossChecker()) {  
        $(".upgrade-time-left-text").text("You lose!");
        clearInterval(timeLeft);
    } else {
        upgradeGame.time--;
        $(".upgrade-time-left-text").text(upgradeGame.time);
        }}, 1000);
}