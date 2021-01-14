'use strict';

$(function () {
    var mytext=
        [
            [
                ['Enlarge eyes','Exaggerated and funny eye makeup','Intense pupil colors','Decoration of glasses and sunglasses'],
                ['Graceful and lovely cheek makeup','Delicate and thin face','Funny and exaggerated facial change'],
                ['Special, funny and cartoon','Dark Lip color (only female)','Effects with beard (only male)',' Hair color changes ']
            ]
            ,
            [
                ['Charming and dimensional eye makeup (main female)','Significant changes of pupils','Natural eye makeup','Korean and Western style eye makeup (only female)','Chinese retro eye makeup (only female)'],
                ['Dimensional facial shape','Smooth and small facial shape','Red clusher in cheeks (only female)','Check makeup with traditional Chinese elements'],
                ['Thick lip','Special and cartoon (hairstyle)','Role-playing']
            ]
        ];
    var bt1=0;
    var bt2=0;
    var index=[[0,0,0],[0,0,0]];
    var time=200;
    var imgOut=function () {
        $('.img1').fadeOut(time);
        $('.mid').fadeOut(time);
        $('.img2').fadeOut(time);
    };
    var imgIn=function () {
        setTimeout(function () {
            $('.img1').prop('src','img/small'+bt1+bt2+index[bt1][bt2]+'.png').fadeIn(time);
            $('.mid').text(mytext[bt1][bt2][index[bt1][bt2]]).fadeIn(time);
            $('.img2').prop('src','img/big'+bt1+bt2+index[bt1][bt2]+'.png').fadeIn(time);
        },time);
    };
    var tr1click=function() {
        imgOut();
        index[bt1][bt2]--;
        index[bt1][bt2]=(index[bt1][bt2]+mytext[bt1][bt2].length)%mytext[bt1][bt2].length;
        imgIn();
    };
    var tr2click=function(){
        imgOut();
        index[bt1][bt2]++;
        index[bt1][bt2]=(index[bt1][bt2]+mytext[bt1][bt2].length)%mytext[bt1][bt2].length;
        imgIn();
    };
    $(".tr1").on("click",tr1click);//jq绑定函数对象的写法
    $(".tr2").on("click",tr2click);
    var lbclick=function(i){
        $('#lb'+bt1).css('backgroundColor','black').css('color','white');
        imgOut();
        bt1=i;
        imgIn();
        $('#lb'+bt1).css('backgroundColor','#e9d9c2').css('color','black');
    };
    var rbclick=function(i){
        $('#rb'+bt2).css('backgroundColor','black').css('color','white');
        imgOut();
        bt2=i;
        imgIn();
        $('#rb'+bt2).css('backgroundColor','#e9d9c2').css('color','black');
    };
    lbclick(0);
    rbclick(0);
    $('#lb0').on("click",function () {
        lbclick(0);//写成$('#lb0').on("click",lbclick(0))会直接执行lbclick（0）函数
    });
    $('#lb1').on("click",function () {
        lbclick(1);
    });
    $('#rb0').on("click",function () {
        rbclick(0);
    });
    $('#rb1').on("click",function () {
        rbclick(1);
    });
    $('#rb2').on("click",function () {
        rbclick(2);
    });
    $(document).keydown(function (e) {
        if(e.keyCode==37||e.keyCode==38) tr1click();
        if(e.keyCode==39||e.keyCode==40) tr2click();
    })
});