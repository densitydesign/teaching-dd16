$(function (){
    function myAnimate(){
        $(".ye44").css("left","100%");
        $(".ye44").animate({
            left:"-100%"
        },15000,"linear",myAnimate);
    }
    myAnimate();
    /*动画循环往复*/
    /*
    js中函数参数如果是”函数名+()“，则会先执行函数，然后将返回值作为真正的参数。
    相反参数没加“（）”则会被作为一个函数块指针，不先执行。
    在这里我们就可以利用这一特点实现setInterval第一次无延迟执行
    */
    /*let mySTVal=window.setInterval(myAnimate(),15000);*/
});