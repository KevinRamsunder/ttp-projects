$(document).ready(function() {
    var width = $('#move').width();
    var height = $('#move').height();
    var click = true;
    var toggle = true;

    $('.master').click(function() {
        $('p').show();
    });

    $('.1').click(function() {
        $('p').fadeToggle();
    });

    $('.toggle').click(function() {
        toggle = !toggle;
    });    


    $('#move').click(function() {
        click = !click;
    });

    $(document).mousemove(function(event) {
        if(click) {
            $('#move').css({left: event.clientX - width/2, top: event.clientY-height/2, position:'absolute'})
        }
    });

    setInterval(function() {
        if(toggle) {
            $(".box0").animate({left:Math.random()*500, top:Math.random()*700},100);
            $(".box1").animate({left:Math.random()*500, top:Math.random()*700},100);
            $(".box2").animate({left:Math.random()*500, top:Math.random()*700},100);
            $(".box3").animate({left:Math.random()*500, top:Math.random()*700},100);
            $(".box4").animate({left:Math.random()*500, top:Math.random()*700},100);
            $(".box5").animate({left:Math.random()*500, top:Math.random()*700},100);
        }
    }, 500);
});