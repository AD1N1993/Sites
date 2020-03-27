$(document).ready(function () {
   $('.slider-wrap').slick({
      slidesToShow: 1,
      responsive: [{
         breakpoint: 992,
         settings: {
            dots: true,
            arrows: false,
            fade: true,
         }
      }]
   });

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   function toggleSlide (item) {
      $(item).each(function (i) {
      $(this).on('click', function (e) {
         e.preventDefault();
         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
   });
   }
   toggleSlide('.catalog-item__link');
   toggleSlide('.catalog-item__back');
   // Modal
   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn('slow');
   });
   $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
   });
   $('.catalog-item__btn').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      });   
   });

   function validateForms(form) {
      $(form).validate({
         rules: {
            name:{
               required: true,
               minlength: 2
            },
            phone:"required",
            email:{
               required: true,
               email: true
            }
         },
         messages: {
            name: {
               required: "Пожалуйста введите своё имя",
               minlength: jQuery.validator.format("Введите не менее {0} символов!")
            },
            phone: "Пожалуйста введите свой номер телефона",
            email: {
               required: "Пожалуйста введите адрес своей почты",
               email: "Пример ввода: name@mail.ru"
            }
         }
      });
   }

   validateForms('#consult-form');
   validateForms('#consultation form');
   validateForms('#order form');
// Маска
   $('input[name=phone]').mask("+7(999) 999-9999");
// Message
   $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
      }).done(function () {
         $(this).find('input').val('');
         $('#consultation, #order').fadeOut();
         $('.overlay, #thanks').fadeIn();

         $('form').trigger('reset');
      });
      return false;
   });
   // Smoth scroll and pageup
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1600) {
         $('.pageup').fadeIn();
      }else{
         $('.pageup').fadeOut();
      }
   });

   $(function(){
      $("a[href^='#up']").click(function(){
         const _href = $(this).attr("href");
         $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
         return false;
      });
   });
   
   new WOW().init();
});