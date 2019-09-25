// Show on load
$(document).ready(function () {
    $(".navbar-brand h3").css('color', '#262A3B');
    $(".navbar-nav > li > a").css('color', '#262A3B');
    $(".navbar-toggler").css('background-color', '#262A3B');
});

/* Navigation */
// Show/hide translucent navigation bar
$(function () {
    $(window).scroll(function () {
        // if scroll top is less than 50 pixels, hide the nav bar
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("web-top-nav");
            $("navbar-toggler").removeClass("web-top-nav");
            $(".navbar-brand h3").css('color', '#262A3B')
            $(".navbar-nav > li > a").css('color', '#262A3B')
            $(".navbar-toggler").css('background-color', '#262A3B')
            $("#back-to-top").fadeOut();
        }
        else { // else show the nav bar
            $("nav").addClass("web-top-nav");
            $(".navbar-brand h3").css('color', '#FFFFFF')
            $(".navbar-nav > li > a").css('color', '#FFFFFF')
            $(".navbar-toggler").css('background-color', 'rgba(0,0,0,0.1)');
            $("#back-to-top").fadeIn();
        }
    });
});

/* Experiences */
$(document).ready(function () {
    // animate on scroll
    new WOW().init();
})

/* Programs */
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

/* Smooth Scrolling */
$(function () {
    $('a.smooth-scroll').on('click', function (e) {
        // console.log(this.hash);  // prints id #home, #about, #experiences, #projects, etc
        if (this.hash != '') {
            e.preventDefault();

            const hash = this.hash;

            if (hash === '#contact') {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 710
                }, 1250, 'easeInOutExpo');
            }
            else if (hash !== '#home') {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 65
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
$(function () {
    $('.navbar-collapse ul li a').on("click touch", function () {
        $('.navbar-toggler').click();
    });
});