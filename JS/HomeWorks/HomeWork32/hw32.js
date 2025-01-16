var arr = [
    {
        marka: "Bmw",
        model: "e34",
        mator: "3.6L",
        year: "1991",
        photos: [
            "https://cdn.prod.website-files.com/651f354f9de38d298e7aeb36/65bfce335937b9ad7c60d540_DSC08864.jpeg",
            "https://cdn.prod.website-files.com/651f354f9de38d298e7aeb36/65bfce33b263e43bfb249688_DSC08858-p-800.jpeg",
            "https://cdn.prod.website-files.com/651f354f9de38d298e7aeb36/65bfce330da81a6bf772de2f_DSC08875-p-800.jpeg",
            "https://cdn.prod.website-files.com/651f354f9de38d298e7aeb36/65bfcf216638b0f7cc0ae191_DSC08907-p-800.jpeg",
            "https://cdn.prod.website-files.com/651f354f9de38d298e7aeb36/65bfd05549f42cde209d593d_DSC08917.jpeg",
            "https://cdn.prod.website-files.com/651f354f9de38d298e7aeb36/65bfce3219d6a084e4547bb8_DSC08990-Enhanced-NR.jpg",
            "https://cdn.prod.website-files.com/651f354f9de38d298e7aeb36/65bfce33735b354f99c74b4e_DSC08873-p-800.jpeg",
            "https://cdn.prod.website-files.com/651f354f9de38d298e7aeb36/65bfce3266010ad14f6ecc92_DSC08967-Enhanced-NR-p-800.jpeg"
        ]
    },
    {
        marka: "Mercedes",
        model: "w140",
        mator: "3.2L",
        year: "1996",
        photos: [
            "https://legendscars.pl/site/assets/files/2163/dscf1394.1400x0.jpg",
            "https://legendscars.pl/site/assets/files/2163/dscf1443.1400x0.jpg",
            "https://legendscars.pl/site/assets/files/2163/dscf1396.1400x0.jpg",
            "https://legendscars.pl/site/assets/files/2163/dscf1399.1400x0.jpg",
            "https://legendscars.pl/site/assets/files/2163/dscf1401.1400x0.jpg",
            "https://legendscars.pl/site/assets/files/2163/dscf1403.1400x0.jpg",
            "https://legendscars.pl/site/assets/files/2163/dscf1409.1400x0.jpg",
            "https://legendscars.pl/site/assets/files/2163/dscf1415.1400x0.jpg"
        ]
    },
    {
        marka: "Dodge",
        model: "charger",
        mator: "5.2L",
        year: "1969",
        photos: [
            "https://images.hgmsites.net/hug/1969-dodge-charger-r-t--photo-credit-classic-investments_100740365_h.jpg",
            "https://images.hgmsites.net/hug/1969-dodge-charger-r-t--photo-credit-classic-investments_100740356_h.jpg",
            "https://images.hgmsites.net/hug/1969-dodge-charger-r-t--photo-credit-classic-investments_100740357_h.jpg",
            "https://images.hgmsites.net/hug/1969-dodge-charger-r-t--photo-credit-classic-investments_100740358_h.jpg",
            "https://images.hgmsites.net/hug/1969-dodge-charger-r-t--photo-credit-classic-investments_100740359_h.jpg",
            "https://images.hgmsites.net/hug/1969-dodge-charger-r-t--photo-credit-classic-investments_100740368_h.jpg",
            "https://images.hgmsites.net/hug/1969-dodge-charger-r-t--photo-credit-classic-investments_100740367_h.jpg",
            "https://images.hgmsites.net/hug/1969-dodge-charger-r-t--photo-credit-classic-investments_100740364_h.jpg"
        ]
    }
]

arr.forEach((e, index) => {
    document.querySelector(".gallery").innerHTML += `<img onclick="view(${index})" src="${e.photos[0]}" alt=""></img>`
})

function view(i) {
    document.querySelector('.modal').style.display = "block";
    document.querySelector('.modal').innerHTML = `
    <i id="close" onclick="close1()" class="fa-solid fa-circle-xmark"></i>
        <div class="modal-center">
            <img src="${arr[i].photos[0]}" alt="">
            <div class="modal-gallery"></div>
            <h2>Marka: ${arr[i].marka}</h2>
            <h2>Model: ${arr[i].model}</h2>
            <h2>Engine: ${arr[i].mator}</h2>
            <h2>Year: ${arr[i].year}</h2>
        </div>`;

        for (let j = 1; j < arr[i].photos.length; j++) {
            document.querySelector('.modal-gallery').innerHTML += `
            <img src="${arr[i].photos[j]}" alt=""/>`
        }
        
}

function close1() {
    document.querySelector('.modal').style.display = "none";
}