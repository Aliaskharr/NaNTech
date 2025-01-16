var sec = 0;
var min = 0;
var hour = 0;


function clock() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hour++;
    }

    if (hour == 24) {
        hour = 0;
    }

    if (hour < 10) {
        document.querySelector(".hour").innerHTML = `0${hour}:`
    }
    else{
        document.querySelector(".hour").innerHTML = `${hour}:`;
    }

    if (min < 10) {
        document.querySelector(".minute").innerHTML = `0${min}:`
    }
    else{
        document.querySelector(".minute").innerHTML = `${min}:`;
    }

    if (sec < 10) {
        document.querySelector(".second").innerHTML = `0${sec}`
    }
    else{
        document.querySelector(".second").innerHTML = `${sec}`;
    }
    
}

setInterval(clock, 1000)