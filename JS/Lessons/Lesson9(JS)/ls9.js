let count;
var imgs = document.querySelectorAll('.gallery img');

imgs.forEach((i,index) => {
    i.addEventListener('click', function() {
        document.querySelector('.show').style.display = "block";
        document.querySelector('.show img').src = i.src;
        count = index;
        document.querySelector('.show p').innerText = count+1;
    })
})

document.querySelectorAll(".show i").forEach(e => {
    e.addEventListener("click", function() {
        if (e.id == "right") {
            count++;
            if (count == imgs.length) {
                count = 0;
            }
            document.querySelector('.show img').setAttribute('src', `${imgs[count].getAttribute('src')}`)
        }
        else if(e.id == "left"){
            count--;
            if (count == -1) {
                count = imgs.length-1;
            }
            document.querySelector('.show img').setAttribute('src', `${imgs[count].getAttribute('src')}`)
        }

        document.querySelector('.show p').innerText = count+1;
    })
})

document.querySelector('i').addEventListener('click', function() {
    document.querySelector('.show').style.display = "none";
})