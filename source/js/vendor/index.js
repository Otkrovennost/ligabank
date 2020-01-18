import {
  sliderAnimation, tabsSlider
} from "./swiper.js";

const sliderBlock = document.querySelector(`.teasers`);
const sliderTabsBlock = document.querySelector(`.services`);

if (sliderBlock) {
  sliderAnimation();
}

if (sliderTabsBlock) {
  tabsSlider();
}
