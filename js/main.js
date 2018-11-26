$(document).ready(() => {
    $('.header-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                    centerPadding: '50px',
                }
            }
        ]
    })
    function OnScroll(e) {
        var Fixed = $('.header-menu.fixed')[0];
        var Invisible = $('.header-menu.invisible')[0];
        var Header = $('header')
        if (window.scrollY >= Header.outerHeight()) {
            $(Fixed).addClass('Show');
        } else {
            $(Fixed).removeClass('Show');
        }
    }

    window.addEventListener('scroll', OnScroll)
})