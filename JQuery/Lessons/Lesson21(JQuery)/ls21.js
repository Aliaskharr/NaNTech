let count = 1;

$("button").click(function() {
    $("div").append(`<p> ${count++}. ${$("input").val()} </p>`);
    $("input").val("")
})