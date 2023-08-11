let body = $('body');

$(window).scroll(function(){
  if($(this).scrollTop() > 0){
    body.addClass('sticky');
  }else{
    body.removeClass('sticky');
  }
});

if($('.slidewrapper').length > 0){

  let sliderWrapper = $('.slidewrapper'),
    slideContainer = sliderWrapper.find('ul'),
    slides = slideContainer.find('li'),
    slideCount = slides.length,
    currentIdx = 0,
    prevBtn = sliderWrapper.find('.prev'),
    nextBtn = sliderWrapper.find('.next');

    slideContainer.css({width:`${sliderWrapper.outerWidth() * slideCount}px`});
    
    //슬라이드 이동 함수 moveSlide(1)
    function moveSlide(num){
      slideContainer.css({left:`${num * -100}%`});      
      currentIdx = num;
    }

    nextBtn.on('click',(e)=>{
      e.preventDefault();
      if(currentIdx < slideCount - 1){
        moveSlide(currentIdx + 1);
      }else{
        moveSlide(0);
      }
    });

    prevBtn.on('click',(e)=>{
      e.preventDefault();
      if(currentIdx > 0){
        moveSlide(currentIdx - 1);
      }else{
        moveSlide(slideCount - 1);
      }
    });

}

let qna_list = $('.qna_list li');

qna_list.click(function(){  
  $(this).toggleClass('active');
  $(this).siblings().removeClass('active');
  
  $(this).find('.answer').slideToggle();
  $(this).siblings().find('.answer').slideUp();
});

let bannerForm = document.querySelector('.banner form');
let inputs = document.querySelectorAll('.field input');
let feedback = document.querySelector('.feedback');

bannerForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  let completed = 0;
  for(let ip of inputs){
    if(!ip.value){
      ip.focus();   
      let target = ip.getAttribute('id');
      let pos = ip.offsetTop;
      msg(target,pos);
      return false;
    }else{
      ++completed;
      console.log(completed);
    }
  } 

  function msg(target,pos){    
      feedback.innerHTML = `<p>${target}은 필수 입력입니다.</p>`;
      feedback.style.display='block';     
      feedback.style.top = `${pos}px`;
  }

  if(completed == inputs.length){
    bannerForm.submit();
}


});