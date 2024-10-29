// app.js

// Initial animations using GSAP
gsap.to(".hero-title", { 
    opacity: 1, 
    y: 0, 
    duration: 1, 
    delay: 0.5 
});
gsap.to(".hero-subtitle", { 
    opacity: 1, 
    y: 0, 
    duration: 1, 
    delay: 0.7 
});
gsap.to(".hero-button", { 
    opacity: 1, 
    y: 0, 
    duration: 1, 
    delay: 0.9 
});

// Image hover interaction
const images = document.querySelectorAll('.hero-image');
let activeImageIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
        images[activeImageIndex].classList.remove('active');
        activeImageIndex = index;
        images[activeImageIndex].classList.add('active');
    });
});

// Mouse movement effect
const heroSection = document.querySelector('.hero-section');

heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 50 - 25; // Adjust sensitivity
    const y = (clientY / window.innerHeight) * 50 - 25; // Adjust sensitivity

    gsap.to(images[activeImageIndex], {
        x: x * 0.5,
        y: y * 0.5,
        duration: 0.5
    });
});
