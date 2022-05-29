$(function () {

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 1,
            showinfo: 1
        }
    });
});

// Init blog slider
$(function () {
    $("#blog-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        prevArrow: '<div class="slick-prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa-solid fa-chevron-right"></i></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    })
})