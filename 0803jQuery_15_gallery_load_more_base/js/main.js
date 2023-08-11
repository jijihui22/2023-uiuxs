$(function () {
let contains = $('#gallery'),
    loadMoreBtn = $('#load-more'),
    addItemCount = 12, //출력될 개수
    added = 0, //출력된 개수
    allDate = [];

    // * 벽돌 기본 라이브러리 시작    
    // * 벽돌처럼 빈공간에 뒤 요소가 오게 하기 json다 코드하고 이미지까지 나오면 할 일 인데 미리 라이브러리 넣어놔야 되서 여기 위치에 있음
    contains.masonry({//벽돌라이브러리를 초반에 이렇게 넣구 아래 이미지 imagesLoaded라이브러리로 넣고 사용할 벽돌라이브러리 스타일을 안에 넣는다
      // options
      itemSelector: '.gallery-item',
      columnWidth: 270,
      gutter:20
    });
    // * 벽돌 기본 라이브러리 끝


    // $.getJSON("./data/content.json", function(result){ //실행되는 시점에서 실행되니 절대 경로(.../) 말고 index.html기준으로 쓰자
    //그리고 왼쪽의 모든 내용을 매개변수 result로 받는다
    // 그 대상 안에 것이 각자 할일은 .each로 받음
      
    // });
    $.getJSON("./data/content.json", initGallery);//위와 같은 거 복사 후 오른쪽 부분을 함수로 만든다
  
    function initGallery(data){
        allDate = data
        console.log(allDate)
    }

    addItem() //데이터추출, 리스트태그생성, ul의 내용에 추가 //more 클릭 시에도 기존 뒤서 12개추출 보여줘

    // loadMoreBtn.on('click', function(){//할일은
    //   addItem()//이 할일이야 두번 할일을 줄여서 적으면 아래와 같이 적으면 된당 
    // })

    loadMoreBtn.on('click', 
      addItem
    )
  
    function addItem(){//배열에서 0~12까지 추출
      
      let elements = [], //12개의 리스트가 저장될 배열, 저장되면 그걸 여기다 두고 나중에 추출해 넣자 
      //브라우저는 12개씩 추출해서 넣는것보다 //  한번에 다 추출해 저장해 놓고 가져오는게 부담 적다

          slideDate = allDate.slice(added, added + addItemCount) //대상.slice(시작번호, 끝번호), 0, 12자리 에 그 숫자의 변수 써 보장
          console.log(slideDate)

          $.each(slideDate, function(i, item){//12개 마다 할일
            let itemHtml = `
            <li class="gallery-item">
            <img src="${item.images.thumb}" alt="${item.title}">
            <h2>${item.title}</h2>
            </li>`


            elements.push(itemHtml).get(0)
          });

          console.log(elements)
          contains.append(elements)
          added += addItemCount;

        //   if(added < allDate.length){// 40개 이상을 출력하려하면 그 이상 보이지 않아야 함
        //    loadMoreBtn.show()
        //  }else{
        //    loadMoreBtn.hide()
        //  }     

        //벽돌처럼 빈공간에 뒤 요소가 오게 하기
        contains.imagesLoaded( function(){
          //imagesLoaded라이브러리 = 문서 안에 또는 특정 요소 안에 있는 이미지가 모두 로딩되었는지 감지하는 자바스크립트(제이쿼리도 사용가능) 라이브러리
          // 이미지가 로딩되기 전에, 로딩 중에 있을 때, 로딩된 후에 어떤 작업을 하고 싶을 때 사용

          contains.masonry( 'appended', $items )//.grid 는 부모를 넣고 각각 .grid-item자리에 넣는다
          //잘 적용되면 검사하면 html각 요소에 absolute와 top값이 들어가 있어야 한다
          //ul안에 이미지가 다 들어와 있어야 하는 데 라이브러리가 작동하는데 
          //클릭을 안한 현재 ul에는 이미지가 없어서
        });
        }
        
        
});
