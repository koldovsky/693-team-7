$(function(){

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 1
        }
    });
});