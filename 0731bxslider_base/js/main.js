$(function(){
	
	/* ---------- 기본 사용 ---------- */

	$(".slider").bxSlider();


	/* ---------- 좌우 컨트롤 ---------- */
	$(".control").bxSlider({
		controls:true,
		pager:false,
		nextText:'<i class="fa-solid fa-arrow-right"></i>',
		prevText:'<i class="fa-solid fa-arrow-left"></i>'
	});

	$(".control2").bxSlider({
		// controls:false,
		pager:false,
		prevSelector:'.control-slide2 .prev',
		nextSelector:'.control-slide2 .next',
	});	

	let myslide = $(".control3").bxSlider({
		controls:false,
		pager:false
	});	
	$('.control-slide3 .prev').click(function(){
		myslide.goToPrevSlide();
	});
	$('.control-slide3 .next').click(function(){
		myslide.goToNextSlide();
	});


	/* ---------- 멀티플 슬라이드 ---------- */
	$(".multiple-slider").bxSlider({
		minSlides:2,
		maxSlides:3,
		moveSlides:1,
		slideWidth:300,
		slideMargin:20
	})

	/* ---------- 현재 슬라이드 구분하기 ---------- */
	$(".active-slider").bxSlider({
		onSliderLoad:function(){
			$(".active-slider").find('div:eq(1)').addClass('active')
		},
		onSlideAfter:function($slideElement){
			$(".active-slider div").removeClass('active')
			$slideElement.addClass('active')
		}
	});
	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */
	let optionSlider = $(".option-slider").bxSlider({
		pager:false,
	});
	$(".option-slider").click(function(){
		optionSlider.goToSlide($(this).index())
	});

	/* ---------- 자동 슬라이드 ---------- */
	$(".auto-slider").bxSlider({
		auto:true,
		autoHover:true,
		// stopAutoOnClick:false,안해도 아래하면 됨
		autoControls:true,

	});
	
	/* ---------- 멀티플 자동 슬라이드 ---------- */
	$(".multiple-slider2").bxSlider({
		minSlides:2,
		maxSlides:3,
		moveSlides:1,
		slideWidth:300,
		slideMargin:20,
		auto:true,
		autoHover:true,
		// stopAutoOnClick:false,안해도 아래하면 됨
		autoControls:true,
	});

	/* ---------- 동영상 제어하기 ---------- */
	$(".video-slider").bxSlider({
		onSliderLoad:function(){
			$(".video-slider").find('div:eq(1)').find('video').get(0).play();
		},
		onSlideAfter:function($slideElement){
			$(".video-slider div").find('video').get(0).pause();
			$(".video-slider div").find('video').get(0).currentTime = 0; // 비디오 매번 처음부터 시작하게 하기 
			$slideElement.find('video').get(0).play();		
		}
	});
	
	/* ---------- 탭 연동 ---------- */
	$(".tab-slider").bxSlider({
		minSlides:2,
		maxSlides:3,
		moveSlides:1,
		slideWidth:300,
		slideMargin:20,
		auto:true,
		autoHover:true,
		autoControls:true
	});

	setTimeout(()=>{
		$( "#tabs" ).tabs();//jquery ui에서 tabs에서 가저온 거 탭 만들어
	},100);

	/*
	let tabSlier =	$(".tab-slider").bxSlider({
		minSlides:2,
		maxSlides:3,
		moveSlides:1,
		slideWidth:300,
		slideMargin:20,
		auto:true,
		autoHover:true,
		autoControls:true
	});

	setTimeout(()=>{},100);

	setTimeout(()=>{
		$( "#tabs" ).tabs({
			activate: function( event, ui ) {
				tabSlier.reloadSlider()
			}
		});
	},100)

	*/

});//document ready jquery 