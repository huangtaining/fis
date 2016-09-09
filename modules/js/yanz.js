/**
 * Created by Administrator on 2016/9/9.
 */
$(function(){
    var $ = require('jquery');

//    验证必填字段
    $(".step_button").click(function(){
        var _mul=$(".muuu").length;
        var a=0;
        for(var i=0;i<_mul;i++){
            if($(".muuu").eq(i).parent().siblings().children("input").val()){
                a++
            }
        }
        if(a==_mul){
            alert("验证通过")
        }else{
            alert("失败失败失败失败")
        }

    });

//    阿拉伯数字转化为中文
    function china(){
//        哪里需要转换大小写
        var _money=$(".money").val();
        function daxiaoxie(n) {
            var fraction = ['角','分'];
            var digit = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
            var unit = [['元','万','亿'],['','拾','佰','仟']];
            var head = n < 0?'欠':'';
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
            var _bigmoney=head + s.replace(/(零.)*零元/,'元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');

//              输出到哪里
            $(".china").val(_bigmoney);
        }
        daxiaoxie(_money)
    }
});