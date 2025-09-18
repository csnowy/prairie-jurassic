// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Gallery tiles
const grid = document.querySelector('#gallery .grid');
const tpl = document.getElementById('tile-template');
if (grid && tpl) {
  for (let i = 0; i < 8; i++) {
    grid.appendChild(tpl.content.cloneNode(true));
  }
}

// Tabs logic
const triggers = document.querySelectorAll('.tab-trigger');
const panels = {
  raptor: document.getElementById('tab-raptor'),
  trex: document.getElementById('tab-trex'),
  herb: document.getElementById('tab-herb')
};
triggers.forEach(btn => {
  btn.addEventListener('click', () => {
    triggers.forEach(b => b.setAttribute('aria-selected','false'));
    btn.setAttribute('aria-selected','true');
    Object.values(panels).forEach(p => p.classList.add('hidden'));
    panels[btn.dataset.tab].classList.remove('hidden');
  });
});

// Booking modal
const bookingModal = document.getElementById('bookingModal');
const closeBooking = document.getElementById('closeBooking');
const bookingForm = document.getElementById('bookingForm');

if (bookingModal && closeBooking && bookingForm) {
  document.querySelectorAll('[data-booking]').forEach(btn => {
    btn.addEventListener('click', () => {
        bookingModal.classList.remove('hidden');
        document.body.classList.add('no-scroll');   // lock scroll
    });
    });

    closeBooking.addEventListener('click', () => {
    bookingModal.classList.add('hidden');
    document.body.classList.remove('no-scroll'); // unlock scroll
    });

    window.addEventListener('click', e => {
    if (e.target === bookingModal) {
        bookingModal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
    });

    bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! We’ll contact you to confirm your booking.');
    bookingModal.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    });
}

// Gallery carousel
const galleryTrack = document.getElementById('galleryTrack');
const prevGallery = document.getElementById('prevGallery');
const nextGallery = document.getElementById('nextGallery');

if (galleryTrack && prevGallery && nextGallery) {
  const scrollAmount = 320; // width of one image card

  prevGallery.addEventListener('click', () => {
    galleryTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  nextGallery.addEventListener('click', () => {
    galleryTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

// Walk-in specials badges with colors
const today = new Date().getDay(); // 0=Sun,1=Mon,...6=Sat
document.querySelectorAll('#specials .badge').forEach(badge => {
  const dayAttr = badge.getAttribute('data-day');
  if (!dayAttr) return;

  let daysAway = null;

  // Handle ranges (like "1-5")
  if (dayAttr.includes('-')) {
    const [start, end] = dayAttr.split('-').map(Number);

    if (start <= end) {
      // Normal range
      if (today >= start && today <= end) daysAway = 0;
      else daysAway = (start - today + 7) % 7;
    } else {
      // Wrap-around range (e.g. 5-1 = Fri–Mon)
      if (today >= start || today <= end) daysAway = 0;
      else daysAway = (start - today + 7) % 7;
    }
  } else {
    const specialDay = Number(dayAttr);
    daysAway = (specialDay - today + 7) % 7;
  }

  // Reset classes
  badge.classList.remove("badge-today", "badge-tomorrow", "badge-soon", "badge-later");

  // Update label + color
  if (daysAway === 0) {
    badge.textContent = "Today";
    badge.classList.add("badge-today");
  } else if (daysAway === 1) {
    badge.textContent = "Tomorrow";
    badge.classList.add("badge-tomorrow");
  }  else {
    badge.textContent = `In ${daysAway} days`;
    badge.classList.add("badge-later");
  }
});


