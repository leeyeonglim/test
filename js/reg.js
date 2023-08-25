$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
    });
    
// menuopen
  $(function(){
    $('.menuOpen button.open').on('click', function(){
      $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
      $('.menuOpen .menuWrap').removeClass('on')
    });
  });
// gnb
    $(function(){
      $('.gnb > li > a').on('mouseenter focus', function(){
       var gnbIndex = $('.gnb > li > a').index($(this));
       // alert(gnbIndex);
        $('.gnb li ul.lnb').removeClass('on');
        $('.gnb li ul.lnb:eq('+ gnbIndex +')').addClass('on');
      });
      $('.gnb li ul.lnb').on('mouseleave', function(){
       $('.gnb li ul.lnb').removeClass('on');
      })
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
  
      //scroll
  $(function(){
    $('.animate').scrolla({
        mobile: true,
        once:false
    });
  });
  //text ani
  $(function(){Splitting();});