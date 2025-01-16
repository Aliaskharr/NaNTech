var inputs = document.querySelectorAll(".items input");

document.querySelectorAll(".items button")[0].addEventListener("click", function() {
    inputs[2].value = inputs[0].value * inputs[1].value;
})  

document.querySelectorAll(".items button")[1].addEventListener("click", function() {
    inputs[2].value = inputs[0].value / inputs[1].value;
})  

document.querySelectorAll(".items button")[2].addEventListener("click", function() {
    inputs[2].value = inputs[0].value - inputs[1].value;
})  

document.querySelectorAll(".items button")[3].addEventListener("click", function() {
    inputs[2].value = Number(inputs[0].value) + Number(inputs[1].value);
})  

document.querySelectorAll(".items input")[1].addEventListener('input', function () {
    inputs[2].value = inputs[0].value * inputs[1].value;
});
