jQuery(document).ready(function ($) {
 
 
    //initialise Stellar.js
    $(window).stellar();
 
    //Cache some variables
    var links = $(".scrollNav").find("li");
    slide = $(".slide");
    mywindow = $(window);
    htmlbody = $("html,body");
 
 
    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {
 
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');

        $('.scrollNav__item[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        $('.scrollNav__item[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
 
    });
 
    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.scrollNav__item[data-slide="1"]').addClass('active');
            $('.scrollNav__item[data-slide="2"]').removeClass('active');
        }
    });
 
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }
 
 
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    }); 

});