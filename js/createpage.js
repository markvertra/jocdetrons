
$(document).ready(function(){

    $(".up-btn").on("click", function(){
        var relevantDiv = ($(this).parent());
        console.log(relevantDiv);
        // var strengthUpper = parseInt($(".strength-value").text()) + 1;
        // $(".strength-value").text(strengthUpper);
        var points = parseInt($(".allocated-points").text()) + 1;
        $(".allocated-points").text(points);
    });

    $(".strength-down-button").on("click", function(){
        var strengthDown = parseInt($(".strength-value").text()) - 1;
        $(".strength-value").text(strengthDown);
        var points = parseInt($(".allocated-points").text()) - 1;
        $(".allocated-points").text(points);
    });

    $(".coward-btn").on("click", function(){
        $(".create-section").css("display", "none");
        $(".first-section").css("display", "block");
    });

    $(".create-btn").on("click", function(){
        alert("Character creation in testing");
    });
});