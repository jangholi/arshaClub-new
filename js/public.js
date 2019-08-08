$('#aboutMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
})
$('#registerMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#register").offset().top
    }, 2000);
})
$('#packagesMenu').click(function() {
    $('html, body').animate({
        scrollTop: $("#packages").offset().top
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
    // rtl: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    rtl: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
});