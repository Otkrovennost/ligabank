import Swiper from 'swiper';

let swiper = new Swiper(`.swiper-container`, {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: `.swiper-pagination`,
    clickable: true,
  },
});
