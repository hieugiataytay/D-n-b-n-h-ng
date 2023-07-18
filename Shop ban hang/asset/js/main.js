
$ = jQuery
// $('#exampleModalCenter').on('shown.bs.modal', function () {
//     $('.slide-quickview-main, .slide-quickview-sub').slick('setPosition');
// });

$( document ).ready(function() {
    $('.cart-export-form').hide();
    $(".menu-cat-lv0").click(function(){
        $(this).find(".menu-cat-lv1").slideToggle();
        $(this).find(".button-sub").toggleClass("change");
    });

    // header menu
    // $('.search-box-fixed').hide();
    // $('#section-overlay').hide();
    $(".menu-header-right .icon-glass").click(function(){
        $('.search-box-fixed').fadeIn();
        $('#section-overlay').addClass('open');
    });

    $(".action-close i").click(function(){
        $('.search-box-fixed').fadeToggle();
        $('#section-overlay').toggleClass('open');
    });

    // $('#section-cart .promotion-note span').hover(
    //     function() {
    //         $('.promotion-form').toggleClass( "hover-active" );
    //     }
    // )


    // Test
    $('#showButton').click(function() {
        if ($('#hiddenDiv').is(':hidden')) {
          // Nếu div đang ẩn, thực hiện hiệu ứng hiển thị
          $('#hiddenDiv').css('left', '-200px').css('display', 'block').animate({ left: '0' }, 1000);
        } else {
          // Nếu div đang hiển thị, thực hiện hiệu ứng ẩn
          $('#hiddenDiv').animate({ left: '-200px' }, 1000, function() {
            $(this).css('display', 'none');
          });
        }
      });

    // sticky
    const headerMenu = $("#header-menu");
    const content = $(".content");
    const triggerHeight = 500; // Set the height where you want the menu to become sticky

    function updateStickyHeader() {
        if ($(window).scrollTop() >= triggerHeight) {
        headerMenu.addClass("sticky-header");
        content.css("padding-top", headerMenu.outerHeight() + "px");
        } else {
        headerMenu.removeClass("sticky-header");
        content.css("padding-top", 0);
        }
    }

    // Call the function on page load and when scrolling
    $(window).on("load scroll", updateStickyHeader);
    


});

