var seconds = 0;
var minutes = 64;

var countdown = setInterval(function() {
    document.getElementById("countdown").innerHTML =
    "<div class=\"minutes\"> \
        <div class=\"c-number\">" + ("00" + minutes).slice(-2) + "</div></div> \
    <div class=\"seperator\"><div class=\"c-number\">'</div></div> \
    <div class=\"seconds\"> \
        <div class=\"c-number\">" + ("00" + seconds).slice(-2) + "</div></div> \
    <div class=\"seperator\"><div class=\"c-number\">\"</div></div>";


    if(seconds == 0 && minutes == 0) {
        clearInterval(countdown);
    }

    seconds = --seconds;
    if(seconds < 0) {
        seconds = 59;
        minutes = --minutes;
    }

}, 100);