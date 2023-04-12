$(function() {
    
    // ハンバーガーメニュー↓

    $('.btn').on('click', function() {
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('.mask').on('click', function() {
        $('#header').removeClass('open');
    });

    // カルーセル↓ プラグインが必要 追加リンクが必要

    $(".slide-items").slick({
        autoplay:true,
        autoplaySpeed:3000,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:'10%',
        arrows:false,
        responsive: [{
            breakpoint:768,
            settings:{
                slidesToShow:1
            }
        }]
      });

    //   フェードイン
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });
});