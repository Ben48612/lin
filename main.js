et currentSlideID = 0;
sliderElement = document.getElementById('slider');
listElement = document.getElementsByTagName("li")
totalSliders = sliderElement.childElementCount;
console.log(totalSliders)
function next() {
    if (totalSliders.length < currentSlideID) {
        currentSlideID++;
        showSlide()
    }
    console.log("next is pressed");

}
function prev() {
    if (currentSlideID.length > 1) {
        currentSlideID--;
        showSlide()
    }
    console.log("prev is pressed");

}
function showSlide() {
    slides = sliderElement.listElement
    for (let index = 0; index < totalSliders; index++) {
        const element = slides[index];
        if (currentSlideID === index + 1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
}

