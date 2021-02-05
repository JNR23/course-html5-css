$(function () {
    //MENU
    $('.nav-toggle, .nav-close').click(function (e) {
        e.preventDefault();
        $('.nav').toggleClass('active');
    }); 

    //FIXED HEADER
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    })
});