let min = 0;
let sec = 0;
let hour = 0;
let count = 0;


function clock() {
    sec+=6;
    document.querySelector('.second').style.transform = `rotate(${sec}deg)`
    if (sec == 360) {
        sec = 0;
        min+=6;
        document.querySelector('.minute').style.transform = `rotate(${min}deg)`;
        if (min == 366) {
            min=6;
            document.querySelector('.minute').style.transform = `rotate(${min}deg)`;
        }
        if (min % 36 == 0) {
            hour+=3;
            document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
        }
    }
}

setInterval(clock, 1000);