var a = 0;

function left() {
    if (a > document.querySelectorAll('.gallery img').length - 1) {
        a = 0;
    }
    document.querySelector('.top img').src = document.querySelectorAll('.gallery img')[a].src;
    a++;

}


setInterval(left, 1000)