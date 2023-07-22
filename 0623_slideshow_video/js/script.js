// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper'),  //ul의 부모
    slideContainer = slideWrapper.querySelector('.slide-container'),  //ul
    slides =slideContainer.querySelectorAll('li'), //각 슬라이드
    slideCount = slides.length,//슬라이드 개수
    currentSlideIdx = 0,
    pager = slideWrapper.querySelector('.pager'),
    timer,
    pagerHTML = '',
    prevBtn = slideWrapper.querySelector('#prev'), 
    nextBtn = slideWrapper.querySelector('#next'),
    videos = document.querySelectorAll('video');

if(slideCount > 1){
  slides.forEach((item, idx)=>{
    item.style.left = `${idx*100}%`;
    //pager html을 직접 넣기(페이지 수 만큼 생성하기 위해서)  a 태그 생성
    pagerHTML += `<a href="">${idx}</a>`;    
  });
}
pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll('a');

function moveSlide(num){//현재 페이지에 아래 슬라이트 버튼을 액서스
  slideContainer.style.left = `${-num*100}%`;
  currentSlideIdx = num;
  console.log(currentSlideIdx);

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

  /*모든 슬라이드안에 비디오를 멈추고 재생시간을 0으로 돌린다.
    
    현재 활성화되어 있는 슬라이드 안에 비디오가 있다면
      그비디오 플레이
  */
    for(let video of videos){
      video.pause();
      video.currentTime = 0;
    }
    let slideVideo = slides[currentSlideIdx].querySelectorAll('video')
    if(slideVideo.length > 0){
      slideVideo[0].play();
    }
    //현재 페이지에 비디오가 있는 변수는 하나지만 변수 선택 추가 조건문 변수.개수가 있으면 비디오 변수[0]플레이;;
    // slides[currentSlideIdx].querySelector('video'), play()} );//***

}//moveslide
moveSlide(0);

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