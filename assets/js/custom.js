/*==================
Experiences
==============*/
$(document).ready(function() {
    // animate on scroll
    new WOW().init();
})

// TODO: make an automatic carousel with the different logos of programming, design languages

// Navigation
//show/hide transparent black navigation
$(function() {
    $(window).scroll(function() {
        // if scroll top is less than 50 pixels, hide the nav bar
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("web-top-nav");
        }
        else { // show
            $("nav").addClass("web-top-nav");

        }
    });
});