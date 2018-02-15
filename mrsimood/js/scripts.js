//jQuery code
jQuery(function($) {
	"use strict";

    if($(".insSmallSlider").length){
        $(".insSmallSlider").bxSlider({
            pager: false,
            adaptiveHeight: true
        });
    }

    if($(".insBigSlider").length){
        $(".insBigSlider").bxSlider({
            pager: false,
            adaptiveHeight: true,
            slideWidth: 960,

            onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
                console.log(currentSlideHtmlObject);
                $('.active-slide').removeClass('active-slide');
                $('.insBigSlider>li').eq(currentSlideHtmlObject + 1).addClass('active-slide')
            },

            onSliderLoad: function () {
                $('.insBigSlider>li').eq(1).addClass('active-slide')
            }
        });
    }

	
	$("<a href='#' class='navToggle'>Menu</a>").insertAfter(".insNav");

	$(".navToggle").on('click', function(e) {
		e.preventDefault();
		$(".insNav").slideToggle();
	});
	/* END: TOGGLE NAV */
	
	var nav = $(".nav_secondType");
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			nav.addClass("fixe");
		} else {
			nav.removeClass("fixe");
		}
	});

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('a.navToggle').show();
        } else {
            $('a.navToggle').hide();
        }
    });    
	/* END: FIXED SECOND NAV */


    $(window).load(function(){
        $('.preloader').fadeOut(500);
        $('body').removeClass('stop-scrolling');
    });


    /* Homepage video BG */
    // if($('.bg_first video').length){
    //     jQuery('.bg_first video,.bg_first video object').maximage('maxcover');
    // }


    /* Homapage Menu slider */
    if($('.menu-flex-slider').length){
        $('.menu-flex-slider').flexslider({
            animation: "slide",
            animationSpeed: 1000,
            directionNav: false
        });
    }

    /* Testimonial Sldier */
    if($('.testimonialslider').length){
        $('.testimonialslider').flexslider({
            animation: "fade",
            animationSpeed: 1000,
            directionNav: false
        });
    }

});