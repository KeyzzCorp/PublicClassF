let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? 2 : currentIndex - 1;
    updateSlider();
});

document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex === 2) ? 0 : currentIndex + 1;
    updateSlider();
});

function updateSlider() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
