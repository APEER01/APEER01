'use strict';

{

  window.addEventListener('load', function(){
    function appear1(){
      const spans = document.querySelectorAll('span');
      spans.forEach(span =>{
        span.classList.add('appear')
      });

      const bar = document.getElementById('bar');
      bar.classList.add('progress');
    }

    function appear2(){
      const saruemon = document.getElementById('saruemon');
      saruemon.classList.add('up');
    }

    setTimeout(appear1, 0);
    setTimeout(appear2, 1700);
  });

    // 1秒間に1～100までカウント
    let count = 1;

    const interval = setInterval(function(){
      const counter = document.getElementById('counter');
      counter.textContent = count + '%';
  
      count++;
  
      if(count > 100){
        clearInterval(interval);
      }
    }, 15);

  // ページ遷移（自動）
  // function movePage(){
  //   setTimeout(function (){
  //     window.location.href = "home.html";
  //   }, 2500);
  // }
  // window.addEventListener('load', movePage);

}