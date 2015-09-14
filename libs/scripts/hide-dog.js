var vwptHeight = $(window).height();  // высота экрана
var downloadPosition = vwptHeight * -0.15;  // начальное место кнопок загрузки

function downloadInitial() {
	$('.download').css({transform: 'translate(-490px,' + downloadPosition + 'px)'});
}

function heightInitial() {
	$('.section').css({height: vwptHeight});
}

$(document).ready(function() {

	downloadInitial(); // ставим кнопки внизу
    heightInitial(); // задаем секциям высоту

    var firstHeight = $('.first-screen').height();
    var howtoHeight = $('.howto').height();
    var tryHeight = $('.try').height() + 100;
    var appTitle = $('.app__title').outerHeight(true) + $('.app__subtitle').outerHeight(true);
    var appHeight = $('.app').height();
    var threeSectionsHeight = firstHeight + howtoHeight + tryHeight + appTitle - appHeight + 265; // высота первых трех секций и заголовок третьей

    var downloadHeight = $('.download').height();
    $('.app__line').css({height: appHeight - appTitle - downloadHeight - 50});

    $('.nav__dot-wrapper').click(function(){
        $('.nav__dot-wrapper').removeClass('nav__dot--active');
        $(this).addClass('nav__dot--active');

        if ($(this).hasClass('nav__first-screen')) {
            $(window).scrollTo($('.first-screen'), 200);
        } else if ($(this).hasClass('nav__howto')) {
            $(window).scrollTo($('.howto'), 200);
        } else if ($(this).hasClass('nav__try')) {
            $(window).scrollTo($('.try'), 200);
        } else if ($(this).hasClass('nav__app')) {
            $(window).scrollTo($('.app'), 200);
        };
    });

	$(window).scroll(function (event) {
        var scroll = $(window).scrollTop(); // сколько проскроллили
        var scrollStep = scroll * -0.7;
        var scrollMove = downloadPosition - scrollStep;  // шаг, на который двигаем кнопки
        var pathToGo = vwptHeight - scroll;  // путь кнопок до конца экрана

        var opacityNumber = 100 * scrollMove / downloadPosition * 0.01;  // непрозрачность кнопок зависит от того, сколько осталось до конца экрана

        if (scrollMove > 0) {  // не даем уехать кнопкам вниз
            $('.download').css({transform: 'translate(-490px, 0px)'}).css("position", "fixed");
            $('.download__title').css("opacity", "0");
            $('.arrow-down').css("opacity", "0");
        } else {
            $('.download').css({transform: 'translate(-490px,' + scrollMove + 'px)'}).css("position", "fixed");
            $('.download__title').css("opacity", opacityNumber);
            $('.arrow-down').css("opacity", opacityNumber);
        };

        if (scroll > threeSectionsHeight) {
            $('.download').css("position", "initial").css("transform", "translate(0)");
        }

	});
});
