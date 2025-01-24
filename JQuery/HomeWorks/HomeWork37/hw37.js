let row = 0;

$(".addBtn").click(function () {
    $(".addModal").css("display", "flex");
});

$(".addModal p").click(function () {
    $(".addModal").css("display", "none");
});

$(".modalAddBtn").click(function () {
    $(".addModal").css("display", "none");
    $("tbody").append(`
        <tr>
                    <td>${$("tbody tr").length+1}</td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td>${$(".addView input").eq(0).val()}</td>
                    <td>${$(".addView input").eq(1).val()}</td>
                    <td>${$(".addView input").eq(2).val()}</td>
                    <td>${$(".addView input").eq(3).val()}</td>
                    <td>
                        <button class="editBtn"><i class="fa-solid fa-pen"></i></button>
                        <button class="removeBtn"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
    `)
    $(".modalCenter input").val("");
});

$("tbody").on("click", ".editBtn", function () {
    $(".editModal").css("display", "flex");
    $(".editView input").each(function() {
        
    });

    row = $(this).parent().parent().children().eq(0).html();

    $(".editView input").eq(0).val(`${$(this).parent().parent().children().eq(2).html()}`);
    $(".editView input").eq(1).val(`${$(this).parent().parent().children().eq(3).html()}`);
    $(".editView input").eq(2).val(`${$(this).parent().parent().children().eq(4).html()}`);
    $(".editView input").eq(3).val(`${$(this).parent().parent().children().eq(5).html()}`);
    
});

$(".editModal p").click(function () {
    $(".editModal").css("display", "none");
});

$(".modalEditBtn").click(function () {
    $(".editModal").css("display", "none");

    $("tbody tr").each(function() {
        if ($(this).children().eq(0).html() == row) {

            for (let i = 0; i < $(this).children().length-3; i++) {
                $(this).children().eq(i+2).html($(".editView input").eq(i).val());
            }
        }
    });
});

$("tbody").on("click", ".removeBtn", function () {
    let count = 0;
    $(this).parent().parent().remove();
    $("tbody tr").each(function() {
        $(this).children().eq(0).html(count+=1);
    });
    
});

$(".search").keyup(function () {
    $("tbody tr").each(function () {
        if ($(this).children().eq(2).text().toLowerCase().includes($(".search").val().toLowerCase())) {
            $(this).show();
        }
        else if ($(".search").val() == "") {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    })
})

$(".removeChecked").click(function() {
    $("tbody tr").each(function () {

        if ($(this).children().eq(1).children().eq(0).prop("checked") == true) {
            $(this).remove();
        }
    })

    let count = 0;
    $("tbody tr").each(function() {
        $(this).children().eq(0).html(count+=1);
    });
})


$("select").change(function() {
    if ($(this).val() == "all") {
        $("tbody tr").each(function () {
            $(this).show(); 
        })
    }
    else{
        for (let i = 0; i < $("tbody tr").length; i++) {
            if (i < $(this).val()) {
                $("tbody tr").eq(i).show();
            }
            else{
                $("tbody tr").eq(i).hide();
            }
        }
    }
})