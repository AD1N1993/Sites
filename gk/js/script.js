$(function () {
$('.header-contacts__button').on('click', function () { 
  $('.overlay').show();
});
$('.popup-close').on('click', function () {
  $('.overlay').hide();
});
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  responsive:[
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        fade: false,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        fade: false,
        infinite: true,
        arrows: true
      }
    },
  ]
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: false,
  variableWidth: true,
  centerMode: true,  
});
$('.review-slider').slick({
  slidesToShow: 3,
  variableWidth: true,
  arrows:true,
  responsive:[
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        centerMode: true
      }
    },
  ]
});

ymaps.ready(function () {
  
  var myMap = new ymaps.Map('map', {
          center: [54.752656, 56.002053],
          zoom: 18
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
        
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: '',
          balloonContent: 'Офис: 2 этаж, каб.331'
      }, {
          // Опции.
          
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/header_logo.png',
          // Размеры метки.
          iconImageSize: [95, 30],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-30, -30]

      });

  myMap.geoObjects
      .add(myPlacemark);
  myMap.behaviors
      .disable(['scrollZoom']);
});
  
});
