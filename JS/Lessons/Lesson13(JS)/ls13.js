var arr = [1,5,80,55,47,33,67,88];


arr.forEach(i => {
    document.querySelector('.items').innerHTML += `<div class="item">${i}</div>`;
})