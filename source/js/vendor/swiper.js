import Swiper from 'swiper';

const breakpoint = window.matchMedia(`(min-width: 1024px)`);

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

let tabsSlider = () => {

  let breakpointChecker = () => {
    if (breakpoint.matches === true) {
      swiper.destroy(true, true);
    } else if (breakpoint.matches === false) {
      return sliderAnimation();
    }
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
}

export {
  sliderAnimation, tabsSlider
};
