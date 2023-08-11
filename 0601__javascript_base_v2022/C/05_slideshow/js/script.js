// 변수 지정
let slideWrpper = document.querySelector('.slide-wrapper'),
    slideContainer = slideWrpper.querySelector('.slide-container'),
    slides = slideContainer.querySelectorAll('li'),
    slideCount = slides.length,
    currentSlideIdx = 0,
    pager = slideWrpper.querySelector('.pager'),
    timer,//지역변수 --> 전역변수로 바꾸자 이렇게 해도 변수 생성됨  
    pagerHTML = '',//반복해서 생성된 내용이 여기 저장됨
    prevBtn = slideWrpper.querySelector('#prev'),
    nextBtn = slideWrpper.querySelector('#next')

// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기
// 슬라이드 첫번째의 left 0% 
/*
slides[0].style.left = '0';
slides[1].style.left = '100%';
slides[2].style.left = '200%';
slides[3].style.left = '300%';
slides[4].style.left = '400%';
*/
if(slideCount > 1){
  /*for(let i = 0;i<slideCount;i++){
    slides[i].style.left = `${idx*100}%`  `100% * + ${idx}` ${100*idx%
  }
  */
 
 slides.forEach((item, idx)=>{
   item.style.left = `${100*idx}%`;
   //자바스크립트 내용이 없는데 내용 생성
    // 대상.innerText = '내용'
    // 대상.innerHTML = '내용'
   //슬라이드 내용이 하나있으면 pager에다 내용 생성해주기
   // 1개
   // <a href="">0</a>
   //2개
   // <a href="">0</a>
   // <a href="">1</a>
   //5개
   // <a href="">0</a>
   // <a href="">1</a>
   // <a href="">2</a>
   // <a href="">3</a>
   // <a href="">4</a>
   //pager + 태그 생성
   pagerHTML = pagerHTML + `<a href="">${idx}</a>`//***반복문처럼 내용 넣는법
  //  pagerHTML += `<a href="">${idx}</a>`위와같다
  pager.innerHTML = pagerHTML //***/=<a href="">0</a><a href="">1</a><a href="">2</a><a href="">3</a><a href="">4</a>)

  
})
}
let pagerBtn = pager.querySelectorAll('a')//아직 a태그가 생성되지 않아서 맨 위에서 생성되지 못하고 이 위치에서 생성되야됨



console.log('아래꺼')
console.log(pagerHTML)
// 슬라이드 이동 함수(이동, 페이저 업데이트, 슬라이드 활성화) <-- 이동하는건 함수로만 결정해놓으면 편하다


console.log(currentSlideIdx)
//num 1, slideContainer.style.left = '-100%'
function moveSlider(num){//몇번보여줘하려고 num넣음
  // slideContainer[0].style.left = `${num*-100}%`****ul이가 여러개아님 하나가 움직이는 것
  slideContainer.style.left = `${num*-100}%`
  currentSlideIdx = num//******* 인덱스 번호를 currentSlideIdx 라는 변수로 지정
  console.log(currentSlideIdx)
  //처음이면 이전버튼에 disable 클래스명추가, 아니라면 클래스명 제거
  if(currentSlideIdx === 0){
    prevBtn.classList.add('disabled')
  }else{
    prevBtn.classList.remove('disabled')
  }
  //마지막이면 다음버튼에 disable 클래스명추가, 아니라면 클래스명 제거
  if(slideCount -1 === currentSlideIdx){
    nextBtn.classList.add('disabled')
  }else{
    nextBtn.classList.remove('disabled')
  }
  
  //모든 슬라이드에서 active를 제거하고, 지금보고잇는 슬라이드에 active를 추가
  for(let sl of slides){
    sl.classList.remove('active')
  }slides[currentSlideIdx].classList.add('active')// ****slides에 적용하기+++
  //모든 페이저에서 active를 제거하고, 현재 슬라이드 번호의 pager에 active추가
  // pagerBtn.forEach(items=>{
  //   items.classList.remove('active')
  // })pagerBtn[currentSlideIdx].classList.add('active')
  for(let pb of pagerBtn){
    pb.classList.remove('active')
  }pagerBtn[currentSlideIdx].classList.add('active')
}
moveSlider(0)///처음화면 보여줘, 그리고 moveSlider작동시켜줘


// 좌우 버튼 클릭으로 슬라이드 이동시키기
//nextBtn버튼을 클릭하면 할일, 현재 슬라이드번호에 + 1한 숫자를 moveSlide에 넘긴다
nextBtn.addEventListener('click', ()=>{
  //  let numPlus = currentSlideIdx + 1 이렇게 해도됨 //매개변수에 값을 사측연산등을 하고싶으면 그 변수명(여기다 사측연산)
  // moveSlider(currentSlideIdx+1)
  if(slideCount -1 > currentSlideIdx){//****** <-- //=(!slideCount -1 == currentSlideIdx) = (slideCount -1 !== currentSlideIdx) //5,6,7의 숫자에 대해 if문을 한줄 더 써줘야함
    moveSlider(currentSlideIdx+1)
  }
})
prevBtn.addEventListener('click', ()=>{
  if(0 < currentSlideIdx){//****** 1보다 크면
    moveSlider(currentSlideIdx-1)
  }
})


// 페이저로 슬라이드 이동하기
//페이저는 html이 아닌 자바스크립트로 슬라이드 개수에 따라 만들어 주는 것

/*
pagerBtn을 클릭하면 할일
  링크의 기본 속성 막기
  변수명 targetIdx에 클릭된 그 요소의 index 번호를 지정
  moveSlide에 targetIdx을 넘긴다
*/
pagerBtn.forEach((item, index)=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    moveSlider(index)//몇번보여줘 함수에 인덱스를 넣어준다
    console.log('밑에 타겟')
    console.log(moveSlider(index))
  })
})
// 자동 슬라이드 

nextIdx = currentSlideIdx + 1
moveSlider(nextIdx)

function autoSlide(){
  timer = setInterval(()=>{
    let nextIdx = (currentSlideIdx + 1) % slideCount
    moveSlider(nextIdx)
  }, 3000)
}
autoSlide()

// moveSlider(0)
// 3초
// moveSlider(1)
// 3초

// ...

// moveSlider(2)
// 3초
// moveSlider(5)
// 3초

  // (0 + 1) % 5 = 1 3s
  // (1 + 1) % 5 = 2 3s
  // (2 + 1) % 5 = 3 3s
  // (3 + 1) % 5 = 4 4s
  // (4 + 1) % 5 = 0 3s
  // nl * 4/%
  // cl 0 nl 1
  // cl 1 nl 2
  // cl 2 nl 3
  // cl 3 nl 4
  // cl 4 nl 0
  slideWrpper.addEventListener('mouseenter', ()=>{//setInterval에다가 적는게 아님 
    clearInterval(timer)
  })
  slideWrpper.addEventListener('mouseleave', ()=>{
    autoSlide()//멈추기전과 같은 내용이니 전역변수로 함수 만들고 다시 재생
  })