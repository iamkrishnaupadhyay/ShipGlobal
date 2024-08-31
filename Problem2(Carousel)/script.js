const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;


function setFallbackImage(img) {
    img.onerror = () => {
        img.src = './fallback.png'; 
    };
}


slides.forEach((slide, index) => {
    const img = slide.querySelector('img');
    setFallbackImage(img);

    dots[index].addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});


function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}


nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});


updateCarousel();
