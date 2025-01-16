$("button").click(function() {
    $("div").css({"width": `${$("input").eq(0).val()}px`, "height": `${$("input").eq(1).val()}px`, "background-color": `${$("input").eq(2).val()}`, "border-radius": `${$("input").eq(3).val()}px`});
})