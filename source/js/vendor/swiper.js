import Swiper from 'swiper';

const sliderAnimation = () => {
  const swiper = new Swiper(`.swiper-container`, {
    loop: true,
    speed: 500,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      320: {
        pagination: {
          el: `.swiper-pagination`,
          clickable: false
        },
      },
      1024: {
        pagination: {
          el: `.swiper-pagination`,
          clickable: true
        },
      }
    },
  });
};

export {
  sliderAnimation
};
