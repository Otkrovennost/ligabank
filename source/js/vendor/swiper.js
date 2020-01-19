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

let addSwiperServices = () => {
  const breakpoint = window.matchMedia(`(min-width:1024px)`);
  let swiperServices;

  const breakpointChecker = () => {

    if (breakpoint.matches === true) {
      if (swiperServices) {
        swiperServices.destroy(true, true);
      }
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = () => {
    swiperServices = new Swiper(`.swiper-services`, {
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: `.swiper-pagination-services`,
        clickable: false
      },
    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
};

export {
  sliderAnimation, addSwiperServices
};
