$(document).ready(function () {
    $("button").click(function() {
        $(".images").append(`<img src="${$("input").val()}" alt="">`)
    })
    
    $(".container").on("click", "img", function() {
        alert();
    })
    
    $(".images").on("click", "img", function() {
        $(".container").attr("src", `${$(this).attr("src")}`)
        $(".container").append(`<img src="${$(this).attr("src")}" />`)
    })
})



