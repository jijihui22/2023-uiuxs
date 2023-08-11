$('.slider').slick({
  dots:true,
  arrows:true
});

$('.control').slick({
  dots:true,
  arrows:true
});
$('.control2').slick({
  dots:true,
  arrows:false
});

$('.control-slide2 .prev').click(function(){
  $('.control2').slick('slickPrev');
});

$('.control-slide2 .next').click(function(){
  $('.control2').slick('slickNext');
});

$('.multiple-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});



$('.active-slider').slick();

$('.option-slider').slick();



$('.option p span').click(function(){
  $('.option-slider').slick('slickGoTo',$(this).index());
});
// $('.option-slider').slick('slickGoTo',2);

$('.auto-slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.multiple-slider2').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$('.video-slider').slick();



function playVideo(){
  $('.video-slider').find('video').get(0).pause();
  $('.video-slider .slick-active').find('video').get(0).play();
}

playVideo();

$('.video-slider').on('afterChange', function(){

  playVideo();
  
});

$('.tab-slider').slick();


setTimeout(()=>{
  $('#tabs').tabs();
},100);


// $('#tabs').tabs({
//   activate: function( event, ui ) {
//     // ui.newPanel.find('.tab-slider').slick();
//     // $('.tab-slider').slick();
//     $('.tab-slider').slick('reInit');
//   }
// });


$('.variable_slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

$('.responsive-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});