var openWin;
function openSchedule() {
    var winWidth = 800;
    var winHeight = 700;
    var leftPosition = (screen.width - winWidth) / 2;
    var topPosition = (screen.height - winHeight - 100) / 2;

    var optionString = "width=" + winWidth + ",height=" + winHeight
        + ",left=" + leftPosition + ",top=" + topPosition;
    openWin = window.open("calendar1/calendar1.html", "calendar", optionString);
    
    setTimeout("openWin.close()", 5000);
}
function createEventListener() {
    var cal = document.getElementById('cal');

    if (cal.addEventListener) {
        cal.addEventListener('click', openSchedule, false);
    } else if (cal.attachEvent) {
        cal.attachEvent('onclick', openSchedule);
    }
}

if (window.addEventListener) {
    window.addEventListener('load', createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', createEventListener);
}