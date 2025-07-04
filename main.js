document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.reds-ingredients-carousel .carousel-slide');
    const dots = document.querySelectorAll('.reds-carousel .dot');
    const prev = document.getElementById('carousel-prev');
    const next = document.getElementById('carousel-next');
    let current = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
        current = idx;
    }

    prev.addEventListener('click', function () {
        let idx = (current - 1 + slides.length) % slides.length;
        showSlide(idx);
    });

    next.addEventListener('click', function () {
        let idx = (current + 1) % slides.length;
        showSlide(idx);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', function () {
            showSlide(i);
        });
    });

    // Initialize
    showSlide(0);
});

document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        item.classList.toggle('open');
        btn.classList.toggle('active');
    });
});