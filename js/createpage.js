var player1;

$(document).ready(function(){

    

    $(".up-btn").on("click", function(){
        var points = parseInt($(".allocated-points").text());
        if (points < 25) {
            var relevantSpan = ($(this).parent().find('span'));
            var upper = parseInt(relevantSpan.text()) + 1;
            $(relevantSpan).text(upper);
            points++;
            $(".allocated-points").text(points);
         } else {
            alert("Can't pass maximum points");
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
            alert("Can't go below 0");
        }
    });

    $(".coward-btn").on("click", function(){
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
            player1 = new Character($(".name-input").val(),
                                    $(".house-input").val(),
                                    "IMAGE",
                                    parseInt($(".strength-value").text()),
                                    parseInt($(".cunning-value").text()),
                                    parseInt($(".stamina-value").text()),
                                    parseInt($(".charisma-value").text())
                );
            createReset();
            }
        });  


    $(".right-btn").on("click", function(){
        $(".img-one").css("display", "none");
        $(".img-two").css("display", "block");
    });

    $(".left-btn").on("click", function(){
        $(".img-two").css("display", "none");
        $(".img-one").css("display", "block");
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
    $(".strength-value").text("1");
    $(".cunning-value").text("1");
    $(".stamina-value").text("1");
    $(".charisma-value").text("1");
    $(".allocated-points").text("4");
}