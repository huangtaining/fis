/**
 * Created by dell on 2016/9/16.
 */


$(".submit").click(function(){
    if($(".formsubmit").valid()){
        // alert("提交成功")
    }else{
        // alert("提交失败")
    }
});

$(".formsubmit").validate({
    errorPlacement:function(error,element){
        error.appendTo(element.parent())
    },
    rules: {
        emailnum:{
            required: true,
            // digits:true
        },
        telcheck:{
            required:true
        },
        paynum:{
            required:true
        },
        usename:{
            required:true,
            minlength: 2

        },
        zjlxtest:{
            required: true,
        },

        jungle:{
            required: true,
        },
        junglebank:{
            required: true,
        },
        cardcheck:{
            required: true,
            digits:true,
            rangelength:[6,32],

        },
        bankname:{
            required: true,
        },
        zhname:{
            required: true,
            maxlength:45
        },
    },

messages: {
    emailnum:{
        required: "请输入激活码",
        // digits:"请输入数字"
    },
    telcheck:{
        required:"请输入手机验证码"
    },
    paynum:{
        required:"请输入支付密码"
    },
    usename:{
        required: "请输入用户名",
        minlength: "用户名必需由两个字母组成"
    },
    zjlxtest:{
        required: "请选择证件类型",

    },
    jungle:{
        required: "请选择城市",

    },
    junglebank:{
        required: "请选择城市",

    },
    cardcheck:{
        required: "请输入银行卡号",
        digits:"请正确的银行卡号",
        rangelength:"请正确的银行卡号"
    },
    bankname:{
        required: "请填写开户行名称",

    },
    zhname:{
        required: "请填写开户行名称",
        maxlength:"请输入正确的格式"
    },
    },




})