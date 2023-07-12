// 2 별도의 변수명으로 하는 방법
/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/
let mainHeader = document.querySelector('#main-header')
let logo = document.querySelector('#logo')
let bigLogo = 'images/logo-shrink.svg'
let smallLogo = 'images/logo.svg'
/*
윈도우에 스크롤이 생기면 할일
 스크롤양이 0보다 크다면 mainHeader에 클래스명 shrink를 추가하고
 아니라면 shrink를 제거한다
*/

let excuted = false; //실행된적이 거짓
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 0){  
    if(excuted == false){//2별도의 변수명
    //스크롤 움직일때마다 이미지 나타나지 않게(깜박이지않게) 1번째방법 클래스명 있고 없고에 따라 주는것
    //한번만 나오게 하는법은 2가지 1클래스명 2별도의 변수명
    //자바스크립트 class명은
    //대상.classList.add()
    //
    //
      mainHeader.classList.add('shrink')
    //로고의 src의 값을 images/logo.shrink.svg로 변경
    switchImg(bigLogo)
    excuted = true
    }
  }else{
    if(excuted == true){
    mainHeader.classList.remove('shrink')
    //로고의 src의 값을 images/logo.svg로 변경
    switchImg(smallLogo)
    excuted = false
  }
  }}
)

//현재 큰 로고는 사라지고 --> 하이드를 추가
//새 로고로 교체한다
//새 로고의 opacity를 1로 바뀜 하이드를 제거

function switchImg(newImgatn){
  logo.classList.add('hide')//시간을 제야겠다
  setTimeout(()=>{
    logo.setAttribute('src', newImgatn)
    logo.classList.remove('hide')
  }, 300)//0.3s가 되면 {}있는거를 실행해라
}