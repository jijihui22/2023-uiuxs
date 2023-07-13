function myMulipleSlide(target){
  let slideContainer = target.querySelector('ul'),
      slides = slideContainer.querySelectorAll('li'),
      slideCount = slides.length,
      slidesPerView = 3,
      slideWidth = 200,
      slideMargin = 30,
      currentIdx = 0,
      prevBtn = target.querySelector('.prev'),
      nextBtn = target.querySelector('.next');

  for(let i = 0; i<slideCount;i++){
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  slideContainer.appendChild(cloneSlide);
  }
  for(let i = slideCount-1; i>=0 ;i--){
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  slideContainer.prepend(cloneSlide);
  }

  let newSlides = target.querySelectorAll('.slides li');

  newSlides.forEach((slide,idx)=>{
  slide.style.left = `${idx*(slideWidth+slideMargin)}px`;
  });

  function setSlide(){
  // ul {transform:translateX(-3000px)}
  let ulMoveAmt = (slideWidth + slideMargin)*-slideCount+'px';
  slideContainer.style.transform = `translateX(${ulMoveAmt})`;
  slideContainer.classList.add('animated');
  }
  setSlide();


  //슬라이드 이동함수
  function moveSlide(num){
  slideContainer.style.left = -num*(slideWidth+slideMargin)+'px';
  currentIdx = num;
  console.log(currentIdx);
  if(currentIdx == -slideCount || currentIdx == slideCount){
    
    setTimeout(()=>{
      slideContainer.classList.remove('animated');
      slideContainer.style.left = '0px';
      currentIdx = 0;
    },500);
    setTimeout(()=>{
      slideContainer.classList.add('animated');
    },600);

  }
  }

  function debounce(callback, time){
  let slideTrigger = true;
  // return function(){callback()}
  return ()=>{
    if(slideTrigger){
      callback();
      slideTrigger = false;
      setTimeout(()=>{
        slideTrigger = true;
      },time);
    }
  }
  }


  //좌우 컨트롤
  nextBtn.addEventListener('click',debounce(()=>{
  moveSlide(currentIdx+1);
  },500));
  prevBtn.addEventListener('click',debounce(()=>{
  moveSlide(currentIdx-1);
  },500));
  
}//myMulipleSlide
