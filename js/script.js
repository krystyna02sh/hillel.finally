console.log('It work!');

$('.burger-container').click(function () {
    $('.burger-container').toggleClass('active');
    $('.burger').toggleClass('active');
    $('.wrapper-nav').toggleClass('active');
    $('.flex-nav').toggleClass('active');
    const target = $(this).data('target');
    $('target').addClass('active');
});

$('.wrapper-nav').click(function (event) {
    if (this === event.target) {
        $('.burger-container').removeClass('active');
        $('.wrapper-nav').removeClass('active');
        $('.flex-nav').removeClass('active');
        $('.burger').removeClass('active');
    }

});
$('.send-button').click(function () {
    console.log(this)
    $('.send-button').addClass('active');
});
// $(document).ready(function () {
//     $('.my-slider').slick();

// });
$('.my-slider').slick({

    adaptiveHeight: true,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})