var $ = require('jquery');

console.log('choosebank.js');

$(function() {

    $("#tabcard-cxk").bind("click", function() {
        $("#tabcard-cxk").addClass("active");
        $("#tabcard-xyk").removeClass("active");
        $("#card2").hide();
        $("#card1").show();
    });

    $("#tabcard-xyk").bind("click", function() {
        $("#tabcard-cxk").removeClass("active");
        $("#tabcard-xyk").addClass("active");
        $("#card2").show();
        $("#card1").hide();
    });
});
