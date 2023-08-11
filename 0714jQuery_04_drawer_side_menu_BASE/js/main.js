$(function (){
  let aside = $('.page-main > aside'),
      duration = 300,
      asideBtn = aside.find('button');

  /*
  asideBtn를 클릭하면 할일
    aside .3초에 걸쳐 나타남
  */
    asideBtn.click(function(){
      aside.toggleClass('active')
      
      if(aside.hasClass('active')){
        aside.stop().animate({left:'-70'
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      }, duration, 'easeInBack');
        //버튼 속성 변경
        asideBtn.children('img').attr('src', 'img/btn_close.png');
      }else{
        aside.stop().animate({left:'-350px'}, duration, 'easeInBack');
        asideBtn.children('img').attr('src', 'img/btn_open.png');
      }
    })
})