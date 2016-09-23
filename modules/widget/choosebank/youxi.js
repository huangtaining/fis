/**
 * Created by Administrator on 2016/9/23.
 */
var $ = require('jquery');

console.log('youxi.js');



$(function() {

    $("#yx-kmcz").bind("click", function() {
        $(".card_sp").removeClass("active");
        $(this).addClass("active");
    });

    $("#yx-zc").bind("click", function() {
        $(".card_sp").removeClass("active");
        $(this).addClass("active");
    });

});