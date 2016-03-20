$(document).ready(function() {
	$('.skip').click(function() {
		$(this).hide();
		$('.frame').hide();
		$('.wrapper').show();
		dynamicBg();
	});
	$('.english').click(function() {
		$('.wrapper').hide();
		$('.wrapper_english').show();
	});
	$('.chinese').click(function() {
		$('.wrapper_english').hide();
		$('.wrapper').show();
	});
});
