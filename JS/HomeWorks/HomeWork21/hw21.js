document.querySelectorAll('input').forEach((e, index) => {
    if(index == 0){
        e.addEventListener('keyup', function() {
            document.querySelector('.item').style.width = e.value + "px";
        })
    }
    else if(index == 1){
        e.addEventListener('keyup', function() {
            document.querySelector('.item').style.height = e.value + "px";
        })
    }
    else if(index == 2){
        e.addEventListener('keyup', function() {
            document.querySelector('.item').style.backgroundColor = e.value;
        })
    }
    else if(index == 3){
        e.addEventListener('keyup', function() {
            document.querySelector('.item').style.borderColor = e.value;
        })
    }
    else{
        e.addEventListener('keyup', function() {
            document.querySelector('.item').style.borderRadius = e.value + "px";
        })
    }

});