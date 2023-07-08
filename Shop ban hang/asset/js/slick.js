console.log('a')
$ = jQuery

$(document).ready(function(){
    $('.home-background').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
