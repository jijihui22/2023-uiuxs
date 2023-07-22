$(function(){
  //변수지정
  let menu = $('#top_menu li'),
    content = $(sct);
  
  //메뉴 클릭 이동
  /*
  menu를 클릭하면 할일
    링크 기본기능막기
    변수명 targetIdx에 클릭한 그 요소의 인덱스번호 할당
    content의 targetIdx에 상응하는 요소가 화면상단에서의 거리를 변수명 targetIdx에 할당
    $('html, body')에 animate scrollTop같이 targetVal으로 변경된다)
  */
  menu.click(function(e){
    e.preventDefault();
    let targetIdx = $(this).index()
    let targetVal = content.eq(targetIdx).offset().top;
    $('html, body').stop().animate({scrollTop:targetVal})
    menu.removeClass('on');
    $(this).addClass('on')
  })

  //스크롤 이동 반영하기  
  //모든메뉴에서 active를 제거하고, 클릭한 그 요소에 active 추가
  
    /*
  윈도우에 스크롤이 생기면 할일
      스크롤양은 변수 sct에 할당
      content들 마다 각각 할일
        해당요소가 화면상단에 떨어진 거리보다 스크롤양 많다면
        모든메뉴에서 on을 제거하고,
        그 요소의 인덱스에 해당하는 menu에 on추가한다.
  */
  $(window).scroll(function(){
    let sct = $(this).scrollTop()
    content.each(function(i){
      if($(this)).offset().top <= sct){

        $(this).find('menu').addClass('on')
      }
  })

  })
});