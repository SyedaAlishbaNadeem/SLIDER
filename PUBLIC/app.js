var currentIndex = 1;
displaySlides(currentIndex);

function changeSlides(num) {
    displaySlides(currentIndex += num)
}


function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName('slideimg');
if (num > slides.length) {currentIndex = 1}
if (num < 1) {currentIndex = slides.length}
for (let x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none'
}
slides[currentIndex -1].style.display ="block"
}

































