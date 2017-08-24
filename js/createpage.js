var player1;

$(document).ready(function(){

    

    $(".up-btn").on("click", function(){
        var relevantSpan = ($(this).parent().find('span'));
        var upper = parseInt(relevantSpan.text()) + 1;
        $(relevantSpan).text(upper);
        var points = parseInt($(".allocated-points").text()) + 1;
        $(".allocated-points").text(points);
    });

    $(".down-btn").on("click", function(){
        var relevantSpan = ($(this).parent().find('span'));
        var downer = parseInt(relevantSpan.text()) - 1;
        $(relevantSpan).text(downer);
        var points = parseInt($(".allocated-points").text()) - 1;
        $(".allocated-points").text(points);
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