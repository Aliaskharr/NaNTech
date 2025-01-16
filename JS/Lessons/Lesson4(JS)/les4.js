

document.querySelector("button").addEventListener("click", function() {
    if (document.querySelector("input").value != "") {
        document.querySelector("ul").innerHTML += `<li>${document.querySelectorAll("li").length+1} ${document.querySelector("input").value}</li>`;
        document.querySelector("input").value = "";
    }
    else(
        alert("Input is empty!")
    )
    
})


document.querySelectorAll("button")[1].addEventListener("click", function() {
    if (document.querySelectorAll("input")[1].value != "") {
        document.querySelectorAll("ul")[1].innerHTML += `<li><img src="${document.querySelectorAll("input")[1].value}" alt=""></li>`;
        document.querySelectorAll("input")[1].value = "";
    }
    else(
        alert("Input is empty!")
    )
})


