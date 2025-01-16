var sec = 0;
var min = 0;
var hour = 0;


function clock() {
    sec++;
    document.querySelector('.second').innerHTML = ("0"+sec).slice(-2);
    if (sec == 59) {
        sec = 0;
        min++;
        document.querySelector('.minute').innerHTML = ("0"+min).slice(-2);
        if (min == 10) {
            document.querySelector('.clock').style.backgroundColor = "red";
        }
        else{
            document.querySelector('.clock').style.backgroundColor = "aqua";
        }
        if (min == 60) {
            min=0;
            hour++;
            document.querySelector('.minute').innerHTML = ("0"+min).slice(-2);
            document.querySelector('.hour').innerHTML = ("0"+hour).slice(-2);
        }
    }
    
}

// setInterval(clock, 10);