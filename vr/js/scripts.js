$(function(){

	// Modals

	$('.js-show-modal').on('click', function(e){

		e.preventDefault();

		var currentModal = $(this).attr("href");

		$(currentModal + ', .overlay').fadeIn('slow');

	});

	$('.js-close-modal, .overlay').on('click', function(e){

		e.preventDefault();

		$('.js-modal, .overlay').fadeOut('fast');

	});



	// Rellax.js

	var rellax = new Rellax('.rellax');


	// Wow.js

	var wow = new WOW({
		offset: 150,
		mobile: false
	});
	wow.init();



	// MaskedInput (Валидация форм)

	$("input[type=tel]").mask("+7 (999) 999-9999");

	
});