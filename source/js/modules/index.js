import {
  navMain, navToggler, openMenu, scrollToContent
} from "./nav.js";
import {
  eyeIcon, popupOpenHandler, saveInLocalStorageHandler, showPasswordHandler
} from "./popup-login.js";
import {
  tabs, tabElementClick
} from "./tab.js";
import {
  openCreditMenu, creditGoal
} from "./calculator-main.js";
import {
  inputValueChange, prettifyRubbles, prettifyYears
} from "./inputs-entry.js";
import {
  requestForm, submitRequestForm, changeFormInputsValue
} from "./request.js";
const openLoginLink = document.querySelector(`.nav__user-link`);
const navItemLinks = document.querySelectorAll(`.nav__link`);
const loginFormBlock = document.querySelector(`.popup-login`);
const submitForm = loginFormBlock.querySelector(`form`);
const creditCalculatorBlock = document.querySelector(`.credit`);
const creditBlockInputsForRubbles = document.querySelectorAll(`.credit__item input[data-input-value=rubbles]`);
const creditBlockInputsForYears = document.querySelectorAll(`.credit__item input[data-input-value=years]`);

navMain.classList.add(`nav--closed`);

if (navMain) {
  navToggler.addEventListener(`click`, openMenu);

  navItemLinks.forEach(function (elem) {
    elem.addEventListener(`click`, openMenu);
    scrollToContent();
  });
}

if (openLoginLink) {
  openLoginLink.addEventListener(`click`, popupOpenHandler);
}

if (submitForm) {
  submitForm.addEventListener(`submit`, saveInLocalStorageHandler);
}

if (eyeIcon) {
  eyeIcon.addEventListener(`mousedown`, showPasswordHandler);
}

if (tabs) {
  tabElementClick();
}

if (creditCalculatorBlock) {
  creditGoal.addEventListener(`click`, openCreditMenu);
}

if (creditBlockInputsForRubbles) {
  inputValueChange(creditBlockInputsForRubbles, 7, prettifyRubbles);
}

if (creditBlockInputsForYears) {
  inputValueChange(creditBlockInputsForYears, 5, prettifyYears);
}

if (requestForm) {
  changeFormInputsValue();
  requestForm.addEventListener(`submit`, submitRequestForm);
}
