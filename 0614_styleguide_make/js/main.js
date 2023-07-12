/*
변수명 header
윈도우에 스크롤이 생기면 할일
   그 스크롤양이 0보다 크면 header에 stickcy추가
   아니면 stickcy를 제거
*/
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
   변수명 testimonial
   num = 0, prev, next, slider.li, slider.ul  
   e기본 기능 막기
*/
if(document.querySelectorAll('.slidewrapper').length > 0){
let sliderWrapper = document.querySelector('.slidewrapper'),
    slideContainer = sliderWrapper.querySelector('ul'),
    slides = slideContainer.querySelectorAll('li'),
    slideCount = slides.length,
    currentIdx = 0,
    prevBtn = sliderWrapper.querySelector('.prev'),
    nextBtn = sliderWrapper.querySelector('.next');
  
  //슬라이드 가로 배치
slideContainer.style.width = `${sliderWrapper.offsetWidth * slideCount}px`;
console.log(slideContainer.style.width)


//슬라이드 이동 함수 moveSlide
function moveSlide(num){
  slideContainer.style.left = `${num * -100}%`;//slides아님 slideContainer임
  currentIdx = num;//??
}
//좌우 버튼으로 슬라이드 이동
//첫슬라이드에서 이전 버튼을 클릭하면 마지막 슬라이드로 이동
//마지막 슬라이드에서 다음 버튼을 클릭하면 첫 슬라이드로 이동
    nextBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(currentIdx < slideCount - 1){
         //currentIdx 2 //1 ,0, -1
        moveSlide(currentIdx + 1);
      }else{//2보다 작지 않다
        moveSlide(0);
      }
    });
    prevBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(currentIdx > 0){
        //currentIdx 2 //1 ,0, -1
        moveSlide(currentIdx - 1);
      }else{
        moveSlide(slideCount - 1);
      }
    });
  }
// let animation = setInterval(()=>{
//    if()
// }, 10)

/*
변수명 qnaList에 qua_list li를 지정
qnaList를 클릭하면 할일
   모든 quaList에서 active를 제거하고
   클릭한 그 요소에서 active 추가
*/


let qna_list = document.querySelectorAll('.qna_list li');

qna_list.forEach(item=>{//function(ite
  item.addEventListener('click',(e)=>{
    for(let ql of qna_list){//function(ite
      ql.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  })
});

let bannerForm = document.querySelector('.banner form');
let inputs = document.querySelectorAll('.field input');
let feedback = document.querySelector('.feedback');

bannerForm.addEventListener('submit',(e)=>{//모두 입력하면 전송하고 싶어 시킴 //html submit버튼 클릭하면 할일 //
  e.preventDefault();
   // alert('전송버튼이 클릭되었습니다')
   
   // let newinpust = [...inputs]//전개연산자 유사배열 --> 배열
   // newinpust.every(item=>{
      //    let i = 0
      //    if(item.value){//만약 클릭한 것에 값이 있으면
      //       isEmpty = true
      //       item.focus()
      //       i++
      //       console.log(i)
      //       return false;//?
      //    } 
      
      // })
  let completed = 0;
  for(let ip of inputs){
    if(!ip.value){//input에 값이 없다면
      ip.focus();   //input에 값이 없다면
      let target = ip.getAttribute('id');//오오~ id도 되네
      let pos = ip.offsetTop;
      msg(target,pos);
      return false; //반복문이 더이상 작동하지 마라
    }else{
      ++completed;//input이 모두 입력되면 이게 작동함
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

      // if(1 == 0){
      //    // debugger //콘솔로 보내기전 멈추기
      //    }
      // debugger //콘솔로 보내기전 멈추기

      
});