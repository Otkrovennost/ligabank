import {
  prettifyRubbles, prettifyYears, clearString
} from "./inputs-entry.js";
import {
  creditOffer
} from "./data.js";
import {
  showMessageError, hideMessageError, hideOfferForm, showOfferForm
} from "./calculator-helper.js";

const ERROR_MESSAGE = `Некорректное значение`;
const BASE_BORDER = `1px solid #1f1e25`;
const ERROR_BORDER = `1px solid #c4151c`;
const MATERNAL_CAPITAL = 470000;
const MIN_CREDIT_SUM = 500000;
const PERCENT_MONTHLY_VALUE_FIRST = 0.007083;
const PERCENT_MONTHLY_VALUE_SECOND = 0.00783;
const OFFER_PERCENT_VALUE_CHANGE = `8.50%`;
const OFFER_PERCENT_VALUE_BASE = `9.40%`;
const PERCENT_RANGE_FOR_CHANGE = 15;
const MONTHLY_PERIODS = 12;
const mortgageCredit = document.querySelector(`.mortgage`);
const buttonBiggerMortgage = mortgageCredit.querySelector(`.range-bar__control--max`);
const buttonSmallerMortgage = mortgageCredit.querySelector(`.range-bar__control--min`);
const inputMortgageCost = mortgageCredit.querySelector(`.mortgage__item input[name=mortgage-cost]`);
const inputMortgageContribution = mortgageCredit.querySelector(`.mortgage__item input[name=mortgage-contribution]`);
const rangeContributionPercent = mortgageCredit.querySelector(`.mortgage__item input[name=contribution-range]`);
const percentSpanValue = mortgageCredit.querySelector(`.mortgage__item span[data-value=persent]`);
const inputTermValue = mortgageCredit.querySelector(`.mortgage__item input[name=mortgage-time]`);
const rangeTerm = mortgageCredit.querySelector(`.mortgage__item input[name=term-range]`);
const checkMaternalCapital = mortgageCredit.querySelector(`.mortgage__checker input[name=maternal]`);
const scaleValueMin = Number(inputMortgageCost.getAttribute(`data-min`));
const scaleValueMax = Number(inputMortgageCost.getAttribute(`data-max`));
const scaleValueStep = Number(inputMortgageCost.getAttribute(`data-step`));
const contributionPercentCurrent = Number(rangeContributionPercent.getAttribute(`data-min`));
const contributionPercentMax = Number(rangeContributionPercent.getAttribute(`data-max`));
const rangeTermMin = Number(rangeTerm.getAttribute(`data-min`));
const rangeTermMax = Number(rangeTerm.getAttribute(`data-max`));
const offerForm = document.querySelector(`.offer form`);
const inputCreditSum = offerForm.querySelector(`.offer__item input[name=credit-name]`);
const inputCreditSumLabel = offerForm.querySelector(`.offer__item label[data-name=credit-name]`);
const inputCreditPercent = offerForm.querySelector(`.offer__item input[name=credit-percent]`);
const inputCreditMonthlyPayment = offerForm.querySelector(`.offer__item input[name=credit-monthly-payment]`);
const inputCreditIncome = offerForm.querySelector(`.offer__item input[name=credit-income]`);
let scaleControlNumber;
let inputCurrentValue;
let currentCreditSum;

let minCreditMortgageSumHandler = () => {
  currentCreditSum = parseInt(clearString(inputCreditSum.value), 10);
  if (currentCreditSum < MIN_CREDIT_SUM || inputCreditSum.value === ` рублей`) {
    showMessageError();
    hideOfferForm();
  } else {
    hideMessageError();
    showOfferForm();
  }
};

let calculatePercentRate = () => {
  let currentPercent = parseInt(rangeContributionPercent.value, 10);

  if (currentPercent >= PERCENT_RANGE_FOR_CHANGE) {
    inputCreditPercent.value = OFFER_PERCENT_VALUE_CHANGE;
  } else if (currentPercent < PERCENT_RANGE_FOR_CHANGE) {
    inputCreditPercent.value = OFFER_PERCENT_VALUE_BASE;
  }
};

let calculateMonthlyPayment = () => {
  let creditTerm = parseInt(clearString(inputTermValue.value), 10);
  let currentPercentValue = parseInt(rangeContributionPercent.value, 10);
  let creditSumValue = parseInt(clearString(inputCreditSum.value), 10);

  let creditPeriod = creditTerm * MONTHLY_PERIODS;
  let monthlyPercentValue;
  let monthlyPayment;

  if (currentPercentValue >= PERCENT_RANGE_FOR_CHANGE) {
    monthlyPercentValue = PERCENT_MONTHLY_VALUE_FIRST;
  } else if (currentPercentValue < PERCENT_RANGE_FOR_CHANGE) {
    monthlyPercentValue = PERCENT_MONTHLY_VALUE_SECOND;
  }

  monthlyPayment = creditSumValue * (monthlyPercentValue + (monthlyPercentValue / (Math.pow((1 + monthlyPercentValue), creditPeriod) - 1)));
  inputCreditMonthlyPayment.value = prettifyRubbles(String(monthlyPayment.toFixed()));

  calculateIncomeForCredit();
};

let calculateIncomeForCredit = () => {
  let creditMonthlyPayment = parseInt(clearString(inputCreditMonthlyPayment.value), 10);
  let incomeForCredit = creditMonthlyPayment * 100 / 45;

  inputCreditIncome.value = prettifyRubbles(String(incomeForCredit.toFixed()));
};

let getCreditMortgageSum = () => {
  let inputMortgageContributionValue = parseInt(clearString(inputMortgageContribution.value), 10);

  inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);
  currentCreditSum = inputCurrentValue - inputMortgageContributionValue;

  if (checkMaternalCapital.checked) {
    currentCreditSum = inputCurrentValue - inputMortgageContributionValue - MATERNAL_CAPITAL;
  } else {
    currentCreditSum = inputCurrentValue - inputMortgageContributionValue;
  }

  inputCreditSum.value = prettifyRubbles(String(currentCreditSum));
  inputCreditSumLabel.innerHTML = creditOffer.mortgage.creditName;

  checkMaternalCapital.addEventListener(`click`, () => {
    if (checkMaternalCapital.checked) {
      currentCreditSum = inputCurrentValue - inputMortgageContributionValue - MATERNAL_CAPITAL;
      inputCreditSum.value = prettifyRubbles(String(currentCreditSum));
    } else {
      currentCreditSum = inputCurrentValue - inputMortgageContributionValue;
      inputCreditSum.value = prettifyRubbles(String(currentCreditSum));
    }
    minCreditMortgageSumHandler();
    calculateMonthlyPayment();
  });

  minCreditMortgageSumHandler();
};

let inputValueMortgageHandler = () => {
  inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);

  if (inputCurrentValue < scaleValueMin || inputCurrentValue > scaleValueMax) {
    inputMortgageCost.style.border = ERROR_BORDER;
    inputMortgageCost.value = ERROR_MESSAGE;
    inputMortgageContribution.value = ``;
    hideOfferForm();
    showMessageError();
    setMinPercentValue();
    setMinCreditTerm();
  } else {
    hideMessageError();
    showOfferForm();
    getCreditMortgageSum();
    calculateMonthlyPayment();
    inputMortgageCost.style.border = BASE_BORDER;
  }
};

let scaleBiggerMortgageHandler = () => {
  scaleControlNumber = parseInt(clearString(inputMortgageCost.value), 10);

  if (scaleControlNumber <= (scaleValueMax - scaleValueStep)) {
    scaleControlNumber += scaleValueStep;
    inputMortgageCost.value = prettifyRubbles(String(scaleControlNumber));
    setPercentValue();
  }
};

let scaleSmallerMortgageHandler = () => {
  scaleControlNumber = parseInt(clearString(inputMortgageCost.value), 10);

  if (scaleControlNumber >= (scaleValueMin + scaleValueStep)) {
    scaleControlNumber -= scaleValueStep;
    inputMortgageCost.value = prettifyRubbles(String(scaleControlNumber));
    setPercentValue();
    getCreditMortgageSum();
    calculateMonthlyPayment();
  }
};

let setMinContributionValue = () => {
  inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);
  let minContributionValue = (parseInt(clearString(inputMortgageCost.value), 10) / 100) * contributionPercentCurrent;

  if (inputCurrentValue > scaleValueMin || inputCurrentValue < scaleValueMax) {
    inputMortgageContribution.value = prettifyRubbles(minContributionValue.toFixed());
  }
};

let setMaxContributionValue = () => {
  inputCurrentValue = parseInt(clearString(inputMortgageCost.value), 10);
  let maxContributionValue = (parseInt(clearString(inputMortgageCost.value), 10) / 100) * contributionPercentMax;

  inputMortgageContribution.value = prettifyRubbles(maxContributionValue.toFixed());
};

let setMinPercentValue = () => {
  rangeContributionPercent.value = `10`;
};

let setPercentValue = () => {
  let inputValue = inputMortgageCost.value;
  let currentPercent = rangeContributionPercent.value;
  let contributionPercent;

  if (inputMortgageCost.value !== `Некорректное значение`) {
    percentSpanValue.innerHTML = currentPercent + ` %`;
    contributionPercent = (parseInt(clearString(inputMortgageCost.value), 10) / 100) * currentPercent;
    inputMortgageContribution.value = prettifyRubbles(contributionPercent.toFixed());
    getCreditMortgageSum();
    calculateMonthlyPayment();
    calculatePercentRate();

    if (inputValue === ` рублей`) {
      inputMortgageContribution.value = inputValue;
      inputCreditSum.value = inputValue;
      setMinPercentValue();
    }
  }
};

let changeInputContributionValue = () => {
  let inputCostValue = parseInt(clearString(inputMortgageCost.value), 10);
  let inputUserValue = parseInt(clearString(inputMortgageContribution.value), 10);
  let inputChangePercent;

  inputChangePercent = Math.floor(inputUserValue * 100 / inputCostValue);
  rangeContributionPercent.value = inputChangePercent;
  percentSpanValue.innerHTML = String(rangeContributionPercent.value) + ` %`;
  getCreditMortgageSum();
  calculateMonthlyPayment();

  if (inputChangePercent < contributionPercentCurrent) {
    inputChangePercent = contributionPercentCurrent;
    setMinContributionValue();
    getCreditMortgageSum();
    calculateMonthlyPayment();
  } else if (inputChangePercent > contributionPercentMax) {
    inputChangePercent = contributionPercentCurrent;
    setMaxContributionValue();
    getCreditMortgageSum();
    calculateMonthlyPayment();
  }
};

let setMinCreditTerm = () => {
  rangeTerm.value = rangeTermMin;
  // inputTermValue.value = prettifyYears(String(rangeTerm.value));
};

let changeCreditTerm = () => {
  inputTermValue.value = prettifyYears(String(rangeTerm.value));
  calculateMonthlyPayment();
};

let changeInputTermValue = () => {
  let inputTermCurrentValue = parseInt(clearString(inputTermValue.value), 10);
  rangeTerm.value = inputTermCurrentValue;
  calculateMonthlyPayment();
};

let minAndMaxTermHandler = () => {
  let inputTermCurrentValue = parseInt(clearString(inputTermValue.value), 10);

  if (inputTermCurrentValue < rangeTermMin) {
    inputTermValue.value = prettifyYears(String(rangeTermMin));
    rangeTerm.value = rangeTermMin;
  } else if (inputTermCurrentValue > rangeTermMax) {
    inputTermValue.value = prettifyYears(String(rangeTermMax));
    rangeTerm.value = rangeTermMax;
  }
  calculateMonthlyPayment();
};

let contributionPercentHandler = () => {
  setPercentValue();
  calculatePercentRate();
};

let creditMortgageCalculator = () => {
  setMinContributionValue();
  setMinPercentValue();
  getCreditMortgageSum();
  calculateMonthlyPayment();
  setMinCreditTerm();
  inputMortgageCost.addEventListener(`change`, inputValueMortgageHandler);
  inputMortgageCost.addEventListener(`input`, setPercentValue);
  buttonBiggerMortgage.addEventListener(`click`, scaleBiggerMortgageHandler);
  buttonSmallerMortgage.addEventListener(`click`, scaleSmallerMortgageHandler);
  rangeContributionPercent.addEventListener(`change`, contributionPercentHandler);
  inputMortgageContribution.addEventListener(`change`, changeInputContributionValue);
  rangeTerm.addEventListener(`change`, changeCreditTerm);
  inputTermValue.addEventListener(`input`, changeInputTermValue);
  inputTermValue.addEventListener(`change`, minAndMaxTermHandler);
};

export {
  mortgageCredit, creditMortgageCalculator
};
