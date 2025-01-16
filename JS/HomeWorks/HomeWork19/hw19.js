document.querySelector("button").addEventListener("click", function() {
    document.querySelector("div").innerHTML += `<img src="${document.querySelector("input").value}" alt="">`
})