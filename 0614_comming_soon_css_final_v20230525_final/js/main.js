/*
변수 btt, progresBar, progresBarOst, targetNum, bar, h3
윈도우에 스크롤이 생기면 할일
  스크롤양이 300보다 크다면 btt가 나타나고,
  스크롤양이 progresBarOst보타 크면 bar가 늘어나고, h3안에 숫자가 올라간다
  (한번만 작동한다)

btt를 클릭하면 링크의 기본 속성은 막고, 화면상단으로 부드럽게 이동
*/
let btt = document.querySelector('.btt');
let progresBar = document.querySelector('.progress-bar');
let progresBarOst = progresBar.offsetTop - 500;
let bar = progresBar.querySelector('.bar');
let h3 = progresBar.querySelector('h3');
let targetNum = parseInt(h3.dataset.rate);//이거하려고 h3변수명으로 저장
let num = 0;//어디서 시작할까 0에서 시작하겠다
let myswich = false;
console.log(typeof(targetNum));

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 300){
    btt.classList.add('active');
  }else {
    btt.classList.remove('active');
  }
  //여기 if왜 따로 ???
  if(window.scrollY > progresBarOst){
    // bar.style.width = `${num}%`;
    if(myswich == false){//!myswich와 같은
    
    let animation = setInterval(()=>{
      h3.innerText = `${++num}%`
      bar.style.width = `${num}%`;
        if(num === targetNum){  //이거 왜 해야 할까 ? clearInterval(animation)하려고 왜 이렇게 하지?
          clearInterval(animation)
        }
      }, 10)
      myswich = true;  
  }
    }
})
  btt.addEventListener('click', (e)=>{
    e.preventDefault();
    //스크롤 부드럽게 하기
    // window.scrollTo(x, y)
    // window.scrollTo(0, 0)
    window.scrollTo({
      top:0, 
      left:0, 
      behavior:'smooth'
    })
  })