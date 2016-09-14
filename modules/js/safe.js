/**
 * Created by Administrator on 2016/9/12.
 */
var $ = require('jquery');
var _st=1;
var _gt=1;
$(".masage thead input").eq(0).click(function(){
    _st*=-1
        if(_st==-1){
            $(".masage tbody input:even").prop("checked",false);
      }else if(_st==1){
            $(".masage tbody input:even").prop("checked",true);
      }
});
$(".masage thead input").eq(1).click(function(){
    _gt*=-1
    if(_gt==-1){
        $(".masage tbody input:odd").prop("checked",false);
    }else if (_gt==1){
        $(".masage tbody input:odd").prop("checked",true);
    }
});

$(".openlxr").click(function(){
})

//改变勾选框颜色
$(".ck").find(":checkbox").click(function(){
    if($(this).prop("checked")){
        $(this).parents().siblings("td:last").children("input").css("background","white")
    }else{
        $(this).parents().siblings("td:last").children("input").css("background","#E3E3E3")
    }
});
//选择多个联系人并结算
$(".modalqd").click(function(){
    var _zl=0;
    var _dl="";

    var _zp=$(".ck").find("input:checked").length;
    for(var i=0;i<_zp;i++){
        _zl+=parseInt($(".ck").find("input:checked").parents().siblings("td:last").children("input").val())
    }
    $(".multipeo").html(_zp);
    $(".multimoney").html(_zl);
    china(_zl,$(".china"))
});

//选择联系人全选
var _ct=-1;
$(".xdrfk thead input:checkbox").click(function(){
    _ct*=-1;
    if(_ct==-1){
        $(".xdrfk tbody input:checkbox").prop("checked",false);
    }else if(_ct==1){
        $(".xdrfk tbody input:checkbox").prop("checked",true);
    }
    if($(this).prop("checked")){
        $(".lxrje").css("background","white")
    }else{
        $(".lxrje").css("background","#E3E3E3")
    }
});

//    阿拉伯数字转化为中文
function china(chin,chout) {
    console.log("大小写")
//        哪里需要转换大小写
    if(chin!=0){
        daxiaoxie(chin,chout)
    }else{
        chout.val("");
    }

    function daxiaoxie(n,chout) {
        var fraction = ['角', '分'];
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
        var head = n < 0 ? '欠' : '';
        n = Math.abs(n);
        var s = '';
        for (var i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (var i = 0; i < unit[0].length && n > 0; i++) {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        var _bigmoney = head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
//              输出到哪里
        (chout.val(_bigmoney))&&(chout.html(_bigmoney));
    }


}
