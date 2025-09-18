// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', !mobileMenu.classList.contains('hidden'));
  });
}

// Year
document.getElementById('y').textContent = new Date().getFullYear();

// Simple carousel logic
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const items = track.querySelectorAll('img');
  let index = 0;
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  const update = () => {
    track.style.transform = `translateX(${-index * (items[0].clientWidth+16)}px)`;
  };
  prev.onclick = () => { index = (index-1+items.length)%items.length; update(); };
  next.onclick = () => { index = (index+1)%items.length; update(); };
});
