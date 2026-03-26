$(document).ready(function(){

    // 슬라이드 구현
    setInterval(function(){
        $('.slide-900').delay(2000);
        $('.slide-900').animate({marginTop:-300});
        $('.slide-900').delay(2000);
        $('.slide-900').animate({marginTop:-600});
        $('.slide-900').delay(2000);
        $('.slide-900').animate({marginTop: 0});
        $('.slide-900').delay(2000);
    });


    // 2차 메뉴
    $('.menu-box>ul>li').mouseover(function(){
        $('.menu2').stop().slideDown(500);
    }).mouseout(function(){
        $('.menu2').stop().slideUp(500);
    });

    // 탭 메뉴 구현
    $(".tab-menu>li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        return false;
    });
});