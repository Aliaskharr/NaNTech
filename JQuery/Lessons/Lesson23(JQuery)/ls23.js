$(".images img").click(function() {
    
    console.log($(this).attr("src"));

    $(".container").attr("src", `${$(this).attr("src")}`)

    $(".container").append(`<img src="${$(this).attr("src")}" />`)
    
})