//breakpoints
var bp_phone = 480;
var bp_tablet = 768;
var bp_desktop = 1024;


$(document).ready(function(){
    $('.slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: bp_tablet,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: bp_phone,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
 });