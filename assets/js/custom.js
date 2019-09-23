/*==================
Experiences
==============*/

$(document).ready(function () {
    // animate on scroll
    new WOW().init();
})

// TODO: make an automatic carousel with the different logos of programming, design languages
$(document).ready(function() {
    $(".navbar-brand h3").css('color', '#00203F');
    $(".navbar-nav > li > a").css('color', '#00203F');
    $(".navbar-toggler").css('background-color', '#00203F');
    

    // $(".navbar-nav > li > a:hover, .navbar-nav > li > a:focus")
    // $(".navbar-nav > li > a").hover(function() {
    //     $(this).css({"background-color": "none", "color": "#34c6d3"})
    //   });
    //   $(".navbar-nav > li > a").focus(function() {
    //     $(this).css({"background-color": "none", "color": "#34c6d3"})
    //   });
});

// Navigation
// Show/hide transparent black navigation
$(function () {
    $(window).scroll(function () {
        // if scroll top is less than 50 pixels, hide the nav bar
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("web-top-nav");
            $("navbar-toggler").removeClass("web-top-nav");
            $(".navbar-brand h3").css('color', '#00203F')
            $(".navbar-nav > li > a").css('color', '#00203F')
            $(".navbar-toggler").css('background-color', '#00203F')
            $("#back-to-top").fadeOut();
        }
        else { // show
            $("nav").addClass("web-top-nav");
            $(".navbar-brand h3").css('color', '#4B6076')
            $(".navbar-nav > li > a").css('color', '#4B6076')
            $(".navbar-toggler").css('background-color', 'rgba(0,0,0,0.1)');
            $("#back-to-top").fadeIn();
        }
    });
});

// Programs
$(document).ready(function () {
    $("#programs-list").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        items: 7,
        autoplay: true,
        // smartSpeed: 350,
        loop: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: false,
        autoplaySpeed: 1200,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 3
            },
            // breakpoint from 480 up
            480: {
                items: 4
            },
            // breakpoint from 760 up
            760: {
                items: 5
            },
             // breakpoint from 992 up
            992: {
                items: 8
            }
        }
    });
});


// Smooth Scroll
$(function () {
    $('a.smooth-scroll').on('click', function (e) {
        // console.log(this.hash);  // prints id #home, #experiences, #about, #projects, etc
        if (this.hash != '') {
            e.preventDefault();

            const hash = this.hash;
            
            if (hash === '#contact') {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 600
                }, 1250, 'easeInOutExpo');
            }
            else if (hash !== '#home') {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 55
                }, 1250, 'easeInOutExpo');
            }
            else {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1250, 'easeInOutExpo');
            }           
        }
    });
});

// Close mobile menu on click
$(function() {
    $('.navbar-collapse ul li a').on("click touch", function() {
        $('.navbar-toggler').click();
        // console.log("TOUCH")
    });
});