/**
 * Created by Administrator on 2016/9/9.
 *

 */




$(function(){
    //    验证必填字段
//    要验证的
    $(".qtyh").click(function(){
        console.log("ssss")
        $(".qtyha").slideToggle()
    })


   $(".chinain").change(function(){
       if(!isNaN($(this).val())){
           china($(this).val(), $(".chinaout"))
       }
   });

//    阿拉伯数字转化为中文
    function china(chin,chout) {
        console.log("大小写");
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


    //点击表单验证
    $(".step_button,.step_button_s").click(function(){
        if($(".ysbbd").valid()){
            alert("提交成功")
        }else{
            alert("提交失败")
        }
    });

//表单验证
//    自定义预留信息
    jQuery.validator.addMethod("ggg", function(value, element) {
        return this.optional(element) || /[A-Za-z\u4e00-\u9fa5\u3002-\uff0c\d]/.test(value);
    }, "匹配english");


    $(".ysbbd").validate({
        errorPlacement:function(error,element){
            error.appendTo(element.parent())
        },
        rules: {
            firstname: "required",
            //密码
            pwd:{
                required: true
            },
            //新密码
            newpwd:{
                required: true
            },
            //重复密码
            cu_newpwd: {
                required: true,
                equalTo: "#newpwd"
            },
            //密码
            paypwd:{
                required: true
            },
            //新密码
            newpaypwd:{
                required: true
            },

            //重复密码
            cu_newpaypwd: {
                required: true,
                equalTo: "#newpwd"
            },
            //校正码
            jzm:{
                required: true
            },
            //充值金额
            czje:{
                required: true,
                number:true
            },
            //提现金额
            txje:{
                required: true,
                number:true
            },
            //收款方账户
            skfzh:{
                required: true
            },
            safe_qus:{
                required:true
            },
            //付款金额
            fkje:{
                required: true,
                number:true
            },
            //资金用途
            zjyt:{
                required: true,
                number:true
            },
            //预留信息
            ylxx:{
                required: true,
                maxlength: 16,
                ggg:true
            },
            email: {
                required: true,
                email: true
            },
            "topic[]": {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages: {
            firstname: "请输入您的名字",
            lastname: "请输入您的姓氏",
            username: {
                required: "请输入用户名",
                minlength: "用户名必需由两个字母组成"
            },
            //登录密码
            pwd:{
                required: "请输入密码"
            },
            //新密码
            newpwd:{
                required: "请输入新密码"
            },
            //修改支付密码
            paypwd:{
                required: "请输入支付密码"
            },
            //新密码
            newpaypwd:{
                required: "请输入新支付密码"
            },
            //重复新密码
            cu_newpwd: {
                required: "请输入新密码",
                equalTo: "两次密码输入不一致"
            },
            //重复新密码
            cu_newpaypwd: {
                required: "请输入新支付密码",
                equalTo: "两次密码输入不一致"
            },
            //校正码
            jzm:{
                required: "请输入校正码"
            },
            //充值金额
            czje:{
                required: "请输入充值金额",
                number:"请输入正确格式"
            },
            //提现金额
            txje:{
                required: "请输入充值金额",
                number:"请输入正确格式"
            },
            //付款金额
            fkje:{
                required: "请输入充值金额",
                number:"请输入正确格式"
            },
            //收款方账户
            skfzh:{
                required: "请输入收款方账户"
            },
            //资金用途
            zjyt:{
                required: "请输入资金用途"
            },
            safe_qus:{
                required:"请输入答案"
            },
            //预留信息
            ylxx:{
                required: "请输入预留信息",
                maxlength: "预留信息太长"
            },
            //资金用途
            email: "请输入一个正确的邮箱",
            agree: "请接受我们的声明",
            topic: "请选择两个主题"
        }

    })


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
        china(_zl,$(".chinaout"))
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

    //改变勾选框颜色
    $(".ck").find(":checkbox").click(function(){
        if($(this).prop("checked")){
            $(this).parents().siblings("td:last").children("input").css("background","white")
        }else{
            $(this).parents().siblings("td:last").children("input").css("background","#E3E3E3")
        }
    });

})







