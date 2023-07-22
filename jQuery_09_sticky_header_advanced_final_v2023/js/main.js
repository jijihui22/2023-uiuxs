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
/*
$(function () {

  let $window = $(window),
      $header = $('.page-header'),
      $headeClone = $header.contents().clone(),
      $headerCloneContainer = $('<div class="page-header-clone"></div>'),
      $threshold = $header.offset().top + $header.outerHeight();
      
      $headeClone.appendTo($headerCloneContainer);
      $('body').append($headerCloneContainer);

      $window.scroll(function(){
        if($(this).scrollTop() >= $threshold){
          $headerCloneContainer.addClass('visible');
        }else{
          $headerCloneContainer.removeClass('visible');
        }
      });

});
*/

