$(function (){
    function myAnimate(){
        $(".ye44").css("left","100%");
        $(".ye44").animate({
            left:"-100%"
        },15000,"linear",myAnimate);
    }
    myAnimate();
    /*����ѭ������*/
    /*
    js�к�����������ǡ�������+()���������ִ�к�����Ȼ�󽫷���ֵ��Ϊ�����Ĳ�����
    �෴����û�ӡ���������ᱻ��Ϊһ��������ָ�룬����ִ�С�
    ���������ǾͿ���������һ�ص�ʵ��setInterval��һ�����ӳ�ִ��
    */
    /*let mySTVal=window.setInterval(myAnimate(),15000);*/
});