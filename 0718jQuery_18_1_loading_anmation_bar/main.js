let progressBar = $('.progress-bar')
let bar = progressBar.find('.bar')
let rate = progressBar.find('.rate')
let targetNum = rate.attr('data-rate')

/*
  bar의 너비가 targetNum의 값으로 늘어나도록 시간은 2.5ch
*/
bar.stop().animate({width:targetNum + '%'}, 2500)





/*
  setInterval(function(){}, 100)  
  변수명 barCurrentWidth에 진행률
  

rate.text('<span>1</span>')



*/

/*숫자 오르는 1번 쨰 방법
let numAnimation =setInterval(function(){
  let barCurrentWidth = Math.ceil(bar.width()/progressBar.width() * 100)
  rate.text(barCurrentWidth+ '%')
  if(targetNum == barCurrentWidth){
    clearInterval(numAnimation)
  }
  console.log('작동')
  
}, 100)
*/



/*
숫자 오르는 2번 쨰 방법
// animate는 웹페이지에 없는 것에도 animate 걸 수 있다 
// 대상.animate({속성명:값, 속성명:값},시간, 이징, 할일)
// 대상.animate({opacity:1},{
//   duration:1500, 
//   easding:'swing', 
//   proress: function(){} // 애니메이트 진행 중 할일
// complete:function(){}}) // 애니메이트 완료 후 할일

$({num:0}).animate({num:24},
  {
    duration:1500,
    progress:function(){
      let now = Math.ceil(this.num)
      rate.text('e')
      console.log(this.num)
    },
  complete:function(){}})//진행중 할일
 ;
/*

숫자 오르는 3번 쨰 방법
rate.animateNumber({ number:targetNum},1500)
var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
rate.animateNumber(
  {
    number: 60,
  

    numberStep: percent_number_step
  },
  {
   
    duration: 15000
  }
);