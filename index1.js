console.log("Time")
// var d = new Date();
// console.log(d.toLocaleString('en-US', { hour: 'numeric', hour12: true })
// );  

function realtimeClock() {

    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var AMPM = (hours < 12) ? "AM" : "PM";

    hours = (hours < 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + AMPM;
        var t = setTimeout(realtimeClock, 500);
}
