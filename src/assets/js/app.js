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
