let question = $('.question'),
    answer = $('.answer');

/* 
  question을 클릭하면 할일
    모든 question에서 active 제거
    클릭한 그 요소에 active 추가 
*/
question.click(function(){
  $(this).toggleClass('active');
  // question.removeClass('active');
  // $(this).addClass('active');

  // answer.slideUp();//형제가 안보이게 하는 것
  
  //다시 클릭시 다 접고싶을 때
  $(this).next().slideToggle();
  //이 아래게 안 필요한가?
  $(this).next().siblings('div').slideUp();
  $(this).removeClass()
})