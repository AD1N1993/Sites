$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="arrow-left" src="img/arrow-left.svg" alt="click">',
    nextArrow: '<img class="arrow-right" src="img/arrow-right.svg" alt="click">',
    asNavFor: '.slider-dots',
  });
  $('.slider-dots').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    asNavFor: '.header__slider',
    focusOnSelect: true,
  });
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="arrow-left" src="img/arrow-left.svg" alt="click">',
    nextArrow: '<img class="arrow-right" src="img/arrow-right.svg" alt="click">',
    focusOnSelect: true,
    asNavFor: '.points-slider',
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]

  });
  $('.points-slider').slick({
    slidesToShow: 8,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: 0,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: 0,
        }
      },
    ]
  });
  $('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="arrow-left" src="img/arrow-left.svg" alt="click">',
    nextArrow: '<img class="arrow-right" src="img/arrow-right.svg" alt="click">'
  })
  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    $('.quantity-button').on('click', function () {
      var parents = $(this).parents('.holder-slider__info');
      let summ = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
      $('.sum', parents).html('$' + summ + ' USD');
    });

  });

  $('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active');
  });
  $('.shop__slider').slick({
    slidesToShow: 1,
    prevArrow: '<img class="arrow-left" src="img/arrow-left.svg" alt="click">',
    nextArrow: '<img class="arrow-right" src="img/arrow-right.svg" alt="click">'
  });

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('show');
    $('.menu-btn__line').toggleClass('minus');
  });

  // Smoth scroll
  $(function () {
    $("a[href^='#']").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  });
  new WOW().init();
});