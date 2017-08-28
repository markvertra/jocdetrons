var player1;
var imgSelection = 0;

$(document).ready(function(){

    $(".strength-setter").hover(function() {
        $(".attribute-info").css("display", "block");
        $(".attribute-info").text("Strength determines the power of your attacks.");
    }, function() {
        $(".attribute-info").css("display", "none");
        $(".attribute-info").text("");
    });

    $(".cunning-setter").hover(function() {
        $(".attribute-info").css("display", "block");
        $(".attribute-info").text("Cunning determines the power of your specials.");
    }, function() {
        $(".attribute-info").css("display", "none");
        $(".attribute-info").text("");
    });

    $(".stamina-setter").hover(function() {
        $(".attribute-info").css("display", "block");
        $(".attribute-info").text("Stamina determines your health and defence.");
    }, function() {
        $(".attribute-info").css("display", "none");
        $(".attribute-info").text("");
    });

    $(".charisma-setter").hover(function() {
        $(".attribute-info").css("display", "block");
        $(".attribute-info").text("Charisma determines the recharge speed of your specials.");
    }, function() {
        $(".attribute-info").css("display", "none");
        $(".attribute-info").text("");
    });

    $(".up-btn").on("click", function(){
        var points = parseInt($(".allocated-points").text());
        if (points < 25) {
            var relevantSpan = ($(this).parent().find('span'));
            var upper = parseInt(relevantSpan.text()) + 1;
            $(relevantSpan).text(upper);
            points++;
            $(".allocated-points").text(points);
         } else {
            flashRed(".allocated-points", "white"); 
            flashRed(".max-points", "white");
        }
    });

    $(".down-btn").on("click", function(){
        var relevantSpan = ($(this).parent().find('span'));
        var relevantPoints = parseInt(relevantSpan.text());
        if (relevantPoints > 1) {
            relevantPoints--;
            $(relevantSpan).text(relevantPoints);
            var points = parseInt($(".allocated-points").text()) - 1;
            $(".allocated-points").text(points);
        } else {
            flashRed(relevantSpan, "#9ACD32");
        }
    });

    $(".create-quit-btn").on("click", function(){
        $(".create-section").css("display", "none");
        $(".first-section").css("display", "block");
    });

    $(".create-btn").on("click", function(){
        if (isEmptyInput(".name-input")) {
            $(".name-input").css("border", "3px solid red");
        } else if (isEmptyInput(".house-input")) {
            $(".name-input").css("border", "none");
            $(".house-input").css("border", "3px solid red");
        } else {
            $(".name-input").css("border", "none");
            $(".house-input").css("border", "none");
            $(".create-section").css("display", "none");
            $(".map-section").css("display", "block");
            $(".map-display").css("display", "block");
            $(".affiliation-input").val();
            player1 = new Character($(".name-input").val(),
                                    $(".house-input").val(),
                                    $(".affiliation-input").val(),
                                    $(".img-one").css("background-image"),
                                    parseInt($(".strength-value").text()),
                                    parseInt($(".cunning-value").text()),
                                    parseInt($(".stamina-value").text()),
                                    parseInt($(".charisma-value").text()),
                                    swordAttack,
                                    shieldDefence,
                                    prayer,
                                    AFFILIATION_ABILITY[$(".affiliation-input").val()],
                                    AFFILIATION_ABILITY2[$(".affiliation-input").val()]
                );
            createReset();
            }
        });  


    $(".right-btn").on("click", function(){
        if (imgSelection < CHAR_IMAGE_URLS.length - 1) {
            imgSelection++;
            $(".img-one").css("background-image", "url(" + CHAR_IMAGE_URLS[imgSelection] + ")");
        } else {
            imgSelection = 0;
            $(".img-one").css("background-image", "url(" + CHAR_IMAGE_URLS[imgSelection] + ")");
        }
    });

    $(".left-btn").on("click", function(){
        if (imgSelection > 0) {
            imgSelection--;
            $(".img-one").css("background-image", "url(" + CHAR_IMAGE_URLS[imgSelection] + ")");
        } else {
            imgSelection = CHAR_IMAGE_URLS.length - 1;
            $(".img-one").css("background-image", "url(" + CHAR_IMAGE_URLS[imgSelection] + ")");
        }
    });

});

function isEmptyInput(input){
    if ($(input).val() == "") {
        return true;
    } else {
        return false;
    }
}

function createReset(){
    $(".name-input").val("");
    $(".house-input").val("");
    $(".affiliation-input").val("Stark");
    imgSelection = 0;
    $(".img-one").css("background-image", "url(" + CHAR_IMAGE_URLS[imgSelection] + ")");
    $(".strength-value").text("1");
    $(".cunning-value").text("1");
    $(".stamina-value").text("1");
    $(".charisma-value").text("1");
    $(".allocated-points").text("4");
}


function flashRed(element, originalColor, time=1000) {
    $(element).css("color", "red");
    setTimeout(function() {
    $(element).css("color", originalColor);
   }, time);
}