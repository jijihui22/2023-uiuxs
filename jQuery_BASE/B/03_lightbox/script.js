let gallerylist = $('.gallery a'),
    lightbox = $('#lightbox-overlay'),
    lightboximg = lightbox.find('#lightbox-image');

    /*
      gallerylist클릭 시
      클릭한 그 요소안의 img 속성명 data-lightbox의 값을 imgSrc에 할당
      lightboximg의 src값을 imgSrc로 변경
      lightbox에 클래스 명 visible추가
    */
    gallerylist.click(function(e){
      e.preventDefault()
      let imgSrc = $(this).children('img').attr('data-lightbox');
      lightboximg.attr('src', imgSrc);
      lightbox.addClass('visible');
    })
    lightbox.click(function(e){
      e.preventDefault()
      lightbox.hide();
    })
