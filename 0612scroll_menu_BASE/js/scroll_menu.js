document.addEventListener('DOMContentLoaded', ()=>{
  let menu = document.querySelectorAll('#top_menu li a')

  let section = document.querySelectorAll('#contents > section')
  
  /*
  메뉴를 클릭하면 할일
    링크의 기본속성 막기
    변수명 targetId에 클릭된 그 요소의 속성명 href 값을 저장
    변수명 targetOst = 대상의 화면 상단에서의 거리
  
    document.querySelector('#select2')//얼마나 떨어져 있는지 = 대상.offsetTop
  window.scrollTo(left:0;top:1000;behavior:smooth)//바뀌는값은 변수
  */
  menu.forEach(item=>{
    item.addEventListener('click', (e)=>{
      e.preventDefault()
        // 모든 메뉴에서 on을 제거하고, 클릭된 그 요소에만 on 추가
        
        let targetId = e.target.getAttribute('href');
        let targetOst = document.querySelector(targetId).offsetTop;
        window.scrollTo({left:0, top:targetOst, behavior:'smooth'});

        // for(let list of menu){
        //   list.classList.remove('on')
        // } e.target.classList.add('on')
        //마우스 휠로 봐도 해당 위치에 있어도 .on되게

    })
  })//여기까지가 메뉴를 클릭하면 할일 

  /*
    윈도우에 스크롤이 생기면 할일
      스크롤양을 변수명 sct 저장
      section들 마다 할일
       각 섹션이 상단에서의 거리 보다 스크롤양이 많다면
       모든메뉴에서 on제거
       각 섹션의 index번호에 해당하는 메뉴에 on추가
  */
 window.addEventListener('scroll', ()=>{
  let sct = window.scrollY;
  console.log('아래꺼')
  console.log(sct)
  section.forEach((sec, idx)=>{
    if(sec.offsetTop <= sct){
      for(let m of menu){
        m.classList.remove('on')
      }
      menu[idx].classList.add('on')
    
 }})
 })
})