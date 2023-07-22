$(function(){
  let images = $('#images p');
  
  /*첫번째 p에 마우스를 올리면
    strong, span의 opacity 1변경 시간 300
    나가면
    원상태로
    대상.find('.active') 대상의 자식 요소중 클래스명 active 선택 공백 있는거 images.find('.active') == $image p .active
    대상.filter('.active) 대상 자신중 클래스 명 active 선택 공백 없는거 images.filter('.active') == $image p.activ
    #image.filter(':last-child')
  */
  images.filter(':first-child').hover(function(){
    $(this).find('strong.span').stop().animate({opacity:1}, 300)
  },function(){
    $(this).find('strong.span').stop().animate({opacity:0}, 300)
  })
  images.filter(':nth-child(2)').hover(function(){
    $(this).find('span').stop().animate({opacity:1,left:'-100%'}),
    $(this).find('strong').stop().animate({opacity:1,left:'-100%'})
  },
  function(){
    $(this).find('span').stop().animate({opacity:0,left:'-100%'}),
    $(this).find('strong').stop().animate({opacity:0,left:'-100%'})
  })
  images.eq(2).hover(
    function(){
      $(this).find('strong').stop().animate({opacity:1,bottom:0}),
      $(this).find('span').stop().animate({opacity:1}),
      $(this).find('img').stop().animate({top:'-20px'})
    },
    function(){
      $(this).find('strong').stop().animate({opacity:0,bottom:'-88px'}),
      $(this).find('span').stop().animate({opacity:0})
    }
  )
})