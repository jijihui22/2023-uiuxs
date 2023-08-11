let target = $('.animate__animated');

$(window).scroll(function(){
  let sct = $(this).scrollTop();

  target.each(function(){
    if($(this).offset().top - 500 <= sct){
      let effectName = $(this).attr('data-effect');
      $(this).addClass(effectName);
    }
  });
  
});