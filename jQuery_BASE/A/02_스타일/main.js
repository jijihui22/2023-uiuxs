// $(document).ready(function(){});
$(function(){ //. 자바스크립트나 제이쿼리에서 css는 메소드다
  //객체 = 변수 + 함수
  //object = property + method
  // $('h1').css()
  // $('h1').css($('h1'))
  $('.list li').css('color','blue');//한번에 style은 하나밖에 못 바꾸지못함;
  /*
    여러스타일을 한번에 바꾸는법 
    $(선택자).css({속성명:'값', 속성명:'값'})
    문자는 앞뒤에 ''
    css 중심점 변경은 origin:0 0
  */
  $('h2').css({color:'green', fontSize:'40px', opacity:.5, transform:'rotate(45deg)', transformOrigin:0});

  $('.container  #box > div> div').css('background','silver');

  $('p:eq(1)').css('background', 'silver')

  let subtitle = $('h3');
  // subtitle.css('color', 'blue');
  // subtitle.css({fontSize:'16px'});
  // subtitle.css({color:red});
  //메서드를 이어쓰는 거 메서드 체인이라고 부른다
  subtitle.css('color', 'blue').css({'fontSize':'16px'}).css({'color':'red'});
  subtitle.css({color:'blue', fontSize:'16px', color:'red'});

  console.log($('h1'))
});//문서가 준비되면 할일