$(document).ready(function(){
	$('.products').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
        prevArrow: '<div class="slick-prev1 slick-arrow1"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next2 slick-arrow2"><i class="fa-solid fa-chevron-right"></i></div>',
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

