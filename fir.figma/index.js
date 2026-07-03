
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;
const slideInterval = 5000;

function nextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

setInterval(nextSlide, slideInterval);