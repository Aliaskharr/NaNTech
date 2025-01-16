document.querySelectorAll('.gallery img').forEach(e => {
    e.addEventListener('click', function() {
        document.querySelector('.top img').setAttribute('src', `${e.getAttribute('src')}`)
    })
})