let view = document.querySelector(".view")

document.querySelectorAll('.letter').forEach(e => {
    e.addEventListener("click", function() {
        view.value += e.innerHTML;
    })
});

document.querySelector('.delete').addEventListener("click", function() {
    view.value = view.value.slice(0, view.value.length-1);
})

document.querySelector('.space').addEventListener("click", function() {
    view.value += " ";
})