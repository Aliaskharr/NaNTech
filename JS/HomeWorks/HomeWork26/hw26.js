let a = 0;
let inp = document.querySelector('input');
document.querySelector('button').addEventListener('click', function() {

    for (let i = 0; i < document.querySelectorAll('.item').length; i++) {
        if (inp.value.trim() != "") {
            if (inp.value == document.querySelectorAll('.item')[i].innerHTML) {
                alert("Bu reqem artiq movcuddur!");
                break;
            }
            else{
                a++;
            }
        }
    }
    if (a == document.querySelectorAll('.item').length) {
        document.querySelector('.items').innerHTML += `<div class="item">${inp.value}</div>`
    }
    a = 0;
    inp.value = "";


})