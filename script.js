// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(isHidden));
  });
}

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();
