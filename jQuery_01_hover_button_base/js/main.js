$(function(){
  let duration = 300
  //대상.stop().animate({속성:값, 속성: 값},시간,이징,할일);

  /*
  1번째부터 4번째 버튼에 마우스를 올리면 할일
    버튼이 올라간 그 요소의 배경생을 .ae5e9b, 글자색을 #fff으로 0.3초 걸쳐 변경한다
  마우스가 나가면 할일
    마우스가 나간 그 요소의 배경색을 fff, 글자색을 ebc000 0.3초 걸쳐 변경한다
    lt(lessthan) gt(greater than) 
  */
  // $('button:lt(4)').mouseover(function(){
  //   $(this).stop().animate({backgroundColor:'#ae5e9b', color:'fff'}, 300)
  // })
  // $('button:lt(4)').mouseout(function(){
  //   $(this).stop().animate({backgroundColor:'#fff', color:'#ebc000'}, 300)
  // })
  $('button:lt(4)').hover(
    function(){$(this).stop().animate({backgroundColor:'#fff', color:'#ebc000'}, duration)},
    function(){$(this).stop().animate({backgroundColor:'#fff', color:'#ebc000'}, duration)}
  )
  /*
  5번쨰 부터 8번째 까지 버튼에 마우스르 올리면
  보더의 두께를 12px 글자색을 $ae5e9b 변경되도록 시간은 0.3s 속도는 easeOUtSine
  나가면 
  보더의 두께를 0px 글자색을 $ebc000 변경되도록 시간은 0.3s 속도는 easeOUtSine
  */
 // Button:lt(7):gt(3) or eq(0~7)
  $('button:lt(7):gt(3)').hover(
    function(){
      $(this).stop().animate({borderWidth:'12px', color:'#ae5e9b'}, duration, 'easeOutSine')
      },
      function(){
        $(this).stop().animate({borderWidth:'0px', color:'#ebc000'}, duration, 'easeOutSine')
      })
  //9번부터
  $('button:gt(7) .bg').hover(
    function(){
      $(this).find('.bg').stop().animate({width:'100%'})
    },
    function(){$(this).find('.bg').stop().animate({width:'0%'})}
  )
})
