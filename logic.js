document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.navigation .prev');
    const nextBtn = document.querySelector('.navigation .next');
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevCarouselBtn = document.querySelector('.carousel-btn.prev');
    const nextCarouselBtn = document.querySelector('.carousel-btn.next');
    const sections = document.querySelectorAll('section');

    let slideIndex = 0;
    const totalSlides = document.querySelectorAll('.slide').length;

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    };

    const showNextSlide = () => {
        if (slideIndex < totalSlides - 1) {
            slideIndex++;
            updateSlidePosition();
        }
    };

    const showPrevSlide = () => {
        if (slideIndex > 0) {
            slideIndex--;
            updateSlidePosition();
        }
    };

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    const updateActiveLink = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - header.offsetHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
        updateActiveLink();
    });

    let currentCarouselIndex = 0;
    const totalCarouselItems = carouselItems.length;
    const itemsPerPage = 3; // Assuming we display 3 items per page

    const updateCarouselPosition = () => {
        const maxIndex = totalCarouselItems - itemsPerPage;
        carousel.style.transform = `translateX(${-currentCarouselIndex * (100 / itemsPerPage)}%)`;
        prevCarouselBtn.disabled = currentCarouselIndex === 0;
        nextCarouselBtn.disabled = currentCarouselIndex >= maxIndex;
    };

    const showNextCarouselItem = () => {
        const maxIndex = totalCarouselItems - itemsPerPage;
        if (currentCarouselIndex < maxIndex) {
            currentCarouselIndex++;
            updateCarouselPosition();
        }
    };

    const showPrevCarouselItem = () => {
        if (currentCarouselIndex > 0) {
            currentCarouselIndex--;
            updateCarouselPosition();
        }
    };

    nextCarouselBtn.addEventListener('click', showNextCarouselItem);
    prevCarouselBtn.addEventListener('click', showPrevCarouselItem);

    // Initial setup
    updateSlidePosition();
    updateCarouselPosition();
    updateActiveLink();
});
