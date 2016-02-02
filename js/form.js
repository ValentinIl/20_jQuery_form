$(document).ready(function() {
	var child = $('.input_block').children();
	for (var i = 1; i < child.length; i++) {
		$(child[i]).hide();
	};

	// $( 'input.name' ).change(function() {
	// 	$('input.tel').show();
	// });
	// $( 'input.tel' ).change(function() {
	// 	$('input.email').show();
	// });
	// $( 'input.email' ).change(function() {
	// 	$('input.password').show();
	// });
	// $( 'input.password' ).change(function() {
	// 	$('label').show();
	// });
	// $( 'label' ).change(function() {
	// 	$('input.btn').show();
	// });


	$( child ).change(function changePrev() {
		$( this ).show( function () {
			$( this ).next().show().focus();

			function showNext() {
				$( this ).change(function () {
					$( this ).next().show( changePrev ).focus();
				});
			};
		});
	});


	$( 'input.btn' ).click(function() {
		$('div.form').hide();

		var username=$('input.name').val();
		$('#none-ie').append($('<h2></h2>').html('Hello '+username+'!').addClass('text-center'));
	});
});