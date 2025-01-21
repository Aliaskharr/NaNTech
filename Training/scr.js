$(document).ready(function() {
    $("button").click(function() {
        $(".items").append(`
            <div class="item">
                <button>X</button>
            </div>
        `)
    })
    
    $(".item").on("click", "button", function() {
        alert();
    })
})