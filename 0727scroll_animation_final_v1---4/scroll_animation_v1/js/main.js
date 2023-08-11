let target = $('.animation');

$(window).scroll(function(){
  let sct = $(this).scrollTop();

  target.each(function(){
    if($(this).offset().top - 500 <= sct){
      $(this).addClass('active');
    }
  });
  
});