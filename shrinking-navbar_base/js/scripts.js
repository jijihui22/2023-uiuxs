/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/
let $window = $(window),
    header = $('#main-header'),
    logo = $('#logo'),
    defaultLogo = "images/logo.svg",
    smallLogo = "images/logo-shrink.svg";

/*
  윈도우에 스크롤이 생기면 할일
    그 양이 0보다 크면
      header에 shrink 클래스명 추가
    작으면
      header에 shrink 클래스명 제가
*/
    $window.scroll(function(){
      if($(this).scrollTop() > 0){
        
        //header에 클래스명 shrink 없다면
        if(!header.hasClass('shrink')){
                  header.addClass('shrink');
        //로고의 경로를 작은 이미지로 변경
        
        changelogo(smallLogo)
        }

        /*
          현재이미지 스윽 사라지고
          작은로고변경
          로고 스윽 나타난다
          이걸 한번에 함수로 사라졌다 바뀔 이미지가 나타나게 하자 
          매개변수 newPath로 경로가 들어오면
          현재로고는 스윽 사라지고
          현재로고의 이미지 경로fmf newPath 변경
          현재로고가 스윽 나타난다

          fadein 은 기본 설정이 .4초 자세히 알자면 기본이 대상.fadein([duration], 추가 할일을 function으로 쓴다) 대상.fadein([400], function(){})
          fadeout도 위와 같음
        */
       
          //변수 스위치
//클래스명이 있을떄만해 
      }else{
        //header에 클래스명 shrink 없다면
        
        if(header.hasClass('shrink')){
          header.removeClass('shrink');
        //로고의 경로를 큰 이미지로 변경
        changelogo(defaultLogo)
        }

        
      }

    });
    
    function changelogo(newPath){
      logo.fadeOut(400, function(){
        logo.attr('src', newPath).fadeIn()
      })
    }
