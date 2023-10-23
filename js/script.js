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
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4
});

var filtered = false;

$('.js-filter').on('click', function () {

    if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});