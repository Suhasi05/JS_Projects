const slides = document.querySelectorAll('.slide')
var counter = 0;

slides.forEach(
    (slide, idx) => {
        slide.style.left = `${idx * 100}%`
    }
)

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

const goNext = () => {
    counter++;
    slideImage();
}

const goPrev = () => {
    counter--;
    slideImage();
}