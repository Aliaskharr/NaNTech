var arr = [
    "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
    "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
    "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
    "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
    "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
]


arr.forEach(i => {
    document.querySelector('.items').innerHTML += `<img class="item" src="${i}"/>`;
})