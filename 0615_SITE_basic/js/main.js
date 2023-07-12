/*
변수명 header
윈도우에 스크롤이 생기면 할일
   그 스크롤양이 0보다 크면 header에 stickcy추가
   아니면 stickcy를 제거
*/
let header = document.querySelector('body');
window.addEventListener('scroll', ()=>{
   if(window.scrollY > 0){
      header.classList.add('stickcy');
   } else {
      header.classList.remove('stickcy');
   }
})
/* 슬라이드 */  
/*
   변수명 testimonial
   num = 0, prev, next, slider.li, slider.ul  
   e기본 기능 막기
*/
let sliderWrapper = document.querySelector('.testimonial'),
    slideContainer = sliderWrapper.querySelector('ul'),
    slides = sliderWrapper.querySelectorAll('li'),
    slideCount = slides.length,//2
    currentIdx = 0
    prevBtn = sliderWrapper.querySelector('.prev'),
    nextBtn = sliderWrapper.querySelector('.next'),

//슬라이드 가로 배치
slides.forEach((item, index)=>{
   item.style.left = `${index*100}%` //left?width아님?ㅠㅠ
})   
//슬라이드 이동 함수 moveslide
function moveslide(num){
   slideContainer.style.left = `${-100 * num}%`//slides아님 slideContainer임
   currentIdx = num//??
}
//좌우 버튼으로 슬라이드 이동
//첫슬라이드에서 이전 버튼을 클릭하면 마지막 슬라이드로 이동
//마지막 슬라이드에서 다음 버튼을 클릭하면 첫 슬라이드로 이동
nextBtn.addEventListener('click', (e)=>{
   e.preventDefault();
   if(currentIdx < slideCount - 1){
      //currentIdx 2 //1 ,0, -1
      moveslide(++currentIdx);
   } else{//2보다 작지 않다
      moveslide(0);
   }
})

prevBtn.addEventListener('click', (e)=>{
   e.preventDefault();
   if(currentIdx > 0){
      //currentIdx 2 //1 ,0, -1
      moveslide(--currentIdx);
   } else{
      moveslide(--slideCount);
   }
})
moveslide(0)
// let animation = setInterval(()=>{
//    if()
// }, 10)