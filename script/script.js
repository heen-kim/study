$(document).ready(function(){

    // 슬라이드 구현
    setInterval(function(){
        $('.slide-3600').delay(2000);
        $('.slide-3600').animate({marginLeft:-1200});
        $('.slide-3600').delay(2000);
        $('.slide-3600').animate({marginLeft:-2400});
        $('.slide-3600').delay(2000);
        $('.slide-3600').animate({marginLeft:0});
        $('.slide-3600').delay(2000);
    });


    // 2차 메뉴
    $('.menu-box>ul>li').mouseover(function(){
        $('.menu2').stop().slideDown(500);
    }).mouseout(function(){
        $('.menu2').stop().slideUp(500);
    });
});