/*
animate 메서드 tranform은 <script src="https://cdnjs.cloudflare.com/ajax/libs/egjs-jquery-transform/2.0.0/transform.min.js"></script>을 넣어야 가능
대상.animate.stop().({css속성명:값, css속성명:값})
*/

// $('h1').animate({fontSize:'50px'}),300,'easOutBack', function(){
  
// }
/*박스에 마우스를 올리면 그 요소의 배경색이 green으로 변경,
시간 1.5초 속도는 swing 
나가며 배경색이 blue 1.5초 swing으로
*/
$(".box").on('mouseover', function(){
  $(this).stop().animate({backgroundColor:'green'}, 500, 'swing')
})
.on('mouseout', function(){
  $(this).stop().animate({backgroundColor:'blue'}, 500, 'swing')
})
$('.box').click(function(){
  $(this).stop().animate({transform:'translateY(250px)'})
})
// $('.box').hover(function(){
//   $(this).animate({backgrounColor:'green'}, 500, 'swing')
// })
//animate 필수 stop메서드 쓰기 기본값 true 생략 된것 