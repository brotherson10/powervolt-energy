const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let intervalId;

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = `dot ${index === 0 ? 'active' : ''}`;
  dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  restartSlider();
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function restartSlider() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 4200);
}

restartSlider();

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.nav').classList.remove('open'));
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
