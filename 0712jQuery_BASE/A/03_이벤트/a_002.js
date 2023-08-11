$(function(){
    let maintt = $('h1')
 /*
  대상.on('이벤트종류', 할일)

  대상.on('이벤트종류', 대상, 할일)

 */
  // maintt.on('mouseover', function(){
  //   maintt.css({background:'blue'})
  // })

  //1 매서드 체인
  //   maintt.on('mouseover', function(){
  //   maintt.css({background:'blue'});
  // })
  //   maintt.on('mouseout', function(){
  //   maintt.css({background:'blue'});
  // });

  // maintt.mouseover(function(){
  //   maintt.css({background:'blue'});
  // })
  //   maintt.mouseout(function(){
  //   maintt.css({background:'blue'});
  // });

  // maintt.mouseover(()=>{
  //   maintt.css({background:'blue'});
  // })
  //   maintt.mouseout(()=>{
  //   maintt.css({background:'blue'});
  // });


//h2, h3 마우스호버 글자색상 blue, 나가면 black
  let hh = $('h2, h3');

  // hh.mouseover((e)=>{
  //   $(e.target).css({color:'blue'});
  // })
  // hh.mouseout((e)=>{
  //   $(e.target).css({color:'black'});
  // })

  //대상.hover(){
  //function(){},
  //function(){}
  hh.hover(
    function(){$(this).css({color:'blue'});}, function(){$(this).css({color:'black'});}
  )

  //.on( events [, selector ] [, data ], handler )
  //.on()
  // $( "#dataTable tbody tr" ).on( "click", function() {//1부모안에 tr요소들 모두 찾는 방법
  //   console.log( $( this ).text() );
  // });//이건 1000개도 다 선택할 수 있음  1000번 이나 일을 한다  비효율적
  // $( "#dataTable tbody" ).on( "click", "tr", function() {//2부모안에 tr요소를 찾는 방법
  //   console.log( $( this ).text() );
  // });//찾는게 하나라 성능이 올라간다  효율적 만약 태그 복사해서 만들거나 하면 이벤트 안 걸리는 경우가 있는데 그럴때 그 이후에 생긴 요소에 이벤트를 걸면 된다

    //대상.on(이벤트종류, 대상, 할일)
    // $('body').on('click', 'p', function(){
    //   $(this).css({color:'orange'})
    // })

    // $('.container').on('mouseover', 'li', function(){
    //   $(this).css({color:'blue'});
    // })
    // $('.container li').mouseover(function(){
    //   $(this).css({color:'blue'});
    //자바스크립트는 this.value 제이쿼리는 $(this).val();
    // $('#favorite_color').change(function(){
    //   let selector = 
    //   $('h2').css({color:'selector'})
    // })
    $('form').on('submit', function(e){//form은 무엇을 전송하는게 일이라 e.preventDefault()로 막아야 함
      e.preventDefault();
      let selectorColor = $('#favorite_color').val();
      $('h2').css({color:selectorColor});
    })
    // keydown 입력 한번 적용  모든키 해당
    // keypress 누르고 있을떄 계속 작동 실제로 내용이 입력되는 키만 해당 방향키, f1~f12 안돼
    $('input').on('keydown', function(e){
      
      console.log(e.key);//key  이름 알려줌
      console.log(e.keyCode);//key 고유번호 알려줌
      //자바스크립트 innertext()   제이쿼리는 text()
      $('.box').text(i+=1);
    });

    $('input').focus(function(){
      $(this).css({background:'blue', color:'#fff'});
    })
    //제이쿼리에서 focus풀렸을땐 blur
    $('input').blur(function(){
      $(this).css({background:'blue', color:'#000'});
    })
    //브라우저열리자마자 포커스 걸어라
    $('input').focus();

    //제이쿼리 스크롤이 생기면 할일
    // 자바스크립트는 2가지 방법  document.documentElement,scrollTop
    // window.srcollY
    $(window).on('scroll',function(){
      let sc = $(this).scrollTop()
      console.log(sc);//top() = 함수
      if(sc>500){
        $('body').css({background:'blue'});
      }else{
        $('body').css({background:'#fff'})
      }
    })
  });//document ready 할일