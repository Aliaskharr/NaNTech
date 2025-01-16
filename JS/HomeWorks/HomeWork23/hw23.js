document.querySelector('.viewModal').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'block';
})

document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
})

var inputs = document.querySelectorAll('input');
document.querySelector('.add').addEventListener('click', function() {
    if (document.querySelector('input').value != "" ) {
        document.querySelector('tbody').innerHTML += `<tr><td>${document.querySelectorAll('tbody tr').length+1}</td><td>${inputs[0].value}</td><td>${inputs[1].value}</td><td>${inputs[2].value}</td></tr>`
        document.querySelector('.modal').style.display = 'none';
        inputs.forEach(e => {
            e.value = "";
        });
    }
    else{
        alert("Ad Bos Olmamalidir!");
    }
})


