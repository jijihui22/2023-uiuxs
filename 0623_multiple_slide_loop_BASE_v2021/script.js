let slideContainer = document.querySelector('.container'),
    slideWrapper = slideContainer.querySelector('ul'),
    slides = slideWrapper.querySelectorAll('.slide_wrapper li'),
    slideCounter = slides.length,
    currentIdx = 0,
    slidesPerview = 3,
    sidedWidth = 200,
    slideMargins = 30,
    prevBtn = slideContainer.querySelector('.prev'),
    nextBtn = slideContainer.querySelector('.next');

//슬라이드 가로 배치
//function(item, itx)
slides.forEach((item, index)=>{
  item.style.left = `${(sidedWidth + slideMargins) * index}px`//백틱안에선 텍스트 ''빼자
})
// slideWrapper.style.width = slides.style.width * 
//슬라이드 이동함수
function moveSlide(num){
  slideWrapper.style.left = (sidedWidth + slideMargins) * -num + 'px'
  currentIdx = num
}

//좌우 컨트롤
/*
다음 버튼을 클릭하면 슬라이드가 한칸(230)씩 좌측으로 이동
이전 버튼을 클릭하면 슬라이드가 한칸(230)씩 우측으로 이동
*/
nextBtn.addEventListener('click', ()=>{
  if(currentIdx < slideCounter - slidesPerview){
    0 < 0 - 
    moveSlide(currentIdx + 1);
  } 
});

prevBtn.addEventListener('click', ()=>{
  if(currentIdx > 0){
    moveSlide(currentIdx - 1);
  } 
});