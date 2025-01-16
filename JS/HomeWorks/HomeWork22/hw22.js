var inputs = document.querySelectorAll('input');
document.querySelector('button').addEventListener('click', function() {
    if (document.querySelector('input').value != "" ) {
        document.querySelector('tbody').innerHTML += `<tr><td>${document.querySelectorAll('tbody tr').length+1}</td><td>${inputs[0].value}</td><td>${inputs[1].value}</td><td>${inputs[2].value}</td></tr>`
    }
    else{
        alert("Ad Bos Olmamalidir!")
    }
    inputs.forEach(e => {
        e.value = "";
    });
    
})


