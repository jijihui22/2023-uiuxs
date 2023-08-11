  let myslider = $(".slider").bxSlider({
    pager:false,
    // nextText:'<i class="fa-solid fa-chevron-right"></i>',
    // prevText:'<i class="fa-solid fa-chevron-left"></i>',
    // // auto:ture
    // auto:true,
    // autoHover:true
    
  });

  $(".testimonial .prev").click(function(e){
    e.preventDefault()
    myslider.goToPrevSlide()

  })
  $(".testimonial .next").click(function(e){
    e.preventDefault()
    myslider.goToNextSlide()
  })