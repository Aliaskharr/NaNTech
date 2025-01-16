$(".item").click(function() {
    $(".modal").css("display", "flex");
    $(".modal img").attr("src", `${$(this).children().eq(0).attr("src")}`)
})

$(".modal p").click(function() {
    $(".modal").css("display", "none");
})