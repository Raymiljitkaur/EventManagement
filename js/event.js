$(document).ready(function() {
	$('.ul').hide();
	$(".event").find("div").click(function() {
		$(".event").find("div").css("height", "250px");
		$(this).css("height", "auto");
		$(this).find('.ul').show(3000);
	});
	$('h2').mouseover(function() {
		$('.ul').hide();
	});
});
