var a = 0

document.querySelector('button').addEventListener('click', function() {
    
    document.querySelectorAll('.items .item').forEach(e => {
        if (e.innerHTML == document.querySelector('input').value) {
            e.remove();
        }
    })
})