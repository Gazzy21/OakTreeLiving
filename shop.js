document.addEventListener('DOMContentLoaded', function () {
    const selectedToy = localStorage.getItem('selectedToy');

    if (selectedToy && products[selectedToy]) {
        document.getElementById('ttl').textContent = products[selectedToy].title;
        document.getElementById('dcs').textContent = products[selectedToy].description;
        document.getElementById('mainimg').src = products[selectedToy].display;
        document.getElementById('img1').style.backgroundImage = `url(${apartments[selectedToy].side1})`;
        document.getElementById('img2').style.backgroundImage = `url(${apartments[selectedToy].side2})`;
        document.getElementById('img3').style.backgroundImage = `url(${apartments[selectedToy].side3})`;
    }
});

function switchOne() {
    const selectedToy = localStorage.getItem('selectedToy');
    document.getElementById("mainimg").src = products[selectedToy].side1;
}

function switchTwo() {
    const selectedToy = localStorage.getItem('selectedToy');
    document.getElementById("mainimg").src = products[selectedToy].side2;
}

function switchThree() {
    const selectedToy = localStorage.getItem('selectedToy');
    document.getElementById("mainimg").src = apartments[selectedToy].side3;
}