// a를 클릭했을 떄
$(document).on('click', 'a[href="#"]', function(e){
e.preventDefault();
});


/* shift + Alt + A 여러줄 주석 
  1 jQuery=>$(function(){}); 로 감싸줘야한다.
  2 $("선택자")로 대상을 선택한다.
  3.on("이벤트명", function(){});=> on그룹이벤트 메소드로 이벤트를 작성하고 함수를 호출
  4 다시 $("선택자")로 대상을 선택한 후 메소드를 적어둔다.*/

  // menuopen
  $(function(){
    $('.menuOpen button.open').on('click', function(){
      $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
      $('.menuOpen .menuWrap').removeClass('on')
    });
  });




//gnb
$(function(){
  $('.gnb > li > a').on('mouseenter focus', function(){
   var gnbIndex = $('.gnb > li > a').index($(this));
   // alert(gnbIndex);
    $('.gnb li ul.lnb').removeClass('on');
    $('.gnb li ul.lnb li').removeClass('on');
    $('.gnb li ul.lnb li a').removeClass('on');
    $('.gnb li ul.lnb:eq('+ gnbIndex +')').addClass('on');
  });
  $('.gnb li ul.lnb').on('mouseleave', function(){
   $('.gnb li ul.lnb').removeClass('on');
  });
 });
 

// fixHeadedr
var scrollTop = 0;
scrollFix = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixHeader();
});

  function fixHeader(){
    if(scrollFix > 150) {
      $('header').addClass('on');}
    else {
      $('header').removeClass('on');}
  }

// visual slide
$(function(){
  $('.visual .slide').slick({
     arrows: true,  //화살표
     dots: true, //인디케이트 해제
     fade: true,//페이드효과
     autoplay:true, //자동재생
     autoplaySpeed: 4000, //재생시간
     pauseOnHover: false,
     pauseOnFocus: false   
 });
});


//scroll
$(function(){
  $('.animate').scrolla({
      mobile: true,
      once:false
  });
});
//text ani
$(function(){Splitting();});

// swiper
$(document).ready(function(){

  var swiper = new Swiper(".meSwiper", {
    autoplay: {
      delay : 2000,
    },
    slidesPerView: 1.3, //보여지는 갯수
      spaceBetween: 10, //각각 간격
      centeredSlides: false, //센터모드
      loop: true, //루프
      speed: 1000,
      loopAdditionalSlides: 1,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
  },
  });
});

// swper2
$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, //보여지는 갯수
    spaceBetween: 30, //각각 간격
    centeredSlides: true, //센터모드
    loop: true, //루프
    speed: 1000,

        navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
        },
        // scrollbars: {
        //   el: '.swiper-scrollbar',
        //   draggable: true,
        // },

        pagination: {
          el: '.swiper-pagination',
    },
    autoplay: {
      delay : 2000,
    },

});
});