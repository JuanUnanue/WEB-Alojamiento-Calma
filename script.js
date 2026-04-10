/* ═══════════════════════════════════════════════════════════
   Alojamiento Calma — script.js
═══════════════════════════════════════════════════════════ */

/* ── AOS ────────────────────────────────────────────────── */
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60
});

/* ── Navbar scroll ───────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Mobile nav toggle ───────────────────────────────────── */
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('nav-open'));
});

/* ── Hero slideshow ──────────────────────────────────────── */
const slides   = document.querySelectorAll('.hero-slide');
const dotsWrap = document.getElementById('heroDots');
let current = 0;
let timer;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', 'Slide ' + (i + 1));
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});

function goTo(n) {
  slides[current].classList.remove('active');
  dotsWrap.children[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dotsWrap.children[current].classList.add('active');
  clearInterval(timer);
  timer = setInterval(() => goTo(current + 1), 5000);
}

// Autoplay
timer = setInterval(() => goTo(current + 1), 5000);

/* ── Department tabs ─────────────────────────────────────── */
document.querySelectorAll('.dept-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dept-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.dept-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

/* ── Department gallery thumbnails ──────────────────────── */
document.querySelectorAll('.dept-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const targetId = thumb.dataset.target;
    const newSrc   = thumb.dataset.main;
    const mainImg  = document.getElementById(targetId);

    // Update main image
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = newSrc;
      mainImg.style.opacity = '1';
    }, 200);

    // Update active state within this panel
    const panel = thumb.closest('.dept-panel');
    panel.querySelectorAll('.dept-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});
