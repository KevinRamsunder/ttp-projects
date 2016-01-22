// Operating system information
console.log(window.navigator.platform);

// user agent
console.log(navigator.userAgent);

// window size
var w = $(window).width();
var h = $(window).height();
console.log(w, h);

// resizing browser
$(window).resize(function() {
    var w = $(window).width();
    var h = $(window).height();
    console.log(w, h);
});