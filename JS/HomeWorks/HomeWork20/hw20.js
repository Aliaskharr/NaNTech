var btns = document.querySelectorAll(".item button");
let sum = 0;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        for (let j = 0; j <= 100; j++) {
            
            if (i == 0 && j % 2 == 0) {
                sum+=j;
            }
            else if(i == 1 && j % 3 == 0){
                sum+=j;
            }
            else if(i == 2 && (j % 3 == 0 || j % 7 == 0)){
                sum+=j;
            }
        }
        document.querySelectorAll(".item div")[i].innerHTML = sum;
        sum = 0;
    })
}