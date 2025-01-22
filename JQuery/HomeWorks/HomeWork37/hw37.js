let count = 0;

$(".addBtn").click(function () {
    $(".addModal").css("display", "flex");
})

$(".addModal p").click(function () {
    $(".addModal").css("display", "none");
})

$(".modalAddBtn").click(function () {
    $(".addModal").css("display", "none");
    $("tbody").append(`
        <tr>
                    <td>1</td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td>${$(".modalCenter:nth-child(1) input").eq(0).val()}</td>
                    <td>${$(".modalCenter:nth-child(1) input").eq(1).val()}</td>
                    <td>${$(".modalCenter:nth-child(1) input").eq(2).val()}</td>
                    <td>${$(".modalCenter:nth-child(1) input").eq(3).val()}</td>
                    <td>
                        <button class="editBtn"><i class="fa-solid fa-pen"></i></button>
                        <button class="removeBtn"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
    `)
    $(".modalCenter input").val("");
})

$("tbody").on("click", ".editBtn", function () {
    $(".editModal").css("display", "flex");
    $(".modalCenter:nth-child(2) input").eq(0).val(`${$(this).parent().parent().eq(2).val()}`);
    console.log($(".modalCenter:nth-child(1) input").eq(0).val());
    
})

$(".editModal p").click(function () {
    $(".editModal").css("display", "none");
})

$(".modalEditBtn").click(function () {
    $(".editModal").css("display", "none");
})

$("tbody").on("click", ".removeBtn", function () {
    $(this).parent().parent().remove();
})