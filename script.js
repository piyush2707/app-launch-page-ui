// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in animations
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.text').style.opacity = 0;
  document.querySelector('.mockup').style.opacity = 0;

  setTimeout(() => {
    document.querySelector('.text').style.transition = 'opacity 1s ease-in';
    document.querySelector('.text').style.opacity = 1;
  }, 300);

  setTimeout(() => {
    document.querySelector('.mockup').style.transition = 'opacity 1s ease-in';
    document.querySelector('.mockup').style.opacity = 1;
  }, 700);
});
