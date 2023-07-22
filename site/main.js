/*

*/
let $window = $(window),
    header = $('main-header'),
    defaultlogo = "images/logo.svg",
    smalllogo = "images/logo-shrink.svg"

  
/*
  윈도우에 스크롤이 생기면 할일
    그 양이 0보다 크면
      header
  
*/
$window.scroll(function(){
  if(0 < $window.scrollTop()){
    header.addClass('shrink')
    //로고의 경로를 작은이미지로 변경
    defaultlogo.attr('src', 'images/logo@2x.svg')
  } else{
    header.removeClass('shrink')
    //로고의 경로를 큰이미지로 변경
    defaultlogo.attr('src', 'images-shrink/logo@2x.svg')
  }
})
