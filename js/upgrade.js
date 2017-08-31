var answer;

$(document).ready(function(){  

    $(".upgrade-map-return-btn").on("click", function() {
        $(".upgrade-question-area-wrapper").css("display", "block");
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
        if (answer.correctAnswer1 == $(this).text()) {
            upgradeGame.answersCorrect++;
            $(".upgrade-correct-text").text(upgradeGame.answersCorrect);
            squareResetter(PICTURE_SCREENS);
        } else {
            upgradeGame.answersWrong++;
            $(".upgrade-wrong-text").text(upgradeGame.answersWrong);
            squareResetter(PICTURE_SCREENS);
            document.querySelector(".you-idiot").play();
        }
        if (upgradeGame._winChecker() || upgradeGame._lossChecker()) {
            squareResetter(PICTURE_SCREENS);
        } else {
            answer = newQuestion();
            upgradeGame.time += 12;
        }
        
    });
});

function upgradeManaged () {
    player1.specialAttack = player1.specialAttackUpgrade;
}

function newQuestion() {
    question = selectRandomElement(upgradeGame.upgradeQuestions);
    $(".upgrade-question-bar").text(question.question1);
    $(".upgrade-answer-one").text(question.answer1A);
    $(".upgrade-answer-two").text(question.answer1B);
    $(".upgrade-answer-three").text(question.answer1C);
    $(".upgrade-answer-four").text(question.answer1D);
    $(".upgrade-picture-frame").css("background-image", "url(" + question.image + ")");
    return question;
}

// makes a square go clear

function turnToClear (element) {
    $(element).css("background-color", "rgba(0,0,0,0)");
}

// makes a random square go clear 

function randomClear (array) {
    turnToClear(selectRandomElement(array));
}
// resets all squares

function squareResetter (array) {
    array.forEach(function(element) {
        $(element).css("background-color", "black");
    });
}

function upgradeTimer () {
    var timeLeft = setInterval( function() {
    if (upgradeGame.time == 0) {
        $(".upgrade-time-left-text").text("Time up");
        $(".upgrade-question-area-wrapper").css("display", "none");
        clearInterval(timeLeft);
    } else if (upgradeGame._winChecker()) {
        $(".upgrade-time-left-text").text("You win!");
        $(".upgrade-question-area-wrapper").css("display", "none");
        document.querySelector(".drink-and-know").play();
        clearInterval(timeLeft);
        $(".upgrade-well-done-info").css("display", "block");
        upgradeManaged();
    } else if (upgradeGame._lossChecker()) {  
        $(".upgrade-time-left-text").text("You lose!");
        $(".upgrade-question-area-wrapper").css("display", "none");
        clearInterval(timeLeft);
    } else {
        upgradeGame.time--;
        randomClear(answer.screens);
        $(".upgrade-time-left-text").text(upgradeGame.time);
        }}, 1000);
}