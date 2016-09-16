/**
 * Created by Administrator on 2016/9/16.
 */


$(".step_button,.step_button_s").click(function(){
    if($(".ysbbd").valid()){
        alert("提交成功")
    }else{
        alert("提交失败")
    }
});

$(".ysbbd").validate({
    errorPlacement:function(error,element){
        error.appendTo(element.parent())
    },
    rules: {
        firstname: "required",
        lastname: "required",
        //修改密码
        pwd:{
            required: true
        },
        newpwd:{
            required: true
        },
        cu_newpwd: {
            required: true,
            equalTo: "#newpwd"
        },
        jzm:{
            required: true
        },
        ss:{

        },
        //充值金额
        czje:{
            required: true,
            number:true
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
        //修改密码
        pwd:{
            required: "请输入密码"
        },
        newpwd:{
            required: "请输入新密码"
        },
        cu_newpwd: {
            required: "请输入新密码",
            equalTo: "两次密码输入不一致"
        },
        jzm:{
            required: "请输入校正码"
        },
        //充值金额
        czje:{
            required: "请输入充值金额",
            number:"请输入正确格式"
        },
        password: {
            required: "请输入密码",
            minlength: "密码长度不能小于 5 个字母"
        },
        email: "请输入一个正确的邮箱",
        agree: "请接受我们的声明",
        topic: "请选择两个主题"
    }

})
