// function init() {
//     var scale = ($(window).width() / 1920) * 100;
//     $('#app,#main-intro').css(
//         {
//             '-webkit-transform': 'scale(' + (scale / 100) + ')',
//             '-moz-transform': 'scale(' + (scale / 100) + ')',
//             '-ms-transform': 'scale(' + (scale / 100) + ')',
//             '-o-transform': 'scale(' + (scale / 100) + ')',
//             'transform': 'scale(' + (scale / 100) + ')',
//             'overflow': 'hidden'
//         });
// }

// $(window).resize(function () {
//     init();
// });

// init();

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

document.addEventListener('touchmove', function (event) {
    event = event.originalEvent || event;
    if (event.scale > 1) {
        event.preventDefault();
    }
}, false);

document.addEventListener('touchstart', function (e) { e.preventDefault() }, false);
document.addEventListener('touchmove', function (e) { e.preventDefault() }, false);