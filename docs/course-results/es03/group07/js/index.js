$(function (){
    let n=5;
    let pos=[];
    let pre;

    $(".ye03").click(function (){
       indexClick(1);
       /*console.log("?");*/
    });




    //数据单位转换

    for(let i=0;i<$("video,.container div").length;i++){
        let obj=$("video,.container div").eq(i)
        let w=obj.width();
        w=parseInt(w)/19.2;
        obj.css("width",w+"vw");

        let h=obj.height();
        h=parseInt(h)/19.2;
        obj.css("height",h+"vw");

        let l;
        if(obj.css("left")===undefined) l="0";
        else l=obj.css("left");
        l=parseInt(l)/19.2;
        obj.css("left",l+"vw");

        let t;
        if(obj.css("top")===undefined) t="0";
        else t=obj.css("top");
        t=parseInt(t)/19.2;
        obj.css("top",t+"vw");
    }

    /*导航栏交互*/
    $("#index0").css("opacity","1");
    let next=0;
    function indexClick(i) {
        if(isNaN(i)) i=i.data.d;
        let index_offset=$(".ye"+i).position().top;
        console.log(index_offset);
        $("body,html").animate({
            scrollTop:index_offset
        },800);
    }
    for(let m=1;m<=n;m++){
        /*jq实现有参事件的绑定*/
        $("#index"+m).bind("click",{d:m},indexClick);
        /*$("#index"+m).on("click",{d:m},indexClick);*/

        pos[m]=$(".ye"+m).position().top-10;
    }
    console.log(pos);
    /*滚动响应效果*/
    $(window).scroll(function (){
        let exchange=false;
        let scrollTop=$(window).scrollTop();
        for(let i=0;i<n;i++){
            if(scrollTop>=pos[i]&&scrollTop<pos[i+1]){
                pre=next;
                next=i;
                exchange=true;
                break;
            }
        }
        if(scrollTop>pos[n]){
            pre=next;
            next=n;
            exchange=true;
        }
        if(exchange){
            $("#index"+pre).css("opacity","0.5");
            $("#index"+next).css("opacity","1");
        }
    });
    /*弹幕动画效果*/
    let l=[];
    let w=[];
    for(let i=1;i<=3;i++){
        let obj=$(".ye44"+i);
        l[i]=parseInt(obj.css("left"));
        w[i]=parseInt(obj.width());
        l[i]=l[i]/parseInt($(window).width())*100;
        w[i]=w[i]/parseInt($(window).width())*100;
    }

    function myAnimate(i){
        $(".ye44"+i).css("left",100+l[i]+"vw");
        let le=15-w[i]+"vw";
        $(".ye44"+i).animate({
            left:le
        },10000+100*(l[i]+w[i]),"linear",function (){
            if(i==2){
                myAnimate(1);
                myAnimate(2);
                myAnimate(3);
            }
        });
    }
    myAnimate(1);
    myAnimate(2);
    myAnimate(3);
});