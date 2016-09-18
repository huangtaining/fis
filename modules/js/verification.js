/**
 * Created by dell on 2016/9/16.
 */
$(".submit").click(function() {
    if ($(".formsubmit").valid()) {
        // alert("提交成功")
    } else {
        // alert("提交失败")
    }
});

//    自定义预留信息
jQuery.validator.addMethod("hanzm", function(value, element) {
    return this.optional(element) || /^[A-Za-z]{0,45}$/.test(value) || /^[\u4e00-\u9fa5]{0,15}$/.test(value);
}, "匹配english");

$(".formsubmit").validate({
    errorPlacement: function(error, element) {
        error.appendTo(element.parent())
    },
    rules: {
        emailnum: {
            required: true,
            // digits:true
        },
        telcheck: {
            required: true
        },
        paynum: {
            required: true
        },
        usename: {
            required: true,
            minlength: 2
        },
        zjlxtest: {
            required: true,
        },
        jungle: {
            required: true,
        },
        junglebank: {
            required: true,
        },
        cardcheck: {
            required: true,
            digits: true,
            rangelength: [6, 32],
        },
        bankname: {
            required: true,
        },
        zhname: {
            required: true,
            hanzm: true
        },
        // 我要收款模块
        ddlQuestion: {
            required: true,
            minlength: 2
        },
        moneycheck: {
            required: true,
            digits: true
        },
        moneyuse: {
            required: true,
            maxlength: 85
        },
    },
    messages: {
        emailnum: {
            required: "请输入激活码",
            // digits:"请输入数字"
        },
        telcheck: {
            required: "请输入手机验证码"
        },
        paynum: {
            required: "请输入支付密码"
        },
        usename: {
            required: "请输入用户名",
            minlength: "用户名必需由两个字母组成"
        },
        zjlxtest: {
            required: "请选择证件类型",
        },
        jungle: {
            required: "请选择城市",
        },
        junglebank: {
            required: "请选择城市",
        },
        cardcheck: {
            required: "请输入银行卡号",
            digits: "请正确的银行卡号",
            rangelength: "请正确的银行卡号"
        },
        bankname: {
            required: "请填写开户行名称",
        },
        zhname: {
            required: "请填写开户行名称",
            hanzm: "请输入正确的格式"
        },
        // 我要收款模块
        ddlQuestion: {
            required: "请填写开户行名称",
            minlength: "请输入正确的格式"
        },
        moneycheck: {
            required: "请输入收款金额",
            digits: "请输入正确的格式"
        },
        moneyuse: {
            required: "请填写资金用途",
            maxlength: "已超过85个字符"
        },
    },
})；
