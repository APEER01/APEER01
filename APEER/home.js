'use strict';

// headerアニメーション
{
  const h1 = document.getElementById('h1');
  const menuLi1 = document.getElementById('menu-li1');
  const menuLi2 = document.getElementById('menu-li2');
  const menuLi3 = document.getElementById('menu-li3');
  const menuLi4 = document.getElementById('menu-li4');
  const logoImg = document.getElementById('logo-img');


  function reload() {
    h1.classList.add('fade-right1');
    menuLi1.classList.add('fade-right2-1');
    menuLi2.classList.add('fade-right2-2');
    menuLi3.classList.add('fade-right2-3');
    menuLi4.classList.add('fade-right2-4');
    logoImg.classList.add('up');
  }
  reload();
}

// ページトップに戻る
{
  function scroll(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  document.getElementById('page-top').addEventListener('click', scroll)
}





