$(function () {
  let header = $('.page-header'),
      headerOst = header.offset().top // 매번 스크롤 체크하면 값이 다르니 엉켜 변수로 잡음
  
  /*
  윈도우에 스크롤이  생기면 할일
   그 양이 header가 상단에서 떨어진 거리 이상이라면
      header 를 고정 
    아니라면
      header를 고정 풀기
  */
 
 $(window).scroll(function(){
  if($(window).scrollTop() > headerOst){
    header.addClass('sticky')
  }else{
    header.removeClass('sticky')
  }
 })
});
