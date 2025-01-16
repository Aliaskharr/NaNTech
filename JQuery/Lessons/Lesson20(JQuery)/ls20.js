// $("button").click(function() {
//     $("div").append($("input").val())
// })

$("button").click(function() {
    if ($("input").val() != "") {
        $("div").append(`<img src="${$("input").val()}" />`);
        $("input").val("");
    }
    else{
        alert("Input is empty!")

    }
})



