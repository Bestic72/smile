$(document).ready(function() {
    var reviews = $('.reviews__slides').owlCarousel({
        smartSpeed: 600,
        loop:true,
        margin: 30,
        items: 3,
        responsive:{
            0:{
                margin: 90,
                items:1
            },
            550:{
                margin: 30,
                items: 2
            },
            850:{
                margin: 20,
                items: 3
            },
            900:{
                margin: 30,
                items: 3
            }
        }
    });

    $('.reviews__slider-next').click(function() {
        reviews.trigger('next.owl.carousel');
    });

    $('.reviews__slider-prev').click(function() {
        reviews.trigger('prev.owl.carousel');
    });

    $('.js-scroll-link').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: $($(this).data('href')).offset().top }, 1000);
    });
});