// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper'),  //ul의 부모
    slideContainer = slideWrapper.querySelector('.slide-container'),  //ul
    slides =slideContainer.querySelectorAll('li'), //각 슬라이드
    slideCount = slides.length,//슬라이드 개수
    currentSlideIdx = 0,
    pager = slideWrapper.querySelector('.pager'),
    timer,
    pagerHTML = '',
    sliderWidth = document.body.offsetWidth,
    prevBtn = slideWrapper.querySelector('#prev'), 
    nextBtn = slideWrapper.querySelector('#next');
    
window.addEventListener('resize', ()=>{//addEventListener('resize')이런것도 있음? 브라우저너비 바뀔때마다 너비를 알려준다
  sliderWidth = document.body.offsetWidth
  console.log(sliderWidth)
  setSlide()
  clearInterval(timer);//슬라이드 끊어지게 한다
})

function setSlide(){//슬라이드 개수가 1개 이상이면 할일함수로 만든다
  if(slideCount > 1){//슬라이드 개수가 1개 이상이면 할일
    let containerWidth = sliderWidth * slideCount;
    slideContainer.style.width = `${containerWidth}px`;
    
    slides.forEach((item, idx)=>{//슬라이드 각 각 할일
      // item.style.left = `${idx*100}%`;
      //pager a 태그 생성
      item.style.width = `${sliderWidth}px`;
      pagerHTML += `<a href="">${idx}</a>`;    
      //slideContainer너비늘려주기 slides.off * slideCount
      //현재 슬라이드의 너비(body의 너비)를 변수명 slideWidth에 저장
      //sliderContent의 너비를 slideWidth * slidecount
    });
  }
}

setSlide()

pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll('a');

function moveSlide(num){
  // slideContainer.style.left = `${-num*100}%`;
  slideContainer.style.transform = translateX`${-num*sliderWidth}px`;
  currentSlideIdx = num;
  console.log(currentSlideIdx);

  updateNav()
}//moveslide

updateNav()
// moveSlide(0);

function updateNav(){
  if(currentSlideIdx === slideCount -1){
    nextBtn.classList.add('disabled');
  } else{
    nextBtn.classList.remove('disabled');
  }
  //처음이면 이전버튼이 사라지고, 처음이 아니라면 다시보이도록
  if(currentSlideIdx === 0){
    prevBtn.classList.add('disabled');
  } else{
    prevBtn.classList.remove('disabled');
  }
  //모든슬라이드에서 active를 제거하고, 지금 보고 있는 슬라이드에 active를 추가
  for(let sl of slides){
    sl.classList.remove('active');
  }
  slides[currentSlideIdx].classList.add('active');
  //모든 페이저에서 active를 제거하고, 현재 슬라이드번호의 pager에 active 추가
  for(let pb of pagerBtn){
    pb.classList.remove('active');
  }

  pagerBtn[currentSlideIdx].classList.add('active');

}

nextBtn.addEventListener('click',()=>{
  //마지막이 아니라면
  if(currentSlideIdx < slideCount -1){
    moveSlide(currentSlideIdx + 1);
  }
});
//이전 버튼을 클릭하면 할일, 처음이 아니라면
prevBtn.addEventListener('click',()=>{

  if(currentSlideIdx > 0){
    moveSlide(currentSlideIdx - 1);
  }
});

// 페이저로 슬라이드 이동하기
/*
pagerBtn를 클릭하면 할일
  링크의 기본 속성 막기
  moveSlide에 클릭한 그 요소의 인덱스 번호를 넘긴다.
*/
pagerBtn.forEach((item,idx)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    moveSlide(idx);
  });
});



// 자동 슬라이드 
function autoSlide(){
  timer = setInterval(()=>{
    //let nextIdx = currentSlideIdx + 1;
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    moveSlide(nextIdx);
  }, 3000);
}
autoSlide();

// slideWrapper mouseenter 이벤트가 일어나면 자동 슬라이드 멈추기
slideWrapper.addEventListener('mouseenter',()=>{
  clearInterval(timer);
});
slideWrapper.addEventListener('mouseleave',()=>{
  autoSlide();
});