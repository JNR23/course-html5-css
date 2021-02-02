$(function () {
    $('.nav-toggle, .nav-close').click(function (e) {
        e.preventDefault();
        $('.nav').toggleClass('active');
    }); 
});