//원래는 123순서 로있다가
//좌우 버튼 누를 때 나올 페이지가 옆으로 이동해 온다
//1에서 3클릭하면 3이 left:100%가 되면서 1옆으로 이동해오고 1은 left:0으로 된다 
let slider = $('.slide_container li'),
    currentIdx = 0;
    pager = $('.pager a')

    /*
    pager를 클릭하면 할일
      링크의 기본 속성 막기
      변수명 targetIdx에 클릭한 그 요소의 인덱스 번호 할당
      모든 pager에서 active 제거, 클릭한 그 요소에만 active 추가
    */
    pager.click(function(e){
      e.preventDefault();
      let targetIdx = $(e.target).index();
      console.log(targetIdx)
    })

  /*
    moveSlide 함수가 할일, 매개변수 idx로 받는다.
    현재슬라이드 currentSlide   
    다음 슬라이드 nextSlide
  */