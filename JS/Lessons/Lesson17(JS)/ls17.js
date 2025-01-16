document.querySelector(".search").addEventListener("click", function() {
    document.querySelectorAll(".items .item").forEach(e => {
        if (e.innerHTML == document.querySelector("input").value) {
            e.style.display = "block";
        }
        else{
            e.style.display = "none";
        }
    })
    document.querySelector("input").value = "";
})

document.querySelector(".all").addEventListener("click", function() {
    document.querySelectorAll(".items .item").forEach(e => {
        e.style.display = "block";
    })
    document.querySelector("input").value = "";
})