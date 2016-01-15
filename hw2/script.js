$(document).ready(function() {
    $('#button1').on('click', function(e) {
        e.preventDefault();

        var value = $('#text1').val();
        
        var map = months = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        };

        var mm = value.charAt(0) + value.charAt(1);
        var dd = value.charAt(3) + value.charAt(4);
        var limit = map[parseInt(mm)];

        if (value.length !== 10) {
            $('p#out1').text('not valid');
            return;
        }

        if (value.charAt(2) !== '/' || value.charAt(5) !== '/') {
            $('p#out1').text('not valid');
            return;
        }

        if (parseInt(mm) <= 0 || parseInt(mm) > 12) {
            $('p#out1').text('not valid');
            return;
        }

        if (parseInt(dd) <= 0 || parseInt(dd) > limit) {
            $('p#out1').text('not valid');
            return;
        }

        $('p#out1').text('valid');
    });

    $('#form').on('submit', function(e) {
        e.preventDefault();
        var user = $('#text2').val();
        var pass = $('#text3').val();

        if (user === undefined | user === null | user === "") {
            $('p#output').text('not valid');
            return;
        }

        if (pass !== '12345') {
            $('p#output').text('not valid');
            return;
        }

        $('p#output').text('valid');
    });

    $(document).bind('keyup', function(e) {
        var key = event.keyCode;
        if (((key >= 65) && (key <= 90)) || ((key >= 97) && (key <= 122))) {
            $('#input').text(String.fromCharCode(key) + " : letter");
        } else {
            $('#input').text(String.fromCharCode(key) + " : number");
        }

    });
});