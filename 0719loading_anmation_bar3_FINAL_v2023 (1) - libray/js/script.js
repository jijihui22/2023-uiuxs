let progressBar = $('.progress-bar');
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
  });active = true
});
}

var waypoints = $('.progress').waypoint({
  handler: function() {
    console.log('짠')
    if(!active){
      startAnimation()
    }
   
  },
  
  offset: '70%'//이걸로 위치 설정
})
