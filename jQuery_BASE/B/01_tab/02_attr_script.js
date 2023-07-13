let tabMenu= $('.tab-menu li')
let tabContent = $('#tab-content > div')

//대상의 인덱스 번호 확인하는 방법 대상.index()
//tabMenu 클릭했을때 몇번째 메뉴 클릭 했는지 그 요소의 인덱스 번호확인
// 그번호쨰 tabContent 보이도록

  //tabMenu를 클릭하면 변수명 targetIdx에 그 요소의 index 번호 확인
  //console에서 확인
  tabMenu.click(function(){
    let targetIdx = $(this).index();
    //모든 tabContent를 안보이고
    tabContent.hide();
    tabContent.eq(targetIdx).css({display:'block'});
    console.log($(this).index());
    //텍스트 추가 방법 .text(내용) .html(내용)    
    
    // tabContent.children('a').removeClass('active');
    // tabContent.children('a').addClass('active');
    // tabContent.children('a').toggleClass('active'); 선택한 대상에 클래스명을 넣다 뺏다

    //내가 클릭한 요소에만 active를 추가하고 나머지에서 active 제거하는 방법도 있는데 이 방법으로 해보면
    $(this).find('a').addClass('active');
    $(this).siblings.find('a').removeClass('active') //$(this).siblings.find('li')형제 자매들중에 li만
    // 자바스크립트에서 요소에서 자식요소를 또 선택하는 방법 querySelector('자식')
    // jquery는 자식요소 선택하는 것 대상.children('선택자')
    // jquery는 위와 완전 같은 대상.flicdren('선택자')도 있다
    // jquery는 대상의 직속 부모 요소 선택하는 것 대상.parent('선택자')
    // jquery는 가까운 조상 요소 중 대상.closest('선택자')
    // jquery는 형재, 자매 요소 중 대상.siblings('선택자')
    // jquery는 이전요소 선택 prev()
    // jquery는 다음요소 선택 next()
    // jquery는 선택한 요소를 위쪽으로 서서히 사라지게 합니다. slideup()
    // jquery는 선택한 요소를 아래쪽으로 서서히 나타나게 합니다. slideDown()
    // jquery는 선택한 요소가 보이면 보이지 않게, 보이지 않으면 보이게 합니다. slideToggle()

    tabContent.removeClass('active')
    tabContent.eq(targetIdx).addClass('active')
  })