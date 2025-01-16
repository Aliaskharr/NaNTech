let car = "";
let color = "";

document.querySelectorAll("#cars .item").forEach(e => {
    e.addEventListener("click", function() {
        car = e.innerHTML;
    })
})

document.querySelectorAll("#colors .item").forEach(e => {
    e.addEventListener("click", function() {
        color = e.innerHTML;
        if (car != "") {
            document.querySelector(".view").innerHTML = car + " " + color;
        }
    })
})