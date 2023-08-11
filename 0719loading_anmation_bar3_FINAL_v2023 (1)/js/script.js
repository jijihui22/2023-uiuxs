let progressBar = $('.progress-bar');
let progressOST = $('.progress').offset().top - 500
let active = false;

function startAnimation(){
  progressBar.each(function(){
   let bar = $(this).find('.bar'),
      rate = $(this).find('.rate'),
      rateNum = rate.attr('data-rate');
  
  bar.animate({width:rateNum+'%'}, 1500);

  $({num:0}).animate({num:rateNum},{
    duration:1500,
    progress:function(){
      let now = Math.ceil(this.num);
      rate.text(now+'%');
    }
  });active = true;
    // $('.progress').addClass('active')
});
}
/*
변수명 progressOST에는 클래스명 progress가 상단에서 떨어진 거리 -500
윈도우 스크롤이 생기면 할일
  스크롤얄이 progressOST보다 많다면 애니메이션 시작
*/
 $(window).scroll(function(){
  if(!active){
    // if(!$('.progress').hasClass('active')){

      startAnimation()
    // }
    
  }
 })
//한번만 일어나게 1 클래스 함수 사용 2 변수명 만들어 하기
/*
progressBar마다 각각 할일
  변수명 bar에 각요소에서 .bar,
  변수명 rate에 각요소의 .rate,
  변수명 rateNum 각 요소의 data-rate값 할당

  두번째방법
*/



/* 세번째 라이브러리 
  var step = $.animateNumber.numberStepFactories.append(' %');
  rate.animateNumber({number: targetNum, numberStep: step},{duration: 1500});
*/


    
/* 두번째 
$({num:0}).animate({num:60},{
  duration:1500,
  progress:function(){
    let now = Math.ceil(this.num);
    rate.text(now+'%');
  }
});
*/


/* 첫번째 
 let numAnimation = setInterval(function(){
  let BarCurrentWidth = Math.ceil(bar.width()/progressBar.width() * 100);
  rate.text(BarCurrentWidth+'%');

  if(targetNum == BarCurrentWidth){
    clearInterval(numAnimation);
  }
  console.log('작동');
}, 100);
*/


