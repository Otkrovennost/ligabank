const iconOpenMenu = document.querySelector(`.goal__icon`);
const creditTypeMenu = document.querySelector(`.goal__list`);
const linksCreditType = document.querySelectorAll(`.goal__link`);
const mortgageCredit = document.querySelector(`.mortgage`);
const carLoanCredit = document.querySelector(`.car-loan`);
const consumerCredit = document.querySelector(`.consumer`);
const creditBlocks = document.querySelectorAll(`.credit__block`);
const creditOffer = document.querySelector(`.offer`);
const creditGoal = document.querySelector(`[name = credit-goal]`);

let openCreditTypeMenuHandler = () => {
  if (creditTypeMenu.classList.contains(`goal__list--active`)) {
    creditTypeMenu.classList.remove(`goal__list--active`);
    iconOpenMenu.style.transform = `none`;
  } else {
    creditTypeMenu.classList.add(`goal__list--active`);
    iconOpenMenu.style.transform = `rotate(-540deg)`;
  }
};

let hideAllCreditTypeBlock = () => {
  creditBlocks.forEach((creditBlock) => {
    creditBlock.classList.remove(`credit__block--active`);
  });
};

let openCreditTypeBlockHandler = () => {
  linksCreditType.forEach((linkCreditType) => {
    linkCreditType.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      hideAllCreditTypeBlock();

      creditGoal.value = linkCreditType.innerHTML;

      let linkKey = linkCreditType.dataset.key;

      switch (linkKey) {
        case `0`:
          mortgageCredit.classList.add(`credit__block--active`);
          break;
        case `1`:
          carLoanCredit.classList.add(`credit__block--active`);
          break;
        case `2`:
          consumerCredit.classList.add(`credit__block--active`);
          break;
      }

      openCreditTypeMenuHandler();
      creditOffer.classList.add(`offer--active`);
    });
  });
};

let hideCalculatorBlock = () => {
  creditOffer.classList.remove(`offer--active`);
  hideAllCreditTypeBlock();
  creditGoal.value = `Выберите цель кредита`;
};

export {
  iconOpenMenu, openCreditTypeMenuHandler, linksCreditType, openCreditTypeBlockHandler, hideCalculatorBlock
};
