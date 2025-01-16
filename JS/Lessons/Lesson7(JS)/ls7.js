document.querySelectorAll('div').forEach(e => {
    e.addEventListener('click', function() {
        e.style.display = "none";
        // e.style.opacity = "0"
    })
})