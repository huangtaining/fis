var $ = require('jquery');

console.log('choosebank.js');

$(function() {

    $("#tabcard-cxk").bind("click", function() {

        $("#card2").hide();
        $("#card1").show();
    });

    $("#tabcard-xyk").bind("click", function() {
        $("#card2").show();
        $("#card1").hide();
    });
});
