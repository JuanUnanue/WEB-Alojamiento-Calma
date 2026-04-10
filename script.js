/* ═══════════════════════════════════════════════════════════════
   ALOJAMIENTO CALMA — Scripts
   ═══════════════════════════════════════════════════════════════ */

/* ─── AOS (Animate On Scroll) ──────────────────────────────── */
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60
});

/* ─── NAVBAR: efecto glassmorphism al hacer scroll ─────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ─── MENÚ MOBILE: toggle hamburguesa ──────────────────────── */
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});

// Cerrar el menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('nav-open'));
});
