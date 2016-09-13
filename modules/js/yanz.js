/**
 * Created by Administrator on 2016/9/9.
 *

 */

var $ = require('jquery');
$(function(){
    //    验证必填字段
//    要验证的
    $(".step_button").click(function () {
//        获取必填字段长度
        var _mul = $(".must").length;
//        获取已经验证通过字段长度
        var _sul = $(".okk").length;
        console.log(_mul+"---"+_sul);
        if (_mul == _sul) {
            alert("验证通过")
        } else {
            alert("失败失败失败失败")
        }

    });

    function bigyz(){
        for (var i = 0; i < $(".yz").length; i++) {
            yanztype(i)
        }
        function yanztype(i) {
            $(".yz").eq(i).change(function () {
                console.log("change");
                var _yztype = $(".yz").eq(i).attr("data-yz");
                var _yzval = $(".yz").eq(i).val();
                switch (_yztype) {
                    case "num":
                    {
                        num(_yzval, i);

                    }
                        break;
                }
            })
        }
    }
    bigyz();
//       列出当前页面需要验证的input的长度

//       检验需要验证的input的内容的格式，

//    检验input格式
    function num(v, i) {
        var _yznum = new RegExp("^[0-9]*$");
        if (!_yznum.test(v)) {
            $(".yz").eq(i).siblings(".yzwww").html("格式错了乐乐乐乐");
            $(".yz").eq(i).parent().siblings("label").children("span").removeClass("okk");
        } else {
            $(".yz").eq(i).parent().siblings("label").children("span").addClass("okk");
            $(".yz").eq(i).siblings(".yzwww").html("");
            china()
        }
    }


//    阿拉伯数字转化为中文
    function china() {
//        哪里需要转换大小写
        var _money = $(".money").val() || $(".money").html();
        if(_money!=0){
            daxiaoxie(_money)
        }else{
            $(".china").val("");
        }

        function daxiaoxie(n) {
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
            $(".china").val(_bigmoney);
        }


    }
})
