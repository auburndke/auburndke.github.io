// ==========================================
// DKE - Delta Alpha Chapter
// Minimal site interactivity (formal style)
// ==========================================

// ========== MOBILE NAVIGATION ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ========== IN-PAGE ANCHOR JUMPS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href === '#contact') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'auto' });
    });
});

// ========== NEWSLETTER FORM (FRONT-END ONLY) ==========
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = (newsletterForm.querySelectorAll('input[type="text"]')[0]?.value || '').trim();

        alert(`Thank you for signing up${firstName ? `, ${firstName}` : ''}. We will keep you updated on Delta Alpha Chapter news and events.`);
        newsletterForm.reset();
    });
}

// ========== PHILANTHROPY CAROUSEL ==========
let currentSlideIndex = 1;

function moveCarousel(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (!slides.length) return;

    if (n > slides.length) currentSlideIndex = 1;
    if (n < 1) currentSlideIndex = slides.length;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex - 1]?.classList.add('active');
    dots[currentSlideIndex - 1]?.classList.add('active');
}

// Initialize carousel if present
if (document.querySelectorAll('.carousel-slide').length) {
    showSlide(currentSlideIndex);
    setInterval(() => moveCarousel(1), 6000);
}
