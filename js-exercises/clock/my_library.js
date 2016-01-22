var func = function() {
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();

    var ms_e = document.getElementById('ms');

    if (ms < 250) {
        ms_e.style.color = "red";
    } else if (ms < 500) {
        ms_e.style.color = "green";
    } else if (ms < 750) {
        ms_e.style.color = "blue";
    } else {
        ms_e.style.color = "orange";
    }

    if(m % 2 == 0) {
        document.body.style.backgroundColor = '#0F0';
    } else {
        document.body.style.backgroundColor = '#00F';
    }

    var element = document.getElementById('h').innerHTML = h + " : ";
    var element = document.getElementById('m').innerHTML = m + " : ";
    var element = document.getElementById('s').innerHTML = s + " : ";
    ms_e.innerHTML = ms;
}

setInterval(func, 10)