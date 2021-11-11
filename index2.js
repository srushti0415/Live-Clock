function SClock() {
    var date = new Date; 
 
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var ampm = (hours < 12) ? "AM" : "PM";
    document.getElementById('TIME').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + ampm;
    setTimeout(SClock, 500);   

}
