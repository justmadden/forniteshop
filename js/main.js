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
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        arrow: true,
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
    });


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

    window.addEventListener('scroll', OnScroll);
    window.addEventListener('resize', () => {
        if ($('.header-slider').find('.prev').length === 0) {
            var dots = $(".slick-dots")[0]
            $(dots).wrap('<div class="sliderNavWrap"></div>');
            var wrap = $('.sliderNavWrap')[0];
            $(wrap).prepend(` <div class="prev"><img src="./img/prev.svg" alt="">
        </div>`).append(` <div class="next">
        <img src="./img/next.svg" alt=""> </div>`);
        }

    });
    var dots = $(".slick-dots")[0]
    $(dots).wrap('<div class="sliderNavWrap"></div>');
    var wrap = $('.sliderNavWrap')[0];
    $(wrap).prepend($('.prev')[0]).append($('.next')[0]);
    // $(dots).append($('.slick-prev.slick-arrow')[0]);
})