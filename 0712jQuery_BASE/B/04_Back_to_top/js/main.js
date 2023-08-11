$(function(){
  let goTop = $('#go-top')


/*
윈도우의 스크롤이 생기면 할일
  그 스크롤양 300  보다  크다면
   goTop이 보인다.
  아니라면
   goTop이 보이지 않다
*/
$(window).scroll(function(){
  let sct = $(this).scrollTop()
  if($(this).scrollTop() > 300 ){
    goTop.addClass('active');
  }else{
    goTop.removeClass('active');
  }
  goTop.click(function(e){
    e.preventDefault()    
    //애니메이트 속도 ''안에 적기
    //window에는 스크롤양을 지정할 수 없다
    //태그에는 스크롤 양 지정 가능하다 고로 html태그안의 body로 하면 window에
    //스크롤 양을 지정하는 것처럼 할수있다
    /* go top을 클릭하면 할일
    링크의 기본속성을 막고
    윈도우의 스크롤양이 0으로 되는 과정을 보이도록
    속도 easeInCubic
     */
    $('html, body').stop().animate({scrollTop:0}, 'easeInCubic')
  })
})

})