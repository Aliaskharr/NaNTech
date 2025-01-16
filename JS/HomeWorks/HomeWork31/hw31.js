let ad = document.querySelector("input");
document.querySelector("input").addEventListener("keyup", function() {
    document.querySelectorAll(".name").forEach((e,index) => {
        
        if (ad.value.toLocaleLowerCase() == e.innerHTML.slice(0, ad.value.length).toLocaleLowerCase()) {
            document.querySelectorAll("tbody tr")[index].style.display = "table-row";
        }
        else{
            document.querySelectorAll("tbody tr")[index].style.display = "none";
        }

    });
})

document.querySelector(".all").addEventListener("click", function() {
    
    document.querySelectorAll("tbody tr").forEach(e => {
        e.style.display = "table-row";
    });

    ad.value = "";
})