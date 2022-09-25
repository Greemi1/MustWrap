const nav = document.querySelector('nav ul');
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', () => {
  nav.classList.add('active');
  openBtn.classList.remove('active');
  closeBtn.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  openBtn.classList.add('active');
  closeBtn.classList.remove('active');
});

window.addEventListener('scroll', () => {
  nav.classList.remove('active');
  openBtn.classList.add('active');
  closeBtn.classList.remove('active');
});

const gallerySwiper = new Swiper('.gallery-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
