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
  iconOpenMenu, openCreditTypeMenuHandler, linksCreditType, openCreditTypeBlockHandler,
} from "./calculator-main.js";
import {
  mortgageCredit, creditMortgageCalculator
} from "./credit-mortgage.js";
import {
  inputValueChange, prettifyRubbles, prettifyYears
} from "./inputs-entry.js";
import {
  openRequestForm, requestForm, submitRequestForm
} from "./request.js";

const openLoginLink = document.querySelector(`.nav__user-link`);
const navItemLinks = document.querySelectorAll(`.nav__link`);
const loginFormBlock = document.querySelector(`.popup-login`);
const submitForm = loginFormBlock.querySelector(`form`);
const creditCalculatorBlock = document.querySelector(`.credit`);
const requestLink = document.querySelector(`.offer__link`);
const creditBlockInputsForRubbles = document.querySelectorAll(`.credit__item input[data-input-value=rubbles]`);
const creditBlockInputsForYears = document.querySelectorAll(`.credit__item input[data-input-value=years]`);
// const requestSubmit = document.querySelector(`.request__submit`);

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
  iconOpenMenu.addEventListener(`click`, openCreditTypeMenuHandler);
}

if (linksCreditType) {
  openCreditTypeBlockHandler();
}

if (requestLink) {
  requestLink.addEventListener(`click`, openRequestForm);
}

if (creditBlockInputsForRubbles) {
  inputValueChange(creditBlockInputsForRubbles, 7, prettifyRubbles);
}

if (creditBlockInputsForYears) {
  inputValueChange(creditBlockInputsForYears, 5, prettifyYears);
}

if (mortgageCredit) {
  creditMortgageCalculator();
}

if (requestForm) {
  requestForm.addEventListener(`submit`, submitRequestForm);
}
