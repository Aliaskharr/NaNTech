var btns = document.querySelectorAll(".item button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        document.querySelectorAll(".item div")[i].style.backgroundColor = `${btns[i].innerText.toLowerCase()}`;
    })

}