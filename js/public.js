$('#registerMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#register").offset().top
    }, 2000);
})
$('#3MonthBaseMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#3MonthBase").offset().top
    }, 2000);
})
$('#3MonthPublicMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#3MonthPublic").offset().top
    }, 2000);
})
$('#3MonthSkilledMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#3MonthSkilled").offset().top
    }, 2000);
})
$('#worksMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 2000);
})
$('#learnMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#learn").offset().top
    }, 2000);
})
$(".into-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    rtl: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
});
$("#arsha-facility").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    rtl: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});