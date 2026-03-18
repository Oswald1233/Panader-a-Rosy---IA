/* ============================================================
   PANADERÍA ROSY — JavaScript principal
   Archivo: main.js
   ============================================================ */

/* ─── NAV: efecto blur al hacer scroll ─── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── HAMBURGER: menú móvil ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('open');
}

/* ─── SCROLL REVEAL: anima elementos al entrar al viewport ─── */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => revealObserver.observe(el));

/* ─── FORMULARIO DE CONTACTO ─── */
function handleForm(e) {
  e.preventDefault();

  const success = document.getElementById('form-success');
  success.style.display = 'block';

  // Limpia los campos
  e.target.querySelectorAll('input, textarea').forEach((el) => {
    el.value = '';
  });

  // Oculta el mensaje de éxito después de 6 segundos
  setTimeout(() => {
    success.style.display = 'none';
  }, 6000);
}

/* ─── SMOOTH SCROLL: compatibilidad con navegadores antiguos ─── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
