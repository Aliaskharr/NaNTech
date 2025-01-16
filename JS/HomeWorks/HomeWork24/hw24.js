var imgs = document.querySelectorAll('.gallery img');
let count = 0;


document.querySelectorAll('i').forEach((e, index) => {
    e.addEventListener('click', function() {
        if (index == 1) {
            count++;
            if (count == imgs.length) {
                count = 0;
            }
            document.querySelector('.top img').setAttribute('src', `${imgs[count].getAttribute('src')}`)
        }
        else {
            count--;
            if (count == -1) {
                count = imgs.length-1;
            }
            document.querySelector('.top img').setAttribute('src', `${imgs[count].getAttribute('src')}`)
        }
    })
    
})


document.querySelectorAll('.gallery img').forEach((e, index) => {
    e.addEventListener('click', function () {
        document.querySelector('.top img').setAttribute('src', `${e.getAttribute('src')}`)
        count = index;
    })
})