// 스크롤 움직일때마다 이미지 나타나지 않게(깜박이지않게) 2가지 방법
//1 클래스명으로 하는 방법
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

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 0){  // 만약 widdow스크롤이 0이상이고, 만약 헤더의 이름에 ('shrink')가 포함되어 있지 않다면 
    if(!mainHeader.classList.contains('shrink')){//스크롤 움직일때마다 이미지 나타나지 않게(깜박이지않게) 2가지 방법이 있다 
    //1가지는 클래스명 있고 없고에 따라 주는 클래스명을 주는것 
    //2별도의 변수명에 true, false를 줘 작동하게 하는것
    //자바스크립트 class명 관련 3가지
    //대상.classList.add() 클래스명 추가
    //대상.classList.remove() 클래스명 제거
    //대상.classList.contains() 클래스명 포함미보함
      mainHeader.classList.add('shrink')//헤더에 ('shring')클래스명 추가하기 //클래스명 포함 안됐어? 그럼 넣어
    //로고의 src의 값을 images/logo.shrink.svg로 변경
    switchImg(bigLogo)//switchImg함수에 bigLogo넣어 실행
    }
  }else{
    if(mainHeader.classList.contains('shrink')){
    mainHeader.classList.remove('shrink')
    //로고의 src의 값을 images/logo.svg로 변경
    switchImg(smallLogo)
  }
  }
})

스크롤 움직일때마다 이미지가 다시 나와 깜박이는 현상이 생기지 

//현재 큰 로고는 사라지고 --> 하이드를 추가
//새 로고로 교체한다
//새 로고의 opacity를 1로 바뀜 하이드를 제거

//일정 시간 후 실행해야겠다
function switchImg(newImgatn){//함수switchImg =로고이미지 변경 함수 //매개변수명 newImgatn =opacity:0; 
  logo.classList.add('hide') /logo로고 이미지에 ('hide')클래스명 추가
  setTimeout(()=>{
    logo.setAttribute('src', newImgatn)
    logo.classList.remove('hide')
  }, 300)//0.3s가 되면 {}있는거를 실행해라
}