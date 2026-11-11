// Cabeçalho: fundo sólido depois de rolar
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menu móvel
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    setMenu(false);
    menuBtn.focus();
  }
});
document.addEventListener('click', event => {
  if (nav.classList.contains('open') && !nav.contains(event.target) && !menuBtn.contains(event.target)) setMenu(false);
});

// Animação de entrada
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach(element => revealObserver.observe(element));
} else {
  revealItems.forEach(element => element.classList.add('show'));
}

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
