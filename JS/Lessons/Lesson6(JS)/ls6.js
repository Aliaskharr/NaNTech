document.querySelectorAll(".item").forEach((x, index) => {

    x.addEventListener('click', function() {
        
        document.querySelectorAll(".item").forEach((x, index) => {
            x.style.backgroundColor = 'white';
        })
        x.style.backgroundColor = 'red';
    })
})