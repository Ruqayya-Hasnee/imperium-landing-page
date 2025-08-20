// ===== Mobile Nav Toggle =====
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

// ===== Hero Slider Controls =====
const slides = document.querySelectorAll('.slide');
let idx = 0;

document.querySelector('.next').onclick = () => show(idx + 1);
document.querySelector('.prev').onclick = () => show(idx - 1);

function show(i) {
  slides[idx].classList.remove('active');
  idx = (i + slides.length) % slides.length;
  slides[idx].classList.add('active');
}
