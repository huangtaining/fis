
//    点击更换内容
$(function(){


    function aanr(ii,oo,aa,ff){
        var _s=ii.html();
        aa.click(function(){
            console.log(_s)
        })

        //$(cc).on(ff,function(){
        //    $(oo).val($(ii).val())
        //})
    }
    aanr($("#ii"),$("#oo"),$("#tt"),'click');
    console.log("change")
})
