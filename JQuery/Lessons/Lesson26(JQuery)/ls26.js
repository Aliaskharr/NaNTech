let category = "";
$("button").click(function() {
    category = $(this).text().toLowerCase();
    $(".article").each( function() {
        if ($(this).hasClass(category)) {
            $(this).css("display", "block");
        }
        else if(category == "all"){
            $(this).css("display", "block");
        }
        else{
            $(this).css("display", "none");
        }
    });
})
