$(document).ready(function(){

    $(".testimonial-container").slick({
        appendArrows: $('.slick-nav'),
        appendDots: $('.slick-nav'),
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 100000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $(".nav-icon").click(function(e){
        $(this).toggleClass("open");
        $("nav").toggleClass("open");
    });

});