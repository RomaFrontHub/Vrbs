$(document).ready(function() {
    new WOW().init();

    $('.menu-icon').click(function() {
        $('.header__nav').slideToggle(500);
        $('ul.nav-ul').css({
            'display': 'flex',
            'flex-direction': 'column'
        });
        $('.header__logo').toggleClass('burger-logo');
        if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>');
        } else {
            $(this).html('<i class="fas fa-bars"></i>');
        }
    });


    function blink_text() {
        $('#subscribe__submit').fadeOut(700);
        $('#subscribe__submit').fadeIn(700);
    }


    setInterval(blink_text, 2000);

    // $(".toggle_mobile_btn").click(function() {
    //   $(".toggle_mobile_btn").toggleClass("on");
    //   $("body").toggleClass("body_menu");
    //   $("header").toggleClass("open_menu");
    //  return false;
    //    });

    /*

    (function($) {
      $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
        });
      });
    })(jQuery);




        $('.popup-link').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        });
    	
    	    $('.sert_slider').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

            }
        });
    	
    	*/



    //
});