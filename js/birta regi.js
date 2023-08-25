$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
})

// 스크롤 이벤트
$(function(){
  $('.animate').scrolla({
      mobile: true,
      once: false 
  });
});
// 텍스트 애니메이션
$(function(){Splitting();});