const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Function to handle fallback image
function setFallbackImage(img) {
    img.onerror = () => {
        img.src = './fallback.png'; // Use your fallback image path
    };
}

// Initialize carousel
slides.forEach((slide, index) => {
    const img = slide.querySelector('img');
    setFallbackImage(img);

    dots[index].addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Update carousel display
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Initialize the first slide and dot
updateCarousel();
