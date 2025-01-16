let arr = [
    {
        photo: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
        name: "Apple Watch",
        description: "You’ve never seen a watch like this. The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
        price: 200
    },
    {
        photo: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
        name: "Macbook Pro",
        description: "The best for the brightest. Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
        price: 2500
    },
    {
        photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
        name: "iPhone 11 pro",
        description: "Pro cameras. Pro display. Pro performance. A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
        price: 1470
    },
    {
        photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
        name: "iPad Pro",
        description: "Your next computer is not a computer.It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
        price: 1800
    },
];

let basket = [];

let basket_count = 0;
let total_price = 0;

document.querySelector(".basket-icon").addEventListener("click", function () {
    document.querySelector(".basket-container").style.right = "0";
    document.querySelector(".blur").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".basket-container").style.right = "-1000px";
    document.querySelector(".blur").style.display = "none";
});

document.querySelector(".clear-all").addEventListener("click", function () {
    basket_count = 0;
    basket = [];
    showBasket();
});

arr.forEach((e, index) => {
    document.querySelector(".items").innerHTML += `
            <div class="item">
                <div class="item-top">
                    <i class="fa-brands fa-apple"></i>
                    <p>In Stock</p>
                </div>
                <div class="image-container">
                    <img src="${e.photo}" alt="">
                </div>
                <div class="item-about">
                    <h2>${e.name}</h2>
                    <i onclick="heart(this)" class="fa-solid fa-heart heart"></i>
                    <p>${e.description}</p>
                    <div class="item-about-bottom">
                        <p>${e.price} AZN</p>
                        <div onclick="countPlus(${index})" class="add">
                            <p>Add</p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
    
    `
})

function heart(a) {
    a.classList.toggle("red");
}

function countPlus(a) {
    basket_count++;
    basket.push(arr[a]);
    showBasket();
}

function removeItem(i) {
    basket_count--;
    basket.splice(i, 1);
    showBasket();
}

function showBasket() {
    document.querySelector(".basket-items").innerHTML = '';
    document.querySelector(".total-price").innerHTML = '';
    total_price = 0;
    basket.forEach((e, index) => {
        total_price += e.price;
        document.querySelector(".basket-items").innerHTML += `
            <div class="basket-item">
                <img src="${e.photo}" alt="">
                <p>${e.name}</p>
                <p>${e.price} AZN</p>
                <i onclick="removeItem(${index})" class="fa-solid fa-trash"></i>
            </div>
        `
    })
    
    document.querySelector(".total-price").innerHTML += `Total = ${total_price} AZN`
    document.querySelector(".basket-number").innerHTML = basket_count;
}
