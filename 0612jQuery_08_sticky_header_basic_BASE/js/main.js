let pageHeader = document.querySelector('.page-header');
let pageHeaderOST = pageHeader.offsetTop;

/*
윈도우에 스크롤이 생기면 할일
 만약에 스크롤양이 pageHeaderOST보다 크다면
 pageHeader를 고정
 아니라면 다시 풀기
*/
window.addEventListener('scroll', ()=>{
    if(window.scrollY > pageHeaderOST){
    pageHeader.classList.add('sticky')
  }else{
    pageHeader.classList.remove('sticky')
  }
})




// if(window.scrollY > 0){

// }else if
// (window.scrollY > pageHeader.scrollY){
//   pageHeader.classList.add('sticky')
// }else if(window.scrollY <= pageHeader.scrollY){
//   pageHeader.classList.remove('sticky')
// }
