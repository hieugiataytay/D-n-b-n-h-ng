
$ = jQuery
// $('#exampleModalCenter').on('shown.bs.modal', function () {
//     $('.slide-quickview-main, .slide-quickview-sub').slick('setPosition');
// });

$( document ).ready(function() {
    $('.cart-export-form').hide();
    $(".menu-cat-lv0").click(function(){
        $(this).find(".menu-cat-lv1").toggleClass("open");
        $(this).find(".button-sub").toggleClass("change");
    });

    $("#section-cart .cart-content-left .cart-export-text").click(function(){
        $('#section-cart .cart-content-left .cart-export-bill span').toggleClass('active-button')
        $('.cart-export-form').slideToggle();
    });
});

