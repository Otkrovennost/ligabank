import {
  creditMortgageCalculator
} from "./credit-mortgage.js";
import {
  issueRequestHandler
} from "./credit-mortgage-send.js";
import {
  creditCarLoanCalculator
} from "./credit-car-loan.js";
import {
  issueRequestCarLoanHandler
} from "./credit-car-loan-send.js";
import {
  creditConsumerCalculator
} from "./credit-consumer.js";
import {
  issueRequestConsumerHandler
} from "./credit-consumer-send.js";

const iconOpenMenu = document.querySelector(`.goal__icon`);
const creditTypeMenu = document.querySelector(`.goal__list`);
const linksCreditType = document.querySelectorAll(`.goal__link`);
const mortgageCredit = document.querySelector(`.mortgage`);
const carLoanCredit = document.querySelector(`.car-loan`);
const consumerCredit = document.querySelector(`.consumer`);
const creditBlocks = document.querySelectorAll(`.credit__block`);
const creditOffer = document.querySelector(`.offer`);
const creditGoal = document.querySelector(`[name = credit-goal]`);
const requestCreditLink = document.querySelector(`.offer__link`);

const hideAllCreditTypeBlock = () => {
  creditBlocks.forEach((creditBlock) => {
    creditBlock.classList.remove(`credit__block--active`);
  });
};

const hideCalculatorBlock = () => {
  creditOffer.classList.remove(`offer--active`);
  hideAllCreditTypeBlock();
  creditGoal.value = `Выберите цель кредита`;
};

const closeMenuOnOutsideClick = (el) => {
  let target = el.target;
  console.log(target);
};

const closeCreditMenu = () => {
  if (creditTypeMenu.classList.contains(`goal__list--active`)) {
    creditTypeMenu.classList.remove(`goal__list--active`);
    iconOpenMenu.classList.remove(`goal__icon--active`);
  }
  creditGoal.removeEventListener(`click`, closeCreditMenu);
};

const openCreditTypeBlockHandler = () => {
  linksCreditType.forEach((linkCreditType) => {
    linkCreditType.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      closeCreditMenu();
      hideAllCreditTypeBlock();

      creditGoal.value = linkCreditType.innerHTML;

      let linkKey = linkCreditType.dataset.key;

      switch (linkKey) {
        case `0`:
          mortgageCredit.classList.add(`credit__block--active`);
          creditMortgageCalculator();
          requestCreditLink.removeEventListener(`click`, issueRequestCarLoanHandler);
          requestCreditLink.removeEventListener(`click`, issueRequestConsumerHandler);
          requestCreditLink.addEventListener(`click`, issueRequestHandler);
          break;
        case `1`:
          carLoanCredit.classList.add(`credit__block--active`);
          creditCarLoanCalculator();
          requestCreditLink.removeEventListener(`click`, issueRequestHandler);
          requestCreditLink.removeEventListener(`click`, issueRequestConsumerHandler);
          requestCreditLink.addEventListener(`click`, issueRequestCarLoanHandler);
          break;
        case `2`:
          consumerCredit.classList.add(`credit__block--active`);
          creditConsumerCalculator();
          requestCreditLink.removeEventListener(`click`, issueRequestCarLoanHandler);
          requestCreditLink.removeEventListener(`click`, issueRequestHandler);
          requestCreditLink.addEventListener(`click`, issueRequestConsumerHandler);
          break;
      }

      creditOffer.classList.add(`offer--active`);
    });
  });
};

const openCreditMenu = () => {
  creditTypeMenu.classList.add(`goal__list--active`);
  iconOpenMenu.classList.add(`goal__icon--active`);
  openCreditTypeBlockHandler();
  creditGoal.addEventListener(`click`, closeCreditMenu);
  document.addEventListener(`click`, closeMenuOnOutsideClick);
};

export {
  openCreditMenu, linksCreditType, openCreditTypeBlockHandler, hideCalculatorBlock, creditGoal
};
