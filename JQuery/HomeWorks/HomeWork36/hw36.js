let val = 0;
let arr = [];
$(".addBtn").click(function() {
    $(".items").append(`
        <div class="item">
            <h1>${$(".add").val()}</h1>
            <button id="${val+=1}" class="removeBtn" onclick="removeItem(this)">X</button>
        </div>`
    );
    arr.push({
        id: val,
        word: `${$(".add").val()}`
    });
    $(".add").val("");
})

function removeItem(item) {
    $(item).parent().remove();
    arr.forEach((e,index) => {
        if (e.id == $(item).attr("id")) {
            arr.splice(index, 1);
        }
    });
}


$(".search").keyup(function() {
    $(".items").empty();
    let searchWord = $(this).val().toLowerCase();
    arr.forEach(e => {
        if (searchWord != "" && e.word.toLowerCase().startsWith(searchWord)) {
            $(".items").append(`
                <div class="item">
                    <h1>${e.word}</h1>
                    <button id="${e.id}" class="removeBtn" onclick="removeItem(this)">X</button>
                </div>`
            );
        }
        else if(searchWord == ""){
            $(".items").append(`
                <div class="item">
                    <h1>${e.word}</h1>
                    <button id="${e.id}" class="removeBtn" onclick="removeItem(this)">X</button>
                </div>`
            );
        }
    })
})