window.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.header-menu__list'),
         menuItem = document.querySelectorAll('.header-menu__list'),
         hamburger = document.querySelector('.header-hamburger');

   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('header-hamburger_active');
      menu.classList.toggle('header-menu__list_active');
   });

   // menuItem.forEach(item => {
   //     item.addEventListener('click', () => {
   //         hamburger.classList.toggle('hamburger_active');
   //         menu.classList.toggle('menu_active');
   //     })
   // })
})