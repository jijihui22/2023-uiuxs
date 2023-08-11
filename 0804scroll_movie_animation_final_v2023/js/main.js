$(function () {
  let imageWrapper = $('.image-sequence');
  let images = imageWrapper.find('img');
  let lastSCT = 0;
  let count = 0;
  let imageWrapperOST = imageWrapper.offset().top;
  let isActive = false;


 $(window).scroll(function(){
    let currentSCT = $(this).scrollTop();

    if(currentSCT >= imageWrapperOST){

      if(!isActive){//Active 효과가 나타날때를 if로 만들어 주고 빠르게 진행되는 걸 setTimeOut으로 막아준다
        if(lastSCT < currentSCT){
          console.log('down');
          if(count<images.length -1){
            count++;
            showImg();
          } else{
            images.eq(images.length-1).show();
          }
        }else{
          console.log('up');
          if(count > 0){
            count--;
            showImg();
          }else{
            images.eq(0).show();
          }
        }
        isActive = true;
        setTimeout(()=>{
          isActive = false;
        },10)
      }//ifActive 



    }
    console.log(count);
    lastSCT = $(this).scrollTop();

 });

 function showImg(){
  images.hide();  
  images.eq(count).show();    // eq안에 숫자가 스크롤에 따라 커지고 작아진다  
 }


  

});
