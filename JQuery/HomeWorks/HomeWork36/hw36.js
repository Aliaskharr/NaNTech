$(document).ready(function () {
    $(".addBtn").click(function () {
        $(".items").append(`
        <div class="item">
            <h1>${$(".add").val()}</h1>
            <button class="removeBtn">X</button>
        </div>`
        );
        $(".add").val("");
    })

    $(".items").on("click", "button", function () {
        $(this).parent().remove();
    });

    $(".search").keyup(function () {
        $(".item h1").each(function () {
            if ($(this).text().toLowerCase().includes($(".search").val().toLowerCase())) {
                $(this).parent().show();
            }
            else if ($(".search").val() == "") {
                $(this).parent().show();
            }
            else {
                $(this).parent().hide();
            }
        })
    })
})