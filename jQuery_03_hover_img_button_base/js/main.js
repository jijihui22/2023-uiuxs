$(function(){
  let buttons = $('#buttons2 button')
      duration = 300

  /*
    대상.each(function(){각요소 할일})
    대상.each(function(인덱스){각요소 할일})
    top
    -40px 0 40px 80px
    i 0 -40
    i 1 0
    i 2 40
  */
    buttons.each(function(i){
      // let $value = i*40-40+'px';
      let $value = (i-1)*40+'px';
      $(this).css({top:$value})
    })
    .hover(function(){
      $(this).stop().animate({backgroundColor:'#faee00'})
      $(this).find('img:first-child').stop().animate({opacity:0}, 300)
      $(this).find('img').last().stop().animate({opacity:1}, 300)
    },
    function(){
      $(this).stop().animate({backgroundColor:'#fff'})
      $(this).find('img').last().stop().animate({opacity:0}, 300)
      $(this).find('img').first().stop().animate({opacity:1}, 300)
    })
})
