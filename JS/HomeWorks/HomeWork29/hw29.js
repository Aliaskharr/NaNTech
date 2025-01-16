var arr = [
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
        name: "Threads",
        description: "Illustration"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
        name: "Explore",
        description: "Graphic Design"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
        name: "Finish",
        description: "Identity"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
        name: "Lines",
        description: "Branding"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
        name: "Southwest",
        description: "Website Design"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg",
        name: "Window",
        description: "Photography"
    }
]


for (let i = 0; i < arr.length; i++) {
    
    document.querySelector('.items').innerHTML += `
    <div class="item">
        <img src="${arr[i].img}" alt="">
        <h1>${arr[i].name}</h1>
        <h3>${arr[i].description}</h3>
    </div>
    `
    
}