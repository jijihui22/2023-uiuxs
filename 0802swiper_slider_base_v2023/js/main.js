$(function(){

//basic 슬라이드
  const swiper = new Swiper('.basic-slide', {//이문장다swiper에 나머지 적은것을 담은 것
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  //control 슬라이드
  const controlSwiper = new Swiper('.control-slide', {//이문장다swiper에 나머지 적은것을 담은 것
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.control-next',
      prevEl: '.control-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //contro2 슬라이드
  const controlSwiper2 = new Swiper('.control-slide2', {//이문장다swiper에 나머지 적은것을 담은 것
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
  $('.control-prev2').click(function(){
    controlSwiper2.slidePrev()
  })
  $('.control-next2').click(function(){
    controlSwiper2.slideNext()
  })

  //pager 슬라이드
  const pagerSwiper = new Swiper('.pager-slide', {//이문장다swiper에 나머지 적은것을 담은 것
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //pager 슬라이드
  const multipleSwiper = new Swiper('.multiple-slide', {//이문장다swiper에 나머지 적은것을 담은 것
    // Optional parameters 기본이 모바일 min-width라 적어도 그 이상으로 시작한다
     slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
     },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // activeSwiper
  const activeSwiper = new Swiper('.active-slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  // $('.active-slider').find('.swiper-slide-active').add('active')

  // option-slide
  const optionSwiper = new Swiper('.option-slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  optionSwiper.on('slideChange', function () {
    console.log(optionSwiper.activeIndex);
    //클래스로 슬라이드로 들어오는 것으로 사용해도 되지만
    //현재 슬라이드를 표시해주는 파라미터가 있는지 확인해보자
    $('.option-slide .swiper-slide').removeClass('active')
    $('.option-slide .swiper-slide').eq(optionSwiper.activeIndex).addClass('active')
  });

  // auto-slide
  const autoSwiper = new Swiper('.auto-slide', {
    // Optional parameters
    autoplay: {
      delay:3000,
      pauseOnMouseEnter:true,
    },

    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // auto-slide
  const movieSwiper = new Swiper('.movie-slide', {
    // Optional parameters
    // autoplay: {
    //   delay:3000,
    //   pauseOnMouseEnter:true,
    // },
    
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  movieSwiper.on('slideChange', function () {
    //클래스로 슬라이드로 들어오는 것으로 사용해도 되지만
    //현재 슬라이드를 표시해주는 파라미터가 있는지 확인해보자
    $('.movie-slide .swiper-slide').find('video').get(0).pause()
    $('.movie-slide .swiper-slide').eq(movieSwiper.activeIndex).find('video').get(0).play()
  })

  // tab-slide
  const tabSwiper = new Swiper('.tab-slide', {
    // Optional parameters
    // autoplay: {
    //   delay:3000,
    //   pauseOnMouseEnter:true,
    // },
    
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  //아랫문장은 엉킬때도 있으니 아래에 두기
  $('#tabs').tabs()
});