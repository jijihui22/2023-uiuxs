// document.addEventListener('DOMContentLoaded',()=>{

// })

let video = document.querySelector('video') ,
    videoPlayBtn = document.getElementById('vplay'),
    videoStopBtn = document.getElementById('vstop'),
    videoPauseBtn = document.querySelector('#vpause'),
    audio = document.querySelector('audio'),
    audioPlayBtn = document.querySelector('#aplay'),
    audioPauseBtn = document.querySelector('#apause'),
    videoToggleBtn = document.querySelector('.video_wrapper button');

    videoToggleBtn.addEventListener('click',()=>{
      videoToggleBtn.classList.toggle('active');
      if(videoToggleBtn.classList.contains('active')){
        video.play();
      }else{
        video.pause();
      }
    });


    audioPlayBtn.addEventListener('click',()=>{
      audio.play();
    });
    audioPauseBtn.addEventListener('click',()=>{
      audio.pause();
    });


    videoPlayBtn.addEventListener('click',()=>{
      video.play();
    });
    videoPauseBtn.addEventListener('click',()=>{
      video.pause();
    });
    videoStopBtn.addEventListener('click',()=>{
      video.pause();
      video.currentTime = 0;
    });