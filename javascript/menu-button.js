document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('menu-button');
  const menuback = document.getElementById('menu-back');
  const navMenu = document.getElementById('header-menu-nav');
  const navLinks = document.querySelectorAll('.header-menu-nav a');

  // ハンバーガーボタンクリックでメニューを開閉
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    menuback.classList.toggle('active');
  });

  // メニュー内のリンクをクリックしたら自動でメニューを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('active');
        menuback.classList.remove('active');
    });
  });
});