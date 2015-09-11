// $(window).scroll(function (event) {
// 	 var scroll = $(window).scrollTop();
// 	 var initial = -50;
// 	var negScroll =  initial + scroll * '-2';
// 	console.log(negScroll);
// 	$('.tree').css( "left", negScroll );
// 	 $('.elka').css( "right", negScroll );
// });

// $(window).scroll(function (event) {
//	 var scroll = $(window).scrollTop();
//	 var initial = 150;
// 	var negScroll =  initial + scroll * '-2';
// 	$('.download').css( "bottom", negScroll );
// });
var vwptHeight = $(window).height();
var downloadPosition = vwptHeight * -0.15;


function downloadInitial() {
	$('.download').css({transform: 'translate(-490px,' + downloadPosition + 'px)'});
}

function heightInitial() {
	$('.section').css({height: vwptHeight});
}

$(document).ready(function() {

	downloadInitial();
    heightInitial();

	$(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var scrollStep = scroll * -0.7;
        var scrollMove = downloadPosition - scrollStep;
        var pathToGo = vwptHeight - scroll;

        var opacityNumber = 100 * scrollMove / downloadPosition * 0.01;

        if (scrollMove > 0) {
            $('.download').css({transform: 'translate(-490px, 0px)'});
            $('.download__title').css("opacity", "0");
        } else {
            $('.download').css({transform: 'translate(-490px,' + scrollMove + 'px)'});
            $('.download__title').css("opacity", opacityNumber);
        }
	});
});
