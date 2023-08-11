let header = document.querySelector('body');

window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    header.classList.add('sticky');
  }else{
    header.classList.remove('sticky');
  }
});

/* 슬라이드 */
/*
  첫슬라이드에서 이전 버튼을 클릭하면 마지막 슬라이드로 이동
  마지막 슬라이드에서 다음 버튼을 클릭하면 첫 슬라이드로 이동
*/
if(document.querySelectorAll('.slidewrapper').length > 0){


let sliderWrapper = document.querySelector('.slidewrapper'),
    slideContainer = sliderWrapper.querySelector('ul'),
    slides = slideContainer.querySelectorAll('li'),
    slideCount = slides.length,
    currentIdx = 0,
    prevBtn = sliderWrapper.querySelector('.prev'),
    nextBtn = sliderWrapper.querySelector('.next');
    //slideContainer의 너비 지정
    slideContainer.style.width = `${sliderWrapper.offsetWidth * slideCount}px`;


    //슬라이드 이동 함수 moveSlide(1)
    function moveSlide(num){
      slideContainer.style.left = `${num * -100}%`;
      currentIdx = num;
    }
    //좌우 버튼으로 슬라이드 이동
    nextBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(currentIdx < slideCount - 1){
        moveSlide(currentIdx + 1);
      }else{
        moveSlide(0);
      }
    });
    prevBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(currentIdx > 0){
        moveSlide(currentIdx - 1);
      }else{
        moveSlide(slideCount - 1);
      }
    });
  }

let qna_list = document.querySelectorAll('.qna_list li');

qna_list.forEach(item=>{
  item.addEventListener('click',(e)=>{
    for(let ql of qna_list){
      ql.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  })
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