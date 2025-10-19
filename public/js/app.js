const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const selectedLang = document.getElementById('selectedLang');
const langOptions = langMenu.querySelectorAll('button');

langBtn.addEventListener('click', () => {
  const open = langMenu.classList.contains('opacity-100');
  langMenu.classList.toggle('opacity-100', !open);
  langMenu.classList.toggle('scale-100', !open);
  langMenu.classList.toggle('pointer-events-none', open);
});

langOptions.forEach(opt => {
  opt.addEventListener('click', () => {
    selectedLang.textContent = opt.textContent;
    langMenu.classList.remove('opacity-100', 'scale-100');
    langMenu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  });
});

document.addEventListener('click', (e) => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove('opacity-100', 'scale-100');
    langMenu.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  }
});


const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const backdrop = document.getElementById("menuBackdrop");

function openMenu() {
  mobileMenu.classList.remove("-translate-x-full");
  backdrop.classList.remove("opacity-0", "pointer-events-none");
  backdrop.classList.add("opacity-100");
}

function closeMenuFn() {
  mobileMenu.classList.add("-translate-x-full");
  backdrop.classList.add("opacity-0", "pointer-events-none");
  backdrop.classList.remove("opacity-100");
}

hamburgerBtn.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFn);
backdrop.addEventListener("click", closeMenuFn);


const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    640: { slidesPerView: 1.2, spaceBetween: 0 },
    800: { slidesPerView: 3.5, spaceBetween: 0 },
    1024: { slidesPerView: 2.5, spaceBetween: 0 },
    1280: { slidesPerView: 3.7, spaceBetween: 0 },
  },
});
