$(document).foundation();
$('#logoImg').addClass('animated zoomInLeft');
$('.Announcement').unslider({
	autoplay: true,
	infinite: true,
	arrows: false,
	nav: false
});
$('img').unveil();
$('body').materialScrollTop({
	duration: 600
});
$('.close-button').click(function(){
	$('.signError').hide();
	$('.emailError').hide();
	$('#signInForm').foundation('resetForm');
	$('#emailCheckForm').foundation('resetForm');
});
$('.createAccountBtn').hover(function() {
			$(this).removeClass("hollow");
			$(this).addClass("alert");
		}, function() {
			$(this).addClass("hollow");
			$(this).removeClass("alert");
	}
);
