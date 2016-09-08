/**
 * Created by Administrator on 2016/9/7.
 */
//验证手机号
var tel = 18767802354;

var _reg_phone= /^0?1[3|4|5|8][0-9]\d{8}$/;

if (_reg_phone.test(tel)) {
    alert("号码正确~");
}else{
    alert("号码有误~");
}

//