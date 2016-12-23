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
	$('#signInForm').foundation('resetForm');
});
$('.createAccountBtn').hover(function() {
			$(this).removeClass("hollow");
		}, function() {
			$(this).addClass("hollow");
	}
);
