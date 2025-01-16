let leftt = 300;
let topp = 200;

console.log(document.querySelector('.gameBlock').style.borderWidth);

document.querySelectorAll("button").forEach((btn, index) => {

    btn.addEventListener('click', function() {
        switch (index+1) {
            case 1: 
                leftt > 0 ? leftt-=10 : leftt;
                break;
            case 2:
                leftt < 600 ? leftt+=10: leftt;
                break;
    
            case 3:
                topp > 0 ? topp-=10 : topp;
                break;
    
            case 4:
                topp < 400 ? topp+=10: topp;
                break;
    
            case 5:
                if (topp > 0 && leftt > 0) {
                    leftt-=10;
                    topp-=10;
                }
                break;
    
            case 6:
                if (topp > 0 && leftt < 600) {
                    leftt+=10;
                    topp-=10;
                }
                break;
    
            case 7:
                if (topp < 400 && leftt > 0) {
                    leftt-=10;
                    topp+=10;
                }
                break;
    
            case 8:
                if (topp < 400 && leftt < 600) {
                    leftt+=10;
                    topp+=10;
                }
                
                break;
    
            case 9:
                leftt = 300;
                topp = 200;
                break;
    
            default:
                break;
        }
        document.querySelector('.ball').style.left = leftt + "px";
        document.querySelector('.ball').style.top = topp + "px";

        if (leftt) {
            if(leftt == 600){
                document.querySelector('.gameBlock').style.borderRight = "20px solid  red";
            }
            else{
                document.querySelector('.gameBlock').style.borderLeft = "20px solid  #005800";
                document.querySelector('.gameBlock').style.borderRight = "20px solid  #005800";
            }
        }
        else{
            document.querySelector('.gameBlock').style.borderLeft = "20px solid  red";
        }

        if (topp) {
            if(topp == 400){
                document.querySelector('.gameBlock').style.borderBottom = "20px solid  red";
            }
            else {
                document.querySelector('.gameBlock').style.borderBottom = "20px solid  #005800";
                document.querySelector('.gameBlock').style.borderTop = "20px solid  #005800";
            }
        }
        else{
            document.querySelector('.gameBlock').style.borderTop = "20px solid  red";
        }
    })
})