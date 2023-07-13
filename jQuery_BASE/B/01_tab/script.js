let tabMenu = $('.tab-menu a');
let tabContent = $('#tab-content > div')
/*
  tabMenu를 클릭하면
  클릭된 그 요소의 속성명 href의 값을 변수 targetId에 저장

  모든 tabContent 보이지 않도록 한다.
  targetId값의 요소를 선택해서 보이도록(display:block)
  jquery 속성명 가져오는 방법 대상.attr(속성명)
  자바스크립트는 setAttribute(속성, 그 속성명에 바뀔 값)
  jquery 속성명 변경하는 방법 대상.attr(속성명, '바뀔속성') 

  대상.addClass(클래스명)
  대상.removeClass(클래스명)
  자바스크립트 .classList.contains 있는지 없는지 검사하는 것
  대상.hasClass(클래스명)
*/
tabMenu.click(function(e){
  e.preventDefault();
  // $('#tabs-1').css({display:'block'});
  let targetId = $(this).attr('href');
// console.log(targetId)
  tabContent.css({display:'none'});
  $(targetId).css({display:'block'});
  //모든 링크에서 active를 제거하고, 클릭한 그 요소에 active추가
  tabMenu.removeClass('active');
  $(this).addClass('active');

  tabContent.hide()
  $(targetId).show()
})
tabMenu
//이벤트 강제로 실행
//대상.trigger(이벤트종류);trigger=방아쇠를 당기다라는 뜻
//순번요소 선택
//대상.eq(index)
//tabMenu.eq(0).trigger('click');
//대상.show()
//대상.hide()