/*==================
Experiences
==============*/
$(document).ready(function () {
    // animate on scroll
    new WOW().init();
})

// TODO: make an automatic carousel with the different logos of programming, design languages

// Navigation
// Show/hide transparent black navigation
$(function () {
    $(window).scroll(function () {
        // if scroll top is less than 50 pixels, hide the nav bar
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("web-top-nav");
            $("#back-to-top").fadeOut();
        }
        else { // show
            $("nav").addClass("web-top-nav");
            $("#back-to-top").fadeIn();

        }
    });
});


$(function () {
    $('a.smooth-scroll').on('click', function (e) {
        // console.log(this.hash);  // prints id #home, #experiences, #about, #projects, etc
        if (this.hash != '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 55
            }, 1250, 'easeInOutExpo');
        }
    });
});