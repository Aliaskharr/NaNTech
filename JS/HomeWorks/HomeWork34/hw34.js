var arr = [
    {
        imgUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "BMW",
        category: "car"
    },
    {
        imgUrl: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Mauntain",
        category: "nature"
    },
    {
        imgUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Ali",
        category: "human"
    },
    {
        imgUrl: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Mercedes",
        category: "car"
    },
    {
        imgUrl: "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Flower",
        category: "nature"
    },
    {
        imgUrl: "https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Michael",
        category: "human"
    },
    {
        imgUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Range Rover",
        category: "car"
    },
    {
        imgUrl: "https://images.pexels.com/photos/691901/pexels-photo-691901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Cloud",
        category: "nature"
    },
    {
        imgUrl: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Omar",
        category: "human"
    },
    {
        imgUrl: "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Audi",
        category: "car"
    },
    {
        imgUrl: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Sea",
        category: "nature"
    },
    {
        imgUrl: "https://images.pexels.com/photos/30076943/pexels-photo-30076943/free-photo-of-joyful-child-portrait-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Asiye",
        category: "human"
    }
];

arr.forEach(e => {
    show(e);
})

document.querySelectorAll("button").forEach(e => {
    e.addEventListener("click", function() {
        document.querySelector(".articles").innerHTML = ""
        
        if (e.innerText == "All") {
            arr.forEach(x => {
                show(x);
            })
        }
        else{
            arr.forEach(x => {
                if (x.category == e.innerText.toLowerCase()) {
                    show(x);
                }
            })
        }
    })
})

function show(e) {
    document.querySelector(".articles").innerHTML += `
        <div class="article">
            <img src="${e.imgUrl}" alt="">
            <h1>${e.title}</h1>
        </div>
`
}
