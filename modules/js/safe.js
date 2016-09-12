/**
 * Created by Administrator on 2016/9/12.
 */
var $ = require('jquery');
var _st=1;
var _gt=1;
$(".masage thead input").eq(0).click(function(){
    _st*=-1
    console.log(_st)
        if(_st==-1){
            $(".masage tbody input:even").removeAttr("checked");
      }else if(_st==1){
            $(".masage tbody input:even").attr("checked",true)
      }
})
$(".masage thead input").eq(1).click(function(){
    _gt*=-1
    if(_gt==-1){
        $(".masage tbody input:odd").removeAttr("checked");
    }else if (_gt==1){
        $(".masage tbody input:odd").attr("checked",'true');
    }
})
