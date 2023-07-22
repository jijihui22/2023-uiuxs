$(function(){
  //변수지정
  let menu = $('#top_menu li'),
      content = $('#contents > section');

      menu.click(function(e){
        e.preventDefault();
        let targetIdx = $(this).index();
        let targetVal = content.eq(targetIdx).offset().top;
        $('html,body').stop().animate({scrollTop:targetVal});

        //메뉴 업데이트
        menu.removeClass('on');
        $(this).addClass('on');

      });      


  //스크롤 이동 반영하기  
  

});