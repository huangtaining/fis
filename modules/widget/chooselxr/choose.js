/**
 * Created by Administrator on 2016/9/30.
 */
var $ = require('jquery');
console.log("sss");
$("#bq1").click(function(){
    console.log("sss");
    $(".dxtit").removeClass('active');
    $(this).addClass('active');
    $(".m table").hide();
    $("#ysb").show()
});
$("#bq2").click(function(){
    console.log("ccc");
    $(".dxtit").removeClass('active');
    $(this).addClass('active');
    $(".m table").hide();
    $("#yh").show()
});