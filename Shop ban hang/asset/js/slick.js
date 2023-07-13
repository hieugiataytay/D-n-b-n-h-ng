
$ = jQuery
$('#exampleModalCenter').on('shown.bs.modal', function () {
    $('.slide-quickview-main, .slide-quickview-sub').slick('setPosition');
});


$(document).ready(function(){
    $('.home-background').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
        `<button type='button' class='slick-arrow slick-prev pull-left'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow:
        `<button type='button' class='slick-arrow slick-next pull-right'><i class="fa-solid fa-chevron-right"></i></button>`,
    });

    $('.slide-home-news').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:
        `<button type='button' class='slick-arrow slick-prev pull-left'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow:
        `<button type='button' class='slick-arrow slick-next pull-right'><i class="fa-solid fa-chevron-right"></i></button>`,
    });

    $('#section-product-featured .product-featured-slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
        `<button type='button' class='slick-arrow slick-prev pull-left'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow:
        `<button type='button' class='slick-arrow slick-next pull-right'><i class="fa-solid fa-chevron-right"></i></button>`,
        
    });

    $('.slide-quickview-sub').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slide-quickview-main',
        centerMode: true,
        focusOnSelect: true
        });

    $('.slide-quickview-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-quickview-sub'
    });

 
});

