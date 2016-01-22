$(document).ready(function() {
    $('.anchor').click(function() {
        var imgUrl = ($(this).data("img-url"));
        $('#imgtag').attr('src', imgUrl);
        centerImage($('#imgtag'));
        $('div.out').show();
    });

    $('div.out').click(function() {
        $('div.out').hide();
    });

    function centerImage(image) {
        image.load(function() {
            console.log(image);
            var w = $(window).width();
            var h = $(window).height();
            var iw = image.width();
            var ih = image.height();

            var iwo = (w - iw) / 2;
            var iho = (h - ih) / 2;

            image.parent().css("margin-top", iho);
            image.parent().css("margin-left", iwo);
        });
    }
});