$(function(){
  let container = $('.full-bg');
  let imgRatio = 640/360;
  

  $(window).resize(function(){
    let winWidth = $(window).width();
    let winHeight = $(window).height();
    let browserRatio = winWidth/winHeight;

    if(browserRatio<imgRatio){
        container.css({
          height:'100%',
          width:winHeight * imgRatio,
          top: 0,
          left: (winWidth - winHeight * imgRatio)/2
        });
    }else{
      container.css({
        width:'100%',
        height:winWidth / imgRatio,
        left: 0,
        top: (winHeight - winWidth / imgRatio)/2
      });
    }
  });

  $(window).trigger('resize');

});