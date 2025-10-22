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
  grabCursor: true,
  centeredSlides: false,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },
});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const header = item.querySelector(".faq-header");
  const content = item.querySelector(".faq-content");
  const plusIcon = item.querySelector(".plus-icon");
  const minusIcon = item.querySelector(".minus-icon");

  header.addEventListener("click", () => {
    const isOpen = content.classList.contains("open");

    faqItems.forEach((el) => {
      const c = el.querySelector(".faq-content");
      c.style.maxHeight = null;
      c.classList.remove("open", "opacity-100", "mt-4");
      c.classList.add("opacity-0");
      el.querySelector(".plus-icon").classList.remove("hidden");
      el.querySelector(".minus-icon").classList.add("hidden");
    });

    if (!isOpen) {
      content.classList.add("open", "mt-4");
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.remove("opacity-0");
      content.classList.add("opacity-100");
      plusIcon.classList.add("hidden");
      minusIcon.classList.remove("hidden");
    } else {
      content.classList.remove("open", "mt-4");
      content.style.maxHeight = null;
      content.classList.remove("opacity-100");
      content.classList.add("opacity-0");
      plusIcon.classList.remove("hidden");
      minusIcon.classList.add("hidden");
    }
  });
});

const overlay = document.getElementById('video-overlay');
const iframe = document.getElementById('youtube-video');

overlay.addEventListener('click', () => {
    iframe.src += "&autoplay=1";
    overlay.style.display = 'none';
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  pagination: {
      el: ".swiper-pagination",
  },
});