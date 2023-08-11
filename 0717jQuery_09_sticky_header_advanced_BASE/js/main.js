/*
$(function () {
  let $window = $(window),
      $header = $('.page-header'),
      $headerClone = $header.contents().clone(),
      $headerCloneContent = $('<div class="" > </div>')//제이쿼리 객체로 만들어 줌으로 써 메소드 사용 가능
      $threshold = $header.offset().top + $header.width()


      $headerClone.appendTo($headerCloneContent)

      $('body').append($headerCloneContent)
      // console.log($threshold)//문자에는 제이쿼리 메소드를 걸 수 없다 .css .animate .
      //find 앞에 있는 것은 객체여야 한다 그래서 $('')로 제이쿼리 객체로 바꾼거다
      //그래야 복사 사용 메소드 사용이 다 가능
      //스크롤이 생기면 보이도록
      $('window').scroll(function(){
        if($('this').scrollTop() >= $threshold){
          $headerCloneContent.addClass('.visible')
        }else{
          $headerCloneContent.removeClass('.visible')
        }
      })
});
*/

document.addEventListener('DOMContentLoaded',()=>{
  let $window = window,
      $body = document.body,
      $header = document.querySelector('.page-header'),
      $headeClone = $header.innerHTML,
      $headerCloneContainer = document.createElement('div'),
      $threshold = $header.offsetTop + $header.offsetHeight;


      $headerCloneContainer.classList.add('page-header-clone');
      $headerCloneContainer.innerHTML=$headeClone;
      $body.appendChild($headerCloneContainer);


      $window.addEventListener('scroll',()=>{
        if($window.scrollY >= $threshold){
          $headerCloneContainer.classList.add('visible');
        }else{
          $headerCloneContainer.classList.remove('visible');
        }
      });


});
