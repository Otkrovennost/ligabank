// import IMask from 'imask';
import IMask from "./imask-min.js";

import {
  sliderAnimation, addSwiperServices
} from "./swiper.js";

const sliderBlock = document.querySelector(`.teasers`);
const sliderTabsBlock = document.querySelector(`.services`);

if (sliderBlock) {
  sliderAnimation();
}

if (sliderTabsBlock) {
  addSwiperServices();
}

const inputForTel = document.querySelector(`.request__input--contacts input[name=user-tel]`);

if (inputForTel) {
  const validatePhone = new IMask(inputForTel, {
    mask: `+{7}(000)000-00-00`
  });
}
