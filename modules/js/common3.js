/**
 * Created by Administrator on 2016/10/8.
 */


$(function(){
    console.log("common3")

$("#myTab").on('click',function(){
    choosedata();
});
function choosedata(){
    for(var i=0;i<$(".recharge:visible span").length;i++){
        var _s=$(".recharge:visible span").eq(i).attr("id");
        choose(i);
        console.log(i)
    }
}
function choose(i){
    var _cd1=$(".recharge:visible input:first");
    var _cd2=$(".recharge:visible input:last");
    $(".recharge:visible span").eq(i).css("cursor","pointer").on('click',function(){
        var _rq=new Date();
//            function datas(b){
//                return [
//                    _b.getFullYear(),
//                    _b.getMonth(),
//                    _b.getDate()
//                ].join("-")
//            }
        var _1week=new Date(_rq.getTime()-1000*60*60*24*7);
        var _1month=new Date(_rq.getTime()-1000*60*60*24*30);
        var _3month=new Date(_rq.getTime()-1000*60*60*24*90);
        var _1year=new Date(_rq.getTime()-1000*60*60*24*365);
        if(i==0){
            _cd1.val(_rq.getFullYear()+"-"+(_rq.getMonth()+1)+"-"+_rq.getDate());
            _cd2.val(_rq.getFullYear()+"-"+(_rq.getMonth()+1)+"-"+_rq.getDate())
        }
        if(i==1){
            _cd1.val(_1week.getFullYear()+"-"+(_1week.getMonth()+1)+"-"+_1week.getDate());
            _cd2.val(_rq.getFullYear()+"-"+(_rq.getMonth()+1)+"-"+_rq.getDate())
        }
        if(i==2){
            _cd1.val(_1month.getFullYear()+"-"+(_1month.getMonth()+1)+"-"+_1month.getDate());
            _cd2.val(_rq.getFullYear()+"-"+(_rq.getMonth()+1)+"-"+_rq.getDate())
        }
        if(i==3){
            _cd1.val(_3month.getFullYear()+"-"+(_3month.getMonth()+1)+"-"+_3month.getDate());
            _cd2.val(_rq.getFullYear()+"-"+(_rq.getMonth()+1)+"-"+_rq.getDate())
        }
        if(i==4){
            _cd1.val(_1year.getFullYear()+"-"+(_1year.getMonth()+1)+"-"+_1year.getDate());
            _cd2.val(_rq.getFullYear()+"-"+(_rq.getMonth()+1)+"-"+_rq.getDate())
        }
    })
}

})