$(function(){

    $('.main_slides').bxSlider();


    var header = $('body > header');
    var services = $('.services');
    var counterParent = $('.counters');
    var triggerPoint = counterParent.offset().top - 400;
                
    $(window).scroll(function(){
        var scrollAmt = $(window).scrollTop();

        //헤더고정
        if(scrollAmt > 0){
            header.addClass('fixed');
        }else{
            header.removeClass('fixed');
        }
        //서비스 항목 애니메이션
        if(scrollAmt > 300){
            services.addClass('active');
        }else{
            services.removeClass('active');
        }

        if(scrollAmt > triggerPoint){
            if(!counterParent.hasClass('activated')){            
                for(a=0;a<counters.length;a++){
                    numberAnimate(a);
                }    
            }    
        }

    }); //scroll event



    //latest_projects Filter
    var filterBtn = $('.latest_projects .controls button'),
        projectList = $('.latest_projects_list li');

    filterBtn.click(function(){
        if($(this).hasClass('active')){
            return;
        }
        filterBtn.removeClass('active');
        $(this).addClass('active');

        projectList.hide();
        var targetClass = $(this).attr('data-filter');
        var filteredList = $('.latest_projects_list').find(targetClass);

        if(targetClass == 'all'){
            projectList.fadeIn(800);
        }else{
            filteredList.fadeIn(800);
        }
    }); //filterBtn.click    

    //비디오 모달
    var videoModalBtn = $('.presentation .play');
    var targetOverlay = $('#overlay');
    var targetIframe = targetOverlay.find('iframe');
    var currentSrc = targetIframe.attr('src');

    videoModalBtn.click(function(e){
        e.preventDefault();        

        var newSrc = currentSrc.concat('?autoplay=1');
        targetIframe.attr('src', newSrc);

        targetOverlay.addClass('active');
    });
    targetOverlay.click(function(){
        $(this).removeClass('active');
        targetIframe.attr('src', currentSrc);
    });

    //number animation 


    var counters = $('.couters_list h3');

    function numberAnimate(index){
        var num = 0;
        var targetNum = counters.eq(index).attr('data-num'); //변경
        var speed = 30;
        if(targetNum > 800){
            speed = 5;
        }

        var animateTimer = setInterval(function(){
            ++num;
            counters.eq(index).text(num);   //변경
            if(num == targetNum){
                clearInterval(animateTimer);
            }
        },speed);
        counterParent.addClass('activated'); //변경
    }
    // recent post Multiple slide
    var recentSlideWrapper = $('.recent_post_slide_wrap'),
        recentSlideUl = recentSlideWrapper.find('.recent_post_slides'),
        recentSlides = recentSlideUl.find('li'),
        recentSlideCount = recentSlides.length,
        recentCurrentIdx = 0,
        recentSW = 350,
        recentSM = 30,
        recentPrev = recentSlideWrapper.find('.controls .prev'),
        recentNext = recentSlideWrapper.find('.controls .next');

        //슬라이드 부모 너비 계산  (350+30)*6 - 30
        recentSlideUl.css({width:(recentSW+recentSM)*recentSlideCount - recentSM + 'px'});

        //슬라이드 이동함수
       function recentSlide(idx){
            recentSlideUl.stop().animate({left : -idx*(recentSW+recentSM) + 'px'}, 400, 'easeInExpo');
            recentCurrentIdx = idx;
       }

        //좌우 버튼 이동함수 작동
        recentNext.click(function(e){
            e.preventDefault();
            if(recentCurrentIdx == recentSlideCount -3){
                recentSlide(0);
            }else{
                recentSlide(recentCurrentIdx + 1);
            }
        });
        recentPrev.click(function(e){
            e.preventDefault();
            if(recentCurrentIdx == 0){
                recentSlide(recentSlideCount -3);
            }else{
                recentSlide(recentCurrentIdx - 1);
            }
        });


});//onload