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




